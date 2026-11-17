/*
 * CALENDARIO CON FIREBASE
 * - No guardar contraseñas en este archivo.
 * - La autenticación se realiza con Firebase Authentication.
 * - Los calendarios y eventos se guardan en Cloud Firestore.
 * - ADMIN_UID identifica la cuenta autorizada; no es una contraseña.
 * - Las reglas de seguridad están en firestore.rules (raíz del proyecto).
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
  getFirestore, collection, addDoc, doc, updateDoc, deleteDoc,
  onSnapshot, serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

/* Sustituye solo estos valores por los de tu aplicación web de Firebase. No son contraseñas. */
const firebaseConfig = {
  apiKey: "AIzaSyD1AOUHcB--arok9KYwZwlNjFWNGWDIwys",
  authDomain: "insti-ab0e8.firebaseapp.com",
  projectId: "insti-ab0e8",
  appId: "1:51773373315:web:e7dfe6f441b578d47e54b6"
};

/* UID del usuario administrador creado previamente en Firebase Authentication. */
const ADMIN_UID = "qTwqAVxs8NcVllFFUmA37m4rP5d2";

const byId = (id) => document.getElementById(id);
const statusBox = byId("calStatus");
const configGuide = byId("calConfigGuide");
const loginPanel = byId("calLoginPanel");
const adminPanel = byId("calAdminPanel");
const workspace = byId("calWorkspace");
const noCalendarsBox = byId("calNoCalendars");

let auth = null;
let db = null;
let signedUser = null;
let calendars = [];
let events = [];
let selectedCalendarId = "";
let selectedDate = localDateISO(new Date());
let currentMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
let calendarListener = null;
let eventsListener = null;
let editingEventId = null;
let activeEventsCalendarId = "";

