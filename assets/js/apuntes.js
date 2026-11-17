const SUBJECTS={
'xarxes-locals':{name:'Redes locales',icon:'🌐'},
'montaje':{name:'Montaje y mantenimiento de equipos',icon:'🖥️'},
'ofimatica':{name:'Ofimática',icon:'📄'},
'so-monolloc':{name:'Sistemas operativos',icon:'💻'},
'inteligencia-artificial':{name:'Módulo optativo',icon:'🤖'},
'ipe1':{name:'IPO',icon:'🧭'},
'ingles':{name:'Inglés',icon:'🇬🇧'},
'digitalitzacio':{name:'Digitalización',icon:'🏭'},
'sostenibilitat':{name:'Sostenibilidad',icon:'♻️'}
};
const LEARNING_OUTCOMES={
'mon':{subjectId:'montaje',name:'RA1',desc:'Selección de componentes de equipos microinformáticos'},
'montaje-ra2':{subjectId:'montaje',name:'RA2',desc:'Montaje de equipos microinformáticos'},
'montaje-ra3':{subjectId:'montaje',name:'RA3',desc:'Medición de parámetros eléctricos'},
'montaje-ra4':{subjectId:'montaje',name:'RA4',desc:'Mantenimiento de equipos informáticos'},
'montaje-ra5':{subjectId:'montaje',name:'RA5',desc:'Instalación de software mediante imágenes'},
'montaje-ra6':{subjectId:'montaje',name:'RA6',desc:'Nuevas tendencias en equipos microinformáticos'},
'montaje-ra7':{subjectId:'montaje',name:'RA7',desc:'Mantenimiento de periféricos'},
'montaje-ra8':{subjectId:'montaje',name:'RA8',desc:'Prevención de riesgos laborales y protección ambiental'},
'so-monolloc-ra1':{subjectId:'so-monolloc',name:'RA1',desc:'Características de los sistemas operativos'},
'so-monolloc-ra2':{subjectId:'so-monolloc',name:'RA2',desc:'Instalación de sistemas operativos'},
'so-monolloc-ra3':{subjectId:'so-monolloc',name:'RA3',desc:'Configuración básica de sistemas operativos'},
'so-monolloc-ra4':{subjectId:'so-monolloc',name:'RA4',desc:'Administración de sistemas operativos'},
'so-monolloc-ra5':{subjectId:'so-monolloc',name:'RA5',desc:'Creación y configuración de máquinas virtuales'},
'ofimatica-ra1':{subjectId:'ofimatica',name:'RA1',desc:'Instalación y actualización de aplicaciones ofimáticas'},
'ofimatica-ra2':{subjectId:'ofimatica',name:'RA2',desc:'Elaboración de documentos con procesador de textos'},
'ofimatica-ra3':{subjectId:'ofimatica',name:'RA3',desc:'Elaboración de documentos con hojas de cálculo'},
'ofimatica-ra4':{subjectId:'ofimatica',name:'RA4',desc:'Gestión de bases de datos ofimáticas'},
'ofimatica-ra5':{subjectId:'ofimatica',name:'RA5',desc:'Manipulación de imágenes digitales'},
'ofimatica-ra6':{subjectId:'ofimatica',name:'RA6',desc:'Edición de secuencias de vídeo'},
'ofimatica-ra7':{subjectId:'ofimatica',name:'RA7',desc:'Elaboración de presentaciones multimedia'},
'ofimatica-ra8':{subjectId:'ofimatica',name:'RA8',desc:'Gestión del correo y la agenda electrónica'},
'ofimatica-ra9':{subjectId:'ofimatica',name:'RA9',desc:'Soporte y resolución de incidencias en aplicaciones'},
'so-xarxa-ra1':{subjectId:'so-xarxa',name:'RA1',desc:'Instalación de sistemas operativos en red'},
'so-xarxa-ra2':{subjectId:'so-xarxa',name:'RA2',desc:'Gestión de usuarios y grupos en red'},
'so-xarxa-ra3':{subjectId:'so-xarxa',name:'RA3',desc:'Administración de dominios'},
'so-xarxa-ra4':{subjectId:'so-xarxa',name:'RA4',desc:'Gestión de recursos compartidos en red'},
'so-xarxa-ra5':{subjectId:'so-xarxa',name:'RA5',desc:'Monitorización del sistema operativo en red'},
'so-xarxa-ra6':{subjectId:'so-xarxa',name:'RA6',desc:'Integración de sistemas operativos libres y propietarios'},
'xarxes-locals-ra1':{subjectId:'xarxes-locals',name:'RA1',desc:'Identificación de los elementos de las redes locales'},
'xarxes-locals-ra2':{subjectId:'xarxes-locals',name:'RA2',desc:'Despliegue del cableado de redes locales'},
'xarxes-locals-ra3':{subjectId:'xarxes-locals',name:'RA3',desc:'Interconexión de equipos en redes locales'},
'xarxes-locals-ra4':{subjectId:'xarxes-locals',name:'RA4',desc:'Instalación y configuración de equipos de red'},
'xarxes-locals-ra5':{subjectId:'xarxes-locals',name:'RA5',desc:'Mantenimiento y resolución de incidencias de red'},
'xarxes-locals-ra6':{subjectId:'xarxes-locals',name:'RA6',desc:'Prevención de riesgos laborales y protección ambiental'},
'seguretat-ra1':{subjectId:'seguretat',name:'RA1',desc:'Seguridad pasiva en sistemas informáticos'},
'seguretat-ra2':{subjectId:'seguretat',name:'RA2',desc:'Gestión del almacenamiento y de las copias de seguridad'},
'seguretat-ra3':{subjectId:'seguretat',name:'RA3',desc:'Seguridad activa en sistemas informáticos'},
'seguretat-ra4':{subjectId:'seguretat',name:'RA4',desc:'Privacidad y seguridad en redes'},
'seguretat-ra5':{subjectId:'seguretat',name:'RA5',desc:'Legislación sobre seguridad y protección de datos'},
'serveis-xarxa-ra1':{subjectId:'serveis-xarxa',name:'RA1',desc:'Instalación de servicios DHCP'},
'serveis-xarxa-ra2':{subjectId:'serveis-xarxa',name:'RA2',desc:'Instalación de servicios DNS'},
'serveis-xarxa-ra3':{subjectId:'serveis-xarxa',name:'RA3',desc:'Instalación de servicios FTP'},
'serveis-xarxa-ra4':{subjectId:'serveis-xarxa',name:'RA4',desc:'Administración de servidores de correo electrónico'},
'serveis-xarxa-ra5':{subjectId:'serveis-xarxa',name:'RA5',desc:'Administración de servidores web'},
'serveis-xarxa-ra6':{subjectId:'serveis-xarxa',name:'RA6',desc:'Administración del acceso remoto'},
'serveis-xarxa-ra7':{subjectId:'serveis-xarxa',name:'RA7',desc:'Despliegue de redes inalámbricas seguras'},
'serveis-xarxa-ra8':{subjectId:'serveis-xarxa',name:'RA8',desc:'Conexión de redes locales con redes públicas'},
'aplicacions-web-ra1':{subjectId:'aplicacions-web',name:'RA1',desc:'Instalación y configuración de gestores de contenidos (CMS)'},
'aplicacions-web-ra2':{subjectId:'aplicacions-web',name:'RA2',desc:'Instalación de plataformas de aprendizaje en línea (LMS)'},
'aplicacions-web-ra3':{subjectId:'aplicacions-web',name:'RA3',desc:'Instalación de servicios de gestión de archivos web'},
'aplicacions-web-ra4':{subjectId:'aplicacions-web',name:'RA4',desc:'Instalación de aplicaciones ofimáticas web'},
'aplicacions-web-ra5':{subjectId:'aplicacions-web',name:'RA5',desc:'Instalación de aplicaciones web de escritorio'},
'ing':{subjectId:'ingles',name:'RA1',desc:'Comprensión de mensajes orales en inglés'},
'ingles-ra2':{subjectId:'ingles',name:'RA2',desc:'Comprensión de textos escritos profesionales en inglés'},
'ingles-ra3':{subjectId:'ingles',name:'RA3',desc:'Producción de mensajes orales profesionales en inglés'},
'ingles-ra4':{subjectId:'ingles',name:'RA4',desc:'Redacción de textos profesionales en inglés'},
'ingles-ra5':{subjectId:'ingles',name:'RA5',desc:'Actitudes y comportamientos socioprofesionales en inglés'},
'digitalitzacio-ra1':{subjectId:'digitalitzacio',name:'RA1',desc:'Economía lineal y circular y tecnologías de digitalización'},
'ia-ra1':{subjectId:'inteligencia-artificial',name:'RA1',desc:'Conceptos, funcionamiento y uso responsable de la inteligencia artificial'},
'digitalitzacio-ra2':{subjectId:'digitalitzacio',name:'RA2',desc:'La cuarta revolución industrial y la digitalización'},
'digitalitzacio-ra3':{subjectId:'digitalitzacio',name:'RA3',desc:'Sistemas basados en la nube y computación en la nube'},
'digitalitzacio-ra4':{subjectId:'digitalitzacio',name:'RA4',desc:'Comparación de sistemas productivos clásicos y digitalizados'},
'digitalitzacio-ra5':{subjectId:'digitalitzacio',name:'RA5',desc:'Plan de transformación digital de una empresa'},
'sostenibilitat-ra1':{subjectId:'sostenibilitat',name:'RA1',desc:'Aspectos ASG y desarrollo sostenible'},
'sostenibilitat-ra2':{subjectId:'sostenibilitat',name:'RA2',desc:'Retos ambientales y sociales y acciones de mejora'},
'sostenibilitat-ra3':{subjectId:'sostenibilitat',name:'RA3',desc:'Criterios de sostenibilidad en el ámbito profesional'},
'sostenibilitat-ra4':{subjectId:'sostenibilitat',name:'RA4',desc:'Productos y servicios responsables y economía circular'},
'sostenibilitat-ra5':{subjectId:'sostenibilitat',name:'RA5',desc:'Actividades sostenibles y reducción del impacto ambiental'},
'sostenibilitat-ra6':{subjectId:'sostenibilitat',name:'RA6',desc:'Análisis de un plan de sostenibilidad empresarial'},
'ipe1-ra1':{subjectId:'ipe1',name:'RA1',desc:'Características del sector y puestos de trabajo'},
'ipo':{subjectId:'ipe1',name:'RA2',desc:'Competencias en prevención de riesgos laborales'},
'ipe1-ra3':{subjectId:'ipe1',name:'RA3',desc:'Condiciones laborales y derecho del trabajo'},
'ipe1-ra4':{subjectId:'ipe1',name:'RA4',desc:'Autoorientación y plan de inserción profesional'},
'ipe1-ra5':{subjectId:'ipe1',name:'RA5',desc:'Aprendizaje autónomo y entorno personal de aprendizaje'},
'ipe2-ra1':{subjectId:'ipe2',name:'RA1',desc:'Estrategias de búsqueda de empleo y procesos de selección'},
'ipe2-ra2':{subjectId:'ipe2',name:'RA2',desc:'Competencias personales, sociales y emocionales para la empleabilidad'},
'ipe2-ra3':{subjectId:'ipe2',name:'RA3',desc:'Habilidades emprendedoras e innovación sostenible'},
'ipe2-ra4':{subjectId:'ipe2',name:'RA4',desc:'Ideación y validación de proyectos emprendedores'},
'ipe2-ra5':{subjectId:'ipe2',name:'RA5',desc:'Desarrollo de un proyecto emprendedor'},
'projecte-ra1':{subjectId:'projecte',name:'RA1',desc:'Caracterización de empresas del sector'},
'projecte-ra2':{subjectId:'projecte',name:'RA2',desc:'Planificación y viabilidad de un proyecto técnico'},
'projecte-ra3':{subjectId:'projecte',name:'RA3',desc:'Planificación y documentación de las actividades del proyecto'},
'projecte-ra4':{subjectId:'projecte',name:'RA4',desc:'Seguimiento y control de la ejecución del proyecto'},
'projecte-ra5':{subjectId:'projecte',name:'RA5',desc:'Comunicación y transmisión de información técnica'}
};
const bank=[];
function Q(s,d,t,ok,bad,exp){bank.push({s,d,t,ok,bad,exp})}
/* --- SISTEMAS OPERATIVOS · RA1: banco de preguntas del HTML aportado (136) --- */
Q("so-monolloc-ra1","facil","¿Qué es un sistema operativo?","El software fundamental que administra los recursos del ordenador y permite ejecutar aplicaciones",["Un componente físico que almacena archivos", "Un programa que solo sirve para navegar por Internet"],"El sistema operativo administra los recursos del equipo y ofrece el entorno para ejecutar aplicaciones.");
Q("so-monolloc-ra1","facil","¿Cuál es una función principal del sistema operativo?","Gestionar los recursos del ordenador",["Fabricar los componentes físicos", "Sustituir todos los programas de usuario"],"Gestiona recursos como el procesador, la memoria, los archivos y los dispositivos.");
Q("so-monolloc-ra1","facil","¿Qué papel cumple el sistema operativo entre el usuario y el hardware?","Es el intermediario que permite que usuario y aplicaciones utilicen el hardware",["Sustituye al hardware cuando este falla", "Fabrica los componentes físicos"],"El SO coordina el hardware, los programas y el usuario.");
Q("so-monolloc-ra1","facil","¿Qué es el kernel o núcleo?","La parte central del sistema operativo",["Una carpeta de documentos", "Un periférico de entrada"],"El kernel es el núcleo del sistema operativo y gestiona funciones esenciales.");
Q("so-monolloc-ra1","facil","¿Cuál de estos elementos NO es un recurso gestionado por el sistema operativo?","El diseño de la carcasa del equipo",["La memoria", "Los archivos y directorios"],"El SO gestiona procesos (CPU), memoria, archivos y dispositivos; no el aspecto físico.");
Q("so-monolloc-ra1","facil","¿Qué hace el sistema operativo con los procesos?","Organiza su ejecución y reparte el tiempo de CPU",["Los diseña gráficamente", "Los convierte en periféricos"],"Gestionar procesos es organizar su ejecución y repartir la CPU.");
Q("so-monolloc-ra1","facil","¿Qué es un proceso?","Un programa en ejecución",["Un archivo comprimido", "Un dispositivo de salida"],"Un proceso es una instancia de un programa que se está ejecutando.");
Q("so-monolloc-ra1","facil","¿Qué administra el sistema operativo para organizar los datos?","Archivos y directorios",["Solo el brillo de pantalla", "Únicamente los cables"],"El sistema operativo proporciona mecanismos para organizar y gestionar archivos y directorios.");
Q("so-monolloc-ra1","facil","¿Qué permite la gestión de dispositivos?","Controlar y comunicar el sistema con el hardware",["Aumentar físicamente la memoria RAM", "Cambiar el tamaño del teclado"],"El sistema operativo controla dispositivos mediante el software correspondiente, como los drivers.");
Q("so-monolloc-ra1","facil","¿Qué es un controlador o driver?","Software que permite comunicarse con un dispositivo",["Un tipo de memoria RAM", "Un estado de proceso"],"El driver permite al sistema operativo comunicarse con un dispositivo concreto.");
Q("so-monolloc-ra1","medio","¿Qué ocurre durante el arranque del ordenador?","Se inicia el sistema y se carga el sistema operativo",["Se borran automáticamente todos los archivos", "Se desconectan los periféricos"],"En el arranque se realizan las operaciones de inicio y se carga el sistema operativo.");
Q("so-monolloc-ra1","medio","¿Qué es la interfaz de usuario de un sistema operativo?","El medio que permite al usuario comunicarse con el SO (entorno gráfico o comandos)",["La unidad física del disco", "El ventilador del procesador"],"Puede ser un entorno gráfico o una interfaz de comandos.");
Q("so-monolloc-ra1","medio","¿Cuál de estos es un sistema operativo?","Windows",["HDMI", "Un driver"],"Windows es un sistema operativo usado en ordenadores personales.");
Q("so-monolloc-ra1","medio","¿Para qué equipos puede utilizarse Linux?","Para ordenadores y servidores",["Solo para teclados e impresoras", "Únicamente para ordenadores personales, nunca servidores"],"Linux puede usarse tanto en ordenadores como en servidores.");
Q("so-monolloc-ra1","medio","¿Qué caracteriza a un sistema operativo multiusuario?","Permite que varios usuarios utilicen el sistema",["Solo admite una aplicación", "No puede gestionar archivos"],"Un sistema multiusuario permite gestionar el acceso de diferentes usuarios.");
Q("so-monolloc-ra1","medio","¿Qué significa que un sistema operativo sea multitarea?","Puede gestionar la ejecución de varias tareas",["Solo puede arrancar una vez", "No utiliza procesador"],"La multitarea permite gestionar varios procesos o tareas concurrentes.");
Q("so-monolloc-ra1","medio","¿Qué componente ejecuta las instrucciones de los procesos y cuyo tiempo reparte el SO?","La CPU o procesador",["La impresora", "El directorio raíz"],"El SO planifica el uso de la CPU entre los procesos.");
Q("so-monolloc-ra1","medio","¿Para qué sirve la gestión de memoria?","Asignar y controlar el uso de la memoria",["Cambiar el idioma del teclado", "Crear periféricos"],"El sistema operativo administra la memoria que necesitan los procesos.");
Q("so-monolloc-ra1","medio","¿Qué relación hay entre aplicaciones y sistema operativo?","Las aplicaciones utilizan servicios del sistema operativo",["Las aplicaciones sustituyen al hardware", "No tienen ninguna relación"],"El sistema operativo proporciona servicios y recursos para que las aplicaciones funcionen.");
Q("so-monolloc-ra1","medio","¿Qué frase resume mejor la función del sistema operativo?","Coordina el hardware, los programas y el usuario",["Es únicamente un editor de textos", "Es una pieza física dentro del monitor"],"Sin él, las aplicaciones no tendrían una forma común de usar los recursos.");
Q("so-monolloc-ra1","dificil","¿Qué ocurriría con las aplicaciones si no existiera el sistema operativo?","No tendrían una forma común de usar los recursos del ordenador",["Funcionarían más rápido siempre", "Se convertirían en periféricos"],"El SO ofrece a las aplicaciones un modo común de usar los recursos.");
Q("so-monolloc-ra1","dificil","¿Qué tipos de interfaz de usuario puede ofrecer un sistema operativo?","Gráfica o de línea de comandos",["Solo física", "Solo de impresión"],"La interfaz puede ser un entorno gráfico o de comandos.");
Q("so-monolloc-ra1","dificil","¿Qué parte del SO se ocupa de las funciones esenciales y de la comunicación con los recursos?","El kernel o núcleo",["La papelera", "El escritorio"],"El kernel es la parte central del sistema operativo.");
Q("so-monolloc-ra1","dificil","Durante el arranque, ¿dónde se carga el sistema operativo?","En la memoria",["En la impresora", "En el teclado"],"Se carga en memoria para que pueda empezar a funcionar.");
Q("so-monolloc-ra1","dificil","¿Qué situación es un ejemplo de sistema multiusuario?","Varias personas con su propia cuenta en el mismo equipo",["Un solo usuario con un solo programa", "Un equipo sin ningún usuario"],"Un SO multiusuario gestiona el uso del sistema por varios usuarios.");
Q("so-monolloc-ra1","dificil","¿Qué situación muestra la multitarea?","Escuchar música mientras se escribe un documento",["Apagar el equipo", "Conectar un monitor"],"Varias tareas o procesos se ejecutan de forma gestionada a la vez.");
Q("so-monolloc-ra1","dificil","¿Qué permite la gestión de archivos?","Crear, organizar, localizar y administrar archivos y directorios",["Aumentar la RAM", "Cambiar el idioma del teclado"],"Es una de las funciones básicas del SO.");
Q("so-monolloc-ra1","dificil","¿Mediante qué software se comunica el SO con los dispositivos?","Controladores (drivers)",["Rutas relativas", "Estados de proceso"],"Los drivers permiten la comunicación con cada dispositivo.");
Q("so-monolloc-ra1","dificil","Un sistema operativo es...","Software",["Un componente físico del procesador", "Un periférico de entrada"],"Es el software fundamental del ordenador.");
Q("so-monolloc-ra1","facil","¿Qué es una carpeta o directorio?","Un contenedor que guarda archivos y otros directorios",["Un programa que controla la CPU", "Un dispositivo de salida"],"Una carpeta organiza archivos y otras carpetas.");
Q("so-monolloc-ra1","facil","¿Qué es un subdirectorio?","Un directorio dentro de otro directorio",["El primer proceso del sistema", "Un tipo de periférico"],"Es una carpeta que está contenida dentro de otra.");
Q("so-monolloc-ra1","facil","¿Qué es el directorio raíz?","El directorio principal desde el que parte la estructura",["La carpeta que se crea al final", "La papelera de reciclaje"],"Es el punto principal de la estructura de directorios.");
Q("so-monolloc-ra1","facil","¿Qué representa un árbol de directorios?","La organización jerárquica de carpetas y archivos",["La lista de procesos de la CPU", "La conexión de periféricos"],"Muestra cómo se organizan los directorios unos dentro de otros.");
Q("so-monolloc-ra1","facil","¿Para qué sirve organizar archivos en carpetas?","Para agruparlos y localizarlos con facilidad",["Para aumentar la velocidad de la CPU", "Para convertirlos en programas"],"La organización facilita guardar y encontrar la información.");
Q("so-monolloc-ra1","facil","¿Qué es una ruta absoluta?","Una ruta que parte de la raíz o unidad",["Una ruta que siempre empieza en la carpeta actual", "Un nombre de archivo sin ubicación"],"Identifica una ubicación desde la raíz o unidad.");
Q("so-monolloc-ra1","facil","¿Qué es una ruta relativa?","Una ruta que parte de la carpeta en la que estamos",["Una ruta que siempre empieza desde la raíz o unidad", "Un nombre de archivo sin ubicación"],"Depende del directorio actual. Ejemplo: cd smx.");
Q("so-monolloc-ra1","facil","¿Qué representa el símbolo punto (.) en una ruta?","La carpeta actual",["La carpeta superior", "La unidad de disco"],"El punto hace referencia al directorio actual.");
Q("so-monolloc-ra1","facil","¿Qué representa .. en una ruta?","La carpeta superior o padre",["La carpeta actual", "Un archivo oculto"],"Dos puntos representan el directorio padre.");
Q("so-monolloc-ra1","facil","¿Qué comando crea una carpeta en PowerShell?","mkdir",["dir", "ren"],"mkdir nombre crea un directorio.");
Q("so-monolloc-ra1","medio","¿Qué comando cambia de directorio?","cd",["tree", "rmdir"],"cd permite cambiar a otra carpeta.");
Q("so-monolloc-ra1","medio","¿Qué comando muestra el contenido de una carpeta?","dir",["move", "mkdir"],"dir lista el contenido del directorio.");
Q("so-monolloc-ra1","medio","¿Para qué sirve tree /f?","Muestra el árbol de carpetas e incluye archivos",["Borra todos los archivos", "Cambia el nombre de una carpeta"],"tree /f representa la estructura e incluye los archivos.");
Q("so-monolloc-ra1","medio","¿Qué parámetro se usa con copy para copiar una carpeta con todo su contenido?","-Recurse",["-Delete", "-Hidden"],"copy origen destino -Recurse copia también el contenido.");
Q("so-monolloc-ra1","medio","¿Qué comando se utiliza para mover una carpeta?","move",["ren", "dir"],"move origen destino mueve el elemento.");
Q("so-monolloc-ra1","medio","¿Qué comando cambia el nombre de una carpeta?","ren",["cd", "tree"],"ren permite cambiar el nombre.");
Q("so-monolloc-ra1","medio","¿Qué comando elimina un directorio?","rmdir",["mkdir", "dir"],"rmdir elimina un directorio.");
Q("so-monolloc-ra1","medio","En Windows, ¿qué representa C:\\\\ ?","La raíz de la unidad C",["La carpeta actual", "Un archivo ejecutable"],"En Windows hay una raíz por unidad: C:\\, D:\\...");
Q("so-monolloc-ra1","medio","En Linux, ¿qué símbolo representa el directorio raíz?","/",["C:\\\\", ".."],"La raíz del sistema de archivos en Linux es /.");
Q("so-monolloc-ra1","medio","Si estás en /home/ana y utilizas cd .., ¿a qué carpeta subes?","/home",["/home/ana", "/"],".. hace referencia al directorio padre, en este caso /home.");
Q("so-monolloc-ra1","dificil","Si se copia una carpeta con contenido sin el parámetro -Recurse, ¿qué puede pasar?","Que la copia quede vacía",["Que se borre el original", "Que se envíe a la Papelera"],"Sin -Recurse no se copia el contenido de la carpeta.");
Q("so-monolloc-ra1","dificil","Al borrar una carpeta con rmdir en PowerShell, ¿va a la Papelera?","No, desde la consola no se usa la Papelera",["Sí, siempre", "Solo si es una subcarpeta"],"Hay que tener cuidado: el borrado no se puede deshacer desde la Papelera.");
Q("so-monolloc-ra1","dificil","Con move origen destino, si el destino no existe, ¿qué puede ocurrir?","Que se cambie el nombre de la carpeta",["Que se copie dos veces", "Que se cree un periférico"],"Mover a un destino inexistente puede renombrar la carpeta.");
Q("so-monolloc-ra1","dificil","¿Cuántos directorios raíz hay en Windows?","Uno por cada unidad (C:\\, D:\\...)",["Solo uno: /", "Ninguno"],"En Windows cada unidad tiene su raíz; en Linux es única: /.");
Q("so-monolloc-ra1","dificil","¿Qué tipo de ruta es C:\\Users\\ana\\Documents\\smx ?","Absoluta",["Relativa", "Una ruta de red obligatoriamente"],"Empieza en la unidad, así que es absoluta.");
Q("so-monolloc-ra1","dificil","El comando cd smx, escrito desde la carpeta que contiene smx, usa una ruta...","Relativa",["Absoluta", "Superior"],"Parte de la carpeta actual.");
Q("so-monolloc-ra1","dificil","En /home/ana/fotos/playa.jpg, ¿qué carpeta contiene directamente a playa.jpg?","fotos",["home", "ana"],"playa.jpg está dentro de fotos.");
Q("so-monolloc-ra1","dificil","En /home/ana/fotos, ¿qué es fotos respecto a ana?","Un subdirectorio",["El directorio raíz", "Un archivo"],"Es un directorio dentro de otro.");
Q("so-monolloc-ra1","dificil","¿Qué hace la secuencia mkdir A, cd A, mkdir B, cd B, dir?","Crea A, entra, crea B dentro, entra y muestra su contenido",["Borra A y B", "Copia A en B"],"mkdir crea, cd entra y dir lista el contenido.");
Q("so-monolloc-ra1","facil","¿Qué es un proceso?","Una instancia de un programa en ejecución",["Una carpeta vacía", "Un dispositivo de salida"],"Un proceso es un programa que se está ejecutando.");
Q("so-monolloc-ra1","facil","¿En qué estado está un proceso recién creado?","Nuevo",["Preparado", "Terminado"],"El estado nuevo indica que acaba de crearse.");
Q("so-monolloc-ra1","facil","¿Qué significa que un proceso esté preparado o listo?","Está listo y espera su turno para usar la CPU",["Está esperando una operación de disco", "Ya ha terminado"],"Está preparado para ejecutarse, pero espera que se le asigne CPU.");
Q("so-monolloc-ra1","facil","¿Qué ocurre cuando un proceso está en ejecución?","Está utilizando la CPU",["Está apagado", "Está esperando siempre una entrada"],"El proceso está ejecutando instrucciones en el procesador.");
Q("so-monolloc-ra1","facil","¿Qué significa que un proceso esté bloqueado?","Espera un evento u operación, como una entrada/salida",["Está usando la CPU", "Acaba de crearse"],"El proceso no puede continuar hasta que ocurra lo que espera.");
Q("so-monolloc-ra1","facil","¿Cuándo pasa un proceso al estado terminado?","Cuando finaliza su ejecución",["Cuando espera su turno", "Cuando se crea"],"El estado terminado indica que ha acabado.");
Q("so-monolloc-ra1","facil","¿Cuál es la diferencia entre preparado y ejecución?","Preparado espera CPU; ejecución está usando CPU",["Preparado ya terminó; ejecución acaba de crearse", "Son exactamente iguales"],"El preparado está listo pero no ejecuta; el de ejecución sí utiliza la CPU.");
Q("so-monolloc-ra1","facil","¿Por qué puede pasar un proceso al estado de espera?","Porque espera una operación de entrada/salida",["Porque ha cambiado el nombre de una carpeta", "Porque se ha creado un directorio"],"Puede quedar bloqueado mientras espera una operación o evento.");
Q("so-monolloc-ra1","facil","Cuando termina la espera, ¿a qué estado vuelve el proceso?","Preparado",["Nuevo", "Terminado"],"Pasa a preparado y espera su turno de CPU.");
Q("so-monolloc-ra1","facil","¿Un proceso que espera una lectura del disco está preparado o bloqueado?","Bloqueado",["En ejecución", "Terminado"],"Está bloqueado mientras espera la operación.");
Q("so-monolloc-ra1","medio","¿Qué estado suele seguir al estado nuevo?","Preparado",["Terminado", "Bloqueado"],"Tras crearse, el proceso queda preparado para ejecutarse.");
Q("so-monolloc-ra1","medio","¿Qué estado alcanza un proceso cuando el planificador le asigna la CPU?","Ejecución",["Nuevo", "Terminado"],"Pasa a ejecución al obtener el procesador.");
Q("so-monolloc-ra1","medio","¿Qué recurso espera obtener un proceso preparado?","La CPU",["La impresora", "El directorio raíz"],"Está listo y solo le falta que se le asigne la CPU.");
Q("so-monolloc-ra1","medio","¿Qué estado no utiliza la CPU porque espera un evento?","Bloqueado",["Ejecución", "Preparado"],"Un proceso bloqueado está esperando que ocurra algo.");
Q("so-monolloc-ra1","medio","¿Qué puede hacer que un proceso en ejecución vuelva a preparado?","Que ceda la CPU o termine su turno",["Que se borre la carpeta raíz", "Que se desconecte siempre el monitor"],"Puede volver a preparado cuando deja de disponer de la CPU y sigue listo.");
Q("so-monolloc-ra1","medio","¿Cuál de estas secuencias representa un recorrido básico?","Nuevo → preparado → ejecución → terminado",["Terminado → nuevo → ejecución", "Bloqueado → nuevo → terminado siempre"],"Es el recorrido básico; también puede haber transiciones a espera y vuelta a preparado.");
Q("so-monolloc-ra1","medio","¿Qué diferencia hay entre bloqueado y preparado?","Bloqueado espera un evento; preparado espera CPU",["Bloqueado está ejecutando; preparado está apagado", "No hay diferencia"],"La causa de la espera es distinta.");
Q("so-monolloc-ra1","medio","¿Qué gestiona el sistema operativo para repartir el uso de la CPU?","La planificación de procesos",["El brillo de la pantalla", "El nombre de los periféricos"],"La planificación decide qué proceso puede utilizar la CPU.");
Q("so-monolloc-ra1","medio","¿Qué es la planificación de la CPU?","La decisión de qué proceso obtiene el procesador y cuándo",["La organización de archivos en carpetas", "La instalación de una impresora"],"El planificador organiza el acceso de los procesos a la CPU.");
Q("so-monolloc-ra1","medio","¿Puede un proceso pasar por el estado bloqueado durante su ejecución?","Sí, si debe esperar una operación o evento",["No, nunca", "Solo cuando está terminado"],"Un proceso puede bloquearse al necesitar esperar una operación.");
Q("so-monolloc-ra1","dificil","¿Puede un proceso bloqueado pasar directamente a ejecución?","No, al acabar la espera vuelve a preparado",["Sí, siempre", "Sí, pero solo si es nuevo"],"Primero queda preparado y espera su turno de CPU.");
Q("so-monolloc-ra1","dificil","¿En qué estado está un proceso que espera a que el usuario pulse una tecla?","Bloqueado o en espera",["En ejecución", "Terminado"],"Espera una operación de entrada/salida.");
Q("so-monolloc-ra1","dificil","En una CPU de un solo núcleo, ¿cuántos procesos pueden estar en ejecución a la vez?","Uno",["Todos los preparados", "Ninguno"],"Solo uno usa la CPU en cada instante; los demás esperan.");
Q("so-monolloc-ra1","dificil","Si un proceso en ejecución cede la CPU pero sigue listo, ¿a qué estado pasa?","Preparado",["Nuevo", "Terminado"],"Sigue pudiendo ejecutarse, pero espera su turno.");
Q("so-monolloc-ra1","dificil","¿Qué transición ocurre cuando un proceso acaba su trabajo?","Ejecución → terminado",["Preparado → nuevo", "Bloqueado → nuevo"],"Al finalizar su ejecución pasa a terminado.");
Q("so-monolloc-ra1","dificil","¿Qué pareja de estados NO utiliza la CPU en ese instante?","Preparado y bloqueado",["Ejecución y preparado", "Ejecución y bloqueado"],"Solo el proceso en ejecución usa la CPU.");
Q("so-monolloc-ra1","dificil","Un proceso lee un archivo del disco. ¿Qué secuencia es la correcta?","Ejecución → bloqueado → preparado → ejecución",["Ejecución → nuevo → terminado", "Bloqueado → nuevo → ejecución"],"Se bloquea mientras espera el disco y luego vuelve a preparado.");
Q("so-monolloc-ra1","dificil","¿Qué proceso puede ejecutarse inmediatamente si se le asigna la CPU?","El preparado",["El bloqueado", "El terminado"],"El bloqueado aún espera un evento.");
Q("so-monolloc-ra1","dificil","¿Usa ya la CPU un proceso que está en estado nuevo?","No, acaba de crearse y aún debe pasar a preparado",["Sí, siempre", "Sí, junto con los demás"],"Primero pasa a preparado.");
Q("so-monolloc-ra1","facil","¿Qué es un dispositivo de entrada?","Un dispositivo que envía datos al ordenador",["Un dispositivo que solo muestra resultados", "Un tipo de carpeta"],"Permite introducir información desde el usuario o el exterior.");
Q("so-monolloc-ra1","facil","¿Qué es un dispositivo de salida?","Un dispositivo que presenta información del ordenador",["Un dispositivo que introduce órdenes", "Un programa de gestión de memoria"],"Permite mostrar o entregar información al usuario.");
Q("so-monolloc-ra1","facil","¿Para qué sirven los dispositivos de entrada?","Para introducir datos u órdenes",["Para mostrar resultados", "Para planificar procesos"],"Envían datos hacia el ordenador.");
Q("so-monolloc-ra1","facil","¿Para qué sirven los dispositivos de salida?","Para mostrar o entregar información",["Para introducir texto", "Para crear directorios"],"Presentan al usuario la información procesada.");
Q("so-monolloc-ra1","facil","¿El teclado es un dispositivo de entrada o salida?","Entrada",["Salida", "Solo almacenamiento"],"El teclado introduce datos en el ordenador.");
Q("so-monolloc-ra1","facil","¿La pantalla es un dispositivo de entrada o salida?","Salida",["Entrada", "No es un dispositivo"],"La pantalla muestra información.");
Q("so-monolloc-ra1","facil","¿La impresora es un dispositivo de entrada o salida?","Salida",["Entrada", "Procesamiento"],"La impresora produce una salida en papel.");
Q("so-monolloc-ra1","facil","¿Qué función tiene el sistema operativo respecto a los dispositivos?","Controlarlos y permitir la comunicación con el hardware",["Fabricarlos", "Cambiar su tamaño físico"],"El sistema operativo gestiona los dispositivos y su comunicación.");
Q("so-monolloc-ra1","medio","¿Qué es un driver?","Software que permite al sistema operativo comunicarse con un dispositivo",["Un periférico de salida", "Una ruta absoluta"],"El driver es el controlador del dispositivo.");
Q("so-monolloc-ra1","medio","¿Por qué necesita el sistema operativo controladores?","Para comunicarse con dispositivos concretos",["Para crear la CPU", "Para sustituir la memoria"],"Los controladores traducen las órdenes y permiten gestionar el hardware.");
Q("so-monolloc-ra1","medio","¿Qué diferencia hay entre introducir y mostrar información?","Introducir es enviar datos al equipo; mostrar es recibir información del equipo",["Son la misma operación", "Mostrar información significa borrar datos"],"Entrada lleva datos hacia el ordenador; salida presenta datos desde él.");
Q("so-monolloc-ra1","medio","¿Qué dispositivo de los apuntes permite introducir texto?","Teclado",["Impresora", "Pantalla"],"El teclado es un dispositivo de entrada.");
Q("so-monolloc-ra1","medio","¿Cuál de estos dispositivos es de entrada?","Ratón",["Altavoces", "Impresora"],"El ratón envía órdenes al ordenador.");
Q("so-monolloc-ra1","medio","¿Cuál de estos dispositivos es de salida?","Altavoces",["Ratón", "Teclado"],"Los altavoces entregan información (sonido) al usuario.");
Q("so-monolloc-ra1","medio","¿Qué describe mejor un dispositivo de entrada/salida?","Puede intercambiar información en ambos sentidos",["Solo puede mostrar información", "No se conecta al ordenador"],"Los dispositivos de entrada/salida pueden recibir y enviar datos.");
Q("so-monolloc-ra1","medio","¿Qué componente de software puede necesitar un dispositivo para funcionar correctamente?","Controlador o driver",["Directorio raíz", "Planificador de CPU"],"El sistema operativo utiliza controladores para comunicarse con dispositivos.");
Q("so-monolloc-ra1","dificil","¿Dónde se pueden consultar dispositivos instalados en Windows según los apuntes?","Administrador de dispositivos",["Papelera", "Bloc de notas"],"El Administrador de dispositivos permite consultar el hardware y sus controladores.");
Q("so-monolloc-ra1","dificil","¿Qué ejemplo corresponde a salida?","Mostrar información en pantalla",["Escribir con el teclado", "Introducir una orden"],"La pantalla presenta información al usuario.");
Q("so-monolloc-ra1","dificil","¿Qué ejemplo corresponde a entrada?","Escribir con el teclado",["Imprimir un documento", "Ver una imagen en pantalla"],"El teclado introduce información.");
Q("so-monolloc-ra1","dificil","¿Quién coordina el acceso de las aplicaciones a los dispositivos?","El sistema operativo",["La carpeta personal", "El nombre del archivo"],"El sistema operativo gestiona el hardware y proporciona servicios a las aplicaciones.");
Q("so-monolloc-ra1","dificil","Un usuario escribe con el teclado y el texto aparece en pantalla. ¿Qué es cada dispositivo?","Teclado: entrada; pantalla: salida",["Teclado: salida; pantalla: entrada", "Ambos son de entrada"],"El teclado introduce datos; la pantalla los muestra.");
Q("so-monolloc-ra1","dificil","Una pantalla táctil, ¿qué tipo de dispositivo es?","Entrada y salida",["Solo entrada", "Solo salida"],"Muestra información y recibe órdenes al tocarla.");
Q("so-monolloc-ra1","dificil","Se conecta una impresora nueva y no funciona. ¿Qué causa es probable?","Falta el controlador (driver) adecuado",["Falta una carpeta raíz", "El proceso está nuevo"],"Puede ser necesario instalar o actualizar el driver.");
Q("so-monolloc-ra1","dificil","¿Puede ser necesario instalar o actualizar un driver?","Sí",["No, nunca", "Solo en dispositivos de salida"],"Los drivers pueden requerir instalación o actualización.");
Q("so-monolloc-ra1","facil","¿Qué es un periférico?","Un dispositivo conectado al ordenador para introducir, recibir o intercambiar información",["Un tipo de proceso", "Una carpeta del sistema"],"Los periféricos amplían la interacción con el ordenador.");
Q("so-monolloc-ra1","facil","¿Qué función cumple un periférico de entrada?","Introducir datos en el ordenador",["Mostrar resultados", "Administrar la memoria"],"Permite enviar información al equipo.");
Q("so-monolloc-ra1","facil","¿Qué función cumple un periférico de salida?","Presentar información del ordenador",["Introducir datos", "Crear procesos"],"Permite recibir información del equipo.");
Q("so-monolloc-ra1","facil","¿A qué grupo pertenece el teclado?","Entrada",["Salida", "Entrada/salida"],"El teclado introduce datos.");
Q("so-monolloc-ra1","facil","¿A qué grupo pertenece la pantalla?","Salida",["Entrada", "Almacenamiento"],"La pantalla muestra información.");
Q("so-monolloc-ra1","facil","¿A qué grupo pertenece la impresora?","Salida",["Entrada", "Procesamiento"],"La impresora produce información en papel.");
Q("so-monolloc-ra1","facil","¿Qué periférico de los apuntes permite enviar información al ordenador?","Teclado",["Pantalla", "Impresora"],"El teclado es un periférico de entrada.");
Q("so-monolloc-ra1","facil","¿Qué periféricos de los apuntes permiten recibir información del ordenador?","Pantalla e impresora",["Teclado y ratón", "Solo el teclado"],"La pantalla y la impresora son dispositivos de salida.");
Q("so-monolloc-ra1","facil","¿Qué papel tienen los controladores en los periféricos?","Permiten que el sistema operativo se comunique con ellos",["Aumentan su tamaño", "Los convierten en carpetas"],"Los drivers permiten controlar y utilizar el dispositivo.");
Q("so-monolloc-ra1","medio","¿Por qué es importante que el sistema operativo gestione los periféricos?","Para coordinar su uso y la comunicación con las aplicaciones",["Para cambiar su forma física", "Para eliminar todos los procesos"],"El sistema operativo coordina los dispositivos y el acceso a ellos.");
Q("so-monolloc-ra1","medio","¿Qué diferencia hay entre un periférico de entrada y uno de salida?","El de entrada envía datos al ordenador; el de salida presenta datos",["El de entrada siempre imprime", "No existe diferencia"],"La dirección del flujo de información es distinta.");
Q("so-monolloc-ra1","medio","¿Cómo se relacionan el sistema operativo, los drivers y los periféricos?","El sistema operativo utiliza drivers para comunicarse con los periféricos",["Los periféricos instalan el sistema operativo por sí solos", "Los drivers son dispositivos físicos"],"El controlador actúa como software de comunicación entre sistema y dispositivo.");
Q("so-monolloc-ra1","medio","¿Cuál de estos periféricos es de salida?","Impresora",["Teclado", "Ratón"],"La impresora entrega información en papel.");
Q("so-monolloc-ra1","medio","¿Cuál de estos ejemplos es un periférico de entrada?","Teclado",["Pantalla", "Impresora"],"El teclado permite introducir datos.");
Q("so-monolloc-ra1","medio","¿Qué categoría describe un dispositivo que puede enviar y recibir datos?","Entrada/salida",["Solo entrada", "Solo salida"],"Puede intercambiar información en ambos sentidos.");
Q("so-monolloc-ra1","medio","¿Qué dispositivo permite visualizar información?","Pantalla",["Teclado", "Carpeta"],"La pantalla presenta información visual.");
Q("so-monolloc-ra1","medio","¿Qué dispositivo permite obtener una copia impresa de la información?","Impresora",["Teclado", "CPU"],"La impresora produce una copia en papel.");
Q("so-monolloc-ra1","dificil","¿Qué debe hacer el sistema operativo para utilizar un periférico?","Gestionar su comunicación mediante el controlador adecuado",["Convertirlo en memoria RAM", "Crear una ruta absoluta"],"El driver permite la comunicación entre sistema operativo y periférico.");
Q("so-monolloc-ra1","dificil","¿Cuál de estos grupos contiene solo ejemplos de salida citados en los apuntes?","Pantalla e impresora",["Teclado y pantalla", "Teclado e impresora"],"Los apuntes citan pantalla e impresora como ejemplos de salida.");
Q("so-monolloc-ra1","dificil","¿Puede un periférico ser a la vez de entrada y de salida?","Sí, por ejemplo una pantalla táctil",["No, nunca", "Solo si es una impresora"],"Los periféricos de entrada/salida envían y reciben datos.");
Q("so-monolloc-ra1","dificil","Si el SO no dispone del controlador adecuado, ¿qué puede ocurrir?","Que no pueda comunicarse con el dispositivo ni controlarlo",["Que el dispositivo se convierta en memoria", "Que el SO se borre"],"El driver es necesario para comunicarse con el periférico.");
Q("so-monolloc-ra1","dificil","¿A qué grupo pertenece una pantalla táctil?","Entrada/salida",["Solo entrada", "Solo salida"],"Recibe órdenes y muestra información.");
Q("so-monolloc-ra1","dificil","¿A qué grupo pertenece el ratón?","Entrada",["Salida", "Entrada/salida"],"Envía órdenes al ordenador.");
Q("so-monolloc-ra1","dificil","¿A qué grupo pertenecen unos altavoces?","Salida",["Entrada", "Entrada/salida"],"Entregan información (sonido) al usuario.");
Q("so-monolloc-ra1","dificil","¿A qué grupo pertenece una memoria USB?","Entrada/salida",["Solo entrada", "Solo salida"],"Se puede leer y escribir en ella.");


