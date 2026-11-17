# Portal de estudio · 1.º SMX

Web estática (HTML + CSS + JS) con apuntes, exámenes tipo test y un calendario conectado a Firebase.

## Estructura

```
index.html               Portada
apuntes.html             Asignaturas, RA, apuntes y exámenes
calendario.html          Calendario (Firebase Auth + Firestore)
404.html                 Página de error
assets/css/              styles.css, calendar.css
assets/js/               apuntes.js, calendario.js, theme.js
firestore.rules          Reglas de seguridad de Firestore (solo se usan al desplegar en Firebase)
firebase.json            Configuración opcional de Firebase Hosting / reglas
.nojekyll                Evita que GitHub Pages procese los archivos con Jekyll
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `portal-estudio-smx`).
2. Sube **el contenido de esta carpeta** a la raíz del repositorio (arrastra los archivos en *Add file → Upload files*; `index.html` debe quedar en la raíz, no dentro de otra carpeta).
3. Ve a **Settings → Pages**. En *Build and deployment* elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. Espera uno o dos minutos. La web estará en [https://alguienrandomquenoconoces.github.io/Apuntes_Balmes/](https://alguienrandomquenoconoces.github.io/Apuntes_Balmes/).

### Para que el calendario funcione en GitHub Pages

- Cualquiera puede **consultar** el calendario sin configurar nada más.
- Para que el administrador pueda **iniciar sesión**, añade tu dominio de GitHub Pages en Firebase:
  *Authentication → Settings → Authorized domains → Add domain* → `alguienrandomquenoconoces.github.io`.
- Las reglas de `firestore.rules` se publican en Firebase (consola de Firebase → Firestore → Reglas, o con `firebase deploy --only firestore:rules`). GitHub Pages no las aplica.

## Prueba en local

Los módulos de JavaScript no funcionan abriendo el HTML con doble clic (`file://`). Usa un servidor local:

```
python -m http.server 8000
```

y abre http://localhost:8000

## Publicar en Firebase Hosting (opcional)

```
firebase login
firebase use insti-ab0e8
firebase deploy --only hosting,firestore:rules
```

## Permisos del calendario

Cualquier visitante puede consultar calendarios y eventos. Solo el UID de administrador (definido en `assets/js/calendario.js` y en `firestore.rules`) puede crear calendarios y gestionar eventos. El borrado de calendarios está desactivado en las reglas para no dejar subcolecciones huérfanas.

**Aviso:** como la lectura es pública, no escribas contraseñas ni datos privados en títulos o descripciones de eventos. La contraseña del administrador no está en ningún archivo.