function setStatus(message, isError = false) {
  statusBox.textContent = message;
  statusBox.classList.toggle("error", isError);
}
function localDateISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function parseLocalDate(value) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function escapeCalendarText(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}
function firebaseReady() {
  const required = ["apiKey", "authDomain", "projectId", "appId"];
  return required.every(key =>
    typeof firebaseConfig[key] === "string" &&
    firebaseConfig[key].trim() &&
    !firebaseConfig[key].startsWith("PEGA_AQUI")
  ) && ADMIN_UID && !ADMIN_UID.startsWith("PEGA_AQUI");
}
function setAdminMode(isAdmin) {
  byId("calCreateForm").classList.toggle("hidden", !isAdmin);
  byId("calEventFormPanel").classList.toggle("hidden", !isAdmin);
  byId("calShowLoginBtn").classList.toggle("hidden", !!signedUser);
  byId("calLogoutBtn").classList.toggle("hidden", !signedUser);
  byId("calSignedUser").textContent = isAdmin
    ? "Sesión iniciada como administrador: " + (signedUser.email || signedUser.uid)
    : (signedUser
        ? "Sesión iniciada sin permisos de administración. Modo de solo lectura."
        : "Vista pública: puedes consultar los calendarios sin iniciar sesión.");
  renderEventsForSelectedDay();
}
function startCalendarListener() {
  if (calendarListener) calendarListener();
  calendarListener = onSnapshot(
    collection(db, "calendars"),
    snapshot => {
      calendars = snapshot.docs.map(item => ({ id: item.id, ...item.data() }))
        .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "es"));
      const previousId = selectedCalendarId;
      if (!calendars.some(item => item.id === selectedCalendarId)) {
        selectedCalendarId = calendars[0]?.id || "";
      }
      renderCalendarPicker();
      if (selectedCalendarId !== previousId || selectedCalendarId !== activeEventsCalendarId) {
        selectCalendar(selectedCalendarId);
      } else {
        renderMonth();
        renderEventsForSelectedDay();
      }
      setStatus("Conectado a Firebase. Los cambios se sincronizan automáticamente.");
    },
    error => setStatus("No se han podido cargar los calendarios: " + error.message, true)
  );
}
function renderCalendarPicker() {
  const picker = byId("calPicker");
  picker.innerHTML = calendars.map(item =>
    `<option value="${escapeCalendarText(item.id)}">${escapeCalendarText(item.name || "Calendario sin nombre")}</option>`
  ).join("");
  picker.value = selectedCalendarId;
  const hasCalendars = calendars.length > 0;
  workspace.classList.toggle("hidden", !hasCalendars);
  noCalendarsBox.classList.toggle("hidden", hasCalendars);
}
function selectCalendar(calendarId) {
  selectedCalendarId = calendarId || "";
  activeEventsCalendarId = selectedCalendarId;
  resetEventForm();
  if (eventsListener) {
    eventsListener();
    eventsListener = null;
  }
  events = [];
  renderMonth();
  renderEventsForSelectedDay();
  if (!selectedCalendarId) return;
  eventsListener = onSnapshot(
    collection(db, "calendars", selectedCalendarId, "events"),
    snapshot => {
      events = snapshot.docs.map(item => ({ id: item.id, ...item.data() }))
        .sort((a, b) => {
          const byDate = String(a.date || "").localeCompare(String(b.date || ""));
          return byDate || String(a.startTime || "").localeCompare(String(b.startTime || ""));
        });
      renderMonth();
      renderEventsForSelectedDay();
    },
    error => setStatus("No se han podido cargar los eventos: " + error.message, true)
  );
}
function renderMonth() {
  const title = byId("calMonthTitle");
  const grid = byId("calMonthGrid");
  if (!grid) return;
  title.textContent = currentMonth.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((offset + totalDays) / 7) * 7;
  const today = localDateISO(new Date());
  let cells = "";
  for (let index = 0; index < totalCells; index++) {
    const dayNumber = index - offset + 1;
    const date = new Date(year, month, dayNumber);
    const iso = localDateISO(date);
    const inMonth = date.getMonth() === month;
    const dayEvents = events.filter(item => item.date === iso);
    const classes = [
      "calendar-day",
      inMonth ? "" : "outside",
      iso === today ? "today" : "",
      iso === selectedDate ? "selected" : ""
    ].filter(Boolean).join(" ");
    const countLabel = dayEvents.length
      ? `<span class="day-events"><span class="event-dot"></span>${dayEvents.length} evento${dayEvents.length === 1 ? "" : "s"}</span>`
      : "";
    cells += `<button type="button" class="${classes}" data-calendar-day="${iso}" aria-label="${iso}, ${dayEvents.length} eventos">
      <span class="day-number">${date.getDate()}</span>${countLabel}
    </button>`;
  }
  grid.innerHTML = cells;
}
function renderEventsForSelectedDay() {
  const list = byId("calEventsList");
  const heading = byId("calEventsHeading");
  const dateLabel = parseLocalDate(selectedDate).toLocaleDateString("es-ES", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });
  heading.textContent = "Eventos · " + dateLabel;
  const dayEvents = events.filter(item => item.date === selectedDate);
  if (!dayEvents.length) {
    list.innerHTML = '<p class="calendar-muted">No hay eventos para este día. Puedes añadir uno con el formulario.</p>';
    return;
  }
  list.innerHTML = dayEvents.map(item => {
    const time = item.startTime
      ? `${escapeCalendarText(item.startTime)}${item.endTime ? " – " + escapeCalendarText(item.endTime) : ""}`
      : "Sin hora asignada";
    return `<article class="calendar-event">
      <h4>${escapeCalendarText(item.title || "Evento")}</h4>
      <p>${time}</p>
      ${item.description ? `<p>${escapeCalendarText(item.description)}</p>` : ""}
      ${signedUser && signedUser.uid === ADMIN_UID ? `<div class="calendar-event-actions">
        <button type="button" data-cal-action="edit" data-event-id="${escapeCalendarText(item.id)}">Editar</button>
        <button type="button" data-cal-action="delete" data-event-id="${escapeCalendarText(item.id)}">Eliminar</button>
      </div>` : ""}
    </article>`;
  }).join("");
}
function resetEventForm() {
  editingEventId = null;
  byId("calEventForm").reset();
  byId("calEventDate").value = selectedDate;
  byId("calEventFormHeading").textContent = "Añadir evento";
  byId("calSaveEventBtn").textContent = "Guardar evento";
  byId("calCancelEditBtn").classList.add("hidden");
}
function beginEditEvent(eventId) {
  const item = events.find(event => event.id === eventId);
  if (!item) return;
  editingEventId = eventId;
  byId("calEventTitle").value = item.title || "";
  byId("calEventDate").value = item.date || selectedDate;
  byId("calEventStart").value = item.startTime || "";
  byId("calEventEnd").value = item.endTime || "";
  byId("calEventDescription").value = item.description || "";
  byId("calEventFormHeading").textContent = "Modificar evento";
  byId("calSaveEventBtn").textContent = "Guardar cambios";
  byId("calCancelEditBtn").classList.remove("hidden");
  byId("calEventFormHeading").scrollIntoView({ behavior: "smooth", block: "center" });
}
async function submitCalendarLogin(event) {
  event.preventDefault();
  const email = byId("calEmail").value.trim();
  const password = byId("calPassword").value;
  try {
    setStatus("Iniciando sesión…");
    await signInWithEmailAndPassword(auth, email, password);
    byId("calPassword").value = "";
  } catch (error) {
    setStatus("No se ha podido iniciar sesión: " + error.message, true);
  }
}
async function submitNewCalendar(event) {
  event.preventDefault();
  const name = byId("calNewName").value.trim();
  const description = byId("calNewDescription").value.trim();
  if (!name) return;
  try {
    setStatus("Creando calendario…");
    await addDoc(collection(db, "calendars"), {
      name, description, createdBy: signedUser.uid,
      createdAt: serverTimestamp()
    });
    byId("calCreateForm").reset();
    setStatus("Calendario creado y guardado en Firestore.");
  } catch (error) {
    setStatus("No se ha podido crear el calendario: " + error.message, true);
  }
}
async function submitCalendarEvent(event) {
  event.preventDefault();
  if (!selectedCalendarId) {
    setStatus("Primero crea o selecciona un calendario.", true);
    return;
  }
  const title = byId("calEventTitle").value.trim();
  const date = byId("calEventDate").value;
  const startTime = byId("calEventStart").value;
  const endTime = byId("calEventEnd").value;
  const description = byId("calEventDescription").value.trim();
  if (!title || !date) return;
  if (startTime && endTime && endTime < startTime) {
    setStatus("La hora de finalización no puede ser anterior a la hora de inicio.", true);
    return;
  }
  const data = { title, date, startTime, endTime, description, updatedAt: serverTimestamp() };
  try {
    if (editingEventId) {
      await updateDoc(doc(db, "calendars", selectedCalendarId, "events", editingEventId), data);
      setStatus("Evento actualizado y guardado en Firestore.");
    } else {
      await addDoc(collection(db, "calendars", selectedCalendarId, "events"), {
        ...data, createdAt: serverTimestamp()
      });
      setStatus("Evento guardado en Firestore.");
    }
    selectedDate = date;
    currentMonth = new Date(parseLocalDate(date).getFullYear(), parseLocalDate(date).getMonth(), 1);
    resetEventForm();
    renderMonth();
    renderEventsForSelectedDay();
  } catch (error) {
    setStatus("No se ha podido guardar el evento: " + error.message, true);
  }
}