/* --- SOSTENIBILIDAD · RA1: preguntas copiadas del Kahoot del vídeo --- */
Q('sostenibilitat-ra1','facil','¿Qué significa sostenibilidad?','Cubrir las necesidades de hoy sin comprometer las del futuro',['Utilizar todos los recursos disponibles','Dejar de utilizar tecnología','Comprar siempre productos ecológicos'],'La sostenibilidad busca satisfacer las necesidades actuales sin comprometer las de las generaciones futuras.');
Q('sostenibilitat-ra1','facil','¿Cuáles son las tres dimensiones de la sostenibilidad?','Ambiental, social y económica',['Digital, ambiental y tecnológica','Política, tecnológica y cultural','Industrial, comercial y energética'],'Las tres dimensiones son la ambiental, la social y la económica.');
Q('sostenibilitat-ra1','facil','¿Cuál es un ejemplo de sostenibilidad social en informática?','Garantizar el acceso a la tecnología a todas las personas',['Reducir el consumo de electricidad','Instalar discos SSD','Reciclar componentes electrónicos'],'La sostenibilidad social incluye la igualdad de acceso a la tecnología y la reducción de la brecha digital.');
Q('sostenibilitat-ra1','medio','¿Qué significa prolongar la vida útil de un ordenador?','Repararlo o actualizarlo para seguir utilizándolo',['Utilizarlo sin mantenimiento','Mantenerlo encendido permanentemente','Cambiarlo por otro más potente'],'Prolongar la vida útil significa mantener, reparar o actualizar el equipo para retrasar su sustitución.');
Q('sostenibilitat-ra1','medio','¿Qué mejora puede acelerar un ordenador con un disco HDD lento?','Instalar un SSD',['Cambiar el monitor','Cambiar el teclado','Instalar más ventiladores'],'Sustituir un HDD por un SSD suele mejorar notablemente los tiempos de arranque y carga.');
Q('sostenibilitat-ra1','medio','¿Qué son los residuos electrónicos (RAEE)?','Dispositivos eléctricos o electrónicos desechados',['Archivos eliminados del ordenador','Mensajes almacenados en Internet','Programas que ya no se utilizan'],'RAEE son residuos de aparatos eléctricos y electrónicos que se desechan.');
Q('sostenibilitat-ra1','facil','¿Cuántos Objetivos de Desarrollo Sostenible (ODS) existen?','17',['12','20','10'],'La Agenda 2030 incluye 17 Objetivos de Desarrollo Sostenible.');
Q('sostenibilitat-ra1','medio','¿Qué ODS está más directamente relacionado con reparar y reutilizar ordenadores?','ODS 12 – Producción y consumo responsables',['ODS 4 – Educación de calidad','ODS 9 – Industria e innovación','ODS 7 – Energía asequible'],'El ODS 12 promueve la producción y el consumo responsables, incluida la reparación, reutilización y reducción de residuos.');
Q('sostenibilitat-ra1','dificil','¿Qué ODS se relaciona especialmente con la eficiencia energética de los centros de datos?','ODS 7 – Energía asequible y no contaminante',['ODS 8 – Trabajo decente','ODS 10 – Reducción de desigualdades','ODS 4 – Educación de calidad'],'La eficiencia energética se relaciona directamente con el ODS 7, centrado en energía asequible y no contaminante.');
Q('sostenibilitat-ra1','dificil','¿Qué ODS está directamente relacionado con reducir la brecha digital?','ODS 10 – Reducción de las desigualdades',['ODS 13 – Acción por el clima','ODS 12 – Consumo responsable','ODS 7 – Energía'],'La brecha digital genera desigualdades en el acceso a la tecnología; reducirlas se relaciona con el ODS 10.');
Q('sostenibilitat-ra1','dificil','Una escuela proporciona ordenadores e Internet a estudiantes sin recursos. ¿Qué ODS se relacionan?','ODS 4 y 10',['ODS 7 y 13','ODS 8 y 12','ODS 9 y 13'],'Facilitar recursos educativos se relaciona con el ODS 4 y reducir desigualdades de acceso con el ODS 10.');

function O(s,t,opts,exp){bank.push({s,d:'op',t,opts,exp})}
/* --- FÁCIL --- */
Q('ipo','facil','¿Qué número se avisa en una emergencia?','112',['091','016','010'],'El 112 es el teléfono de emergencias; en Cataluña también el 061 para salud.');
Q('ipo','facil','¿Qué significa la «P» de PAS?','Proteger',['Pulsar','Prevenir','Preguntar'],'PAS: Proteger, Avisar, Socorrer.');
Q('ipo','facil','¿Qué extintor se usa para equipos eléctricos?','De CO₂',['De agua','De espuma','De arena'],'En el aula y el CPD se usa CO₂, no agua.');
Q('ipo','facil','¿Qué ley regula la prevención de riesgos laborales?','Ley 31/1995',['Ley 10/2021','RDL 8/2015','LO 3/2018'],'La Ley 31/1995 es la LPRL.');
Q('ipo','facil','¿Qué es un accidente blanco?','Un accidente con solo daños materiales',['Un accidente con muertos','Un suceso sin daños ni lesiones','Un accidente solo con lesiones leves'],'Incidente: sin daños; blanco: daños materiales; leve y grave: lesiones.');
Q('ipo','facil','¿Cuántas compresiones por minuto se hacen en una RCP de adulto?','100–120',['40–60','60–80','150–180'],'Parámetros ERC 2021: 100–120 compresiones por minuto.');
Q('ipo','facil','¿Qué se debe hacer con una quemadura por fuego o líquido caliente?','Refrescar con agua corriente fresca 20 minutos',['Aplicar alcohol','Arrancar la ropa adherida','Poner mercromina'],'Agua fresca durante 20 minutos y sin arrancar la ropa pegada.');
Q('ipo','facil','¿Cuál NO es una vía de evacuación?','El ascensor',['La escalera','La salida de emergencia','El pasillo señalizado'],'Ascensores y ventanas no son vías de evacuación.');
Q('ipo','facil','¿Cuáles son los tres elementos del triángulo del fuego?','Calor, combustible y oxígeno',['Humo, calor y agua','Gas, chispa y agua','Oxígeno, agua y combustible'],'El tetraedro añade la reacción en cadena.');
Q('ipo','facil','¿Quién debe velar por su seguridad usando bien equipos y protecciones?','El trabajador',['Solo el fabricante','Solo el delegado de prevención','Nadie, es voluntario'],'El trabajador debe cuidar de su seguridad, seguir instrucciones e informar de peligros.');
Q('ipo','facil','¿Qué clase de fuego corresponde a los gases?','C',['A','B','D'],'A sólidos, B líquidos inflamables, C gases, D metales.');
Q('ipo','facil','¿A partir de qué peso puede haber riesgo al manipular una carga?','3 kg',['1 kg','10 kg','25 kg'],'A partir de 3 kg ya puede haber riesgo (RD 487/1997).');
Q('ipo','facil','¿Cómo se debe levantar una carga?','Espalda recta, rodillas flexionadas y carga pegada al cuerpo',['Con la espalda curvada','Con las piernas rectas','Con la carga lejos del cuerpo'],'Así se evita lumbalgia, ciática y hernia discal.');
Q('ipo','facil','En una electrocución, ¿qué se hace primero?','Cortar la corriente',['Tocar al herido','Echar agua','Moverlo de inmediato'],'Así el socorrista no resulta afectado.');
Q('ipo','facil','¿Qué se debe hacer ante un accidentado si no hay seguridad total?','No moverlo',['Moverlo siempre','Evacuarlo en coche particular','Darle medicación'],'No se mueve a nadie sin seguridad total.');

/* --- MEDIO --- */
Q('ipo','medio','¿Cuál es la definición de condiciones de trabajo?','Todo aspecto del trabajo que puede ocasionar un daño a la salud',['El horario y el salario','El contrato firmado','Solo los equipos de protección'],'Las condiciones de trabajo incluyen cualquier aspecto con capacidad de dañar la salud.');
Q('ipo','medio','Un trabajador sufre un accidente yendo al trabajo por el camino habitual. ¿Qué es?','Un accidente in itinere',['Una enfermedad profesional','Un accidente blanco','No es accidente laboral'],'In itinere: ir o volver del trabajo por camino y tiempo normales, sin imprudencia temeraria.');
Q('ipo','medio','¿Cuál de estas causas NO es accidente de trabajo?','La imprudencia temeraria',['Una caída de escalera instalando Wi-Fi','Un accidente in itinere','Un accidente en el puesto'],'Imprudencia temeraria, fuerza mayor ajena y dolo quedan excluidos.');
Q('ipo','medio','Diferencia clave entre accidente y enfermedad profesional:','El accidente es súbito; la enfermedad se desarrolla lentamente',['El accidente es lento; la enfermedad, súbita','No hay diferencias','La enfermedad no necesita estar catalogada'],'La enfermedad profesional debe estar en el cuadro oficial (RD 1299/2006).');
Q('ipo','medio','¿Qué técnica de seguridad es POSTERIOR al accidente?','La investigación',['La inspección de seguridad','El análisis del trabajo','El análisis estadístico'],'Notificación y registro, investigación y análisis de costes son posteriores.');
Q('ipo','medio','¿Qué especialidad de la prevención se ocupa de fatiga y posturas?','La ergonomía',['La higiene industrial','La medicina del trabajo','La seguridad en el trabajo'],'SMX: pantallas de visualización (RD 488/1997).');
Q('ipo','medio','¿Qué principio establece la LPRL sobre la protección?','La colectiva antes que la individual',['La individual antes que la colectiva','Solo la individual','Ninguna prioridad'],'Entre los principios figura priorizar la protección colectiva.');
Q('ipo','medio','¿Cuál es la 3.ª regla de oro en trabajos sin tensión?','Verificar la ausencia de tensión',['Delimitar la zona','Poner a tierra','Bloquear los aparatos de corte'],'Orden: cortar, bloquear, verificar, poner a tierra, delimitar.');
Q('ipo','medio','¿Qué es un contacto eléctrico indirecto?','El contacto con una masa que ha cogido tensión por accidente',['El contacto con un elemento activo','La carga por rozamiento','Un arco eléctrico sin contacto'],'Directo: elemento activo; estática: carga por rozamiento.');
Q('ipo','medio','¿Cuál es el peso máximo indicativo en general para cargas manuales?','25 kg',['10 kg','15 kg','40 kg'],'15 kg para mujeres, mayores y jóvenes; 40 kg para entrenados en situaciones esporádicas.');
Q('ipo','medio','¿Dónde debe estar el punto de reunión?','Fuera de zonas con tránsito y reflejado en los planos',['En un patio interior','Junto a la salida del ascensor','En cualquier lugar acordado de palabra'],'Los patios interiores no se consideran puntos de reunión.');
Q('ipo','medio','Un ordenador arde en el aula y se apaga con un extintor de CO₂. ¿Qué emergencia es?','Un conato',['Una emergencia parcial','Una emergencia total','Un incidente sin riesgo'],'El conato se neutraliza con los medios del lugar.');
Q('ipo','medio','¿Cómo debe ser la vigilancia de la salud?','Voluntaria, confidencial y proporcional',['Siempre obligatoria','Pública','Sin respetar la intimidad'],'Es obligatoria solo si el estado del trabajador puede suponer peligro para él o terceros.');
Q('ipo','medio','Ante un incendio con humo, ¿cómo salir?','Agachado o arrastrándose, con nariz y boca cubiertas con un paño húmedo',['De pie y corriendo','Usando el ascensor','Por la ventana'],'El humo se acumula arriba; ventanas y ascensores no sirven para evacuar.');
Q('ipo','medio','¿Qué relación compresiones:insuflaciones se usa en RCP?','30 : 2',['15 : 2','5 : 1','100 : 1'],'Con dos socorristas, uno comprime y el otro insufla.');
Q('ipo','medio','Una herida leve debe limpiarse con…','Agua y jabón, y un antiséptico suave como la clorhexidina',['Alcohol','Agua oxigenada','Mercromina'],'Se evita agua oxigenada, alcohol y mercromina.');
Q('ipo','medio','Un objeto te salpica en el ojo. ¿Qué haces?','Lavar con mucha agua sin frotar',['Frotar fuerte','Extraer la partícula con los dedos','Cubrir y esperar sin lavar'],'No se frota el ojo; si es punzante, caliente o sangra, hospital sin manipular.');
Q('ipo','medio','¿Cuál es la técnica de la obstrucción total de vías en una persona consciente?','5 golpes en la espalda y 5 compresiones abdominales (Heimlich)',['Darle agua','Tumbarla y esperar','Meter los dedos en la garganta'],'Si queda inconsciente: iniciar RCP.');