byId("calendarBackBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});
byId("calShowLoginBtn").addEventListener("click", () => {
  loginPanel.classList.toggle("hidden");
  if (!loginPanel.classList.contains("hidden")) {
    byId("calEmail").focus();
    loginPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
byId("calCloseLoginBtn").addEventListener("click", () => loginPanel.classList.add("hidden"));
byId("calLoginForm").addEventListener("submit", submitCalendarLogin);
byId("calLogoutBtn").addEventListener("click", async () => {
  try { await signOut(auth); }
  catch (error) { setStatus("No se ha podido cerrar la sesión: " + error.message, true); }
});
byId("calCreateForm").addEventListener("submit", submitNewCalendar);
byId("calPicker").addEventListener("change", event => selectCalendar(event.target.value));
byId("calPrevMonth").addEventListener("click", () => {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
  renderMonth();
});
byId("calNextMonth").addEventListener("click", () => {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
  renderMonth();
});
byId("calToday").addEventListener("click", () => {
  selectedDate = localDateISO(new Date());
  currentMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  byId("calEventDate").value = selectedDate;
  renderMonth();
  renderEventsForSelectedDay();
});
byId("calMonthGrid").addEventListener("click", event => {
  const day = event.target.closest("[data-calendar-day]");
  if (!day) return;
  selectedDate = day.dataset.calendarDay;
  byId("calEventDate").value = selectedDate;
  if (new Date(selectedDate + "T12:00:00").getMonth() !== currentMonth.getMonth()) {
    const date = parseLocalDate(selectedDate);
    currentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  }
  resetEventForm();
  renderMonth();
  renderEventsForSelectedDay();
});
byId("calEventsList").addEventListener("click", async event => {
  const button = event.target.closest("[data-cal-action]");
  if (!button) return;
  const eventId = button.dataset.eventId;
  if (button.dataset.calAction === "edit") {
    beginEditEvent(eventId);
    return;
  }
  if (button.dataset.calAction === "delete") {
    if (!window.confirm("¿Seguro que quieres eliminar este evento?")) return;
    try {
      await deleteDoc(doc(db, "calendars", selectedCalendarId, "events", eventId));
      if (editingEventId === eventId) resetEventForm();
      setStatus("Evento eliminado de Firestore.");
    } catch (error) {
      setStatus("No se ha podido eliminar el evento: " + error.message, true);
    }
  }
});
byId("calEventForm").addEventListener("submit", submitCalendarEvent);
byId("calCancelEditBtn").addEventListener("click", resetEventForm);

byId("calEventDate").value = selectedDate;

if (!firebaseReady()) {
  configGuide.classList.remove("hidden");
  loginPanel.classList.add("hidden");
  adminPanel.classList.add("hidden");
  setStatus("Falta configurar Firebase: completa firebaseConfig y ADMIN_UID en el módulo de calendario.");
} else {
  try {
    configGuide.classList.add("hidden");
    loginPanel.classList.add("hidden");
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    // Espera a que Firebase restaure la sesión. Después carga los calendarios:
    // la lectura es pública y no exige iniciar sesión.
    onAuthStateChanged(auth, user => {
      signedUser = user;
      const isAdmin = !!user && user.uid === ADMIN_UID;
      loginPanel.classList.add("hidden");
      setAdminMode(isAdmin);
      startCalendarListener();

      if (user && !isAdmin) {
        setStatus("Puedes consultar el calendario, pero esta cuenta no tiene permisos para modificarlo.", true);
      } else if (isAdmin) {
        setStatus("Sesión de administrador iniciada. Puedes crear calendarios y gestionar eventos.");
      } else {
        setStatus("Calendario público conectado. No hace falta iniciar sesión para consultar los eventos.");
      }
    });
  } catch (error) {
    setStatus("Error al iniciar Firebase: " + error.message, true);
  }
}