/* --- DIFÍCIL --- */
Q('ipo','dificil','Una extinción de CPD averiada con conductores quemados y riesgo de dañar a corto plazo es un caso de…','Riesgo grave e inminente',['Accidente blanco','Fatiga laboral','Enfermedad profesional'],'Puede interrumpir la actividad y abandonar el puesto.');
Q('ipo','dificil','¿Por qué la hipoacusia por ruido continuado en un CPD es enfermedad profesional y no accidente?','Se desarrolla lentamente por condiciones ambientales',['Es súbita','No requiere exposición','No está en ningún cuadro'],'La enfermedad profesional se desarrolla lentamente y debe estar en una norma (RD 1299/2006).');
Q('ipo','dificil','Una enfermedad laboral NO catalogada se trata como…','Accidente de trabajo',['Enfermedad común','Accidente blanco','Incidente'],'Así lo establece el temario.');
Q('ipo','dificil','En teletrabajo, ¿qué puede aplicarse a los accidentes?','La presunción de accidente en tiempo y lugar de trabajo',['Nada: nunca son accidente','Solo la norma de in itinere','Solo si hay testigos'],'También se puede aplicar la presunción en teletrabajo.');
Q('ipo','dificil','Un SAI y una PDU sobrecargados en un rack provocan un incendio. ¿Qué foco de ignición es?','Eléctrico',['Mecánico','Químico','Térmico'],'Cortocircuitos, arcos y sobrecargas son focos eléctricos.');
Q('ipo','dificil','¿Qué normativa regula los lugares de trabajo y cuál las señales?','RD 486/1997 y RD 485/1997',['RD 487/1997 y RD 488/1997','RD 773/1997 y RD 614/2001','RD 842/2002 y RD 513/2017'],'486: lugares de trabajo; 485: señalización; 487: cargas; 488: pantallas.');
Q('ipo','dificil','¿Qué norma sustituye al RD 1942/1993 en instalaciones de protección contra incendios?','RD 513/2017 (RIPCI)',['RD 1215/1997','RD 614/2001','RD 1644/2008'],'El RIPCI sustituye al RD 1942/1993.');
Q('ipo','dificil','Un incendio en el CPD propaga humo por el centro y obliga a evacuar. ¿Qué emergencia es?','Total',['Conato','Parcial','Un incidente'],'Total: todos los equipos, ayuda externa y evacuación general.');
Q('ipo','dificil','En una emergencia en un CPD, ¿qué prioridad se aplica?','La persona va primero; no se vuelve a salvar equipos ni datos',['Salvar primero los servidores','Apagar todos los racks antes de salir','Volver a por las copias de seguridad'],'ASIX protege los datos con copias y plan de recuperación, no arriesgando personas.');
Q('ipo','dificil','¿Cuánto tiempo aguantan las neuronas sin oxígeno antes de lesionarse?','Unos 4 minutos',['Unos 30 segundos','Unos 15 minutos','Una hora'],'Los 4 minutos siguientes llega la muerte cerebral total; los 8 son la muerte clínica.');
Q('ipo','dificil','Si una persona no responde y no respira con normalidad, ¿qué haces?','Iniciar la RCP sin retrasarla buscando el pulso',['Buscar el pulso 2 minutos','Esperar a la ambulancia sin hacer nada','Darle agua'],'El pulso lo valora personal entrenado.');
Q('ipo','dificil','Una persona inconsciente que respira normalmente y sin sospecha de traumatismo debe colocarse…','En posición lateral de seguridad',['Boca arriba con la cabeza hacia delante','Sentada','De pie apoyada'],'Se aplica tras cortar la corriente y valorar consciencia y respiración.');
Q('ipo','dificil','¿Qué decreto regula el uso de DEA fuera del ámbito sanitario en Cataluña?','Decreto 151/2012',['RD 1299/2006','Ley 10/2021','RD 614/2001'],'El DEA debe combinarse con la RCP hasta que llegue la ambulancia.');
Q('ipo','dificil','¿Cuándo se usa un torniquete?','En hemorragia de extremidad potencialmente mortal, con formación o indicaciones del 112',['En toda herida leve','Siempre antes de la presión directa','Solo en hemorragias internas'],'La primera medida es la presión directa firme y continua.');
Q('ipo','dificil','Quemadura química por corrosivo: ¿qué se hace?','Retirar la ropa contaminada con seguridad, lavar abundantemente sin frotar y cubrir con gasa estéril',['Frotar con alcohol','Aplicar pomada','Cubrir con ropa y esperar'],'Cremada extensa, profunda, eléctrica o química: valoración sanitaria urgente.');
Q('ipo','dificil','¿Cuál es el máximo indicativo para trabajadores entrenados en situaciones esporádicas?','40 kg',['15 kg','25 kg','60 kg'],'Los medios mecánicos van primero.');


Q('ing','facil','She ___ a network administrator.','is',['am','are','have'],'Descripción de una persona: he/she/it + is.');
Q('ing','facil','We ___ new students.','are',['is','am','has'],'We + are.');
Q('ing','facil','Laptops and tablets → ___ are old.','they',['he','it','she'],'They sirve para personas y cosas en plural.');
Q('ing','facil','I ___ got a new laptop.','have',['am','has','is'],'Posesión: I have got (I\'ve got).');
Q('ing','facil','He ___ got a printer.','has',['have','is','does'],'He/she/it + has got.');
Q('ing','facil','Third person of «learn»:','learns',['learn','learning','learnes'],'He/she/it + s.');
Q('ing','facil','Which adverb of frequency means the MOST often?','always',['rarely','never','sometimes'],'always → usually → often → sometimes → rarely → never.');
Q('ing','facil','Comparative of «happy»:','happier',['more happy','happyer','happiest'],'-y → -ier.');
Q('ing','facil','How ___ money do you need?','much',['many','few','a'],'Money es incontable → much.');
Q('ing','facil','«Find out» means…','to learn information',['to solve a puzzle','to become active','to be similar'],'find out = conseguir información.');
Q('ing','facil','Negative of «He has got a phone»:','He hasn\'t got a phone.',['He isn\'t got a phone.','He doesn\'t got a phone.','He haven\'t got a phone.'],'has got → hasn\'t got.');
Q('ing','medio','Sonia ___ British. (description)','is',['has got','does','are'],'Descripción → to be.');
Q('ing','medio','Sonia ___ a British passport. (possession)','has got',['is','does','are'],'Posesión → have got.');
Q('ing','medio','Third person of «watch»:','watches',['watchs','watchies','watch'],'Verbos en -ch → +es.');
Q('ing','medio','Third person of «try»:','tries',['trys','tryes','tryies'],'Consonante + y → ies.');
Q('ing','medio','Which sentence is correct?','She never uses that app.',['She uses never that app.','Never she uses that app.','She uses that app never.'],'El adverbio de frecuencia va entre sujeto y verbo.');
Q('ing','medio','Does she work here? Short answer (yes):','Yes, she does.',['Yes, she is.','Yes, she works.','Yes, she has.'],'Do/does → short answer con do/does.');
Q('ing','medio','Has he got a printer? Short answer (no):','No, he hasn\'t.',['No, he isn\'t.','No, he doesn\'t.','No, he don\'t.'],'Have got → haven\'t / hasn\'t.');
Q('ing','medio','There are ___ opportunities in this company.','many',['much','little','a'],'Opportunities es contable plural → many.');
Q('ing','medio','The new app is ___ than the old one. (bad)','worse',['worst','badder','more bad'],'bad → worse → worst.');
Q('ing','medio','Can you help me ___ how this program works?','figure out',['find out','come to life','two peas'],'figure out = entender cómo funciona.');
Q('ing','medio','I want to ___ when the exam is.','find out',['figure out','come alive','figure up'],'find out = averiguar un dato.');
Q('ing','dificil','Which sentence is correct?','My laptop is faster than yours.',['My laptop is more fast than yours.','My laptop is fastest than yours.','My laptop is fast than yours.'],'fast → faster + than.');
Q('ing','dificil','Which is the correct negative?','He doesn\'t learn.',['He doesn\'t learns.','He don\'t learn.','He not learns.'],'doesn\'t + verbo base, sin -s.');
Q('ing','dificil','In which sentence does \'s mean «has»?','He\'s got a new phone.',['She\'s a technician.','It\'s very old.','He\'s from Rubí.'],'\'s + got = has.');
Q('ing','dificil','The app ran ___ without any hitches.','smoothly',['smooth','smoothest','more smooth'],'Adverbio para describir el verbo ran.');
Q('ing','dificil','«Two peas in a pod» means they are…','very similar and work well together',['very different','very old','very expensive'],'Expresión: dos cosas muy parecidas.');
Q('ing','dificil','Server C has 32 GB, B 16 GB, A 8 GB. Server A has the ___ memory.','least',['most','more','less'],'The least = el que menos tiene de todos.');
Q('ing','dificil','Which is NOT an example of machine learning in the text?','cooking dinner',['predicting the weather','suggesting movies','predicting diseases'],'Cocinar no aparece.');
Q('ing','dificil','«We try to understand what customers really want.» Which stage?','Analyse the information',['Make a plan','Do the work','Identify the customers'],'Es como resolver un puzle.');

/* Preguntas de opinión: sin respuesta correcta, no puntúan */
O('ing','Which job sounds more interesting to you?',['Software developer','Game designer','Both','Neither'],'Idea: «I think… because…». Practica con «In my opinion…».');
O('ing','Are software development and game design «two peas in a pod»?',['Yes, very similar','Similar in some things','No, they are different'],'Ideas: both need teamwork and testing; game design is also art and story.');
O('ing','Which skill is the most important in software development or game design?',['Creativity','Teamwork','Programming','Problem solving'],'Usa superlativo: «The most important skill is… because…».');
O('ing','Two websites sell the same thing. One is confusing and one is tidy. Which do you choose?',['The tidy one','The confusing one','It depends'],'Idea: «I would choose… because it is easier to use».');
O('ing','If you had to figure out a new app or game to develop, what would it be?',['A mobile game','A study app','A web tool','Something else'],'Usa «figure out» en tu respuesta escrita.');
O('ing','How often do you check your email?',['Always','Usually','Sometimes','Never'],'Present simple + adverbio: «I usually check my email…».');

/* --- IPO: preguntas añadidas hasta 30 por dificultad --- */
Q('ipo','facil','¿Qué es un riesgo laboral?','La posibilidad de que una persona sufra un daño derivado del trabajo',['Un daño que ya ha ocurrido','Un contrato de trabajo','Una norma de seguridad'],'El riesgo es una posibilidad y exige proximidad de la persona al peligro.');
Q('ipo','facil','Un suceso sin lesiones ni daños materiales se llama…','Incidente',['Accidente blanco','Accidente leve','Accidente grave'],'Incidente: sin lesiones ni daños; blanco: solo daños materiales.');
Q('ipo','facil','Un accidente que solo requiere primeros auxilios es…','Leve',['Grave','Blanco','Un incidente'],'Accidente leve: lesiones que solo requieren primeros auxilios.');
Q('ipo','facil','Un fuego de papel o madera es de clase…','A',['B','C','D'],'Clase A: sólidos como papel y madera.');
Q('ipo','facil','¿Qué extintor se usa para uso general?','De polvo ABC',['De CO₂ siempre','De agua en equipos eléctricos','De arena'],'Polvo ABC para uso general; CO₂ para equipos eléctricos.');
Q('ipo','facil','¿Qué es lo primero ante un incendio?','Avisar a las personas y activar la alarma',['Recoger los equipos','Usar el ascensor','Abrir las ventanas'],'Primero se avisa; después se valora la intensidad y el peligro.');
Q('ipo','facil','¿Quién debe fabricar equipos seguros, bien etiquetados y con instrucciones de uso?','El fabricante',['El trabajador','El delegado de prevención','El cliente'],'Es una obligación del fabricante.');
Q('ipo','facil','¿Qué especialidad estudia las enfermedades derivadas de la actividad?','Medicina del trabajo',['Ergonomía','Seguridad en el trabajo','Psicosociología aplicada'],'La higiene industrial estudia los agentes que provocan enfermedades.');
Q('ipo','facil','La psicosociología aplicada se ocupa de…','Problemas mentales y organización',['Posturas y fatiga','Agentes que provocan enfermedades','Aspectos físicos de los accidentes'],'Ergonomía: fatiga y posturas; seguridad: aspectos físicos.');
Q('ipo','facil','¿Cuál es la primera regla de oro en trabajos sin tensión?','Cortar todas las fuentes de tensión',['Delimitar la zona','Poner a tierra','Verificar la ausencia de tensión'],'Orden: cortar, bloquear, verificar, poner a tierra, delimitar.');
Q('ipo','facil','En Cataluña, además del 112, ¿qué número se usa para salud?','061',['091','080','016'],'En Cataluña también se avisa al 061 para salud.');
Q('ipo','facil','Para abrir la vía aérea de un herido, su barbilla se coloca…','Elevada',['Hacia el pecho','Girada a un lado','Apoyada en el suelo'],'Herido boca arriba con la barbilla elevada.');
Q('ipo','facil','¿Qué hace un DEA?','Analiza el ritmo del corazón e indica si hace falta una descarga',['Mide la temperatura','Mueve al herido','Da medicación'],'El DEA se combina con la RCP hasta que llega la ambulancia.');
Q('ipo','facil','En una fractura abierta hay que limpiar, cubrir con apósito estéril y…','Inmovilizar',['Mover al accidentado','Reducir el hueso','Aplicar alcohol'],'No se mueve al accidentado: se inmoviliza el miembro.');
Q('ipo','facil','¿Qué ocurre con las ventanas como vía de evacuación?','No son vías de evacuación',['Son la vía principal','Solo valen en el CPD','Solo valen si hay humo'],'Ventanas y ascensores no son vías de evacuación.');

Q('ipo','medio','¿Cuál NO es un factor de la enfermedad profesional?','La marca del equipo usado',['El tiempo de exposición','La concentración del contaminante','La presencia simultánea de varios contaminantes'],'Los factores son tiempo y características personales, concentración y varios contaminantes.');
Q('ipo','medio','¿Cuál es un coste de los accidentes y enfermedades?','Recargos de primas',['Más productividad','Menos formación','Ahorro en sanciones'],'Jornales perdidos, recargos de primas y sanciones son costes.');
Q('ipo','medio','¿Qué normas regulan el teletrabajo y la desconexión digital?','Ley 10/2021 y LO 3/2018',['RDL 2/2015 y RDL 8/2015','RD 486/1997 y RD 485/1997','Ley 31/1995 y LISOS'],'Marco legal vigente del temario.');
Q('ipo','medio','¿Qué real decreto regula los equipos de protección individual (EPI)?','RD 773/1997',['RD 487/1997','RD 485/1997','RD 614/2001'],'RD 1215/1997 regula equipos de trabajo y RD 773/1997 los EPI.');
Q('ipo','medio','¿Qué riesgos tiene la soldadura de estaño?','Humos metálicos, radiaciones UV e IR, proyecciones y contactos eléctricos',['Solo ruido','Solo frío','Ninguno si es pequeña'],'También hay riesgo de incendio.');
Q('ipo','medio','¿Se puede reparar con cinta aislante el cable de una herramienta?','No: hay que sustituir cables y clavijas dañados',['Sí, siempre','Sí, si es poco tiempo','Sí, si no se usa con agua'],'No hacer reparaciones con cinta aislante.');
Q('ipo','medio','En oficinas, la temperatura de referencia es…','17–27 °C',['5–10 °C','30–35 °C','10–15 °C'],'Agente físico del ambiente de trabajo.');
Q('ipo','medio','El ruido se considera nocivo a partir de…','80 dB',['40 dB','55 dB','120 dB'],'Dato del apartado de agentes físicos.');
Q('ipo','medio','Una emergencia que necesita el equipo de intervención de la empresa es…','Parcial',['Conato','Total','Un incidente'],'Conato: medios del lugar; total: todos los equipos y ayuda externa.');
Q('ipo','medio','¿Cuál es el primer paso para elaborar un plan de emergencia?','Identificar los riesgos',['Hacer el simulacro','Formar a todos','Revisar el plan'],'Identificación → documento → normas de actuación → implantación.');
Q('ipo','medio','En una hemorragia externa, ¿qué se hace primero?','Presión directa firme y continua con gasas',['Colocar un torniquete siempre','Lavar con alcohol','Levantar al herido'],'Si es grave, avisar al 112.');
Q('ipo','medio','¿Cada cuánto se hace el simulacro de autoprotección?','Una vez al año',['Cada semana','Cada diez años','Nunca, es opcional'],'Simulacro anual de autoprotección.');

Q('ipo','dificil','Se cae un monitor al suelo y se rompe, sin heridos. ¿Qué es?','Un accidente blanco',['Un incidente','Un accidente leve','Un accidente grave'],'Solo hay daños materiales.');
Q('ipo','dificil','Un trabajador va en bici al trabajo y se cae por una imprudencia temeraria. ¿Es accidente in itinere?','No: la imprudencia temeraria lo excluye',['Sí, siempre','Sí, si va por el camino habitual','Solo si hay testigos'],'In itinere exige camino y tiempo normales y ausencia de imprudencia temeraria.');
Q('ipo','dificil','¿Qué extintor es adecuado para un rack en llamas?','De CO₂',['De agua','De espuma','De agua pulverizada'],'En el CPD se usa CO₂, no agua.');
Q('ipo','dificil','Al usar un extintor, hay que apuntar a…','La base del fuego, con el viento a la espalda',['Las llamas altas con el viento de cara','El humo','El techo'],'Antes se comprueba el manómetro y se quita el pasador.');
Q('ipo','dificil','Un fuego de metales es de clase…','D',['A','B','C'],'A sólidos, B líquidos inflamables, C gases, D metales.');
Q('ipo','dificil','¿Qué añade el tetraedro del fuego al triángulo?','La reacción en cadena',['El agua','El humo','La presión'],'El triángulo: calor, combustible y oxígeno.');
Q('ipo','dificil','¿Quiénes tienen 15 kg como máximo indicativo al manipular cargas?','Mujeres, mayores y jóvenes',['Trabajadores entrenados','Todos en general','Solo los menores de 16'],'25 kg en general; 40 kg entrenados en situaciones esporádicas.');
Q('ipo','dificil','La información de salud en la vigilancia de la salud está protegida también por…','El RGPD y la LOPDGDD',['El RD 487/1997','El RD 1299/2006','La Ley 10/2021'],'Garantía de confidencialidad.');
Q('ipo','dificil','¿Qué artículo de la LPRL regula la vigilancia de la salud?','El art. 22',['El art. 1','El art. 15','El art. 99'],'Art. 22 LPRL.');
Q('ipo','dificil','Tras un golpe, frío, piel húmeda, palidez y pulso débil indican posible…','Hemorragia interna',['Quemadura','Obstrucción de vías','Fractura abierta'],'Hay que activar el 112 y trasladar con urgencia.');
Q('ipo','dificil','La electrólisis de la sangre por la corriente es un efecto…','Físico y químico',['Biológico','Indirecto','Psicosocial'],'Biológicos: tetanización, asfixia, parada respiratoria, fibrilación ventricular.');
Q('ipo','dificil','El arco eléctrico puede alcanzar hasta…','20.000 °C',['200 °C','2.000 °C','2 millones de °C'],'Provoca quemaduras y deslumbramiento.');
Q('ipo','dificil','¿Qué consigue un simulacro?','Automatizar la conducta, reducir el pánico y optimizar el tiempo de evacuación',['Sustituir al plan de emergencia','Eliminar los riesgos','Evitar la formación'],'Sirve para comprobar que el diseño es viable.');
Q('ipo','dificil','Un compañero consciente se atraganta y no puede toser ni hablar. ¿Qué haces?','Cinco golpes en la espalda y cinco compresiones abdominales',['Esperar a que se le pase','Darle agua','Tumbarlo y hacer RCP'],'Obstrucción total en persona consciente; si queda inconsciente, RCP.');

/* --- Inglés: preguntas añadidas hasta 30 por dificultad --- */
Q('ing','facil','I ___ a student.','am',['is','are','have'],'I + am.');
Q('ing','facil','They ___ from Rubí.','are',['is','am','has'],'They + are.');
Q('ing','facil','This laptop ___ very old.','is',['are','am','have'],'Cosa en singular → is.');
Q('ing','facil','Negative of «She is Spanish»:','She isn\'t Spanish.',['She doesn\'t Spanish.','She not is Spanish.','She hasn\'t Spanish.'],'To be: isn\'t.');
Q('ing','facil','___ you a helpdesk technician?','Are',['Is','Do','Have'],'Pregunta con to be: Are you…?');
Q('ing','facil','Is he a student? Short answer (yes):','Yes, he is.',['Yes, he does.','Yes, he has.','Yes, he are.'],'La respuesta corta repite el verbo de la pregunta.');
Q('ing','facil','She ___ got a smartphone. (negative)','hasn\'t',['haven\'t','isn\'t','doesn\'t'],'has got → hasn\'t got.');
Q('ing','facil','We ___ got new computers.','have',['has','are','do'],'We + have got.');
Q('ing','facil','Have you got the new timetable? Short answer (yes):','Yes, I have.',['Yes, I am.','Yes, I do.','Yes, I got.'],'Have got → Yes, I have.');
Q('ing','facil','I ___ my email every morning.','check',['checks','am check','has check'],'Present simple: I + verbo base.');
Q('ing','facil','They ___ English on Fridays.','learn',['learns','learning','are learn'],'They + verbo base.');
Q('ing','facil','___ you learn English?','Do',['Does','Are','Have'],'Pregunta present simple con you → Do.');
Q('ing','facil','___ he learn English?','Does',['Do','Is','Has'],'He/she/it → Does.');
Q('ing','facil','I ___ learn French. (negative)','don\'t',['doesn\'t','isn\'t','haven\'t'],'I + don\'t + verbo base.');
Q('ing','facil','Superlative of «big»:','biggest',['bigest','most big','biger'],'Consonante + vocal + consonante: se dobla la última letra.');
Q('ing','facil','Comparative of «good»:','better',['gooder','more good','best'],'Irregular: good → better → best.');
Q('ing','facil','I have ___ idea for the project.','an',['a','the','some'],'Idea empieza con sonido vocal → an.');
Q('ing','facil','How ___ students are there in your class?','many',['much','little','a'],'Students es contable → many.');
Q('ing','facil','«Layout» means…','how the parts of something are arranged',['a type of error','a very fast program','a kind of server'],'Layout = cómo están organizadas las partes.');

Q('ing','medio','Which sentence is correct?','We usually meet once a week.',['We meet usually once a week.','We usually meets once a week.','We are usually meet once a week.'],'El adverbio va entre el sujeto y el verbo.');
Q('ing','medio','Anna and John → ___ are friends.','they',['he','we','it'],'They sirve para personas y cosas en plural.');
Q('ing','medio','The classroom ___ got new computers.','has',['have','is','does'],'Singular (it) → has got.');
Q('ing','medio','Third person of «go»:','goes',['gos','goies','going'],'Verbos acabados en -o → +es.');
Q('ing','medio','He ___ his workday at 9.00.','starts',['start','is start','have start'],'He/she/it + verbo + s.');
Q('ing','medio','___ she use that app?','Does',['Do','Is','Has'],'She → Does.');
Q('ing','medio','Do you learn English? Short answer (no):','No, I don\'t.',['No, I doesn\'t.','No, I\'m not.','No, I haven\'t.'],'La respuesta corta usa do/don\'t.');
Q('ing','medio','Comparative of «beautiful»:','more beautiful',['beautifuler','most beautiful','beautifulier'],'Adjetivo largo: more + adjetivo.');
Q('ing','medio','She is the ___ developer in the team. (productive)','most productive',['more productive','productivest','most more productive'],'Superlativo de adjetivo largo: the most.');
Q('ing','medio','Comparative of «large»:','larger',['more large','largeer','largest'],'Acaba en -e: + r.');
Q('ing','medio','This is the ___ game I have ever played. (good)','best',['better','goodest','most good'],'Superlativo irregular: the best.');
Q('ing','medio','My house is ___ from the school than yours. (far)','farther',['farer','more far','farthest'],'far → farther/further.');
Q('ing','medio','She has ___ friends in this city, so she feels lonely.','few',['little','much','a little'],'Friends es contable; few = not many.');
Q('ing','medio','There is very ___ milk left.','little',['few','many','a'],'Milk es incontable → little.');
Q('ing','medio','I need ___ water, please.','some',['many','a','few'],'Water es incontable → some.');
Q('ing','medio','Sorry, I forgot ___ phone at home.','my',['me','mine','I'],'Determinante posesivo → my.');
Q('ing','medio','Testers look for ___ in the code.','bugs',['layouts','engines','hitches'],'Bug = error que hace fallar el programa.');
Q('ing','medio','Unity and Unreal Engine are…','game engines',['programming languages','testing tools','design documents'],'Gestionan la física, el movimiento y los gráficos.');
Q('ing','medio','QA stands for…','Quality Assurance',['Quick Answer','Quality Analysis','Question and Answer'],'QA: pruebas finales para corregir bugs.');

Q('ing','dificil','Which sentence is correct?','She goes to class on Mondays.',['She go to class on Mondays.','She gos to class on Mondays.','She is go to class on Mondays.'],'He/she/it + goes.');
Q('ing','dificil','Which sentence is correct?','I always start my workday at 9.00.',['I start always my workday at 9.00.','Always I starts my workday at 9.00.','I am always start my workday at 9.00.'],'Adverbio entre sujeto y verbo.');
Q('ing','dificil','Which sentence is about possession?','The classroom has got new computers.',['Sonia is British.','They are from Rubí.','This laptop is very old.'],'Posesión → have got; descripción o información → to be.');
Q('ing','dificil','The developer tried to ___ why the app crashed.','figure out',['find out','come to life','two peas'],'Figure out = resolver un problema.');
Q('ing','dificil','It took hours to ___ how to fix the bug.','figure out',['find out','come to life','be bumpy'],'Decidir cómo resolver un problema.');
Q('ing','dificil','We should ___ what our customers want, so we ask them.','find out',['figure out','come to life','be smoothly'],'Find out = obtener información preguntando.');
Q('ing','dificil','Which project stage: «we make a list of what we need to do and keep checking it»?','Make a plan',['Do the work','Evaluate the results','Identify the customers'],'Etapa 3 de las cinco.');
Q('ing','dificil','Which project stage: «we check if customers liked what we made»?','Evaluate the results',['Make a plan','Analyse the information','Do the work'],'Etapa 5.');
Q('ing','dificil','Which project stage: «we ask customers questions and look at what they buy»?','Identify the customers',['Analyse the information','Make a plan','Evaluate the results'],'Etapa 1.');
Q('ing','dificil','In machine learning, the program gets better…','the more it practises with data',['the less data it receives','when it stops making predictions','without learning patterns'],'Cuanta más práctica, mejor.');
Q('ing','dificil','Are the predictions of a computer always perfect?','No, sometimes the computer gets it wrong',['Yes, always','Only with cat pictures','Only with weather data'],'Los modelos pueden equivocarse.');
Q('ing','dificil','The Game Design Document describes…','characters, levels, mechanics and graphics',['only the budget','only the code','only the sound'],'Es un plan detallado de cada parte del juego.');
Q('ing','dificil','Which is the 3rd of the five tips for game designers?','Test the game a lot',['Plan the game well','Work closely with the programmers','Learn from the players\' feedback'],'Orden: plan, programmers, test, feedback, keep learning.');
Q('ing','dificil','UI design is mainly about making things…','easy to use',['look expensive','run faster','cheaper to build'],'No es solo que se vea bonito.');
Q('ing','dificil','Which noun is uncountable?','information',['opportunity','computer','idea'],'Incontables: information, advice, time, software, money.');
Q('ing','dificil','Which noun is countable?','opportunity',['advice','software','money'],'Opportunity admite plural: opportunities.');
Q('ing','dificil','Mobile phones are ___ than before. (cheap)','cheaper',['more cheaper','cheapest','more cheap'],'Nunca «more cheaper».');
Q('ing','dificil','The test was ___ than I thought. (easy)','easier',['more easy','easyer','easiest'],'-y → -ier.');
Q('ing','dificil','Server B has 16 GB and Server A has 8 GB. Server B has ___ memory than Server A.','more',['most','the most','less'],'Comparativo de cantidad: more … than.');
Q('ing','dificil','Which sentence is correct?','He hasn\'t got a printer.',['He doesn\'t got a printer.','He isn\'t got a printer.','He haven\'t got a printer.'],'Have got → hasn\'t got.');
Q('ing','dificil','The game character finally ___ when we ran the program.','came to life',['figured out','found out','was bumpy'],'Come to life = cobrar vida / empezar a funcionar.');
Q('ing','dificil','Which sentence is correct?','Does she work here?',['Do she work here?','Does she works here?','Is she work here?'],'Does + sujeto + verbo base.');
/* --- FÁCIL --- */
Q('mon','facil','¿Cuál de estos dispositivos es un periférico de salida?','Impresora',['Escáner','Micrófono','Teclado'],'La impresora entrega resultados; los demás sirven para introducir datos.');
Q('mon','facil','¿En qué unidad se expresa la frecuencia de una CPU?','GHz',['GB','Mbps','dpi'],'La frecuencia son ciclos por segundo y se mide en hercios (MHz, GHz).');
Q('mon','facil','¿Cuál es un ejemplo de software de aplicación?','Un navegador web',['Un controlador de la tarjeta gráfica','El sistema operativo','El firmware UEFI'],'El navegador es una aplicación; controladores y sistema operativo son software de sistema.');
Q('mon','facil','¿Qué componente se encarga de mover el aire para evacuar el calor?','Ventilador',['Pasta térmica','Pila CMOS','Chipset'],'El ventilador mueve el aire; el disipador absorbe el calor.');
Q('mon','facil','¿Cuál es la unidad mínima de información?','El bit',['El byte','El hercio','El píxel'],'El bit (0 o 1) es la unidad mínima; el byte son 8 bits.');
Q('mon','facil','¿Cuál es la función principal de la placa base?','Conectar los componentes y permitir su comunicación',['Almacenar de forma permanente los archivos','Mostrar las imágenes en pantalla','Enfriar el procesador'],'La placa base conecta y permite la comunicación entre los componentes.');
Q('mon','facil','¿Qué elemento ayuda a conservar la configuración del reloj y del firmware con el equipo apagado?','La pila CMOS',['El disipador','La ranura PCIe','El conector SATA'],'La pila CMOS mantiene la configuración básica del firmware y el reloj.');
Q('mon','facil','¿Cómo se conecta un equipo a una red mediante Wi-Fi?','De forma inalámbrica',['Con un cable RJ45 obligatoriamente','Mediante un conector SATA','A través de una ranura DIMM'],'Wi-Fi es la conexión inalámbrica a una red; Ethernet es la conexión por cable.');
Q('mon','facil','¿Para qué se utiliza habitualmente un jack de 3,5 mm?','Audio',['Red Ethernet','Alimentación de la CPU','Vídeo digital'],'El jack de 3,5 mm es el conector de audio habitual.');
Q('mon','facil','¿Qué se instala en las ranuras DIMM de una placa de sobremesa?','Módulos de memoria RAM',['Tarjetas gráficas','Discos duros','Ventiladores'],'Las ranuras DIMM alojan la memoria RAM.');
Q('mon','facil','¿Qué función tiene el chasis o caja del ordenador?','Proteger y organizar los componentes',['Generar la energía eléctrica','Ejecutar las instrucciones de los programas','Guardar la configuración del firmware'],'La caja protege y organiza los componentes, además de influir en el flujo de aire.');
Q('mon','facil','¿Qué conector se asocia a teclados o ratones antiguos?','PS/2',['HDMI','M.2','EPS'],'PS/2 se usaba para teclados y ratones antiguos.');
Q('mon','facil','¿Qué gestiona una tarjeta de sonido?','La entrada y la salida de audio',['La conexión a Internet','La temperatura de la CPU','El arranque del sistema'],'La tarjeta de sonido gestiona audio; puede estar integrada o ser dedicada.');
Q('mon','facil','¿Qué hace el disipador de una CPU?','Absorbe y reparte el calor',['Aumenta la memoria caché','Suministra energía al procesador','Conecta el procesador con el SSD'],'El disipador absorbe el calor de la CPU y lo reparte para que se evacue.');
Q('mon','facil','¿Qué arquitectura de CPU permite gestionar mucha más RAM que unos 4 GB?','64 bits',['8 bits','16 bits','32 bits'],'32 bits limita normalmente la RAM direccionable a unos 4 GB; 64 bits permite mucha más.');
Q('mon','facil','¿En qué unidad se mide la frecuencia de refresco de un monitor?','Hz',['GB','W','dB'],'La frecuencia de refresco indica cuántas veces por segundo se actualiza la imagen (Hz).');
Q('mon','facil','¿Para qué sirve principalmente DisplayPort?','Transmitir vídeo (y audio)',['Conectar redes Ethernet','Alimentar la placa base','Conectar discos SATA'],'HDMI y DisplayPort son conexiones de vídeo y audio.');
Q('mon','facil','¿En qué unidad se mide la capacidad de una memoria RAM?','GB',['GHz','dpi','W'],'La capacidad de la RAM se mide en GB; su velocidad se expresa aparte.');
Q('mon','facil','¿Qué es un puerto USB-C?','Un conector externo para datos y periféricos',['Un tipo de memoria RAM','Una ranura de expansión interna','Un formato de placa base'],'USB-A y USB-C son conectores externos para periféricos y datos.');
Q('mon','facil','¿Qué procesa una GPU?','Gráficos',['Las instrucciones de arranque','Los datos de red','Las copias de seguridad'],'La GPU es la unidad que procesa gráficos, integrada o dedicada.');


Q('mon','facil','¿Qué componente ejecuta las instrucciones de los programas?','La CPU',['La RAM','El SSD','La fuente de alimentación'],'La CPU ejecuta las instrucciones.');
Q('mon','facil','¿Cuántos bits forman un byte?','8 bits',['4 bits','16 bits','32 bits'],'Un byte está formado por 8 bits.');
Q('mon','facil','¿Qué tipo de memoria pierde su contenido al apagar el equipo?','La RAM',['El SSD','El HDD','La memoria flash del firmware'],'La RAM es volátil.');
Q('mon','facil','¿Qué significa que un SSD no tiene piezas móviles?','Que utiliza almacenamiento electrónico',['Que funciona con platos giratorios','Que necesita una cinta magnética','Que solo puede conectarse por USB'],'El SSD almacena datos electrónicamente y no tiene piezas móviles.');
Q('mon','facil','¿Qué conector se utiliza habitualmente para Ethernet?','RJ45',['HDMI','DisplayPort','Jack de 3,5 mm'],'RJ45 es el conector habitual de red Ethernet.');
Q('mon','facil','¿Qué componente regula la energía que recibe la CPU?','El VRM',['La GPU','La pila CMOS','El ventilador'],'El VRM regula y suministra energía estable.');
Q('mon','facil','¿Qué significa que una memoria es volátil?','Que pierde los datos al quedarse sin alimentación',['Que conserva los datos para siempre','Que es más rápida que la CPU','Que solo funciona con Internet'],'La RAM es volátil: pierde su contenido al apagar el equipo.');
Q('mon','facil','¿Qué tecnología permite conectar periféricos inalámbricos de corto alcance?','Bluetooth',['SATA','PCIe','HDMI'],'Bluetooth conecta dispositivos inalámbricos de corto alcance.');
Q('mon','facil','¿Qué componente suele tener una tarjeta gráfica dedicada para almacenar datos gráficos?','VRAM',['NVRAM de la placa','Caché L1 de la CPU','Memoria virtual del sistema'],'La gráfica dedicada suele tener su propia VRAM.');
Q('mon','facil','¿Qué comprueba el POST al iniciar el ordenador?','El hardware durante el arranque inicial',['La velocidad de Internet','Los archivos personales','La temperatura del monitor'],'POST es la comprobación inicial del hardware.');

/* --- MEDIO --- */
Q('mon','medio','¿Cuál es el orden correcto del ciclo básico de la CPU?','Buscar → decodificar → ejecutar → guardar',['Ejecutar → buscar → guardar → decodificar','Decodificar → guardar → buscar → ejecutar','Guardar → ejecutar → decodificar → buscar'],'El ciclo es buscar, decodificar, ejecutar y guardar el resultado.');
Q('mon','medio','¿Qué permiten tecnologías como SMT?','Gestionar varios hilos por núcleo',['Duplicar la capacidad de la RAM','Aumentar el número de ranuras PCIe','Reducir el tamaño de la caja'],'SMT permite que cada núcleo gestione varios hilos.');
Q('mon','medio','El TDP de un procesador es…','Una referencia de la potencia térmica que debe disiparse',['El consumo máximo exacto en cualquier situación','La velocidad máxima de la RAM','El número de núcleos'],'El TDP es una referencia térmica y no siempre equivale al consumo máximo.');
Q('mon','medio','¿Qué función tiene el VRM de la placa base?','Regular y suministrar energía estable a CPU y otros componentes',['Almacenar el firmware','Gestionar el audio','Conectar las unidades SATA'],'El VRM regula la energía que reciben la CPU y otros componentes.');
Q('mon','medio','¿Qué determina el formato de placa base (ATX, microATX, Mini-ITX)?','Su tamaño y la compatibilidad con la caja',['La marca del procesador','El tipo de SSD que admite','La velocidad del Wi-Fi'],'El formato determina el tamaño y qué cajas la admiten.');
Q('mon','medio','¿Qué hace la operación Clear CMOS?','Restablece la configuración del firmware',['Borra todos los archivos del usuario','Formatea el SSD','Actualiza el sistema operativo'],'Clear CMOS devuelve el firmware a su configuración por defecto.');
Q('mon','medio','¿Para qué sirven los perfiles XMP o EXPO?','Configurar la RAM a las velocidades anunciadas',['Cifrar el disco','Mejorar la señal Wi-Fi','Activar Secure Boot'],'XMP/EXPO son perfiles para que la RAM funcione a su velocidad anunciada.');
Q('mon','medio','¿Qué almacena un módulo o función TPM 2.0?','Claves para funciones de seguridad y confianza',['Imágenes de la tarjeta gráfica','Archivos temporales de la RAM','Perfiles de ventilador'],'El TPM guarda claves y permite funciones de confianza.');
Q('mon','medio','Una ranura PCIe es larga físicamente. ¿Qué se puede afirmar?','No siempre tiene todas las líneas eléctricas que indica su longitud',['Siempre tiene x16 líneas eléctricas','Solo admite tarjetas de sonido','Es una ranura de RAM'],'La longitud física no siempre indica cuántas líneas eléctricas tiene.');
Q('mon','medio','¿Qué elementos componen una refrigeración líquida AIO?','Bloque, bomba, tubos y radiador',['Radiador, VRAM, socket y pila CMOS','Ventilador, fuente y chipset','Disipador, socket y VRM'],'Una AIO usa bloque, bomba, tubos y radiador.');
Q('mon','medio','¿Qué ventaja ofrece la memoria ECC?','Detecta y corrige ciertos errores de memoria',['Triplica la velocidad de la CPU','Conserva datos sin energía','Permite usar DDR4 y DDR5 a la vez'],'ECC detecta y corrige determinados errores.');
Q('mon','medio','¿Qué es la memoria virtual?','Almacenamiento usado como apoyo cuando falta RAM',['RAM de la tarjeta gráfica','Memoria caché L3','Memoria del firmware'],'Es más lenta que la RAM porque usa el almacenamiento como apoyo.');
Q('mon','medio','¿Qué aporta RAID 0?','Rendimiento, sin redundancia',['Duplicado de los datos','Tolerancia al fallo de una unidad','Copia de seguridad automática'],'RAID 0 combina unidades para ganar rendimiento, pero no protege los datos.');
Q('mon','medio','¿Qué tipo de panel de monitor destaca normalmente por sus ángulos de visión?','IPS',['TN','VA','Ninguno: todos son iguales'],'IPS suele destacar por sus ángulos de visión.');
Q('mon','medio','¿Qué tipo de panel destaca por negros y contraste elevados?','OLED',['TN','IPS','Ninguno'],'OLED destaca por sus negros y contraste.');
Q('mon','medio','¿Qué es una iGPU?','Una gráfica integrada en el procesador, si el modelo la incluye',['Una tarjeta gráfica con VRAM propia','Un tipo de SSD','Un conector de vídeo'],'La iGPU está dentro del procesador, no todos los modelos la incluyen.');
Q('mon','medio','¿Por qué no se pueden mezclar módulos DDR4 y DDR5?','Son generaciones distintas y no son intercambiables',['Solo cambia el color','DDR5 es una ranura PCIe','DDR4 solo existe en portátiles'],'DDR4 y DDR5 son generaciones de RAM distintas.');
Q('mon','medio','¿Por qué no basta con comparar los GHz entre procesadores de arquitecturas distintas?','Porque el rendimiento depende también de la arquitectura',['Porque los GHz miden la capacidad del disco','Porque solo cuentan los núcleos','Porque los GHz siempre son iguales'],'La frecuencia no sirve para comparar directamente arquitecturas distintas.');
Q('mon','medio','¿Qué mide un benchmark monohilo?','El rendimiento de un solo núcleo',['El rendimiento de todos los núcleos a la vez','La capacidad del SSD','La velocidad de la red'],'Monohilo mide un núcleo; multihilo mide varios.');
Q('mon','medio','¿Qué debe facilitar el flujo de aire de una caja?','La entrada de aire fresco y la salida del aire caliente',['Solo la entrada de aire','Mantener la caja totalmente cerrada','Que el aire caliente se quede dentro'],'Hay que entrar aire fresco y expulsar el caliente.');
Q('mon','medio','¿Para qué sirven los conectores RGB/ARGB de la placa?','Para la iluminación',['Para la alimentación de la CPU','Para discos NVMe','Para el audio frontal'],'RGB/ARGB son conectores de iluminación.');


Q('mon','medio','¿Qué diferencia principal hay entre HDD y SSD?','El HDD usa platos mecánicos y el SSD almacenamiento electrónico',['El SSD siempre usa platos giratorios','El HDD no almacena datos','No existe ninguna diferencia'],'El HDD es mecánico; el SSD no tiene piezas móviles.');
Q('mon','medio','¿Qué indica una conexión PCIe x4?','Que utiliza cuatro líneas PCIe',['Que tiene cuatro conectores SATA','Que admite cuatro módulos RAM','Que es de cuarta generación obligatoriamente'],'x4 indica cuatro líneas PCIe.');
Q('mon','medio','¿Qué función cumple la unidad de control de la CPU?','Coordinar las operaciones',['Realizar exclusivamente gráficos 3D','Almacenar permanentemente archivos','Regular la energía de la placa'],'La unidad de control coordina el funcionamiento de la CPU.');
Q('mon','medio','¿Qué significa SO-DIMM?','Formato de módulo de RAM habitual en portátiles',['Un tipo de socket de CPU','Un conector de alimentación','Un protocolo de almacenamiento'],'SO-DIMM es habitual en portátiles.');
Q('mon','medio','¿Qué característica describe la memoria caché?','Es una memoria muy rápida que reduce esperas de la RAM',['Es un disco mecánico','Conserva los datos al apagar el equipo','Es una memoria externa USB'],'La caché reduce los tiempos de espera de la CPU.');
Q('mon','medio','¿Qué diferencia hay entre HDMI y RJ45?','HDMI transmite vídeo y audio; RJ45 conecta Ethernet',['Ambos son conectores de RAM','RJ45 transmite vídeo y HDMI conecta redes','Ambos alimentan la CPU'],'HDMI/DisplayPort son conexiones de vídeo; RJ45 es de red.');
Q('mon','medio','¿Qué función tiene Secure Boot?','Ayudar a impedir el arranque de software no autorizado',['Aumentar la frecuencia de la RAM','Borrar la configuración UEFI','Refrigerar el procesador'],'Secure Boot es una función de seguridad del arranque.');
Q('mon','medio','¿Qué es un benchmark multihilo?','Una prueba de rendimiento que utiliza varios núcleos/hilos',['Una prueba de capacidad del disco','Una medición de la velocidad Wi-Fi','Una prueba exclusiva de la GPU integrada'],'Multihilo mide el rendimiento usando varios núcleos o hilos.');
Q('mon','medio','¿Qué característica suele ofrecer NVMe sobre PCIe frente a SATA?','Mayor velocidad potencial',['Menor velocidad en todos los casos','Compatibilidad con cualquier ranura M.2','Que necesita un cable RJ45'],'NVMe sobre PCIe suele ofrecer mayor velocidad.');

/* --- DIFÍCIL --- */
Q('mon','dificil','Compras un SSD M.2 para una placa con ranura M.2. Además del formato, ¿qué debes verificar?','Que el protocolo (SATA o PCIe/NVMe) sea compatible con esa ranura',['Que el color coincida con la placa','Que tenga más GHz que la CPU','Nada más: todos los M.2 funcionan igual'],'M.2 es un formato; el protocolo puede ser SATA o PCIe/NVMe.');
Q('mon','dificil','Un equipo de 32 bits tiene 8 GB de RAM instalados. ¿Qué ocurrirá normalmente?','No podrá direccionar mucho más de unos 4 GB',['Usará los 8 GB sin problema','Usará 16 GB automáticamente','No arrancará nunca'],'32 bits limita normalmente la RAM direccionable a unos 4 GB.');
Q('mon','dificil','Una CPU A va a 4,5 GHz y una CPU B a 4,0 GHz, de arquitecturas distintas. ¿Qué conclusión es correcta?','No se puede asegurar cuál rinde más solo con los GHz',['La A rinde siempre más','La B rinde siempre más','Rinden exactamente igual'],'Hay que comparar con benchmarks, no solo con la frecuencia.');
Q('mon','dificil','Un PC rinde bien al arrancar, pero tras unos minutos de carga la CPU alcanza mucha temperatura y baja su velocidad. ¿Qué causa es coherente?','Refrigeración deficiente (pasta térmica, disipador o ventilación) que provoca throttling',['Usar RAM en dual channel','Tener un SSD NVMe','Tener ranuras PCIe libres'],'Con temperaturas altas la CPU reduce su velocidad (throttling térmico).');
Q('mon','dificil','Tienes dos discos en RAID 1 y borras un archivo por error. ¿Qué pasa?','Se borra también en el espejo: RAID no sustituye a una copia de seguridad',['Se recupera automáticamente del segundo disco','El archivo queda protegido para siempre','RAID 1 lo restaura al reiniciar'],'RAID 1 tolera el fallo de una unidad, no errores humanos ni borrados.');
Q('mon','dificil','Quieres montar una placa ATX en una caja que solo admite microATX. ¿Qué ocurre?','No es compatible: la placa es mayor de lo que admite la caja',['Es compatible porque el socket coincide','Cabe si se usa pasta térmica','Cabe si se instala menos RAM'],'Hay que comprobar que la caja admite el formato de la placa.');
Q('mon','dificil','Tu placa usa DDR4 y compras módulos DDR5. ¿Qué es lo correcto?','No son compatibles: hay que comprar el tipo que admite la placa',['Funcionarán en cualquier ranura','Funcionarán si activas Secure Boot','Funcionarán solo en dual channel'],'DDR4 y DDR5 no son intercambiables.');
Q('mon','dificil','Antes de comprar una gráfica potente, ¿qué debes comprobar además de su rendimiento?','Tamaño, consumo, conectores de alimentación y potencia de la fuente',['Solo el color y la iluminación','Solo la marca de la caja','Únicamente el tipo de teclado'],'La gráfica debe caber en la caja y la fuente debe poder alimentarla.');
Q('mon','dificil','¿Cuál es el orden lógico para elegir componentes?','Definir uso y presupuesto, y luego comprobar compatibilidades',['Comprar la caja más cara y adaptar el resto','Elegir por color y después por uso','Comprar la GPU y ver si queda presupuesto'],'La elección parte del uso y del presupuesto.');
Q('mon','dificil','Para aprovechar dual channel, ¿qué instalación es adecuada?','Módulos en las ranuras que correspondan a canales distintos',['Un solo módulo','Dos módulos en la misma ranura','Módulos en las ranuras PCIe'],'Dual channel utiliza dos canales para aumentar el ancho de banda.');
Q('mon','dificil','¿Qué factores aumentan el ancho de banda potencial de PCIe?','Más líneas y mayor generación',['Menos líneas y generación antigua','El color de la ranura','Más ventiladores en la caja'],'Cuantas más líneas y mayor generación, más ancho de banda potencial.');
Q('mon','dificil','Quieres instalar un sistema operativo desde un USB. ¿Qué ajuste del firmware te interesa?','El orden de arranque',['El perfil XMP','Clear CMOS siempre','La iluminación ARGB'],'El orden de arranque decide desde qué unidad inicia el equipo.');
Q('mon','dificil','Necesitas guardar muchos datos con presupuesto ajustado y sin necesidad de gran velocidad. ¿Qué encaja mejor?','Un HDD',['Un SSD NVMe de máxima velocidad','Más RAM','Una gráfica dedicada'],'El HDD suele ofrecer mucha capacidad a menor precio, aunque sea más lento.');
Q('mon','dificil','¿Qué tipo de panel de monitor se asocia con la rapidez en algunos modelos económicos?','TN',['OLED','IPS','VA'],'TN destaca por rapidez en algunos modelos económicos.');
Q('mon','dificil','Buscas máximo rendimiento y aceptas perder los datos si falla una unidad. ¿Qué configuración encaja?','RAID 0',['RAID 1','Memoria virtual','Ninguna: RAID no mejora el rendimiento'],'RAID 0 busca rendimiento y no aporta redundancia.');
Q('mon','dificil','En el ciclo de instrucción de la CPU, ¿qué fase va justo después de decodificar?','Ejecutar',['Buscar','Guardar','Apagar'],'El orden es buscar, decodificar, ejecutar y guardar.');
Q('mon','dificil','Además de la temperatura, ¿qué más puede provocar que una CPU reduzca su velocidad?','Los límites de potencia',['Tener demasiada caché','Usar un monitor IPS','Tener Bluetooth activo'],'El throttling puede deberse a temperatura o a límites de potencia.');
Q('mon','dificil','Una placa tiene una ranura PCIe físicamente x16 pero eléctricamente x4. ¿Es posible?','Sí: la longitud física no siempre indica las líneas eléctricas',['No: x16 físico implica siempre x16 eléctrico','No: PCIe no usa líneas','Solo en tarjetas PCI antiguas'],'La longitud de la ranura no siempre indica cuántas líneas eléctricas tiene.');
Q('mon','dificil','¿Cuál de estos elementos NO forma parte de la CPU?','El VRM',['La ALU','Los registros','La memoria caché'],'El VRM está en la placa base; la CPU contiene unidad de control, ALU, registros y caché.');
Q('mon','dificil','Los controladores de dispositivos pertenecen al…','Software de sistema',['Software de aplicación','Software de utilidad','Hardware de entrada'],'Sistema operativo y controladores son software de sistema.');


Q('mon','dificil','Una placa admite DDR5 y tienes un módulo DDR4. ¿Qué debes hacer?','Utilizar un módulo DDR5 compatible',['Forzar el módulo DDR4 en la ranura','Activar XMP para convertirlo','Instalarlo en una ranura PCIe'],'DDR4 y DDR5 no son intercambiables.');
Q('mon','dificil','Un SSD tiene formato M.2, pero la placa solo admite unidades M.2 SATA en esa ranura. ¿Qué unidad debes elegir?','Una unidad M.2 SATA compatible',['Cualquier NVMe PCIe sin comprobar compatibilidad','Un HDD de 3,5 pulgadas','Una tarjeta gráfica PCIe x16'],'M.2 es el formato; hay que comprobar el protocolo admitido.');
Q('mon','dificil','Un ordenador tiene un SSD NVMe muy rápido, pero el sistema tarda en arrancar por un orden de arranque incorrecto. ¿Qué revisarías?','El orden de arranque en UEFI/BIOS',['El perfil de audio','El tipo de panel del monitor','La iluminación RGB'],'El firmware permite elegir desde qué unidad iniciar.');
Q('mon','dificil','Una caja admite Mini-ITX y microATX, pero no ATX. ¿Qué placa no puedes instalar?','Una placa ATX',['Una placa Mini-ITX','Una placa microATX','Cualquiera de las dos primeras'],'La caja debe admitir el formato de la placa.');
Q('mon','dificil','Una CPU reduce su frecuencia aunque la temperatura sea correcta. ¿Qué otra causa contempla el temario?','Que haya alcanzado límites de potencia',['Que el monitor sea OLED','Que la RAM sea SO-DIMM','Que el SSD sea SATA'],'El throttling también puede deberse a límites de potencia.');
Q('mon','dificil','Quieres tolerar el fallo de una unidad en un conjunto de dos discos. ¿Qué RAID del temario encaja?','RAID 1',['RAID 0','Memoria virtual','Dual channel'],'RAID 1 duplica los datos para tolerar el fallo de una unidad.');
Q('mon','dificil','Un equipo necesita más ancho de banda de memoria. ¿Qué configuración puede ayudar?','Dual channel con módulos instalados en canales distintos',['Un único módulo de RAM','Desactivar todos los canales','Conectar la RAM a SATA'],'Dual channel utiliza dos canales para aumentar el ancho de banda.');
Q('mon','dificil','Una tarjeta gráfica cabe físicamente en la caja, pero la fuente no tiene la potencia o conectores necesarios. ¿Qué problema existe?','La alimentación no es adecuada para la gráfica',['El socket de CPU es incompatible necesariamente','La RAM se convierte en DDR5','El monitor no admite HDMI'],'Hay que comprobar consumo y conectores de alimentación de la GPU.');
Q('mon','dificil','¿Por qué un HDD suele ser una elección adecuada para almacenar muchos datos con presupuesto ajustado?','Suele ofrecer mucha capacidad a menor precio, aunque es más lento',['Porque siempre es más rápido que NVMe','Porque no tiene piezas móviles','Porque sustituye a la RAM'],'El HDD suele ofrecer mucha capacidad a menor precio.');
Q('mon','dificil','Un equipo usa una iGPU. ¿De dónde obtiene normalmente la memoria gráfica?','De la memoria RAM del sistema',['De una VRAM dedicada en una tarjeta independiente obligatoriamente','De la pila CMOS','Del disco duro exclusivamente'],'La gráfica integrada utiliza memoria del sistema.');


/* --- PREGUNTAS DE RESPUESTA ESCRITA (no se corrigen literalmente ni puntúan) --- */
function W(s,d,t,model,exp){bank.push({s,d,kind:'write',t,model,exp})}

W('ipo','facil','Explica con tus palabras qué significa PAS y qué se hace en cada fase.','PAS significa Proteger, Avisar y Socorrer. Primero se comprueba que la zona sea segura; después se avisa al 112 indicando qué ha pasado, dónde y cuántas personas están afectadas; por último, se ayuda al accidentado dentro de la propia formación.','Comprueba que aparecen las tres fases y su finalidad general.');
W('ipo','medio','Explica la diferencia entre un accidente de trabajo y una enfermedad profesional.','El accidente de trabajo suele producirse de forma súbita y causa una lesión; la enfermedad profesional se desarrolla normalmente de forma lenta por la exposición a determinados agentes y debe estar incluida en el cuadro oficial.','Lo importante es distinguir el carácter súbito del accidente y el desarrollo lento y catalogado de la enfermedad profesional.');
W('ipo','dificil','Escribe, en orden, las cinco reglas de oro para trabajar sin tensión.','Cortar todas las fuentes de tensión, bloquear los aparatos de corte, verificar la ausencia de tensión, poner a tierra y en cortocircuito, y delimitar y señalizar la zona.','El orden es importante: cortar, bloquear, verificar, poner a tierra y delimitar.');

W('mon','facil','Explica qué es la CPU y menciona sus partes principales.','La CPU ejecuta instrucciones. Sus partes principales son la unidad de control, que coordina; la ALU, que realiza operaciones aritméticas y lógicas; los registros; y la memoria caché.','No es necesario usar las mismas palabras: deben aparecer la función de la CPU y varias de sus partes con una idea correcta de su función.');
W('mon','medio','Explica la diferencia entre BIOS y UEFI y qué hacen antes de que arranque el sistema operativo.','La BIOS es el firmware tradicional y UEFI es su evolución moderna. El firmware inicia y configura el hardware antes de cargar el sistema operativo; también puede realizar el POST y gestionar el orden de arranque.','La respuesta debe explicar que son firmware y que actúan antes de iniciar el sistema operativo.');
W('mon','dificil','Explica qué significa que M.2 es un formato y por qué no todos los SSD M.2 son necesariamente NVMe.','M.2 describe el formato físico del módulo. Una unidad M.2 puede utilizar SATA o PCIe/NVMe, por lo que hay que comprobar qué protocolos admite la ranura de la placa base antes de comprarla.','La idea clave es separar el formato M.2 del protocolo de conexión que utiliza la unidad.');

W('ing','facil','Write two short sentences: use “to be” to describe a person and “have got” to describe something they own.','Example: “She is a student. She has got a laptop.”','La primera frase debe describir o identificar con am/is/are; la segunda debe expresar posesión con have got/has got.');
W('ing','medio','Explain the difference between “find out” and “figure out”. Give one example of each.','“Find out” means to discover or obtain information: “I need to find out the train time.” “Figure out” means to understand or solve something: “I need to figure out why the computer is not working.”','No hace falta copiar los ejemplos: distingue conseguir un dato de comprender o resolver algo.');
W('ing','dificil','Write a sentence in the present simple about a daily routine. Include an adverb of frequency and use the correct verb form.','Example: “She usually checks her email every morning.”','Debe expresar una rutina, incluir un adverbio de frecuencia y respetar la forma verbal del sujeto (por ejemplo, -s en he/she/it).');


/* --- Banco ampliado: 10 preguntas escritas por asignatura y dificultad --- */
W("ipo","facil","Define con tus palabras qué es un riesgo laboral y pon un ejemplo relacionado con informática.","Es la posibilidad de que una persona sufra un daño derivado del trabajo. Por ejemplo, tropezar con cables sueltos en un aula informática.","Debe aparecer la posibilidad de sufrir un daño y un ejemplo laboral.");
W("ipo","facil","Explica qué se entiende por condiciones de trabajo.","Son los aspectos del trabajo que pueden influir en la salud o provocar daños.","La respuesta debe relacionar las condiciones del puesto con la salud.");
W("ipo","facil","¿Qué diferencia hay entre un peligro y un riesgo? Explícalo con un ejemplo.","El peligro es aquello que puede causar daño; el riesgo es la posibilidad de que ese daño ocurra. Un cable eléctrico deteriorado es un peligro y tocarlo puede implicar riesgo eléctrico.","Debe distinguir la fuente potencial de daño de la probabilidad de sufrirlo.");
W("ipo","facil","Explica qué significa la sigla EPI y para qué sirve.","EPI significa equipo de protección individual. Sirve para proteger al trabajador frente a riesgos que no se han podido evitar suficientemente por otros medios.","Debe indicar el nombre y su función protectora.");
W("ipo","facil","¿Qué significan las letras PAS en primeros auxilios? Describe brevemente cada paso.","PAS significa Proteger, Avisar y Socorrer: asegurar la zona, llamar a emergencias y ayudar dentro de la formación propia.","Deben aparecer las tres fases en el orden correcto.");
W("ipo","facil","Explica qué es un accidente blanco.","Es un accidente en el que solo se producen daños materiales y no hay lesiones personales.","La clave es que hay daños materiales, pero no lesiones.");
W("ipo","facil","¿Qué es la prevención de riesgos laborales?","Es el conjunto de medidas y actividades destinadas a evitar o reducir los riesgos derivados del trabajo.","Debe expresar que busca evitar o reducir los riesgos laborales.");
W("ipo","facil","Explica por qué hay que mantener libres los pasillos y las salidas.","Para evitar tropiezos y permitir que las personas puedan desplazarse y evacuar rápidamente si ocurre una emergencia.","Debe relacionar orden y limpieza con evitar accidentes y facilitar la evacuación.");
W("ipo","facil","¿Qué número se utiliza para avisar a emergencias en España? ¿Qué información básica hay que dar?","El 112. Hay que explicar qué ha ocurrido, dónde, cuántas personas están afectadas y cuál es su estado.","Debe indicar el 112 y datos útiles para localizar y valorar la emergencia.");
W("ipo","medio","Compara un accidente de trabajo con una enfermedad profesional.","El accidente suele ser un suceso repentino que causa una lesión; la enfermedad profesional suele desarrollarse lentamente por exposición laboral y debe estar incluida en el cuadro oficial.","Debe diferenciar el carácter súbito del accidente y el desarrollo progresivo y catalogado de la enfermedad.");
W("ipo","medio","Explica la diferencia entre contacto eléctrico directo e indirecto.","El contacto directo ocurre al tocar una parte activa en tensión. El indirecto ocurre al tocar una masa que ha quedado en tensión por un fallo.","Debe distinguir parte activa de una carcasa o masa accidentalmente electrizada.");
W("ipo","medio","¿Qué diferencia hay entre prevención y protección?","La prevención intenta evitar o reducir el riesgo desde su origen; la protección limita las consecuencias cuando el riesgo no se ha podido eliminar.","Debe explicar que actúan de forma complementaria, pero con objetivos distintos.");
W("ipo","medio","Explica por qué se prioriza la protección colectiva frente a la individual.","Porque protege simultáneamente a varias personas expuestas y no depende tanto de que cada trabajador lleve correctamente un equipo individual.","Debe destacar que la protección colectiva tiene prioridad y protege a varias personas.");
W("ipo","medio","Describe qué debe hacerse ante una evacuación y qué usos están prohibidos.","Hay que seguir las rutas señalizadas, mantener la calma y dirigirse al punto de reunión. No se deben utilizar ascensores ni ventanas como salidas.","Debe mencionar seguir el plan y evitar ascensores y ventanas.");
W("ipo","medio","¿Qué es un riesgo grave e inminente y qué puede hacer el trabajador?","Es un riesgo que puede materializarse pronto y causar un daño grave. El trabajador puede interrumpir la actividad y abandonar el lugar si es necesario.","Debe incluir la inmediatez, la gravedad y la posibilidad de interrumpir la actividad.");
W("ipo","medio","Explica la diferencia entre una emergencia parcial y una total.","La parcial requiere la actuación del equipo de intervención; la total implica movilizar todos los equipos, pedir ayuda externa y realizar una evacuación general.","Debe diferenciar el alcance y los recursos movilizados.");
W("ipo","medio","¿Por qué la vigilancia de la salud debe respetar la confidencialidad?","Porque los datos médicos son privados y deben protegerse; la empresa recibe las conclusiones preventivas necesarias, no información clínica indiscriminada.","Debe relacionar confidencialidad con intimidad y protección de datos.");
W("ipo","medio","Explica qué es un factor de riesgo y pon dos ejemplos de un entorno de trabajo informático.","Es una condición o característica que puede contribuir a que ocurra un daño. Ejemplos: cables por el suelo y una postura inadecuada frente al ordenador.","Debe definirlo como condición que puede originar o aumentar un riesgo y dar ejemplos pertinentes.");
W("ipo","dificil","Explica las cinco reglas de oro para trabajar sin tensión y por qué se sigue ese orden.","Primero se cortan todas las fuentes de tensión, después se bloquean los aparatos de corte, se verifica la ausencia de tensión, se ponen a tierra y en cortocircuito las partes que corresponda y finalmente se delimita y señaliza la zona.","Deben aparecer las cinco medidas en orden y su finalidad de evitar una reconexión o contacto peligroso.");
W("ipo","dificil","Una persona detecta un cable dañado en un equipo del aula. Explica cómo debería gestionarse preventivamente la situación.","Debe dejar de utilizarse el equipo, evitar el contacto con la zona dañada, comunicarlo al responsable y hacer que personal autorizado lo revise y repare antes de volver a usarlo.","Debe priorizar detener el uso, comunicar y recurrir a personal autorizado; no improvisar una reparación.");
W("ipo","dificil","Explica cómo se relacionan la evaluación de riesgos y la planificación preventiva.","La evaluación identifica y valora los riesgos existentes; la planificación establece las medidas para eliminarlos o controlarlos, asignando responsables, recursos y plazos.","Debe mostrar que primero se identifican y valoran riesgos y después se planifican acciones.");
W("ipo","dificil","En un CPD hay ruido continuo, temperatura elevada y cables en zonas de paso. Clasifica los factores de riesgo.","El ruido y la temperatura son agentes físicos del ambiente de trabajo; los cables en zonas de paso son una condición de seguridad que puede provocar tropiezos.","Debe clasificar los dos primeros como ambientales físicos y el último como seguridad.");
W("ipo","dificil","Explica por qué un simulacro de evacuación sirve para mejorar la seguridad.","Permite practicar las rutas y funciones, comprobar la señalización y detectar problemas de organización, reduciendo la confusión durante una emergencia real.","Debe mencionar práctica, detección de fallos y mejora de la respuesta.");
W("ipo","dificil","Compara las funciones de seguridad en el trabajo, higiene industrial y ergonomía.","La seguridad en el trabajo previene accidentes; la higiene industrial identifica y controla agentes ambientales que pueden causar enfermedades; la ergonomía adapta el trabajo a las personas para reducir fatiga y problemas posturales.","Debe distinguir accidentes, agentes ambientales y adaptación del puesto.");
W("ipo","dificil","Explica por qué una enfermedad laboral no incluida en el cuadro oficial puede recibir un tratamiento legal distinto de una enfermedad profesional catalogada.","La enfermedad profesional exige estar incluida en el cuadro oficial y cumplir sus condiciones. Otras enfermedades causadas por el trabajo pueden reconocerse legalmente como accidentes de trabajo si se cumplen los requisitos aplicables.","Debe diferenciar la definición legal catalogada de otras enfermedades relacionadas con el trabajo.");
W("ipo","dificil","Una empresa detecta que varias personas sufren fatiga visual. Propón medidas preventivas desde la ergonomía y la organización.","Puede ajustar iluminación y reflejos, configurar correctamente las pantallas, adaptar el puesto y organizar pausas o cambios de actividad, además de informar y formar al personal.","Debe proponer medidas sobre el puesto y la organización, no limitarse a recomendar un único EPI.");
W("ipo","dificil","Explica la responsabilidad preventiva del empresario y la del trabajador, indicando cómo se complementan.","El empresario debe evaluar y planificar la prevención, informar, formar y proporcionar medios seguros. El trabajador debe utilizar correctamente equipos y protecciones, seguir instrucciones e informar de peligros.","Debe diferenciar la obligación organizativa del empresario y la colaboración responsable del trabajador.");
W("mon","facil","Explica qué es un sistema informático y nombra sus componentes principales.","Es un conjunto que permite recibir, procesar, almacenar y comunicar información mediante hardware, software y usuarios.","Deben aparecer hardware, software y usuarios, junto con su finalidad.");
W("mon","facil","¿Qué función realiza la CPU dentro del ordenador?","La CPU ejecuta instrucciones y procesa datos para que el sistema pueda realizar tareas.","Debe indicar que ejecuta instrucciones y procesa datos.");
W("mon","facil","Explica qué diferencia hay entre RAM y almacenamiento.","La RAM guarda temporalmente los datos y programas que se están utilizando; el almacenamiento, como un SSD o HDD, conserva los datos aunque se apague el equipo.","Debe distinguir memoria de trabajo temporal y almacenamiento persistente.");
W("mon","facil","¿Para qué sirve la placa base?","Conecta los componentes del ordenador y permite que se comuniquen y reciban alimentación.","Debe mencionar conexión y comunicación entre componentes.");
W("mon","facil","Explica qué es un byte y cuántos bits contiene.","Un byte es una unidad de información formada por 8 bits.","Debe indicar correctamente la equivalencia de 8 bits.");
W("mon","facil","¿Qué función tiene un disipador y qué papel cumple el ventilador?","El disipador absorbe y reparte el calor del componente; el ventilador mueve aire para ayudar a evacuar ese calor.","Debe diferenciar la transferencia de calor del movimiento de aire.");
W("mon","facil","¿Qué es el socket de una placa base?","Es el zócalo o conexión física donde se instala el procesador; debe ser compatible con la CPU.","Debe identificarlo como conexión física del procesador.");
W("mon","facil","Explica para qué sirve un SSD.","Es una unidad de almacenamiento que conserva datos y programas y permite acceder a ellos sin las partes móviles de un disco duro tradicional.","Debe indicar que es almacenamiento persistente.");
W("mon","facil","¿Qué significa que una memoria RAM sea DDR?","DDR significa Double Data Rate y es una tecnología de memoria que transfiere datos dos veces por ciclo de reloj.","Debe reconocer el significado de DDR y su idea básica.");
W("mon","medio","Compara BIOS y UEFI.","BIOS es el firmware tradicional de inicio; UEFI es su evolución moderna, con más funciones y una interfaz y gestión de arranque más avanzadas.","Debe identificarlas como firmware de inicio y señalar que UEFI es la evolución moderna.");
W("mon","medio","Explica la diferencia entre un HDD y un SSD.","El HDD utiliza platos magnéticos y partes mecánicas; el SSD utiliza memoria flash, por lo que suele ofrecer menor latencia y mayor velocidad.","Debe mencionar tecnología mecánica frente a memoria flash.");
W("mon","medio","¿Qué diferencia hay entre PCIe x1 y PCIe x16?","Indica el número de líneas PCI Express disponibles: x1 tiene una y x16 tiene dieciséis, por lo que x16 puede ofrecer más ancho de banda.","Debe relacionar el número de líneas con el ancho de banda potencial.");
W("mon","medio","Explica qué es el chipset de una placa base.","Es el conjunto de controladores y lógica de la placa que gestiona distintas comunicaciones y funciones entre componentes y periféricos.","Debe describir su función de gestión de comunicaciones.");
W("mon","medio","¿Qué diferencia hay entre un conector SATA y una ranura M.2?","SATA es una interfaz y sus conectores sirven para unidades SATA; M.2 es un formato de ranura y módulo que puede admitir distintos protocolos, como SATA o PCIe/NVMe.","Debe evitar confundir formato M.2 con protocolo.");
W("mon","medio","Explica qué es la memoria caché de la CPU.","Es una memoria pequeña y muy rápida que guarda datos e instrucciones usados con frecuencia para reducir las esperas de la RAM.","Debe mencionar rapidez y reducción de accesos a RAM.");
W("mon","medio","¿Qué función realiza la ALU?","La unidad aritmético-lógica realiza operaciones matemáticas y operaciones lógicas dentro del procesador.","Debe incluir operaciones aritméticas y lógicas.");
W("mon","medio","Explica qué es el POST cuando se enciende un ordenador.","Es una comprobación inicial que realiza el firmware para verificar aspectos básicos del hardware antes de continuar el arranque.","Debe describirlo como autocomprobación inicial del hardware.");
W("mon","medio","¿Para qué sirve la pasta térmica entre el procesador y el disipador?","Rellena pequeñas irregularidades de las superficies y mejora la transferencia de calor desde el procesador al disipador.","Debe relacionarla con mejorar el contacto térmico.");
W("mon","dificil","Explica por qué no todos los SSD M.2 son NVMe.","M.2 define el formato físico. Una unidad M.2 puede comunicarse mediante SATA o mediante PCIe con el protocolo NVMe; hay que comprobar la compatibilidad de la ranura.","Debe separar formato, interfaz y protocolo.");
W("mon","dificil","Un equipo se apaga cuando la CPU trabaja intensamente y alcanza temperaturas elevadas. Explica una causa posible y cómo se puede investigar.","Puede existir sobrecalentamiento por un disipador mal instalado, ventilación insuficiente o pasta térmica inadecuada. Se pueden revisar temperaturas, montaje y flujo de aire.","Debe relacionar el síntoma con refrigeración y proponer comprobaciones razonables.");
W("mon","dificil","Explica la diferencia entre dual channel y tener simplemente dos módulos de RAM instalados.","Dual channel requiere que los módulos estén instalados en canales adecuados y que la plataforma lo admita; no basta con contar dos módulos. Puede aumentar el ancho de banda disponible.","Debe señalar que depende de la colocación y del soporte de la plataforma.");
W("mon","dificil","¿Qué diferencia existe entre RAID 0 y RAID 1 en rendimiento y tolerancia a fallos?","RAID 0 distribuye datos entre discos para mejorar rendimiento, pero no ofrece redundancia. RAID 1 duplica los datos y puede tolerar el fallo de una unidad del conjunto.","Debe distinguir rendimiento sin redundancia frente a duplicación y tolerancia.");
W("mon","dificil","Explica qué ocurre durante el ciclo de instrucción de von Neumann.","La CPU busca una instrucción, la decodifica, la ejecuta y guarda el resultado cuando corresponde; después continúa con la siguiente.","Debe recoger las fases principales del ciclo.");
W("mon","dificil","Una placa base y un procesador tienen sockets distintos. Explica por qué no basta con que ambos sean de la misma marca.","La compatibilidad depende del socket y también del chipset, firmware y soporte específico del procesador. Compartir fabricante no garantiza que encajen ni funcionen juntos.","Debe explicar que la marca no determina la compatibilidad.");
W("mon","dificil","Explica qué diferencia hay entre TDP y consumo eléctrico real de un procesador.","El TDP es una referencia térmica utilizada para diseñar la refrigeración; no equivale necesariamente al consumo eléctrico máximo o real en cada situación.","Debe evitar tratarlos como magnitudes idénticas.");
W("mon","dificil","Un ordenador tiene una gráfica integrada. Explica de dónde suele obtener la memoria gráfica y cómo puede afectar al sistema.","La gráfica integrada suele utilizar una parte de la RAM del sistema como memoria gráfica compartida, por lo que esa memoria no queda disponible para otras tareas.","Debe mencionar memoria compartida con la RAM.");
W("mon","dificil","Explica por qué hay que comprobar la fuente de alimentación al instalar una tarjeta gráfica nueva.","Hay que comprobar que la fuente pueda suministrar la potencia necesaria y tenga los conectores adecuados; también conviene considerar el resto de componentes del equipo.","Debe mencionar potencia y conectores, no solo que la tarjeta quepa físicamente.");
W("ing","facil","Write a sentence with “to be” to describe your job or your studies.","I am a student.","Debe utilizar am/is/are para identificar o describir.");
W("ing","facil","Write a sentence with “have got” about a computer device.","I have got a laptop.","Debe expresar posesión con have got o has got.");
W("ing","facil","Write one negative sentence in the present simple.","I do not use that computer every day.","Debe usar do not/does not más el verbo en forma base.");
W("ing","facil","Write a question using “to be”.","Are you a student?","Debe colocar am/is/are antes del sujeto.");
W("ing","facil","Write a short sentence using “always” or “usually”.","I usually study in the afternoon.","Debe incluir un adverbio de frecuencia en una posición correcta.");
W("ing","facil","Explain in English what a laptop is.","A laptop is a portable computer.","La respuesta debe definirlo como un ordenador portátil.");
W("ing","facil","Write one sentence using the expression “two peas in a pod” in a technology context.","Developers and designers are two peas in a pod.","Debe utilizar la expresión para indicar que dos personas o cosas encajan o se parecen mucho.");
W("ing","facil","Write the comparative form of “fast” in a complete sentence.","This computer is faster than my old computer.","Debe usar faster than para comparar dos elementos.");
W("ing","facil","Write a sentence using “some” with an uncountable noun.","There is some water on the desk.","Debe usar some con un nombre incontable en una frase afirmativa.");
W("ing","medio","Explain the difference between “to be” and “have got” and give an example of each.","“To be” describes or identifies: “She is a technician.” “Have got” expresses possession: “She has got a laptop.”","Debe diferenciar descripción/identidad y posesión.");
W("ing","medio","Write two present simple sentences: one affirmative and one negative, using he or she.","She works in an office. She does not work at night.","La afirmativa lleva -s y la negativa usa does not más verbo base.");
W("ing","medio","Explain when to use “much” and “many”, with an example.","Use “much” with uncountable nouns: “How much time?” Use “many” with countable plural nouns: “How many computers?”","Debe distinguir nombres incontables y contables plurales.");
W("ing","medio","Write a comparative sentence using an adjective with two or more syllables.","This server is more powerful than the old one.","Debe usar more + adjetivo + than.");
W("ing","medio","Explain the difference between “few” and “little”.","“Few” is used with countable plural nouns; “little” is used with uncountable nouns.","Debe distinguir contables plurales de incontables.");
W("ing","medio","Write a question in the present simple using “does”.","Does your computer have a webcam?","Debe usar does + sujeto + verbo en forma base.");
W("ing","medio","Explain what “find out” means and use it in a sentence.","“Find out” means to discover information. “I need to find out the meeting time.”","Debe expresar descubrir u obtener información.");
W("ing","medio","Write a superlative sentence using “the most”.","This is the most useful application on my computer.","Debe usar the most con un adjetivo adecuado.");
W("ing","medio","Write a sentence using “come to life” about a computer game or application.","The game came to life when the team added animations.","Debe expresar que algo cobra vida o empieza a resultar activo o emocionante.");
W("ing","dificil","Explain the difference between “find out” and “figure out”, and provide an original example of each.","“Find out” means to discover information: “I will find out the password policy.” “Figure out” means to understand or solve something: “I need to figure out why the network is slow.”","Debe distinguir obtener un dato de resolver o comprender un problema.");
W("ing","dificil","Write a present simple sentence about a daily routine using a frequency adverb and correct third-person agreement.","He usually checks the server every morning.","Debe expresar rutina, incluir adverbio de frecuencia y añadir -s a la tercera persona.");
W("ing","dificil","Explain how a comparative differs from a superlative and give one example of each.","A comparative compares two things: “This PC is faster than that one.” A superlative identifies the highest degree in a group: “This is the fastest PC.”","Debe distinguir comparación entre dos y grado máximo de un grupo.");
W("ing","dificil","Describe the purpose of a User Interface (UI) in one or two English sentences.","A user interface helps people use an application easily. It includes buttons, icons and colours.","Debe explicar que la UI facilita el uso y mencionar elementos como botones, iconos o colores.");
W("ing","dificil","Explain why “more cheaper” is incorrect and write the correct sentence.","“Cheaper” is already the comparative form of “cheap”, so we do not add “more”. Correct: “This laptop is cheaper than that one.”","Debe explicar que no se duplican las marcas del comparativo.");
W("ing","dificil","Write a sentence with “has got” and then rewrite it as a question.","She has got a new monitor. Has she got a new monitor?","Debe mantener has got y cambiar el orden para formar la pregunta.");
W("ing","dificil","Describe the four main stages of software development in English.","Planning, design and coding, testing, and release. After release, developers can provide updates based on user feedback.","Debe reflejar planificación, diseño/programación, pruebas y lanzamiento.");
W("ing","dificil","Explain the difference between countable and uncountable nouns and give two examples of each.","Countable nouns can be counted, such as “computer” and “idea”. Uncountable nouns are not normally counted individually, such as “information” and “software”.","Debe explicar la diferencia y dar ejemplos adecuados.");
W("ing","dificil","Write the five stages of project management in English.","Identify the customers, analyse the information, make a plan, do the work, and evaluate the results.","Deben aparecer las cinco fases del proyecto en el orden correcto.");


/* --- Preguntas importadas de las guías HTML anteriores --- */
Q("digitalitzacio-ra1","facil","¿Cuál es la idea principal de la economía lineal?","Tomar, producir y desechar.",["Reparar, compartir y regenerar.", "Alquilar todos los productos.", "No utilizar recursos naturales."],"La economía lineal sigue el modelo «Tomar – Producir – Desechar».");
Q("digitalitzacio-ra1","facil","¿En qué periodo surgió el modelo lineal?","Con la Revolución Industrial del siglo XVIII.",["Con Internet.", "Con los smartphones.", "Con Industria 4.0."],"Los apuntes sitúan su origen en la Revolución Industrial del siglo XVIII.");
Q("digitalitzacio-ra1","facil","¿Cuál es un recurso natural extraído en la fase «Tomar»?","Petróleo.",["Un teléfono fabricado.", "Una aplicación móvil.", "Un correo electrónico."],"Petróleo, gas, algodón, agua, minerales y madera son ejemplos.");
Q("digitalitzacio-ra1","facil","¿Qué significa obsolescencia programada o percibida?","Que se diseñan para durar poco o parecer antiguos.",["Que todos los productos se reciclan.", "Que los productos se comparten.", "Que se reparan siempre."],"Así se define la obsolescencia en los apuntes.");
Q("digitalitzacio-ra1","facil","¿Qué puede ocurrir con un móvil desechado?","Puede generar residuos tecnológicos contaminantes.",["Se convierte automáticamente en uno nuevo.", "No tiene impacto ambiental.", "Regenera ecosistemas."],"Los residuos tecnológicos pueden contaminar por sus metales y plásticos.");
Q("digitalitzacio-ra1","facil","¿Cuál es un impacto del modelo lineal?","Agotamiento de recursos naturales.",["Aumenta la reutilización.", "Elimina la contaminación desde el diseño.", "Reduce residuos a cero."],"La extracción puede superar la capacidad de regeneración del planeta.");
Q("digitalitzacio-ra1","facil","¿De dónde se obtiene el plástico PET de las botellas?","Del petróleo crudo.",["De la madera.", "Del algodón.", "Del vidrio reciclado."],"El petróleo crudo se refina para obtener plásticos como el PET.");
Q("digitalitzacio-ra1","facil","¿Qué busca la economía circular?","Mantener productos y materiales en uso y regenerar sistemas naturales.",["Fabricar más productos desechables.", "Aumentar el consumo de materias primas.", "Acortar la vida de los productos."],"La economía circular mantiene los materiales en circulación y regenera sistemas naturales.");
Q("digitalitzacio-ra1","facil","¿Cuál NO es uno de sus tres principios?","Aumentar productos desechables en masa.",["Eliminar residuos y contaminación.", "Mantener productos en uso.", "Regenerar sistemas naturales."],"Los principios son eliminar residuos, mantener productos en uso y regenerar sistemas naturales.");
Q("digitalitzacio-ra1","facil","¿Qué acción mantiene productos en uso?","Repararlos y reutilizarlos.",["Desecharlos ante un pequeño fallo.", "Incinerarlos.", "Impedir actualizarlos."],"Reparación, reutilización, remanufactura y reciclaje de calidad mantienen productos en uso.");
Q("digitalitzacio-ra1","facil","¿Cuál es un ejemplo circular de los apuntes?","Reaprovechar aceite usado para hacer jabón.",["Tirar una botella tras beber.", "Comprar un móvil cada año.", "Enviar residuos al vertedero."],"El aceite usado puede reaprovecharse para elaborar jabón.");
Q("digitalitzacio-ra1","facil","¿Qué significa priorizar el acceso frente a la propiedad?","Promover compartir o alquilar en vez de comprar cada uno.",["Que nadie utilice productos.", "Que todos compren productos.", "Que no se puedan compartir."],"La economía circular fomenta compartir y alquilar.");
Q("digitalitzacio-ra1","facil","¿Cuál es un beneficio de la economía circular?","Reduce emisiones y puede generar empleo verde.",["Aumenta la dependencia de recursos finitos.", "Impide reparar productos.", "Aumenta necesariamente los residuos."],"Los apuntes destacan reducción de emisiones, independencia de recursos y empleo verde.");
Q("digitalitzacio-ra1","facil","¿Qué diferencia la economía lineal de la circular?","La lineal desecha y la circular busca mantener materiales en uso.",["La lineal reutiliza siempre.", "Son iguales.", "La circular solo se aplica a software."],"La lineal es unidireccional; la circular mantiene productos y materiales en uso.");
Q("digitalitzacio-ra1","facil","¿Qué es una tecnología habilitadora digital?","Una innovación que facilita la transformación digital.",["Un dispositivo solo para jugar.", "Una tecnología que sustituye todo trabajo.", "Un residuo electrónico."],"Facilita la transformación digital de industria, agricultura, salud y comercio.");
Q("digitalitzacio-ra1","facil","¿Cuál es una tecnología habilitadora de los apuntes?","Internet de las cosas.",["Papel carbón.", "Lápiz de grafito.", "Disquete."],"Se destacan IA, Big Data, Cloud Computing e IoT.");
Q("digitalitzacio-ra1","medio","¿Qué describe Machine Learning?","Aprende de datos pasados sin programar cada tarea.",["Fabrica objetos en 3D.", "Transporta electricidad.", "No utiliza datos."],"Machine Learning aprende patrones a partir de datos.");
Q("digitalitzacio-ra1","medio","¿Qué ejemplo se usa para redes neuronales?","Leer matrículas en un parking.",["Guardar un documento.", "Fabricar vidrio.", "Conectar un teclado."],"La lectura de matrículas es el ejemplo de los apuntes.");
Q("digitalitzacio-ra1","medio","¿Qué caracteriza al Deep Learning?","Redes neuronales de muchas capas para imagen, voz y texto.",["No utiliza capas.", "Solo sirve para hojas de cálculo.", "Es un modelo económico."],"Deep Learning utiliza redes neuronales profundas.");
Q("digitalitzacio-ra1","medio","¿Qué rama interpreta imágenes y vídeos?","Visión por computador.",["Procesamiento contable.", "Cloud computing.", "Big Data."],"La visión por computador interpreta imágenes y vídeo.");
Q("digitalitzacio-ra1","medio","¿Qué rama trabaja para entender y generar lenguaje?","Procesamiento del lenguaje natural.",["Impresión 3D.", "Redes 5G.", "Computación en la nube."],"El procesamiento del lenguaje natural trabaja con el lenguaje.");
Q("digitalitzacio-ra1","medio","¿Qué es Big Data?","Procesar grandes cantidades de datos para obtener conocimiento.",["Una aplicación de dibujo.", "Una tecnología para fabricar robots.", "Una conexión inalámbrica."],"Big Data convierte datos masivos en conocimiento para tomar decisiones.");
Q("digitalitzacio-ra1","medio","¿Cuáles son las 5 V?","Volumen, velocidad, variedad, veracidad y valor.",["Vídeo, voz, visión, velocidad y volumen.", "Virtual, visual, variable, válido y verde.", "Valor, voltaje, vídeo, variedad y virtualización."],"Las cinco V son volumen, velocidad, variedad, veracidad y valor.");
Q("digitalitzacio-ra1","medio","¿Qué significa veracidad?","Que su calidad y precisión deben filtrarse y validarse.",["Que los datos son secretos.", "Que ocupan mucho espacio.", "Que llegan rápido."],"Veracidad se refiere a la calidad y precisión de los datos.");
Q("digitalitzacio-ra1","medio","¿Qué herramienta transporta flujos de datos en tiempo real?","Kafka.",["PowerPoint.", "Google Docs.", "Photoshop."],"Kafka transporta flujos de datos en tiempo real.");
Q("digitalitzacio-ra1","medio","¿Para qué sirve Hadoop?","Almacenar y procesar en clústeres de servidores.",["Crear presentaciones.", "Controlar un motor.", "Añadir imágenes al mundo real."],"Hadoop almacena y procesa datos en clústeres.");
Q("digitalitzacio-ra1","medio","¿Qué guarda un Data Lake?","Datos en bruto, sin procesar.",["Solo datos impresos.", "Únicamente contraseñas.", "Solo audio."],"Un Data Lake guarda datos en bruto.");
Q("digitalitzacio-ra1","medio","¿Cómo se utiliza Big Data en banca?","Analizar transacciones para detectar fraudes.",["Encender luces.", "Diseñar zapatillas.", "Medir humedad de campos."],"La banca analiza muchas transacciones para detectar fraudes.");
Q("digitalitzacio-ra1","medio","¿Qué significa IaaS?","Infraestructura como servicio.",["Internet automático como sistema.", "Información analizada como software.", "Inteligencia artificial como servicio."],"IaaS permite alquilar servidores, redes y discos virtuales.");
Q("digitalitzacio-ra1","medio","¿Qué ofrece PaaS?","Un entorno para desplegar una aplicación.",["Una aplicación terminada.", "Solo discos físicos.", "Un sensor."],"PaaS proporciona el entorno para desplegar aplicaciones.");
Q("digitalitzacio-ra1","medio","¿Cuál es un ejemplo de SaaS?","Gmail o Microsoft 365.",["Una máquina virtual Azure.", "Un cable de red.", "Un PLC."],"SaaS es software terminado utilizado desde el navegador.");
Q("digitalitzacio-ra1","dificil","¿Cuál es una limitación de la nube?","Dependencia de Internet y privacidad de los datos.",["No almacena datos.", "No funciona con aplicaciones.", "Solo sirve en fábricas."],"Los apuntes destacan esas dos limitaciones.");
Q("digitalitzacio-ra1","dificil","¿Qué es Internet de las cosas?","Objetos físicos con sensores y conexión que envían datos o reciben órdenes.",["Una red solo para PCs.", "Un editor de vídeo.", "Un sistema para fabricar plástico."],"IoT conecta objetos físicos capaces de enviar datos y recibir órdenes.");
Q("digitalitzacio-ra1","dificil","¿Cuál es un ejemplo de IoT doméstico?","Un termostato inteligente controlado desde el móvil.",["Una silla.", "Un libro de papel.", "Una mesa."],"Termostatos, luces y electrodomésticos conectados son ejemplos.");
Q("digitalitzacio-ra1","dificil","¿Qué pueden medir sensores agrícolas?","Clima y humedad del suelo.",["Páginas de un libro.", "Velocidad de teclado.", "Resolución de pantalla."],"Los sensores miden clima, humedad y estado de las plantas.");
Q("digitalitzacio-ra1","dificil","¿Con qué trabaja principalmente IT?","Datos e información: los guarda, procesa y envía.",["Motores y cintas.", "Válvulas y robots.", "Solo procesos físicos."],"IT es la tecnología de la información.");
Q("digitalitzacio-ra1","dificil","¿Con qué trabaja principalmente OT?","Máquinas y procesos físicos que vigila y controla.",["Documentos de texto.", "Bases de datos de clientes.", "Aplicaciones de correo."],"OT controla y vigila máquinas y procesos del mundo físico.");
Q("digitalitzacio-ra1","dificil","¿Cuál es un equipo típico de OT?","Autómata PLC.",["Servidor de correo.", "Hoja de cálculo.", "App bancaria."],"PLC, sensores y robots son equipos típicos de OT.");
Q("digitalitzacio-ra1","dificil","¿Qué es prioritario en OT?","Que la máquina no se pare.",["Que la web cargue rápido.", "Que el correo no tenga spam.", "Que todos los archivos tengan el mismo formato."],"En OT es importante que la máquina no se pare.");
Q("digitalitzacio-ra1","dificil","En una fábrica de zapatillas, ¿qué tarea es IT?","La web recibe el pedido.",["Un robot corta la tela.", "Un sensor mide el pegamento.", "Una cinta transporta la zapatilla."],"La web y el programa de gestión son IT; robots y sensores son OT.");
Q("digitalitzacio-ra1","dificil","¿Qué significa convergencia IT/OT?","Las máquinas envían datos y estos ayudan a mejorar las máquinas.",["Se desconectan las redes.", "IT y OT no se comunican.", "Todo se sustituye por móviles."],"La convergencia une datos IT y procesos OT, y forma parte de Industria 4.0.");
Q("digitalitzacio-ra1","dificil","¿Qué debe hacer un técnico SMX para proteger IT y OT?","Actualizar equipos, separar redes de oficina y planta y hacer copias.",["Compartir contraseñas.", "Conectar todo sin protección.", "Desactivar copias."],"Estas medidas se indican en los apuntes.");
Q("digitalitzacio-ra1","dificil","¿Qué permite la impresión 3D?","Fabricar objetos capa a capa desde un diseño digital.",["Superponer información en el mundo real.", "Analizar transacciones.", "Controlar tráfico."],"La impresión 3D fabrica objetos capa a capa.");
Q("digitalitzacio-ra1","dificil","¿Qué hace la realidad aumentada?","Añade imágenes digitales sobre el mundo real.",["Borra datos de la nube.", "Procesa flujos de baja latencia.", "Controla PLC."],"La realidad aumentada añade elementos digitales a lo que vemos.");
Q("digitalitzacio-ra1","dificil","¿Qué caracteriza a 5G?","Conexión móvil rápida y con poco retraso.",["Almacenamiento en bruto.", "Fabricación capa a capa.", "Reciclaje de botellas."],"5G ofrece conexión móvil muy rápida y con poco retraso.");
Q("digitalitzacio-ra1","dificil","En el invernadero inteligente, ¿qué ocurre primero?","Un sensor mide la humedad de la tierra.",["La válvula abre el riego.", "La IA guarda datos en el sensor.", "La planta envía un correo."],"Primero el sensor OT mide la humedad; luego se envía el dato y se decide el riego.");
Q("ia-ra1","facil","¿Qué caracterizó a los ordenadores electrónicos de las décadas de 1940–1950?","El cálculo y el procesamiento de información.",["La llegada de los smartphones.", "La generación de vídeos con IA.", "La conexión masiva mediante redes sociales."],"En la línea temporal de clase, los ordenadores electrónicos de 1940–1950 se relacionan con el cálculo y el procesamiento.");
Q("ia-ra1","facil","¿Qué avance se asocia a las décadas de 1970–1980?","El microprocesador y el ordenador personal (PC).",["La aparición de la IA fuerte.", "La llegada de Internet y la Web.", "La IA generativa de imágenes."],"El microprocesador y el PC hicieron que la informática llegara al escritorio.");
Q("ia-ra1","facil","¿Qué cambio se asocia al periodo 1990–2000?","Internet y la Web conectan los ordenadores.",["El nacimiento de los ordenadores electrónicos.", "La llegada del móvil y la nube.", "La IA generativa produce audio y vídeo."],"La línea temporal de las presentaciones sitúa Internet y la Web en 1990–2000.");
Q("ia-ra1","facil","¿Qué se destaca del periodo 2000–2010?","El móvil y la nube, con servicios y datos en todas partes.",["El uso exclusivo de reglas simbólicas.", "La aparición de los primeros PC.", "El desarrollo de la IA fuerte."],"En 2000–2010 se destaca la expansión del móvil y la nube.");
Q("ia-ra1","facil","¿Qué caracteriza a la IA generativa de 2020 hasta hoy?","Genera texto, imágenes, audio y código.",["Solo ejecuta instrucciones fijas.", "Únicamente conecta ordenadores.", "Solo almacena archivos en la nube."],"La IA generativa puede crear contenido como texto, imagen, audio, vídeo o código.");
Q("ia-ra1","facil","¿Qué describe mejor la Inteligencia Artificial según el material?","Sistemas que analizan información y pueden producir respuestas o decisiones.",["Un tipo de cable para conectar ordenadores.", "Una memoria que conserva archivos al apagar el PC.", "Un sistema operativo para móviles."],"La IA puede analizar información, reconocer patrones, recomendar y producir respuestas.");
Q("ia-ra1","facil","En la programación tradicional, ¿quién define las reglas e instrucciones?","Una persona o programador.",["La propia máquina sin intervención humana.", "Los usuarios de Internet de forma automática.", "Los datos de entrenamiento por sí solos."],"En la programación tradicional una persona define las reglas y el ordenador las ejecuta.");
Q("ia-ra1","facil","¿Qué es el aprendizaje automático (Machine Learning)?","Un sistema que aprende patrones a partir de datos y ejemplos.",["Un método para aumentar físicamente la memoria RAM.", "Una forma de conectar un PC a Internet.", "Un programa que solo sigue reglas escritas para cada caso."],"Machine Learning permite que el sistema detecte patrones a partir de datos y ejemplos.");
Q("ia-ra1","facil","¿Cuál de estos casos es un ejemplo cotidiano de IA?","Una aplicación que recomienda una canción.",["Un cable Ethernet sin conectar.", "Un teclado mecánico apagado.", "Una caja vacía para guardar componentes."],"Las recomendaciones de música son uno de los ejemplos cotidianos que aparecen en el material.");
Q("ia-ra1","facil","¿Qué afirmación sobre una respuesta de IA es correcta?","Puede sonar convincente y aun así ser incorrecta.",["Si está bien redactada, siempre es cierta.", "Nunca interpreta mal el contexto.", "No necesita que comprobemos información."],"El material insiste en que una respuesta convincente no garantiza que sea correcta.");
Q("ia-ra1","medio","¿Qué es la IA débil?","Una IA diseñada para realizar tareas concretas.",["Una IA que siempre funciona mal.", "Una IA que comprende todo como una persona.", "Una IA que no necesita datos ni instrucciones."],"La IA débil está diseñada para tareas concretas y es la que utilizamos actualmente.");
Q("ia-ra1","medio","¿Cómo se describe la IA fuerte en las presentaciones?","Una IA hipotética capaz de comprender, aprender y razonar de forma general.",["Un sistema que solo detecta spam.", "Una IA limitada a traducir textos.", "Un programa que sigue una única regla."],"La IA fuerte se presenta como una idea de inteligencia general comparable a la humana.");
Q("ia-ra1","medio","¿En qué se basa principalmente el razonamiento simbólico?","En reglas y condiciones definidas por personas.",["En generar imágenes aleatorias.", "En aprender únicamente por ensayo humano.", "En conectar dispositivos mediante Bluetooth."],"El razonamiento simbólico utiliza reglas definidas, como bloquear una cuenta tras cinco intentos fallidos.");
Q("ia-ra1","medio","¿Cómo aprenden patrones las redes neuronales?","Analizando muchos datos y ejemplos.",["Siguiendo una lista fija de contraseñas.", "Preguntando siempre a una persona qué responder.", "Usando exclusivamente reglas escritas para cada situación."],"Las redes neuronales aprenden patrones a partir de muchos datos, sin escribir una regla para cada caso.");
Q("ia-ra1","medio","¿Qué puede ocurrir si los datos de entrenamiento son poco representativos?","Puede producir resultados sesgados o desiguales.",["La IA se convierte automáticamente en IA fuerte.", "El sistema deja de necesitar supervisión.", "Todos los resultados pasan a ser correctos."],"Los datos incompletos o poco representativos pueden provocar sesgos y perjudicar a ciertos perfiles.");
Q("ia-ra1","medio","¿Qué es un prompt?","La instrucción o petición que escribimos a una IA.",["Una pieza interna del procesador.", "Una dirección IP de una red local.", "Un tipo de memoria del ordenador."],"Un prompt es la petición que damos a la IA para indicar qué necesitamos.");
Q("ia-ra1","medio","¿Qué cuatro elementos forman la estructura recomendada de un buen prompt?","Contexto, tarea, condiciones y formato.",["Nombre, contraseña, IP y máscara.", "Inicio, pausa, reinicio y apagado.", "Título, imagen, sonido y vídeo."],"La estructura recomendada es contexto + tarea + condiciones + formato.");
Q("ia-ra1","medio","En un prompt, ¿qué indica el contexto?","Quién eres, qué estudias y qué necesitas.",["El color de la interfaz de la IA.", "La extensión exacta del archivo de salida siempre.", "La respuesta correcta que debe copiar la IA."],"El contexto explica la situación del usuario y qué necesita.");
Q("ia-ra1","medio","¿Qué sería una condición dentro de un prompt?","Pedir una explicación de nivel principiante y que incluya un ejemplo.",["El nombre comercial de la IA.", "Una petición sin relación con la tarea.", "El nombre del ordenador desde el que escribes."],"Las condiciones pueden indicar nivel, límites, ejemplos, pasos o restricciones.");
Q("ia-ra1","medio","¿Cuál es la ventaja de pedir a la IA que haga preguntas y espere tus respuestas?","Te ayuda a practicar y comprobar si has entendido el tema.",["Evita que tengas que estudiar.", "Hace que la IA decida por ti.", "Permite entregar el trabajo sin leerlo."],"El objetivo es aprender activamente y recibir feedback, no limitarse a obtener la solución.");
Q("ia-ra1","dificil","¿Cuál es una ventaja de utilizar IA para estudiar?","Puede explicar un concepto de otra manera y generar ejercicios.",["Garantiza que todos los datos sean ciertos.", "Hace innecesario comprender lo que entregas.", "Elimina la necesidad de verificar información."],"La IA puede explicar conceptos, crear ejemplos y ejercicios y ayudar a organizar ideas.");
Q("ia-ra1","dificil","¿Cuál es un riesgo de la IA?","Que pueda inventar información o interpretar mal el contexto.",["Que siempre rechace cualquier pregunta.", "Que nunca pueda generar código.", "Que solo funcione sin datos."],"La IA puede inventar información, interpretar mal el contexto o generar resultados incorrectos.");
Q("ia-ra1","dificil","¿Qué significa que los datos estén sesgados?","Que pueden favorecer unos perfiles y perjudicar a otros por ser poco representativos.",["Que los datos están guardados en una nube.", "Que todos los datos son recientes.", "Que los datos están cifrados correctamente."],"Un sesgo puede surgir de datos o diseños que producen resultados desiguales o poco representativos.");
Q("ia-ra1","dificil","Una IA recomienda bloquear una IP sospechosa. ¿Qué deberías hacer antes?","Revisar los registros y comprobar si realmente hay una actividad sospechosa.",["Bloquearla siempre sin mirar nada.", "Apagar el ordenador inmediatamente.", "Compartir la contraseña del administrador con la IA."],"La recomendación puede ser útil, pero también puede tratarse de una prueba técnica o una configuración incorrecta.");
Q("ia-ra1","dificil","La IA te propone un comando que utiliza sudo. ¿Qué debes hacer?","Entender qué hace, revisar qué modifica y comprobarlo en documentación fiable.",["Ejecutarlo siempre porque lo ha generado una IA.", "Cambiarlo al azar hasta que funcione.", "Darlo por seguro si parece corto."],"Nunca ejecutes ciegamente un comando generado por IA; comprueba su función y sus posibles efectos.");
Q("ia-ra1","dificil","¿Cuál es el flujo de decisión responsable mostrado en el material?","IA analiza → IA recomienda → persona revisa → persona decide.",["Persona decide → IA oculta → nadie revisa.", "IA decide → persona obedece siempre.", "IA analiza → se ejecuta todo automáticamente."],"La IA puede analizar y recomendar, pero una persona revisa la información y toma la decisión.");
Q("ia-ra1","dificil","¿Qué significa supervisar una decisión automatizada?","Que una persona pueda revisar, cuestionar o detener la decisión.",["Aceptar todo lo que diga la IA.", "Eliminar los datos que no interesen.", "Permitir que la IA actúe sin control."],"La supervisión humana permite revisar, cuestionar o detener una decisión automatizada.");
Q("ia-ra1","dificil","¿Qué es la explicabilidad?","Intentar comprender por qué la IA ha llegado a un resultado.",["La capacidad de una IA para conectarse a Internet.", "La velocidad con la que responde.", "La posibilidad de guardar una respuesta en un documento."],"La explicabilidad ayuda a conocer las razones de un resultado y valorar si tiene sentido.");
Q("ia-ra1","dificil","Si una IA toma una decisión que perjudica a una persona, ¿qué indica el material?","Debe estar claro quién supervisa el sistema y quién responde por las consecuencias.",["La IA asume automáticamente toda la responsabilidad.", "Nadie puede revisar la decisión.", "La decisión siempre es correcta por ser automática."],"La IA no asume responsabilidades como una persona; debe estar claro quién supervisa y responde.");
Q("ia-ra1","dificil","¿Qué regla forma parte del uso responsable de la IA en la optativa?","No compartir contraseñas ni datos sensibles.",["Compartir contraseñas para que la IA trabaje mejor.", "Entregar resultados sin comprenderlos.", "Ejecutar cualquier código que proponga."],"Las reglas de clase indican no compartir contraseñas ni datos sensibles y verificar la información importante.");

/* --- Preguntas escritas del banco general: 10 por dificultad y RA --- */
W("digitalitzacio-ra1","facil","Define la economía lineal y escribe sus fases.","Es un modelo basado en extraer recursos, fabricar productos, consumirlos y desecharlos al final de su vida útil.","Deben aparecer la idea de tomar-producir-desechar y sus fases.");
W("digitalitzacio-ra1","facil","¿Qué es la economía circular?","Es un modelo que intenta evitar residuos desde el diseño, mantener productos y materiales en uso y regenerar los sistemas naturales.","Debe explicar que no consiste únicamente en reciclar.");
W("digitalitzacio-ra1","facil","Pon dos ejemplos de recursos naturales que se utilizan para fabricar productos.","Petróleo, gas, algodón, agua, minerales o madera.","Se aceptan dos ejemplos correctos.");
W("digitalitzacio-ra1","facil","Explica qué significa reutilizar un producto.","Consiste en volver a utilizar un producto, para la misma función u otra, en vez de desecharlo.","Debe quedar clara la idea de alargar su uso.");
W("digitalitzacio-ra1","facil","¿Qué es una tecnología habilitadora digital?","Es una tecnología innovadora que facilita la transformación digital de sectores como la industria, la agricultura, la salud o el comercio.","Debe relacionarla con la transformación digital.");
W("digitalitzacio-ra1","facil","Define Internet de las cosas (IoT).","Es la conexión de objetos físicos que utilizan sensores y conexión de red para enviar datos o recibir órdenes.","Debe incluir objetos físicos conectados y el intercambio de datos.");
W("digitalitzacio-ra1","facil","¿Qué significa IT?","Tecnología de la información; trabaja con datos, programas, redes, servidores y sistemas informáticos.","Debe asociar IT con información y datos.");
W("digitalitzacio-ra1","facil","¿Qué significa OT?","Tecnología de operaciones; supervisa y controla máquinas y procesos físicos, por ejemplo mediante sensores y PLC.","Debe asociar OT con máquinas y procesos físicos.");
W("digitalitzacio-ra1","facil","¿Qué es la impresión 3D?","Es una tecnología que fabrica objetos añadiendo material capa a capa a partir de un diseño digital.","Debe mencionar fabricación capa a capa.");
W("digitalitzacio-ra1","facil","Nombra dos ejemplos de IoT en la vida cotidiana.","Un termostato inteligente y un reloj o pulsera conectada, por ejemplo.","Se aceptan dos ejemplos de objetos conectados.");
W("digitalitzacio-ra1","medio","Compara la economía lineal y la economía circular.","La lineal sigue extraer, producir, consumir y desechar. La circular busca reducir residuos, reparar, reutilizar, reciclar y regenerar recursos.","Debe explicar la diferencia entre un flujo lineal y la circulación de materiales.");
W("digitalitzacio-ra1","medio","Explica los tres principios de la economía circular.","Eliminar residuos y contaminación desde el diseño, mantener productos y materiales en uso y regenerar los sistemas naturales.","Deben aparecer los tres principios.");
W("digitalitzacio-ra1","medio","¿Qué es la obsolescencia programada o percibida?","Es diseñar un producto para que dure poco o hacer que parezca antiguo aunque todavía pueda funcionar.","Debe distinguir duración limitada y percepción de antigüedad.");
W("digitalitzacio-ra1","medio","Explica qué es la inteligencia artificial y pon un ejemplo.","La IA permite que un sistema analice información, reconozca patrones o genere respuestas. Un ejemplo es un sistema que detecta spam.","Debe explicar una capacidad de IA y dar un ejemplo coherente.");
W("digitalitzacio-ra1","medio","¿Qué es Big Data y para qué se utiliza?","Es la captura, almacenamiento y procesamiento de grandes cantidades de datos para obtener conocimiento y apoyar decisiones.","Debe mencionar grandes volúmenes de datos y su análisis.");
W("digitalitzacio-ra1","medio","Enumera y explica brevemente las cinco V de Big Data.","Volumen: cantidad; velocidad: rapidez; variedad: tipos de datos; veracidad: calidad; valor: utilidad de la información.","Deben aparecer las cinco V con una explicación aproximada.");
W("digitalitzacio-ra1","medio","Explica la diferencia entre IaaS, PaaS y SaaS.","IaaS alquila infraestructura; PaaS ofrece un entorno para desarrollar o desplegar aplicaciones; SaaS proporciona una aplicación lista para usar.","Debe diferenciar los tres modelos.");
W("digitalitzacio-ra1","medio","¿Cómo puede utilizarse IoT en la agricultura?","Los sensores pueden medir humedad del suelo, clima y estado de las plantas para ayudar a decidir cuándo regar o realizar otras tareas.","Debe explicar la recogida de datos mediante sensores.");
W("digitalitzacio-ra1","medio","Compara IT y OT indicando un ejemplo de cada una.","IT gestiona información, por ejemplo un servidor; OT controla procesos físicos, por ejemplo un PLC o un robot industrial.","Debe diferenciar información frente a procesos físicos.");
W("digitalitzacio-ra1","medio","¿Qué es la convergencia IT/OT?","Es la integración de los sistemas de información con los sistemas que controlan procesos físicos, permitiendo que los datos de las máquinas mejoren las operaciones.","Debe mencionar comunicación e integración entre ambos entornos.");
W("digitalitzacio-ra1","dificil","Explica por qué la economía circular debe empezar en el diseño del producto.","Porque diseñar para durar, repararse, actualizarse y reciclarse reduce residuos desde el origen y facilita mantener los materiales en uso.","Debe relacionar diseño con prevención de residuos y alargar la vida útil.");
W("digitalitzacio-ra1","dificil","Describe los impactos ambientales que puede provocar el modelo económico lineal.","Puede agotar recursos, generar grandes cantidades de residuos y contaminación y contribuir al cambio climático y a la pérdida de biodiversidad.","Debe mencionar varios impactos y explicar su relación con extraer y desechar.");
W("digitalitzacio-ra1","dificil","Una empresa quiere reducir residuos. Propón tres medidas basadas en economía circular.","Puede diseñar productos reparables, reutilizar materiales, recuperar componentes, ofrecer reparación o alquiler y reciclar materiales al final de su vida útil.","Deben ser medidas concretas y coherentes con la economía circular.");
W("digitalitzacio-ra1","dificil","Explica la relación entre Machine Learning, redes neuronales y Deep Learning.","Machine Learning aprende patrones a partir de datos; las redes neuronales son un tipo de modelo inspirado en el cerebro; Deep Learning utiliza redes neuronales con muchas capas.","Debe reflejar la relación de inclusión y la profundidad de las redes.");
W("digitalitzacio-ra1","dificil","¿Por qué son importantes la veracidad y el valor en Big Data?","La veracidad permite confiar en la calidad de los datos; el valor indica que el análisis debe producir información útil para tomar decisiones.","Debe distinguir calidad de datos y utilidad del resultado.");
W("digitalitzacio-ra1","dificil","Describe cómo colaboran IoT, Cloud, Big Data e IA en un sistema inteligente.","IoT recoge datos; Cloud los almacena y permite acceder a ellos; Big Data procesa grandes cantidades; IA detecta patrones y puede generar predicciones o recomendaciones.","Debe explicar la función de cada tecnología y su relación.");
W("digitalitzacio-ra1","dificil","Explica dos riesgos de ciberseguridad en entornos IT y dos en OT.","En IT puede haber robo o pérdida de datos y acceso no autorizado. En OT puede manipularse una máquina o detenerse un proceso industrial.","Debe diferenciar los riesgos de información y de operación física.");
W("digitalitzacio-ra1","dificil","¿Por qué no siempre se pueden actualizar los equipos OT con la misma frecuencia que los IT?","Los equipos OT suelen tener ciclos de vida largos y deben mantener la continuidad y seguridad del proceso; una actualización puede requerir pruebas y planificación para evitar paradas.","Debe relacionar continuidad operativa y ciclos de vida largos.");
W("digitalitzacio-ra1","dificil","Explica cómo funciona un invernadero inteligente desde la medición hasta la acción.","Un sensor mide la humedad; IoT transmite el dato; la nube lo almacena; un sistema de análisis o IA decide si hace falta regar y una válvula ejecuta la acción.","Debe presentar la secuencia de recogida, análisis y actuación.");
W("digitalitzacio-ra1","dificil","Propón medidas para proteger una red que conecta oficinas IT y maquinaria OT.","Separar las redes, limitar comunicaciones, controlar accesos, mantener equipos y copias actualizados cuando sea posible y supervisar la actividad.","Debe incluir segmentación y control de accesos, además de medidas de mantenimiento.");
W("ia-ra1","facil","Define con tus palabras qué es la inteligencia artificial.","Es un conjunto de técnicas que permite a sistemas informáticos analizar información, reconocer patrones, generar respuestas o ayudar a tomar decisiones.","Debe mencionar análisis de información y alguna capacidad de IA.");
W("ia-ra1","facil","¿Qué es un prompt?","Es la instrucción o petición que una persona escribe para indicar a una IA qué necesita.","Debe identificarlo como instrucción o petición.");
W("ia-ra1","facil","Nombra dos tareas que puede realizar una IA cotidiana.","Puede recomendar música, reconocer imágenes, clasificar correo no deseado o responder preguntas.","Se aceptan dos ejemplos correctos.");
W("ia-ra1","facil","¿Qué es Machine Learning?","Es una rama de la IA en la que los sistemas aprenden patrones a partir de datos y ejemplos.","Debe mencionar aprendizaje a partir de datos.");
W("ia-ra1","facil","¿Qué es la IA generativa?","Es una IA capaz de crear contenido nuevo, como texto, imágenes, audio, vídeo o código.","Debe indicar que genera contenido.");
W("ia-ra1","facil","Explica qué es la IA débil.","Es una IA diseñada para realizar tareas concretas, como reconocer imágenes o detectar spam.","Debe mencionar que está limitada a tareas específicas.");
W("ia-ra1","facil","¿Qué es un sesgo en IA?","Es una tendencia de los datos o del diseño que puede producir resultados desiguales o poco representativos.","Debe asociarlo con resultados desequilibrados.");
W("ia-ra1","facil","¿Qué significa verificar una respuesta de IA?","Significa contrastar la información con fuentes fiables y comprobar que sea correcta antes de utilizarla.","Debe incluir comprobación y contraste.");
W("ia-ra1","facil","Nombra los cuatro elementos de un buen prompt.","Contexto, tarea, condiciones y formato.","Deben aparecer los cuatro elementos.");
W("ia-ra1","facil","¿Por qué no se deben compartir contraseñas con una IA?","Porque son datos sensibles y compartirlas puede comprometer la seguridad de cuentas y sistemas.","Debe relacionarlo con la protección de información sensible.");
W("ia-ra1","medio","Compara la programación tradicional con el aprendizaje automático.","En la programación tradicional una persona define reglas explícitas; en Machine Learning el sistema aprende patrones a partir de datos y ejemplos.","Debe explicar la diferencia entre reglas programadas y patrones aprendidos.");
W("ia-ra1","medio","Explica la diferencia entre IA débil e IA fuerte.","La IA débil realiza tareas concretas y existe actualmente; la IA fuerte sería una inteligencia general capaz de comprender y razonar en muchos ámbitos, todavía hipotética.","Debe diferenciar la IA actual especializada de la idea hipotética general.");
W("ia-ra1","medio","¿En qué se diferencian el razonamiento simbólico y las redes neuronales?","El razonamiento simbólico utiliza reglas y condiciones definidas por personas; las redes neuronales aprenden patrones a partir de datos.","Debe identificar reglas explícitas frente a aprendizaje de patrones.");
W("ia-ra1","medio","Explica por qué la calidad de los datos afecta al resultado de una IA.","Si los datos son incorrectos, incompletos o poco representativos, el sistema puede aprender patrones erróneos y producir resultados poco fiables o sesgados.","Debe relacionar datos deficientes con resultados deficientes.");
W("ia-ra1","medio","Describe los cuatro elementos de un prompt bien elaborado.","El contexto explica la situación; la tarea indica qué debe hacer la IA; las condiciones establecen límites o nivel; el formato define cómo presentar la respuesta.","Debe explicar los cuatro elementos.");
W("ia-ra1","medio","Explica dos ventajas y dos riesgos de utilizar IA para estudiar.","Ventajas: obtener explicaciones alternativas y generar ejercicios. Riesgos: recibir información inventada o depender de respuestas sin verificarlas.","Debe incluir ventajas y riesgos concretos.");
W("ia-ra1","medio","¿Qué es el procesamiento del lenguaje natural?","Es el área de la IA que trabaja con la comprensión y generación del lenguaje humano.","Debe asociarlo al lenguaje.");
W("ia-ra1","medio","¿Qué es la visión por computador?","Es el área que permite a los sistemas interpretar información visual, como imágenes y vídeos.","Debe mencionar interpretación de imágenes o vídeos.");
W("ia-ra1","medio","¿Qué significa supervisión humana en una decisión automatizada?","Significa que una persona puede revisar, cuestionar o detener la decisión del sistema antes de aceptar sus consecuencias.","Debe incluir capacidad humana de revisión.");
W("ia-ra1","medio","¿Qué es la explicabilidad de una IA?","Es la posibilidad de comprender por qué un sistema ha producido un resultado o una recomendación.","Debe relacionarla con entender las razones del resultado.");
W("ia-ra1","dificil","Explica cómo puede aparecer un sesgo en un sistema de selección de personal basado en IA.","Si los datos históricos favorecen determinados perfiles, el sistema puede aprender ese patrón y recomendar injustamente a personas similares, perjudicando a otros grupos.","Debe conectar datos históricos poco representativos con resultados desiguales.");
W("ia-ra1","dificil","Describe un proceso responsable para utilizar una respuesta de IA en un trabajo de clase.","Definir la tarea con un prompt claro, revisar la respuesta, contrastar los datos importantes, corregir errores y redactar el resultado comprendiendo lo que se entrega.","Debe incluir revisión, verificación y comprensión.");
W("ia-ra1","dificil","¿Por qué una respuesta convincente de IA puede seguir siendo incorrecta?","Porque el sistema genera respuestas a partir de patrones y puede inventar datos o interpretar mal el contexto; la fluidez del texto no garantiza su veracidad.","Debe separar calidad de redacción y exactitud.");
W("ia-ra1","dificil","Compara Machine Learning, redes neuronales y Deep Learning.","Machine Learning aprende patrones a partir de datos; las redes neuronales son modelos que aprenden patrones complejos; Deep Learning utiliza redes neuronales con muchas capas.","Debe explicar los conceptos y su relación.");
W("ia-ra1","dificil","Diseña un prompt para pedir a una IA que explique un concepto técnico a un estudiante principiante.","Debe incluir contexto del estudiante, la tarea concreta, condiciones como nivel sencillo y un ejemplo, y el formato solicitado, por ejemplo pasos y preguntas finales.","Debe aplicar contexto, tarea, condiciones y formato.");
W("ia-ra1","dificil","Una IA recomienda ejecutar un comando administrativo. Explica qué comprobaciones harías antes.","Identificar qué hace el comando, revisar qué archivos o configuraciones modifica, comprobar sus opciones en documentación fiable y probarlo solo en un entorno seguro y autorizado.","Debe evitar la ejecución ciega y contemplar sus efectos.");
W("ia-ra1","dificil","Explica cómo debería funcionar la supervisión humana cuando una IA recomienda bloquear una dirección IP.","Una persona debe revisar registros, comprobar el contexto y confirmar que la actividad es realmente sospechosa antes de aplicar el bloqueo, pudiendo rechazar la recomendación.","Debe incluir comprobación de evidencias y decisión humana.");
W("ia-ra1","dificil","¿Qué responsabilidades deben quedar claras cuando una IA participa en una decisión que afecta a personas?","Debe identificarse quién supervisa el sistema, quién valida la decisión y quién responde por sus consecuencias; la IA no sustituye la responsabilidad humana u organizativa.","Debe identificar supervisión y responsabilidad.");
W("ia-ra1","dificil","Explica por qué es importante proteger la privacidad al utilizar herramientas de IA.","Porque los prompts pueden contener datos personales, credenciales o información confidencial; compartirlos puede exponer a personas y organizaciones.","Debe relacionar privacidad con evitar datos sensibles y confidenciales.");
W("ia-ra1","dificil","Propón una lista de comprobación para evaluar críticamente una respuesta generada por IA.","Comprobar fuentes, fechas y datos; contrastar afirmaciones importantes; revisar posibles sesgos; verificar que responde a la pregunta; y no compartir información sensible.","Debe proponer varias comprobaciones concretas.");

/* OFIMÁTICA · RA1 · Preguntas facil: basadas en los seis materiales de Word 365 */
Q("ofimatica-ra1","facil","¿Qué es Microsoft Word?","Un procesador de textos",["Un sistema operativo", "Un programa de diseño 3D"],"Permite crear, editar, dar formato, guardar, imprimir y compartir documentos.");
Q("ofimatica-ra1","facil","¿Cuál es el formato habitual de los documentos de Word?",".docx",[".jpg", ".mp3"],"El material introductorio identifica .docx como formato habitual.");
Q("ofimatica-ra1","facil","¿Qué elemento muestra el nombre del documento?","La barra de título",["La barra de estado", "La regla"],"La barra de título muestra el nombre del documento.");
Q("ofimatica-ra1","facil","¿Dónde se encuentra el área donde escribimos?","En el área del documento",["En la barra de estado", "En el selector de tabulaciones"],"El área del documento es la zona de escritura.");
Q("ofimatica-ra1","facil","¿Para qué sirve la regla de Word?","Para trabajar con sangrías y tabulaciones",["Para corregir automáticamente la ortografía", "Para insertar vídeos"],"La regla permite establecer sangrías y tabulaciones.");
Q("ofimatica-ra1","facil","¿Qué debemos hacer antes de cambiar el formato de un texto ya escrito?","Seleccionarlo",["Imprimirlo", "Cerrar Word"],"Primero se selecciona el contenido y después se aplica el formato.");
Q("ofimatica-ra1","facil","¿Qué formato de carácter inclina los caracteres?","Cursiva",["Negrita", "Justificada"],"La cursiva inclina los caracteres.");
Q("ofimatica-ra1","facil","¿Qué alineación sitúa el texto en el centro?","Centrada",["Derecha", "Justificada"],"La alineación centrada sitúa el texto en el centro.");
Q("ofimatica-ra1","facil","¿Qué muestra el botón ¶ Mostrar todo?","Marcas y caracteres no imprimibles",["Las páginas ocultas", "Los comentarios privados"],"Permite ver espacios, marcas de párrafo, tabulaciones y saltos.");
Q("ofimatica-ra1","facil","¿Cuál es una sangría que desplaza solo la primera línea?","Sangría de primera línea",["Sangría derecha", "Sangría francesa"],"La sangría de primera línea desplaza únicamente la primera línea.");
Q("ofimatica-ra1","facil","¿Qué controla el interlineado?","La separación entre líneas de un mismo párrafo",["La distancia entre páginas", "El ancho de las columnas"],"El interlineado controla la separación entre líneas.");
Q("ofimatica-ra1","facil","¿Qué combinación crea un salto de página según los apuntes?","Ctrl + Enter",["Ctrl + P", "Alt + Tab"],"El material indica Ctrl + Enter como una opción para insertar un salto de página.");
Q("ofimatica-ra1","facil","¿Qué tecla permite avanzar a la siguiente posición de tabulación?","Tab",["Esc", "Bloq Mayús"],"Tab desplaza el cursor hasta la siguiente tabulación.");
Q("ofimatica-ra1","facil","¿Qué tipo de tabulación alinea cantidades por el separador decimal?","Decimal",["Centrada", "Barra"],"La tabulación decimal utiliza el separador decimal como referencia.");
Q("ofimatica-ra1","facil","¿Qué opción de letra capital integra la letra en el párrafo?","En texto",["En margen", "Ninguna"],"En texto integra la letra capital en el párrafo.");
Q("ofimatica-ra1","facil","¿Qué es una celda?","La intersección entre una fila y una columna",["Una página del documento", "Un estilo de fuente"],"La intersección entre una fila y una columna se llama celda.");
Q("ofimatica-ra1","facil","¿Qué tecla permite regresar a la celda anterior?","Mayús + Tab",["Ctrl + Enter", "Alt + F4"],"Mayús + Tab regresa a la celda anterior.");
Q("ofimatica-ra1","facil","¿Qué ocurre al pulsar Tab en la última celda de una tabla?","Word crea una nueva fila",["Se elimina la tabla", "Se cierra el documento"],"Word crea automáticamente una nueva fila.");
Q("ofimatica-ra1","facil","¿Qué estilo se utiliza para los apartados principales de un índice automático?","Título 1",["Título 2", "Texto normal"],"El material indica Título 1 para los apartados principales.");
Q("ofimatica-ra1","facil","¿En qué pestaña se encuentra Marca de agua?","Diseño",["Revisar", "Vista"],"La ruta indicada es Diseño → Marca de agua.");
/* OFIMÁTICA · RA1 · Preguntas medio: basadas en los seis materiales de Word 365 */
Q("ofimatica-ra1","medio","¿Por qué no conviene alinear columnas pulsando muchos espacios?","Porque el ancho depende de la fuente y puede desalinearse al cambiar el documento",["Porque los espacios se imprimen siempre en color", "Porque Word no permite escribir espacios"],"El material explica que cambios en texto, fuente o márgenes pueden desalinear las columnas.");
Q("ofimatica-ra1","medio","¿Qué diferencia hay entre formato de carácter y de párrafo?","El primero afecta a letras seleccionadas y el segundo al párrafo completo",["Ambos afectan solo a la página", "El formato de párrafo solo cambia el color"],"Son dos niveles de formato distintos.");
Q("ofimatica-ra1","medio","¿Qué tipo de sangría deja la primera línea más a la izquierda y desplaza las siguientes?","Francesa",["Primera línea", "Izquierda"],"La sangría francesa desplaza las líneas siguientes y deja la primera más a la izquierda.");
Q("ofimatica-ra1","medio","¿Dónde se activa la regla horizontal?","Vista → Regla",["Insertar → Regla", "Diseño → Regla"],"La ruta indicada es Vista → Regla.");
Q("ofimatica-ra1","medio","¿Qué diferencia hay entre espaciado posterior e interlineado?","El posterior separa párrafos; el interlineado separa líneas del mismo párrafo",["Son exactamente lo mismo", "El posterior cambia el tamaño de fuente"],"El espaciado posterior actúa después del párrafo; el interlineado dentro del párrafo.");
Q("ofimatica-ra1","medio","¿Qué opción permite establecer una tabulación con una medida exacta?","El cuadro Tabulaciones desde las opciones de Párrafo",["El cuadro de impresión", "La barra de estado"],"Se accede desde Inicio → Párrafo → flecha → Tabulaciones.");
Q("ofimatica-ra1","medio","¿Qué hace una tabulación derecha?","Hace que el texto termine en la posición del tabulador",["Centra el texto en la página", "Inserta una línea vertical"],"El texto queda alineado por su extremo derecho.");
Q("ofimatica-ra1","medio","¿Qué hace una tabulación de barra?","Inserta una línea vertical en la posición indicada",["Alinea cantidades por la coma decimal", "Añade puntos al final de la línea"],"La tabulación de barra es un separador vertical.");
Q("ofimatica-ra1","medio","¿Qué debes hacer antes de modificar las tabulaciones de varios párrafos?","Seleccionar los párrafos",["Convertirlos en imagen", "Cambiar el tema del documento"],"Las tabulaciones son una propiedad del párrafo.");
Q("ofimatica-ra1","medio","¿Qué opción elimina todas las posiciones de tabulación configuradas?","Eliminar todas",["Quitar formato de página", "Borrar documento"],"El cuadro Tabulaciones dispone de la opción Eliminar todas.");
Q("ofimatica-ra1","medio","¿Qué diferencia una letra capital de una letra simplemente grande?","La letra capital se integra automáticamente con las primeras líneas del párrafo",["La letra capital siempre está en cursiva", "Una letra grande no puede cambiarse"],"Aumentar el tamaño no crea una auténtica letra capital.");
Q("ofimatica-ra1","medio","¿Qué permite modificar Opciones de letra capital?","Fuente, número de líneas y distancia respecto al texto",["El número de páginas y los márgenes", "El idioma del documento"],"Son los ajustes indicados en el material.");
Q("ofimatica-ra1","medio","¿Qué hace la escala en las opciones avanzadas de Fuente?","Modifica horizontalmente la anchura de los caracteres",["Cambia la orientación de la página", "Añade un borde a las letras"],"La escala modifica el ancho de los caracteres.");
Q("ofimatica-ra1","medio","¿Qué método permite insertar una tabla indicando exactamente filas y columnas?","Insertar → Tabla → Insertar tabla",["Diseño → Tabla automática", "Referencias → Tabla"],"El diálogo Insertar tabla permite introducir cantidades exactas.");
Q("ofimatica-ra1","medio","¿Qué herramienta permite fijar el alto y ancho exactos de las celdas?","Presentación → Tamaño de celda",["Inicio → Fuente", "Vista → Regla"],"Tamaño de celda permite establecer medidas exactas.");
Q("ofimatica-ra1","medio","¿Qué operación une varias celdas seleccionadas?","Combinar celdas",["Dividir celdas", "Sombreado"],"Combinar celdas une las celdas seleccionadas.");
Q("ofimatica-ra1","medio","¿Qué hace =SUM(ABOVE) en una tabla?","Suma los valores numéricos situados encima de la celda",["Suma los valores de la derecha", "Cuenta las palabras de la celda"],"ABOVE se refiere a los valores situados encima.");
Q("ofimatica-ra1","medio","¿Qué estilos se recomiendan para apartados y subapartados de un índice?","Título 1 para apartados y Título 2 para subapartados",["Negrita para todos los párrafos", "Título 2 para apartados y texto normal para subapartados"],"El índice automático reconoce los estilos de título.");
Q("ofimatica-ra1","medio","¿Qué debes elegir para actualizar también los cambios de títulos y páginas del índice?","Actualizar toda la tabla",["Actualizar solo números", "Editar el índice manualmente"],"El procedimiento indica Actualizar tabla → Actualizar toda la tabla.");
Q("ofimatica-ra1","medio","¿Qué opción permite una portada sin el mismo encabezado o pie que el resto?","Primera página diferente",["Vincular al anterior", "Páginas pares e impares diferentes"],"Primera página diferente separa la portada del resto.");
/* OFIMÁTICA · RA1 · Preguntas dificil: basadas en los seis materiales de Word 365 */
Q("ofimatica-ra1","dificil","Un documento tiene títulos escritos con tamaño grande, pero el índice automático no los reconoce. ¿Qué debes hacer?","Aplicar los estilos Título 1 y Título 2 correspondientes",["Añadir más espacios antes de cada título", "Cambiar el color de página"],"El índice se genera a partir de los estilos aplicados a los títulos.");
Q("ofimatica-ra1","dificil","Tras añadir un apartado nuevo, el índice no lo muestra. ¿Cuál es el procedimiento correcto?","Actualizar tabla y elegir Actualizar toda la tabla",["Escribir el apartado directamente dentro del índice", "Cambiar el tema del documento"],"Hay que modificar el documento y actualizar la tabla automática.");
Q("ofimatica-ra1","dificil","Quieres que varias cantidades queden alineadas por la coma decimal. ¿Qué tabulación debes usar?","Decimal",["Derecha", "Barra"],"La tabulación decimal alinea usando el separador decimal.");
Q("ofimatica-ra1","dificil","En varias líneas de un listado, debes modificar la misma posición de tabulación. ¿Qué paso evita cambiar solo un párrafo?","Seleccionar previamente todos los párrafos afectados",["Hacer doble clic en la barra de título", "Insertar una tabla vacía"],"Las tabulaciones son una propiedad del párrafo.");
Q("ofimatica-ra1","dificil","Una lista de artículos necesita puntos automáticos entre el nombre y el precio. ¿Qué debes configurar?","Un relleno de puntos en el cuadro Tabulaciones",["Una marca de agua", "Un borde de página"],"El relleno completa el espacio hasta la siguiente posición de tabulación.");
Q("ofimatica-ra1","dificil","Quieres una inicial decorativa que ocupe varias líneas del párrafo. ¿Qué opción corresponde?","Insertar → Texto → Letra capital → En texto",["Aumentar la fuente de la inicial a 48 puntos", "Insertar → Número de página"],"La letra capital en texto se integra en el párrafo y ocupa varias líneas.");
Q("ofimatica-ra1","dificil","Quieres una letra capital fuera del bloque principal del párrafo, desplazada hacia el margen. ¿Qué opción eliges?","En margen",["En texto", "Ninguna"],"La opción En margen desplaza la letra hacia el margen.");
Q("ofimatica-ra1","dificil","Un texto se ve demasiado separado entre caracteres, pero no quieres insertar espacios manuales. ¿Qué ajuste sirve?","Espaciado comprimido",["Escala 150 %", "Posición elevada"],"El espaciado comprimido reduce la distancia entre caracteres.");
Q("ofimatica-ra1","dificil","Necesitas hacer caracteres más anchos sin limitarte a aumentar su tamaño. ¿Qué ajuste utilizas?","Escala",["Interlineado", "Sangría francesa"],"La escala cambia horizontalmente la anchura de los caracteres.");
Q("ofimatica-ra1","dificil","En una tabla de factura quieres crear una cabecera que abarque varias columnas. ¿Qué operación es adecuada?","Combinar celdas",["Eliminar filas", "Aplicar tabulación decimal"],"Combinar celdas permite crear zonas amplias.");
Q("ofimatica-ra1","dificil","Una tabla tiene una celda grande que debe convertirse en varias celdas. ¿Qué herramienta utilizas?","Dividir celdas",["Combinar celdas", "Sombreado"],"Dividir celdas crea filas y columnas dentro de una celda.");
Q("ofimatica-ra1","dificil","Quieres que el texto de una celda quede centrado tanto horizontal como verticalmente. ¿Dónde lo configuras?","Presentación → Alineación",["Diseño → Temas", "Referencias → Tabla de contenido"],"La alineación de tabla ofrece nueve posiciones.");
Q("ofimatica-ra1","dificil","Quieres sumar valores que están a la izquierda de una celda de tabla. ¿Qué referencia corresponde?","LEFT",["ABOVE", "BELOW"],"LEFT indica la zona situada a la izquierda de la celda actual.");
Q("ofimatica-ra1","dificil","Quieres cambiar el encabezado solo desde una sección nueva, sin alterar la anterior. ¿Qué debes hacer?","Insertar salto de sección y desactivar Vincular al anterior",["Cambiar el tema del documento", "Activar Mostrar todo"],"El salto crea otra sección y Vincular al anterior debe desactivarse.");
Q("ofimatica-ra1","dificil","En un documento a doble cara quieres encabezados distintos para páginas pares e impares. ¿Qué opción activas?","Páginas pares e impares diferentes",["Primera página diferente", "Quitar números de página"],"Esta opción está pensada para documentos a doble cara.");
Q("ofimatica-ra1","dificil","Una marca de agua debe identificar el documento sin dificultar su lectura. ¿Qué característica debe tener?","Ser tenue y quedar detrás del contenido",["Cubrir el texto con un color opaco", "Sustituir el encabezado"],"La marca de agua se sitúa detrás del contenido y debe permitir leerlo.");
Q("ofimatica-ra1","dificil","El color de página no aparece al imprimir. ¿Qué aspecto debes comprobar según los apuntes?","Si está activada la impresión de fondos",["Si está activado el interlineado", "Si hay una tabla en la primera página"],"El material advierte que el color puede no imprimirse si la impresión de fondos no está activada.");
Q("ofimatica-ra1","dificil","Quieres editar un encabezado ya creado. ¿Qué acción indica el material?","Hacer doble clic en la zona superior de la página",["Doble clic en la barra de estado", "Abrir el cuadro de Tabulaciones"],"El encabezado se puede editar con doble clic en su zona.");
Q("ofimatica-ra1","dificil","Quieres eliminar los números de página insertados. ¿Qué opción debes utilizar?","Quitar números de página",["Eliminar todas las tabulaciones", "Primera página diferente"],"La opción está en Insertar → Número de página.");
Q("ofimatica-ra1","dificil","Quieres que el documento mantenga colores y fuentes coherentes en todas sus páginas. ¿Qué recurso general utilizas?","Un tema desde Diseño → Temas",["Una tabulación decimal", "Una fórmula de tabla"],"Un tema combina colores, fuentes y efectos para mantener coherencia.");
/* Preguntas escritas para practicar y desarrollar */
W("ofimatica-ra1","facil","Describe qué es un procesador de textos y menciona cuatro tipos de documentos que se pueden crear con Word.","Una aplicación para crear, editar, dar formato, guardar, imprimir y compartir documentos. Ejemplos: cartas, informes, trabajos académicos, presupuestos, currículums, manuales o formularios.","Debe definir el procesador de textos y citar al menos cuatro documentos.");
W("ofimatica-ra1","facil","Explica la diferencia entre formato de carácter y formato de párrafo e indica las cuatro alineaciones fundamentales.","El formato de carácter afecta a las letras seleccionadas; el de párrafo afecta al párrafo completo. Las alineaciones son izquierda, centrada, derecha y justificada.","Debe distinguir los dos formatos y enumerar las cuatro alineaciones.");
W("ofimatica-ra1","facil","Explica para qué sirve el botón ¶ Mostrar todo y cita cuatro elementos que permite visualizar.","Permite ver elementos no imprimibles como espacios, marcas de párrafo, tabulaciones y saltos.","Debe mencionar que las marcas no se imprimen y dar cuatro ejemplos.");
W("ofimatica-ra1","facil","Describe los cuatro tipos de sangría que aparecen en los apuntes.","Izquierda: desplaza el párrafo desde el margen izquierdo. Derecha: lo separa del margen derecho. Primera línea: desplaza solo la primera línea. Francesa: deja la primera línea más a la izquierda y desplaza las siguientes.","Debe explicar correctamente las cuatro sangrías.");
W("ofimatica-ra1","medio","Explica qué es una tabulación y por qué no se deben alinear columnas usando espacios.","Es una posición horizontal establecida a la que se llega con Tab. Los espacios dependen de la fuente y los cambios del documento pueden desalinear las columnas.","Debe definir tabulación y explicar el problema de los espacios.");
W("ofimatica-ra1","medio","Enumera los cinco tipos de tabulación y explica brevemente para qué sirve cada uno.","Izquierda: texto hacia la derecha desde la posición. Centrada: centra el texto en la posición. Derecha: termina el texto en la posición. Decimal: alinea por el separador decimal. Barra: inserta una línea vertical.","Debe enumerar los cinco tipos y describirlos correctamente.");
W("ofimatica-ra1","medio","Explica cómo crear una tabulación desde la regla.","Activar la regla, pulsar el selector de tabulaciones, elegir el tipo, hacer clic en la posición deseada y escribir el contenido.","Debe incluir los pasos esenciales en orden.");
W("ofimatica-ra1","medio","Explica cómo establecer tabulaciones con medidas exactas.","Ir a Inicio → Párrafo → flecha inferior derecha → Tabulaciones; escribir posición, elegir alineación, pulsar Establecer, repetir y aceptar.","Debe citar la ruta y los pasos principales.");
W("ofimatica-ra1","facil","¿Qué es una letra capital y cómo se inserta en Word 365?","Es una letra inicial grande que ocupa varias líneas. Se escribe el párrafo, se coloca el cursor en él y se accede a Insertar → Texto → Letra capital.","Debe definirla y citar la ruta de inserción.");
W("ofimatica-ra1","medio","Explica la diferencia entre una letra capital y aumentar el tamaño de la primera letra.","Aumentar el tamaño solo hace la letra más grande; una letra capital se integra automáticamente con las primeras líneas del párrafo.","Debe señalar la integración automática con el párrafo.");
W("ofimatica-ra1","medio","Describe cuatro opciones de formato avanzado de caracteres que aparecen en los apuntes.","Escala cambia la anchura horizontal; expandido aumenta la separación; comprimido la reduce; posición elevada desplaza arriba y disminuida desplaza abajo.","Debe explicar al menos cuatro opciones de forma correcta.");
W("ofimatica-ra1","medio","Explica dos formas de crear una tabla y cómo desplazarte entre sus celdas con el teclado.","Se puede usar la cuadrícula de Insertar → Tabla o Insertar tabla para indicar filas y columnas. Tab avanza; Mayús + Tab retrocede; Tab en la última celda crea una fila nueva.","Debe incluir dos métodos y los atajos de navegación.");
W("ofimatica-ra1","medio","Explica qué significa combinar y dividir celdas.","Combinar une varias celdas seleccionadas; dividir crea varias filas o columnas dentro de una celda.","Debe distinguir las operaciones y su finalidad.");
W("ofimatica-ra1","dificil","¿Qué es la alineación de celdas y cuántas posiciones ofrece Word según los apuntes?","Permite colocar el contenido vertical y horizontalmente. Se ofrecen nueve posiciones combinando superior, centrado e inferior con izquierda, centro y derecha.","Debe indicar nueve posiciones y explicar la combinación.");
W("ofimatica-ra1","dificil","Explica qué hace la fórmula =SUM(ABOVE) y qué significan LEFT y RIGHT.","SUM(ABOVE) suma los valores numéricos situados encima de la celda. LEFT indica valores a la izquierda y RIGHT a la derecha.","Debe interpretar correctamente las tres referencias.");
W("ofimatica-ra1","facil","Explica qué es un índice automático y qué estilos se aplican a apartados y subapartados.","Es una lista de apartados y sus páginas. Se aplica Título 1 a los apartados principales y Título 2 a los subapartados.","Debe definir el índice y asignar ambos estilos correctamente.");
W("ofimatica-ra1","medio","Describe los pasos para insertar y actualizar un índice automático.","Aplicar Título 1 y Título 2; colocar el cursor donde irá el índice; ir a Referencias → Tabla de contenido → Tabla automática. Para actualizar: hacer clic, Actualizar tabla y Actualizar toda la tabla.","Debe incluir inserción y actualización.");
W("ofimatica-ra1","medio","Explica qué es una marca de agua y cómo se inserta o elimina.","Es un texto o imagen tenue detrás del contenido, por ejemplo BORRADOR o CONFIDENCIAL. Se inserta desde Diseño → Marca de agua y se elimina con Quitar marca de agua.","Debe definirla y citar las rutas de insertar y quitar.");
W("ofimatica-ra1","medio","Diferencia entre tema y conjunto de estilos en Word.","El tema combina colores, fuentes y efectos para el diseño general; los conjuntos de estilos aplican formatos coherentes a títulos, subtítulos y párrafos.","Debe distinguir diseño general y formato de texto.");
W("ofimatica-ra1","dificil","Explica cómo crear un encabezado o pie de página distinto en una sección nueva.","Insertar un salto de sección, abrir el encabezado o pie de la nueva sección, desactivar Vincular al anterior, escribir el contenido y comprobar ambas secciones.","Debe incluir salto de sección y desactivar Vincular al anterior.");

const LABEL={facil:'Fácil',medio:'Medio',dificil:'Difícil',mixta:'Mixta',op:'Opinión'};
const $=id=>document.getElementById(id);
const qbox=$('questions'),result=$('result'),bar=$('bar'),diffSel=$('diff'),numIn=$('num'),availTxt=$('availTxt');
let cs=null,current=[],answers=[],currentIndex=0,graded=false,instantShown=[];
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function selectedLevels(){return diffSel.value==='mixta'?['facil','medio','dificil']:[diffSel.value]}
function writtenLimit(){return selectedLevels().length*10}
function requestedWritten(){return (cs==='sostenibilitat-ra1'||diffSel.value==='op')?0:($('includeWritten').checked?Math.min(Number($('writtenCount').value)||1,writtenLimit()):0)}
function pool(){
  const b=bank.filter(q=>q.s===cs),levels=selectedLevels();
  // Siempre 20 tipo test por dificultad (60 en Mixta), más las escritas elegidas.
  const choices=levels.flatMap(level=>shuffle(b.filter(q=>q.d===level&&q.kind!=='write')).slice(0,20));
  const written=shuffle(b.filter(q=>levels.includes(q.d)&&q.kind==='write')).slice(0,requestedWritten());
  return shuffle(choices).concat(written);
}
function updateAvail(){
  const maxWritten=writtenLimit();$('writtenCount').max=maxWritten;$('writtenMax').textContent=maxWritten;
  if(Number($('writtenCount').value)>maxWritten)$('writtenCount').value=maxWritten;
  $('writtenValue').textContent=$('writtenCount').value;
  $('writtenCountWrap').classList.toggle('hidden',!$('includeWritten').checked);
  $('writtenHelp').textContent=cs==='sostenibilitat-ra1'?'Este RA contiene únicamente preguntas tipo test.':($('includeWritten').checked?'Se añadirán hasta '+requestedWritten()+' preguntas escritas. Las escritas no cuentan para la nota.':'Por defecto solo se incluirán preguntas tipo test. Activa la casilla para añadir preguntas escritas.');
  const n=pool().length||1;numIn.max=n;$('rangeMax').textContent=n;if(Number(numIn.value)>n)numIn.value=n;if(Number(numIn.value)<1)numIn.value=1;$('numValue').textContent=numIn.value;
  const available=pool().length;
  $('startBtn').disabled=available===0;
  availTxt.textContent=available===0?'Todavía no hay preguntas disponibles para este RA.':(cs==='sostenibilitat-ra1'?'Preguntas tipo test disponibles: '+available+' · Este RA no incluye preguntas escritas. Puedes elegir de 1 a '+n+'.':(diffSel.value==='op'?'Preguntas de opinión disponibles: '+available+' · Puedes elegir de 1 a '+n+'.':'Preguntas disponibles: '+available+' ('+(available-requestedWritten())+' tipo test y '+requestedWritten()+' escritas) · Puedes elegir de 1 a '+n+'.'));
}
function startTest(){
  const p=pool();if(!p.length)return;let n=parseInt(numIn.value,10);if(!n||n<1)n=1;n=Math.min(n,p.length);numIn.value=n;
  const written=shuffle(p.filter(q=>q.kind==='write')).slice(0,Math.min(requestedWritten(),n));
  const choices=shuffle(p.filter(q=>q.kind!=='write')).slice(0,n-written.length);
  current=shuffle(choices.concat(written)).map(q=>{
    if(q.d==='op')return {d:'op',kind:'op',t:q.t,exp:q.exp,opts:q.opts.map(t=>({t,ok:false}))};
    if(q.kind==='write')return {d:q.d,kind:'write',t:q.t,model:q.model,exp:q.exp};
    return {d:q.d,kind:'choice',t:q.t,exp:q.exp,opts:shuffle([{t:q.ok,ok:true},...q.bad.map(b=>({t:b,ok:false}))])};
  });
  answers=current.map(()=>({choice:null,text:''}));instantShown=current.map(()=>false);currentIndex=0;graded=false;
  $('quizInfo').textContent=n+' preguntas · Dificultad: '+LABEL[diffSel.value];
  $('setup').classList.add('hidden');$('quiz').classList.remove('hidden');
  result.style.display='none';result.innerHTML='';render();window.scrollTo({top:0,behavior:'smooth'});
}
function render(){
  qbox.innerHTML='';
  if(!current.length)return;
  const q=current[currentIndex],a=answers[currentIndex],d=document.createElement('div');d.className='question';
  const kindLabel=q.kind==='write'?'Respuesta escrita · sin nota':q.kind==='op'?'Opinión · sin nota':LABEL[q.d];
  const badgeClass=q.kind==='write'||q.kind==='op'?'opinion':'badge '+q.d;
  let html=`<p>${currentIndex+1}. ${q.t}<span class="${badgeClass}">${kindLabel}</span></p>`;
  if(q.kind==='choice'||q.kind==='op'){
    html+=q.opts.map((o,j)=>{const chosen=a.choice===j;const locked=q.kind==='choice'&&a.choice!==null;const cls=locked?(chosen?(o.ok?' selected-correct':' selected-wrong'):' locked'): '';return `<label class="option${cls}"><input type="radio" name="currentChoice" value="${j}" ${chosen?'checked':''} ${locked?'disabled':''}> <span class="option-letter">${String.fromCharCode(65+j)}</span><span>${o.t}</span></label>`}).join('');
  }
  if(q.kind==='write'||q.kind==='op'){
    html+=`<textarea id="writtenAnswer" placeholder="Escribe tu respuesta con tus propias palabras…"></textarea>`;
  }
  html+=`<div class="feedback" id="currentFeedback"></div>`;
  d.innerHTML=html;qbox.appendChild(d);
  const ta=$('writtenAnswer');if(ta)ta.value=a.text;
  $('questionCount').textContent='Pregunta '+(currentIndex+1)+' de '+current.length;
  $('prevQuestionBtn').classList.toggle('hidden',currentIndex===0);
  $('nextQuestionBtn').classList.toggle('hidden',currentIndex===current.length-1);
  $('correctBtn').classList.toggle('hidden',currentIndex!==current.length-1);
  updateProgress();
  if(graded||instantShown[currentIndex])showFeedback(currentIndex);
}
function updateProgress(){bar.style.width=(current.length?(currentIndex+1)/current.length*100:0)+'%'}
function rightIdx(i){return current[i].opts.findIndex(o=>o.ok)}
function showFeedback(i){
  if(i!==currentIndex)return;
  const f=$('currentFeedback');if(!f)return;
  const q=current[i],a=answers[i];
  if(q.kind==='write'){
    f.className='feedback muted';
    f.textContent=(a.text.trim()?'Respuesta guardada. No se corrige literalmente ni resta puntos. ':'Sin respuesta escrita. No resta puntos. ')+'Respuesta orientativa: '+q.model+' '+q.exp;
    return;
  }
  if(q.kind==='op'){
    f.className='feedback muted';
    f.textContent=(a.choice!==null||a.text.trim()?'Respuesta personal guardada. ':'Pregunta de opinión. ')+'No hay una respuesta correcta y no puntúa. '+q.exp;
    return;
  }
  if(a.choice===null){f.className='feedback muted';f.textContent=graded?'En blanco. Respuesta correcta: '+current[i].opts[rightIdx(i)].t:'';return;}
  const ri=rightIdx(i),ok=a.choice===ri;
  f.className='feedback '+(ok?'correct':'incorrect');
  f.textContent=(ok?'✓ Correcto. ':'✗ Incorrecto. ')+q.exp+(ok?'':' Respuesta correcta: '+String.fromCharCode(65+ri)+'. '+q.opts[ri].t);
}
qbox.addEventListener('change',e=>{
  if(e.target.matches('input[name="currentChoice"]')){
    const isTest=current[currentIndex].kind==='choice';
    if(isTest&&answers[currentIndex].choice!==null)return; // Un solo intento en tipo test.
    answers[currentIndex].choice=Number(e.target.value);
    if(isTest){
      qbox.querySelectorAll('input[name="currentChoice"]').forEach(input=>input.disabled=true);
      qbox.querySelectorAll('.option').forEach((label,j)=>{const option=current[currentIndex].opts[j];if(j===answers[currentIndex].choice)label.classList.add(option.ok?'selected-correct':'selected-wrong');else label.classList.add('locked');});
      instantShown[currentIndex]=true;
    }
    updateProgress();
    // Corrección inmediata y bloqueo SOLO para preguntas tipo test; opinión sigue siendo editable.
    showFeedback(currentIndex);
  }
});
qbox.addEventListener('input',e=>{if(e.target.id==='writtenAnswer')answers[currentIndex].text=e.target.value;});
function moveQuestion(step){
  const ta=$('writtenAnswer');if(ta)answers[currentIndex].text=ta.value;
  currentIndex=Math.max(0,Math.min(current.length-1,currentIndex+step));render();
  if(graded&&result.style.display==='block')$('result').scrollIntoView({behavior:'smooth',block:'nearest'});
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function correct(){
  const ta=$('writtenAnswer');if(ta)answers[currentIndex].text=ta.value;
  let answered=0,score=0,blank=0,op=0,writeAnswered=0,writeBlank=0;
  const wrongItems=[];
  current.forEach((q,i)=>{
    const a=answers[i];
    if(q.kind==='op'){op++;return;}
    if(q.kind==='write'){if(a.text.trim())writeAnswered++;else writeBlank++;return;}
    if(a.choice!==null){
      answered++;
      if(a.choice===rightIdx(i))score++;
      else wrongItems.push({question:q.t,chosen:q.opts[a.choice]?.t||'Respuesta no disponible',correct:q.opts[rightIdx(i)]?.t||'Respuesta no disponible'});
    }else blank++;
  });
  graded=true;
  const wrong=answered-score,totalTest=answered+blank;
  const grade=totalTest?(score/totalTest*10):0;
  const gradeText=grade.toLocaleString('es-ES',{minimumFractionDigits:2,maximumFractionDigits:2});
  const wrongHtml=wrongItems.length?`<section class="wrong-review"><h4>✕ Preguntas que has fallado (${wrongItems.length})</h4><ol>${wrongItems.map(item=>`<li><b>${escapeHtml(item.question)}</b><p>Tu respuesta: <span class="incorrect">${escapeHtml(item.chosen)}</span></p><p>Respuesta correcta: <span class="correct">${escapeHtml(item.correct)}</span></p></li>`).join('')}</ol></section>`:'<div class="result-extra"><b class="correct">✓ ¡Perfecto! No has fallado ninguna pregunta tipo test.</b></div>';
  const message=grade>=9?'¡Excelente trabajo! Has conseguido una nota sobresaliente.':grade>=7?'¡Buen trabajo! Tienes una buena base; revisa los errores para seguir mejorando.':grade>=5?'Has aprobado. Repasa las preguntas falladas para afianzar los conceptos.':'Sigue practicando: revisar los errores te ayudará a mejorar en el próximo intento.';
  $('testControls').classList.add('hidden');
  $('quiz').querySelector('h2').textContent='Resultados del examen';
  $('quizInfo').classList.add('hidden');
  result.style.display='block';
  result.innerHTML=`<div class="result-head"><span class="result-kicker">Examen finalizado</span><h3>Este es tu resultado</h3><p>Has completado el examen. Aquí tienes el resumen de tu rendimiento.</p><div class="result-grade"><strong>${gradeText}</strong><span>NOTA SOBRE 10</span></div></div><div class="result-stats"><div class="result-stat good"><strong>${score}</strong><span>Correctas</span></div><div class="result-stat bad"><strong>${wrong}</strong><span>Incorrectas</span></div><div class="result-stat neutral"><strong>${blank}</strong><span>En blanco</span></div></div><p class="result-message">${message}</p>${wrongHtml}${(writeAnswered||writeBlank)?`<div class="result-extra"><b>Preguntas escritas:</b> ${writeAnswered} respondidas y ${writeBlank} sin responder. No cuentan para la nota; sus respuestas orientativas se pueden consultar durante el examen, antes de finalizar.</div>`:''}${op?`<div class="result-extra">Preguntas de opinión: ${op}. No cuentan para la nota.</div>`:''}<div class="result-actions"><button class="primary" id="resultNewBtn">↻ Preparar otro examen</button></div>`;
  result.scrollIntoView({behavior:'smooth',block:'start'});
}
diffSel.addEventListener('change',()=>{updateAvail()});
numIn.addEventListener('input',()=>$('numValue').textContent=numIn.value);
numIn.addEventListener('change',updateAvail);
$('allBtn').addEventListener('click',()=>{numIn.value=pool().length;updateAvail()});
$('includeWritten').addEventListener('change',updateAvail);
$('writtenCount').addEventListener('input',()=>{$('writtenValue').textContent=$('writtenCount').value;updateAvail()});
$('writtenCount').addEventListener('change',updateAvail);
$('startBtn').addEventListener('click',startTest);
$('prevQuestionBtn').addEventListener('click',()=>moveQuestion(-1));
$('nextQuestionBtn').addEventListener('click',()=>moveQuestion(1));
$('correctBtn').addEventListener('click',correct);
function resetTest(){$('quiz').classList.add('hidden');$('setup').classList.remove('hidden');$('testControls').classList.remove('hidden');$('quiz').querySelector('h2').textContent='Examen tipo test';$('quizInfo').classList.remove('hidden');result.style.display='none';result.innerHTML='';current=[];answers=[];currentIndex=0;graded=false;instantShown=[];qbox.innerHTML='';bar.style.width='0';$('questionCount').textContent=''}
$('resetBtn').addEventListener('click',resetTest);
result.addEventListener('click',e=>{if(e.target.closest('#resultNewBtn'))resetTest()});

/* ===== Buscador ===== */
const study=$('study'),sInput=$('searchInput'),sStatus=$('searchStatus');
let hits=[],cur=-1,openBefore=null,lastQuery='';
function norm(s){let o='';for(let i=0;i<s.length;i++){o+=s[i].normalize('NFD').charAt(0).toLowerCase()}return o}
function unwrap(){study.querySelectorAll('mark.hit').forEach(m=>{const p=m.parentNode;m.replaceWith(document.createTextNode(m.textContent));p.normalize()});hits=[];cur=-1}
function restoreDetails(){if(openBefore){study.querySelectorAll('details').forEach(d=>{d.open=openBefore.has(d)});openBefore=null}}
function goTo(i){if(!hits.length)return;cur=(i+hits.length)%hits.length;hits.forEach(h=>h.classList.remove('current'));const h=hits[cur];h.classList.add('current');const d=h.closest('details');if(d)d.open=true;h.scrollIntoView({behavior:'smooth',block:'center'});sStatus.textContent='Coincidencia '+(cur+1)+' de '+hits.length}
function doSearch(){
  const raw=sInput.value.trim();unwrap();lastQuery=raw;
  if(!raw){restoreDetails();sStatus.textContent='';return}
  if(raw.length<2){sStatus.textContent='Escribe al menos 2 letras.';return}
  if(!openBefore)openBefore=new Set([...study.querySelectorAll('details')].filter(d=>d.open));
  const q=norm(raw);
  const walker=document.createTreeWalker($('notes'),NodeFilter.SHOW_TEXT,{acceptNode:n=>(n.parentElement.closest('script,style')||!n.nodeValue.trim())?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{const text=node.nodeValue,nt=norm(text);let idx=nt.indexOf(q);if(idx<0)return;
    const frag=document.createDocumentFragment();let last=0;
    while(idx>=0){frag.append(text.slice(last,idx));const m=document.createElement('mark');m.className='hit';m.textContent=text.slice(idx,idx+q.length);frag.append(m);last=idx+q.length;idx=nt.indexOf(q,last)}
    frag.append(text.slice(last));node.replaceWith(frag)});
  hits=[...study.querySelectorAll('mark.hit')];
  study.querySelectorAll('details').forEach(d=>{d.open=!!d.querySelector('mark.hit')});
  if(!hits.length){sStatus.textContent='Sin resultados para «'+raw+'».';return}
  const secs=new Set(hits.map(h=>h.closest('details')).filter(Boolean)).size;
  goTo(0);sStatus.textContent='Coincidencia 1 de '+hits.length+' · en '+secs+' apartado'+(secs===1?'':'s');
}
$('searchBtn').addEventListener('click',doSearch);
$('nextBtn').addEventListener('click',()=>hits.length?goTo(cur+1):doSearch());
$('prevBtn').addEventListener('click',()=>hits.length?goTo(cur-1):doSearch());
function clearSearch(){sInput.value='';unwrap();openBefore=null;lastQuery='';sStatus.textContent=''}
$('clearBtn').addEventListener('click',()=>{sInput.value='';unwrap();restoreDetails();lastQuery='';sStatus.textContent=''});
sInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();if(hits.length&&sInput.value.trim()===lastQuery)goTo(e.shiftKey?cur-1:cur+1);else doSearch()}});

/* ===== Asignaturas, pestañas y tema ===== */
function showTab(t){document.querySelectorAll('.tabs button').forEach(x=>x.classList.toggle('active',x.dataset.tab===t));document.querySelectorAll('.tabcontent').forEach(x=>x.classList.add('hidden'));$(t).classList.remove('hidden')}
document.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>showTab(b.dataset.tab)));
function initNotesToggles(raId){
  // Solo activa el control de apartados en Sistemas operativos · RA1 y Sostenibilidad · RA1.
  if(!['so-monolloc-ra1','sostenibilitat-ra1'].includes(raId)) return;
  $('notes').querySelectorAll('details.topic > summary').forEach(summary=>{
    summary.addEventListener('click',event=>{
      event.preventDefault();
      const section=summary.parentElement;
      section.open=!section.open;
    });
  });
}

function openSubject(id){
  
  cs=id;const S=LEARNING_OUTCOMES[id],SUB=SUBJECTS[S.subjectId];
  $('title').textContent=SUB.icon+' '+SUB.name;$('heroDesc').textContent='RA: '+S.name+' · '+S.desc;
  $('notes').innerHTML='';
  const notesTemplate=$('notes-'+id);
  if(notesTemplate){$('notes').appendChild(notesTemplate.content.cloneNode(true));initNotesToggles(id);}
  else{$('notes').innerHTML=`<div class="panel empty-content"><h2>${S.name}</h2><p><b>Apuntes pendientes de añadir.</b></p><p>Este apartado ya está creado. El material de estudio está pendiente de incorporarse.</p></div>`;}
  $('keyBox').innerHTML='';
  const keyTemplate=$('key-'+id);
  if(keyTemplate){$('keyBox').appendChild(keyTemplate.content.cloneNode(true));}
  else{$('keyBox').innerHTML='<div class="panel empty-content"><h2>Repaso rápido</h2><p>Apuntes pendientes de añadir.</p></div>';}
  const n=bank.filter(q=>q.s===id),hasOp=n.some(q=>q.d==='op');
  const isSustainabilityRA1=id==='sostenibilitat-ra1';
  document.querySelector('.written-config').classList.toggle('hidden',isSustainabilityRA1);
  $('setupDescription').textContent=isSustainabilityRA1?'Este RA contiene únicamente las preguntas tipo test del Kahoot. Elige la dificultad o selecciona Mixta para reunir las 11 preguntas. No hay preguntas escritas en este apartado.':'Elige la dificultad, si quieres incluir preguntas escritas y cuántas preguntas quieres hacer. Cada dificultad tiene 20 preguntas tipo test y hasta 10 escritas; la modalidad mixta reúne las tres dificultades.';
  const hasWritten=n.some(q=>q.kind==='write');$('opNote').textContent=(hasWritten?'Hay preguntas de respuesta escrita: puedes contestar con tus palabras; no se corrigen literalmente ni cuentan para la nota. Al finalizar verás una respuesta orientativa. ':'')+(hasOp?'También hay preguntas de opinión (modo «Solo opinión»): eliges tu propia respuesta, no hay una correcta y no cuentan como error.':'');
  diffSel.innerHTML='<option value="mixta">🎲 Mixta</option><option value="facil">🟢 Fácil</option><option value="medio">🟡 Medio</option><option value="dificil">🔴 Difícil</option>'+(hasOp?'<option value="op">💭 Solo opinión (sin nota)</option>':'');
  clearSearch();resetTest();$('includeWritten').checked=false;$('writtenCount').value=5;numIn.value=10;updateAvail();showTab('study');
  $('home').classList.add('hidden');$('raHome').classList.add('hidden');$('subject').classList.remove('hidden');$('homeBtn').classList.remove('hidden');$('subjSel').classList.remove('hidden');$('subjSel').value=id;
  window.scrollTo({top:0});
}
function goHome(){cs=null;$('title').textContent='📚 Apuntes de estudio';$('heroDesc').textContent='Elige una asignatura y después el RA que quieras estudiar.';$('subject').classList.add('hidden');$('raHome').classList.add('hidden');$('home').classList.remove('hidden');$('homeBtn').classList.add('hidden');$('subjSel').classList.add('hidden')}
$('subjGrid').innerHTML=Object.entries(SUBJECTS).map(([id,s])=>`<button class="subjcard" data-subject="${id}"><span class="subject-name">${s.name}</span></button>`).join('');
function showLearningOutcomes(subjectId){
 const subject=SUBJECTS[subjectId];
 $('home').classList.add('hidden');$('raHome').classList.remove('hidden');
 $('raSubjectTitle').textContent=subject.icon+' '+subject.name;
 const outcomes=Object.entries(LEARNING_OUTCOMES).filter(([id,ra])=>ra.subjectId===subjectId);
 $('raGrid').innerHTML=outcomes.map(([id,ra])=>`<button class="subjcard" data-ra="${id}"><span class="ra-name">${ra.name}</span><span class="subject-desc">${ra.desc}</span>${document.getElementById('notes-'+id)?'':'<span class="card-label">Apuntes pendientes</span>'}</button>`).join('');
 $('subjSel').innerHTML=outcomes.map(([id,ra])=>`<option value="${id}">${ra.name}</option>`).join('');
 $('subjSel').classList.add('hidden');
}
$('subjGrid').addEventListener('click',e=>{const b=e.target.closest('[data-subject]');if(b)showLearningOutcomes(b.dataset.subject)});
$('raGrid').addEventListener('click',e=>{const b=e.target.closest('[data-ra]');if(b)openSubject(b.dataset.ra)});
$('backSubjectsBtn').addEventListener('click',goHome);
$('subjSel').addEventListener('change',e=>openSubject(e.target.value));
$('homeBtn').addEventListener('click',goHome);
$('themeBtn').addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';try{localStorage.setItem('portal-theme',dark?'dark':'light')}catch(e){}$('themeBtn').textContent=dark?'☀️ Cambiar tema':'🌙 Cambiar tema'});
if(document.documentElement.dataset.theme==='dark')$('themeBtn').textContent='☀️ Cambiar tema';
