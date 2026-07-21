/* =========================================================
   MARKELEN ENTRENAMENDUA — datos y lógica
   Todo el contenido vive aquí abajo en DATA / EXERCISES.
   Para editar textos, series, reps, fotos o vídeos: modifica
   estos objetos, no hace falta tocar el HTML.
   ========================================================= */

/* ---------- FICHAS DE EJERCICIOS (reutilizables) ---------- */
/* photo: ruta de la imagen. video: id de YouTube (o "" si no tienes aún). */
const EXERCISES = {
  rdl: {
    name: "Peso muerto rumano (RDL)", icon: "fa-person-walking",
    series: "4", reps: "8-10", tempo: "3-1-X-1", descanso: "2-3 min", rpe: "7-8",
    photo: "img/ejercicios/rdl.jpg", video: "",
    tecnica: ["Pies a la anchura de las caderas.", "Agarre justo por fuera de las piernas.", "Pecho \"orgulloso\", abdomen activo.", "Empuja la cadera hacia atrás; la barra va pegada a las piernas.", "Baja hasta notar gran estiramiento en isquios.", "Sube empujando el suelo y extendiendo la cadera."],
    claves: ["Barra pegada al cuerpo", "Espalda neutra", "Rodillas ligeramente flexionadas", "El movimiento nace de la cadera"],
    errores: ["Convertirlo en una sentadilla", "Doblar demasiado las rodillas", "Redondear la espalda", "Alejar la barra del cuerpo", "Mirar hacia arriba"],
    donde: "Isquios y glúteos. Nunca la zona lumbar.",
    progresion: "Al completar 6×8 con buena técnica y RPE ≤7, sube 2,5-5 kg la semana siguiente."
  },
  bulgara: {
    name: "Sentadilla búlgara", icon: "fa-person-running",
    series: "3 por pierna", reps: "8-10 por pierna", tempo: "2-1-X-1", descanso: "90-120 seg", rpe: "",
    photo: "img/ejercicios/bulgara.jpg", video: "",
    tecnica: ["Pie trasero apoyado en banco, tronco erguido.", "Baja de forma controlada hasta rozar la rodilla trasera con el suelo.", "Empuja con el talón delantero para subir."],
    claves: ["Tronco estable", "Rodilla delantera alineada con el pie"], errores: ["Perder el equilibrio por ir demasiado rápido"],
    donde: "Cuádriceps y glúteo de la pierna delantera.", progresion: "Añade peso cuando completes todas las series con RIR 2."
  },
  curlFemoral: {
    name: "Curl femoral sentado", icon: "fa-dumbbell",
    series: "3", reps: "10-12", tempo: "2-1-2", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/curl-femoral.jpg", video: "",
    tecnica: [], claves: ["Sube fuerte", "Baja lentamente", "Aprieta 1 segundo arriba"],
    errores: ["Dejar caer el peso"], donde: "Isquiotibiales.", progresion: ""
  },
  hipThrust: {
    name: "Hip Thrust", icon: "fa-arrow-up",
    series: "3", reps: "8-10", tempo: "2-2-X-1 (mantén 2\" arriba)", descanso: "2 min", rpe: "",
    photo: "img/ejercicios/hip-thrust.jpg", video: "",
    tecnica: ["Espalda apoyada en el banco.", "Mentón ligeramente hacia el pecho.", "Empuja con los talones.", "Aprieta los glúteos arriba."],
    claves: ["No arquees la espalda"], errores: ["Hiperextender la zona lumbar"], donde: "Glúteos.", progresion: ""
  },
  gemeloPie: {
    name: "Gemelo de pie", icon: "fa-shoe-prints",
    series: "4", reps: "12", tempo: "1-1-3 (sube rápido, baja 3\")", descanso: "60-90 seg", rpe: "",
    photo: "img/ejercicios/gemelo-pie.jpg", video: "",
    tecnica: [], claves: ["Máximo recorrido", "Sin rebotes", "Mantén el equilibrio"], errores: [], donde: "Gemelos.", progresion: ""
  },
  soleo: {
    name: "Sóleo — elevación de talón sentado", icon: "fa-shoe-prints",
    series: "3", reps: "15", tempo: "2-1-3", descanso: "60-90 seg", rpe: "",
    photo: "img/ejercicios/soleo.jpg", video: "",
    tecnica: ["En máquina: siéntate, puntas de los pies en la plataforma, rodillas a ~90°.", "Baja lentamente hasta notar estiramiento y sube al máximo. Mantén 1\" arriba.", "Sin máquina: sentado en un banco con una mancuerna sobre las rodillas, puntas de los pies sobre un escalón, misma ejecución."],
    claves: [], errores: [], donde: "Sóleo.", progresion: ""
  },
  abduccion: {
    name: "Abducción de cadera (máquina)", icon: "fa-arrows-left-right",
    series: "3", reps: "15", tempo: "", descanso: "20 seg", rpe: "",
    photo: "img/ejercicios/abduccion.jpg", video: "",
    tecnica: [], claves: [], errores: [], donde: "Glúteo medio.", progresion: ""
  },
  pallof: { name: "Pallof Press", icon: "fa-shield", series: "3", reps: "12", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/pallof.jpg", video: "", tecnica: ["Anti-rotación: resiste la fuerza de la polea/banda sin dejar que gire el tronco."], claves: [], errores: [], donde: "Core (oblicuos).", progresion: "" },
  planchaHombro: { name: "Plancha con toque de hombro", icon: "fa-hand", series: "3", reps: "30-40 seg", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/plancha-hombro.jpg", video: "", tecnica: ["Posición de plancha alta, toca el hombro contrario sin balancear la cadera."], claves: [], errores: ["Rotar la cadera"], donde: "Core.", progresion: "" },
  farmerCarry: { name: "Farmer Carry", icon: "fa-weight-hanging", series: "3", reps: "30 m", tempo: "", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/farmer-carry.jpg", video: "", tecnica: ["Carga en ambas manos, camina con el torso erguido y el core firme."], claves: [], errores: [], donde: "Core, trapecios y agarre.", progresion: "" },
  broadJump: { name: "Broad Jump (salto horizontal)", icon: "fa-person-running", series: "3", reps: "5", tempo: "", descanso: "Descanso completo entre series", rpe: "",
    photo: "img/ejercicios/broad-jump.jpg", video: "", tecnica: ["Salto a máxima distancia con recepción controlada y estable."], claves: [], errores: [], donde: "Potencia de piernas.", progresion: "" },
  dominadas: { name: "Dominadas", icon: "fa-arrow-up-long", series: "4", reps: "RIR 2", tempo: "", descanso: "2 min", rpe: "",
    photo: "img/ejercicios/dominadas.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Dorsal y bíceps.", progresion: "" },
  flexionesLastradas: { name: "Flexiones lastradas", icon: "fa-person", series: "4", reps: "RIR 2", tempo: "", descanso: "2 min", rpe: "",
    photo: "img/ejercicios/flexiones.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Pecho, tríceps, hombro.", progresion: "" },
  remoTRX: { name: "Remo TRX", icon: "fa-grip-lines", series: "4", reps: "12", tempo: "", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/remo-trx.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Espalda media.", progresion: "" },
  pesoMuertoUnilateral: { name: "Peso muerto unilateral", icon: "fa-person-walking", series: "3", reps: "10", tempo: "", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/pm-unilateral.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Isquios y equilibrio.", progresion: "" },
  nordicCurl: { name: "Nordic Curl", icon: "fa-person-falling", series: "3", reps: "5", tempo: "", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/nordic-curl.jpg", video: "", tecnica: ["Excéntrico controlado de isquios, tobillos fijados por un compañero o anclaje."], claves: [], errores: [], donde: "Isquiotibiales.", progresion: "" },
  gemeloViernes: { name: "Gemelo (viernes)", icon: "fa-shoe-prints", series: "3", reps: "15", tempo: "", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/gemelo-viernes.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Gemelos.", progresion: "" },
  woodChop: { name: "Wood Chop", icon: "fa-bolt", series: "3", reps: "12", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/wood-chop.jpg", video: "", tecnica: ["Rotación de tronco con polea/banda, de arriba-fuera a abajo-dentro."], claves: [], errores: [], donde: "Core rotacional.", progresion: "" },
  suitcaseCarry: { name: "Suitcase Carry", icon: "fa-briefcase", series: "3", reps: "25 m", tempo: "", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/suitcase-carry.jpg", video: "", tecnica: ["Carga en una sola mano, evita inclinar el tronco hacia el lado cargado."], claves: [], errores: [], donde: "Core antilateral.", progresion: "" },
  abWheel: { name: "Ab Wheel", icon: "fa-circle-notch", series: "3", reps: "10", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/ab-wheel.jpg", video: "", tecnica: ["Extiende sin dejar caer la zona lumbar; vuelve controlando con el abdomen."], claves: [], errores: ["Arquear la espalda baja"], donde: "Core.", progresion: "" },
  deadBug: { name: "Dead Bug", icon: "fa-bug", series: "3", reps: "10", tempo: "", descanso: "30-45 seg", rpe: "",
    photo: "img/ejercicios/dead-bug.jpg", video: "", tecnica: ["Espalda pegada al suelo, extiende brazo y pierna contraria sin perder contacto lumbar."], claves: [], errores: [], donde: "Core profundo.", progresion: "" },
  sidePlank: { name: "Side Plank", icon: "fa-child-reaching", series: "3", reps: "30 seg", tempo: "", descanso: "30-45 seg", rpe: "",
    photo: "img/ejercicios/side-plank.jpg", video: "", tecnica: ["Cadera elevada y alineada, sin rotar el tronco."], claves: [], errores: [], donde: "Oblicuos, glúteo medio.", progresion: "" },
  birdDog: { name: "Bird Dog", icon: "fa-dog", series: "3", reps: "10", tempo: "", descanso: "30-45 seg", rpe: "",
    photo: "img/ejercicios/bird-dog.jpg", video: "", tecnica: ["Extiende brazo y pierna contraria manteniendo la zona lumbar neutra."], claves: [], errores: [], donde: "Core y estabilidad lumbopélvica.", progresion: "" }
};

/* Ejercicios de fascitis / pie (mismo formato, mostrados en la sección específica) */
const FASCITIS_EXERCISES = {
  liberacionPlantar: {
    name: "Liberación plantar", icon: "fa-hand-holding-medical",
    series: "1 min por pie", reps: "", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/liberacion-plantar.jpg", video: "",
    tecnica: ["Con pelota de lacrosse o tenis, rueda lentamente desde el talón hasta los dedos.", "Busca zonas tensas y mantén la presión 10-15 segundos."],
    claves: ["Reduce rigidez", "Activa la musculatura intrínseca del pie", "Mejora la movilidad"],
    errores: ["Hacer demasiada presión", "Rodar muy rápido"], donde: "Fascia plantar.", progresion: ""
  },
  shortFoot: { name: "Short Foot", icon: "fa-shoe-prints", series: "3", reps: "10 (isometría breve)", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/short-foot.jpg", video: "",
    tecnica: ["Con el pie apoyado, acorta la planta acercando la base del dedo gordo al talón sin flexionar los dedos."],
    claves: ["Fortalece la musculatura intrínseca del pie"], errores: ["Compensar flexionando los dedos"], donde: "Arco plantar.", progresion: "" },
  toeYoga: { name: "Toe Yoga", icon: "fa-hand-point-up", series: "2-3", reps: "8-10", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/toe-yoga.jpg", video: "",
    tecnica: ["Levanta solo el dedo gordo manteniendo el resto apoyados; luego al revés."], claves: ["Mejora el control motor del pie"], errores: [], donde: "Musculatura intrínseca del pie.", progresion: "" },
  tibialRaises: { name: "Tibial Raises", icon: "fa-shoe-prints", series: "2", reps: "15", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/tibial-raises.jpg", video: "",
    tecnica: ["Apoyado en la pared, eleva únicamente las puntas de los pies."], claves: [], errores: [], donde: "Tibial anterior.", progresion: "" },
  gemeloExcentrico: { name: "Gemelos excéntricos", icon: "fa-shoe-prints", series: "3", reps: "12-15", tempo: "Bajada lenta (3-4\")", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/gemelo-excentrico.jpg", video: "",
    tecnica: ["Sube con las dos piernas, baja lento con una sola pierna."], claves: ["Clave en la recuperación de fascitis"], errores: [], donde: "Gemelo y tendón de Aquiles.", progresion: "" },
  dorsiflexionPared: { name: "Dorsiflexión contra pared", icon: "fa-person", series: "2", reps: "10 por pierna", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/dorsiflexion.jpg", video: "",
    tecnica: ["Apoya el pie a unos centímetros de la pared e intenta tocarla con la rodilla sin levantar el talón."],
    claves: ["Mayor movilidad", "Menor tensión sobre la fascia", "Mejor sentadilla"],
    errores: ["Levantar el talón", "Girar el pie"], donde: "Tobillo (dorsiflexión).", progresion: "" }
};

/* ---------- DATOS GENERALES ---------- */
const DATA = {
  pillars: [
    { icon: "fa-bolt", title: "Cadena posterior potente", text: "Responsable de la aceleración, las frenadas y los golpeos." },
    { icon: "fa-shoe-prints", title: "Fin a la fascitis plantar", text: "Reforzando todo el complejo pie-tobillo-gemelo." },
    { icon: "fa-dumbbell", title: "Tren superior funcional", text: "Fuerte, sin interferir con el rendimiento en el frontón." }
  ],
  philosophy: [
    { title: "Fuerza útil", text: "No buscamos músculos grandes. Buscamos músculos capaces de producir fuerza rápidamente. Cada ejercicio tiene transferencia directa al juego." },
    { title: "Prioridad a la cadena posterior", text: "Glúteo mayor, glúteo medio, isquiotibiales, aductores, erectores espinales, gemelos, sóleo y fascia plantar: el motor del rendimiento." },
    { title: "El pie es el comienzo de todo", text: "La fascitis plantar rara vez aparece únicamente por la fascia. Generalmente existe un problema en la cadena completa." },
    { title: "Calidad antes que cantidad", text: "Cada repetición debe parecerse a la anterior. No perseguimos el fallo muscular, perseguimos el movimiento perfecto — dejando 1-3 RIR." },
    { title: "Recuperar también es entrenar", text: "Dormir poco, comer mal, no hidratarse o no hacer movilidad equivale a entrenar menos. El objetivo es recuperarse para volver a entrenar fuerte." }
  ],
  rpeTable: [
    ["Muy fácil", "4", "Calentamiento"],
    ["Fácil", "3", "Técnica"],
    ["Moderado", "2", "Trabajo habitual"],
    ["Difícil", "1", "Última serie"],
    ["Máximo", "0", "Solo en tests, nunca en rutina"]
  ],
  trafficLight: [
    { level: "verde", icon: "fa-circle-check", title: "Verde · 0-2/10", items: ["Entrenamiento normal", "Mantén el trabajo de prevención"] },
    { level: "amarillo", icon: "fa-triangle-exclamation", title: "Amarillo · 3-5/10", items: ["Reduce un 20-30% el volumen", "Evita impactos y pliometría", "Prioriza movilidad y ejercicios excéntricos"] },
    { level: "rojo", icon: "fa-circle-xmark", title: "Rojo · >5/10", items: ["Suspende los ejercicios de impacto", "Solo movilidad y trabajo de pie", "Consulta con un fisioterapeuta si persiste"] }
  ],
  rules: [
    { icon: "fa-face-dizzy", title: "Dolor", text: "Nunca entrenar con dolor superior a 3/10. Si aumenta durante la sesión: reduce carga, reduce volumen o sustituye el ejercicio. Nunca \"aguantar\"." },
    { icon: "fa-bullseye", title: "Técnica", text: "La técnica siempre tiene prioridad sobre el peso. Una repetición perfecta vale más que cinco malas." },
    { icon: "fa-chart-line", title: "Progresión", text: "Solo aumentamos la carga cuando la técnica es perfecta, completas todas las series y mantienes 1-2 repeticiones en reserva." },
    { icon: "fa-hourglass-half", title: "Descansos", text: "Principales: 2-3 min · Accesorios: 60-90 seg · Core: 30-45 seg · Movilidad: según necesidad." }
  ],
  goldenRules: [
    { text: "Si el entrenamiento dura <strong>más de 90 minutos</strong>: reduce un ejercicio accesorio, nunca el principal." },
    { text: "Si tienes <strong>molestias en la fascia plantar</strong>: elimina los saltos ese día, pero mantén el trabajo de fuerza y el protocolo de pie." },
    { text: "Si llegas <strong>muy cargado del entrenamiento de pelota</strong>: reduce una serie de los accesorios (curl femoral, gemelos, core), pero mantén siempre el RDL y el Hip Thrust." }
  ],
  material: {
    gimnasio: ["Barra olímpica", "Discos", "Banco", "Mancuernas", "Poleas", "Máquina de curl femoral", "Máquina de gemelos"],
    casa: ["TRX", "Chaleco lastrado", "Bandas elásticas", "Mancuernas de 5 kg", "Rodillo abdominal", "Pelota de lacrosse o tenis", "Cajón o escalón"]
  },
  evalFields: [
    "Dominadas máximas", "Flexiones máximas", "Plancha frontal", "Plancha lateral",
    "Ab Wheel (abdominales con rueda)", "Elevaciones de gemelo unilateral", "Salto horizontal",
    "Test de dorsiflexión (rodilla a pared)", "Equilibrio a una pierna (ojos cerrados)", "Dolor fascitis (0-10)"
  ],
  goals: [
    "Aumentar la fuerza de la cadena posterior", "Mejorar la estabilidad del pie y del tobillo",
    "Disminuir o eliminar las molestias de la fascitis plantar", "Reducir la sensación de piernas cargadas tras entrenar",
    "Incrementar el número de dominadas y flexiones", "Mejorar la estabilidad del core en gestos explosivos",
    "Llegar a entrenamientos y partidos con mayor sensación de frescura"
  ],
  weekOverview: [
    { name: "Lunes", title: "Fuerza A · Cadena posterior", dur: "85 min" },
    { name: "Martes", title: "Frontón", dur: "90-120 min" },
    { name: "Miércoles", title: "Movilidad + Core + Fascitis", dur: "45-60 min" },
    { name: "Jueves", title: "Frontón", dur: "90-120 min" },
    { name: "Viernes", title: "Fuerza B · Potencia + Tren superior", dur: "75-90 min" },
    { name: "Sábado", title: "Recuperación activa", dur: "30-45 min" },
    { name: "Domingo", title: "Descanso completo", dur: "—" }
  ],
  days: {
    Lunes: {
      subtitle: "Fuerza A — Construir el motor (cadena posterior)",
      meta: "85 min · RPE 7-8 · Deja 2-3 RIR en las primeras series, 1-2 en la última",
      blocks: [
        { title: "Calentamiento", icon: "fa-fire", note: "Liberación plantar · Movilidad de tobillo · 90/90 · Monster Walk · Tibial Raises · Short Foot · Skipping (10 min)" },
        { title: "Bloque A — Fuerza principal", icon: "fa-dumbbell", exercises: ["rdl"], note: "Entre series: 10 repeticiones de Short Foot." },
        { title: "Bloque B — Fuerza unilateral", icon: "fa-person-walking", exercises: ["hipThrust", "bulgara"], note: "Entre series: 12 Tibial Raises." },
        { title: "Bloque C — Isquios", icon: "fa-child-reaching", exercises: ["curlFemoral"] },
        { title: "Bloque D — Gemelos", icon: "fa-shoe-prints", exercises: ["gemeloPie", "soleo"] },
        { title: "Bloque E — Core", icon: "fa-shield", exercises: ["pallof", "farmerCarry", "planchaHombro"] },
        { title: "Vuelta a la calma", icon: "fa-wind", note: "Estiramientos de cadena posterior y movilidad — 5 min." }
      ]
    },
    Martes: {
      subtitle: "Entrenamiento de pelota",
      meta: "90-120 min en el frontón",
      blocks: [
        { title: "Antes", icon: "fa-fire", note: "Calentamiento específico — 8 minutos." },
        { title: "Después — Protocolo de recuperación", icon: "fa-spa", note: "Pelota plantar · Gemelos · Sóleo · Respiración." }
      ]
    },
    Miércoles: {
      subtitle: "Movilidad + Core + Fascitis",
      meta: "45-60 min · día clave para llegar fresco al jueves",
      blocks: [
        { title: "Bloque movilidad (15 min)", icon: "fa-arrows-spin", note: "Tobillo · Cadera · Torácica · Pie." },
        { title: "Bloque fascitis (15 min)", icon: "fa-shoe-prints",
          note: "Short Foot · Toe Yoga · Tibial Raises · Gemelos excéntricos · Sóleo. Ver fichas completas más abajo, en la sección de <a href=\"#fascitis\">Fascitis plantar</a>." },
        { title: "Bloque Core (20 min)", icon: "fa-shield", exercises: ["abWheel", "deadBug", "sidePlank", "birdDog", "pallof"] }
      ]
    },
    Jueves: {
      subtitle: "Entrenamiento de pelota",
      meta: "90-120 min · mismo protocolo que el martes",
      blocks: [
        { title: "Antes", icon: "fa-fire", note: "Calentamiento específico — 8 minutos." },
        { title: "Después — Protocolo de recuperación", icon: "fa-spa", note: "Pelota plantar · Gemelos · Sóleo · Respiración." }
      ]
    },
    Viernes: {
      subtitle: "Fuerza B — Potencia + Tren superior + Cadena posterior",
      meta: "75-90 min",
      blocks: [
        { title: "Calentamiento", icon: "fa-fire", note: "10 minutos." },
        { title: "Bloque A — Potencia", icon: "fa-bolt", exercises: ["broadJump"], note: "Descanso completo entre series." },
        { title: "Bloque B — Empuje y tracción", icon: "fa-arrow-up-long", exercises: ["dominadas", "flexionesLastradas", "remoTRX"] },
        { title: "Bloque C — Cadena posterior", icon: "fa-person-walking", exercises: ["pesoMuertoUnilateral", "nordicCurl"] },
        { title: "Bloque D — Gemelos", icon: "fa-shoe-prints", exercises: ["gemeloViernes"] },
        { title: "Bloque E — Core", icon: "fa-shield", exercises: ["abWheel", "woodChop", "suitcaseCarry"] },
        { title: "Recuperación", icon: "fa-spa", note: "9 minutos." }
      ]
    },
    Sábado: {
      subtitle: "Recuperación activa (no es descanso absoluto)",
      meta: "30-45 min",
      blocks: [
        { title: "Elige una opción", icon: "fa-person-walking", note: "Caminar 45 min · Bicicleta suave 40 min · Natación suave 30 min. Finaliza con 10 minutos de movilidad." }
      ]
    },
    Domingo: {
      subtitle: "Descanso completo",
      meta: "—",
      blocks: [
        { title: "Permitido", icon: "fa-couch", note: "Paseo suave · Estiramientos suaves · Liberación plantar. Nada más." }
      ]
    }
  },
  warmup: [
    {
      title: "Liberación miofascial", dur: "2 min",
      items: [
        { name: "Planta del pie", text: "Pelota de lacrosse o tenis. 1 min por pie, rodando del talón a los dedos, 10-15\" en zonas tensas." },
        { name: "Gemelos", text: "Con foam roller, 30 segundos por pierna. No hace falta buscar dolor, solo preparar el tejido." }
      ]
    },
    {
      title: "Movilidad", dur: "4 min",
      items: [
        { name: "Dorsiflexión contra pared", text: "2×10 por pierna. Tocar la pared con la rodilla sin levantar el talón." },
        { name: "Cadera 90/90", text: "2×8 por lado. Movilidad de rotación interna y externa, clave para cambios de dirección." },
        { name: "World's Greatest Stretch", text: "1×6 por lado." }
      ]
    },
    {
      title: "Activación (con banda)", dur: "3 min",
      items: [
        { name: "Monster Walk + equilibrio", text: "Banda sobre las rodillas, 2×12 pasos. Aguanta 2\" sobre una pierna en cada paso: mejora tobillo, rodilla, glúteo medio y equilibrio." },
        { name: "Puente de glúteo", text: "3×12, mantener 2 segundos arriba." },
        { name: "Tibial anterior en pared", text: "2×15, elevando solo las puntas." }
      ]
    },
    {
      title: "Activación neuromuscular", dur: "2-3 min",
      items: [
        { name: "Skipping", text: "2×20 m o 40\" en el sitio." },
        { name: "Saltos cortos", text: "2×15, muy suaves, solo tobillo." },
        { name: "Sentadilla con salto", text: "2×8, sin fatiga, buscando velocidad." }
      ]
    }
  ],
  fascitisIntro: [
    "La fascitis plantar rara vez aparece únicamente por la fascia: casi siempre hay un fallo en la cadena completa — pie, tobillo y gemelo — que sobrecarga ese tejido en cada apoyo.",
    "El trabajo de recuperación y prevención combina tres frentes: liberar la tensión del tejido, fortalecer la musculatura intrínseca del pie y mejorar la movilidad de tobillo, sin dejar de entrenar la cadena posterior completa."
  ],
  fascitisTips: [
    { icon: "fa-shoe-prints", title: "Calzado", text: "Usa calzado con buena amortiguación y evita entrenar descalzo sobre superficies duras mientras haya molestias. Cambia las zapatillas de entrenamiento cuando pierdan amortiguación." },
    { icon: "fa-road", title: "Superficies", text: "Prioriza superficies estables y con algo de amortiguación. Evita el impacto repetido sobre hormigón u otras superficies muy duras en fases de dolor." },
    { icon: "fa-chart-line", title: "Progresión de vuelta al impacto", text: "Reintroduce saltos y carrera de forma gradual: primero volumen bajo sin dolor, luego intensidad, nunca ambos a la vez." },
    { icon: "fa-person", title: "Higiene postural y descanso", text: "Evita estar de pie muchas horas seguidas sin descanso. Los primeros pasos de la mañana suelen ser los más molestos: haz liberación plantar antes de levantarte." }
  ]
};

/* =========================================================
   RENDER
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderPillars();
  renderPhilosophy();
  renderRpeTable();
  renderTrafficLight("trafficLight");
  renderTrafficLight("trafficLight2");
  renderRules();
  renderGoldenRules();
  renderMaterial();
  renderEvalTable();
  renderGoals();
  renderWeekOverview();
  renderDayTabs();
  renderWarmup();
  renderFascitis();
  initNav();
  initLog();
  document.getElementById("footerDate").textContent = new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long" });
});

function renderPillars() {
  document.getElementById("pillarsGrid").innerHTML = DATA.pillars.map(p => `
    <div class="pillar-card">
      <i class="fa-solid ${p.icon}"></i>
      <h4>${p.title}</h4>
      <p>${p.text}</p>
    </div>`).join("");
}

function renderPhilosophy() {
  document.getElementById("philosophyGrid").innerHTML = DATA.philosophy.map((p, i) => `
    <div class="philosophy-card">
      <span class="num">0${i + 1}</span>
      <h4>${p.title}</h4>
      <p>${p.text}</p>
    </div>`).join("");
}

function renderRpeTable() {
  const rows = DATA.rpeTable.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("");
  document.getElementById("rpeTable").innerHTML = `
    <thead><tr><th>Sensación</th><th>RIR</th><th>Cuándo usar</th></tr></thead>
    <tbody>${rows}</tbody>`;
}

function renderTrafficLight(id) {
  document.getElementById(id).innerHTML = DATA.trafficLight.map(t => `
    <div class="tl-card ${t.level}">
      <h4><i class="fa-solid ${t.icon}"></i> ${t.title}</h4>
      <ul>${t.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderRules() {
  document.getElementById("rulesGrid").innerHTML = DATA.rules.map(r => `
    <div class="rule-card">
      <h4><i class="fa-solid ${r.icon}"></i> ${r.title}</h4>
      <p>${r.text}</p>
    </div>`).join("");
}

function renderGoldenRules() {
  document.getElementById("goldenRules").innerHTML = DATA.goldenRules.map(g => `
    <div class="golden-rule"><i class="fa-solid fa-arrow-right"></i><p>${g.text}</p></div>`).join("");
}

function renderMaterial() {
  document.getElementById("materialGrid").innerHTML = `
    <div class="material-card"><h4><i class="fa-solid fa-warehouse"></i> Gimnasio</h4><ul>${DATA.material.gimnasio.map(m => `<li>${m}</li>`).join("")}</ul></div>
    <div class="material-card"><h4><i class="fa-solid fa-house"></i> Casa</h4><ul>${DATA.material.casa.map(m => `<li>${m}</li>`).join("")}</ul></div>`;
}

/* ---------- EVALUACIÓN (localStorage) ---------- */
function renderEvalTable() {
  const saved = JSON.parse(localStorage.getItem("markelen_eval") || "{}");
  const rows = DATA.evalFields.map((field, i) => `
    <tr>
      <td>${field}</td>
      <td><input type="text" data-field="${i}" data-col="inicial" value="${saved[i]?.inicial || ""}"></td>
      <td><input type="text" data-field="${i}" data-col="s8" value="${saved[i]?.s8 || ""}"></td>
      <td><input type="text" data-field="${i}" data-col="s16" value="${saved[i]?.s16 || ""}"></td>
    </tr>`).join("");
  document.getElementById("evalTable").innerHTML = `
    <thead><tr><th>Test</th><th>Inicial</th><th>Semana 8</th><th>Semana 16</th></tr></thead>
    <tbody>${rows}</tbody>`;
  document.getElementById("evalTable").addEventListener("input", (e) => {
    if (e.target.tagName !== "INPUT") return;
    const data = JSON.parse(localStorage.getItem("markelen_eval") || "{}");
    const f = e.target.dataset.field, c = e.target.dataset.col;
    data[f] = data[f] || {};
    data[f][c] = e.target.value;
    localStorage.setItem("markelen_eval", JSON.stringify(data));
  });
}

function renderGoals() {
  document.getElementById("goalsList").innerHTML = DATA.goals.map(g => `<li>${g}</li>`).join("");
}

function renderWeekOverview() {
  document.getElementById("weekOverview").innerHTML = DATA.weekOverview.map(d => `
    <div class="week-day-chip">
      <div class="wd-name">${d.name}</div>
      <div class="wd-title">${d.title}</div>
      <div class="wd-dur">${d.dur}</div>
    </div>`).join("");
}

/* ---------- PLANES / TABS POR DÍA ---------- */
function renderDayTabs() {
  const days = Object.keys(DATA.days);
  document.getElementById("dayTabs").innerHTML = days.map((d, i) =>
    `<button class="day-tab ${i === 0 ? "active" : ""}" data-day="${d}">${d}</button>`).join("");
  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".day-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDayPanel(btn.dataset.day);
    });
  });
  renderDayPanel(days[0]);
}

function renderDayPanel(dayName) {
  const day = DATA.days[dayName];
  let html = `<div class="day-panel-head"><h3>${dayName} — ${day.subtitle}</h3><div class="meta">${day.meta}</div></div>`;
  day.blocks.forEach(block => {
    html += `<div class="day-block"><h4><i class="fa-solid ${block.icon}"></i> ${block.title}</h4>`;
    if (block.note) html += `<div class="day-note">${block.note}</div>`;
    if (block.exercises) {
      html += `<div class="exercise-grid">${block.exercises.map(slug => exerciseCard(EXERCISES[slug], slug)).join("")}</div>`;
    }
    html += `</div>`;
  });
  document.getElementById("dayPanel").innerHTML = html;
  bindExerciseToggles();
}

/* ---------- FICHA DE EJERCICIO (componente reutilizable) ---------- */
function exerciseCard(ex, uid) {
  if (!ex) return "";
  const stats = [
    ex.series ? `Series: ${ex.series}` : "",
    ex.reps ? `Reps: ${ex.reps}` : "",
    ex.tempo ? `Tempo: ${ex.tempo}` : "",
    ex.descanso ? `Descanso: ${ex.descanso}` : "",
    ex.rpe ? `RPE: ${ex.rpe}` : ""
  ].filter(Boolean);

  const hasDetail = ex.tecnica.length || ex.claves.length || ex.errores.length || ex.progresion || ex.donde || ex.video;

  return `
  <div class="exercise-card">
    <div class="ex-media">
      <i class="fa-solid ${ex.icon || "fa-dumbbell"}"></i>
      <span>Añade tu foto en<br>${ex.photo}</span>
    </div>
    <div class="ex-body">
      <h5>${ex.name}</h5>
      <div class="ex-stats">${stats.map(s => `<span class="ex-stat">${s}</span>`).join("")}</div>
      ${hasDetail ? `<button class="ex-toggle" data-target="detail-${uid}-${Math.random().toString(36).slice(2, 7)}"><i class="fa-solid fa-chevron-down"></i> Ver ficha completa</button>` : ""}
      ${hasDetail ? exerciseDetail(ex) : ""}
    </div>
  </div>`;
}

function exerciseDetail(ex) {
  let html = `<div class="ex-detail">`;
  if (ex.tecnica.length) html += `<h6>Técnica</h6><ul>${ex.tecnica.map(t => `<li>${t}</li>`).join("")}</ul>`;
  if (ex.claves.length) html += `<h6>Claves</h6><ul class="claves">${ex.claves.map(t => `<li>${t}</li>`).join("")}</ul>`;
  if (ex.errores.length) html += `<h6>Errores a evitar</h6><ul class="errores">${ex.errores.map(t => `<li>${t}</li>`).join("")}</ul>`;
  if (ex.donde) html += `<h6>Dónde debes notarlo</h6><p>${ex.donde}</p>`;
  if (ex.progresion) html += `<h6>Progresión</h6><p>${ex.progresion}</p>`;
  html += `<h6>Vídeo explicativo</h6>`;
  if (ex.video) {
    html += `<iframe class="ex-video" src="https://www.youtube.com/embed/${ex.video}" title="${ex.name}" allowfullscreen></iframe>`;
  } else {
    html += `<div class="warmup-pending" style="font-size:0.8rem;">Añade aquí el enlace de YouTube del ejercicio (variable <code>video</code> en script.js)</div>`;
  }
  html += `</div>`;
  return html;
}

function bindExerciseToggles() {
  document.querySelectorAll(".ex-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const detail = btn.nextElementSibling;
      btn.classList.toggle("open");
      detail.classList.toggle("open");
      btn.innerHTML = detail.classList.contains("open")
        ? '<i class="fa-solid fa-chevron-down"></i> Ocultar ficha'
        : '<i class="fa-solid fa-chevron-down"></i> Ver ficha completa';
    });
  });
}

/* ---------- CALENTAMIENTO ---------- */
function renderWarmup() {
  document.getElementById("warmupBlocks").innerHTML = DATA.warmup.map((b, i) => `
    <div class="warmup-block">
      <div class="warmup-block-head">
        <div class="warmup-block-num">${i + 1}</div>
        <div><h4>${b.title}</h4><span class="dur">${b.dur}</span></div>
      </div>
      <div class="warmup-items">${b.items.map(it => `<div class="warmup-item"><strong>${it.name}</strong>${it.text}</div>`).join("")}</div>
    </div>`).join("") + `
    <div class="warmup-pending"><i class="fa-solid fa-hammer"></i> Activación específica del pie — sección en construcción. Añádela aquí cuando la tengas definida.</div>`;
}

/* ---------- FASCITIS ---------- */
function renderFascitis() {
  document.getElementById("fascitisIntro").innerHTML = DATA.fascitisIntro.map(p => `<p>${p}</p>`).join("");
  document.getElementById("fascitisExercises").innerHTML = Object.entries(FASCITIS_EXERCISES)
    .map(([slug, ex]) => exerciseCard(ex, slug)).join("");
  bindExerciseToggles();
  document.getElementById("fascitisTips").innerHTML = DATA.fascitisTips.map(t => `
    <div class="fascitis-tip"><h4><i class="fa-solid ${t.icon}"></i> ${t.title}</h4><p>${t.text}</p></div>`).join("");
}

/* ---------- NAV: scroll spy + móvil + línea de progreso ---------- */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  const sections = document.querySelectorAll("main .section");
  const navAnchors = links.querySelectorAll("a");
  const spy = () => {
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
    });
    navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
    document.getElementById("courtProgressFill").style.width = pct + "%";
    document.getElementById("courtBall").style.left = `calc(${pct}% - 9px)`;
  };
  document.addEventListener("scroll", spy, { passive: true });
  spy();
}

/* ---------- REGISTRO SEMANAL ---------- */
function getLog() { return JSON.parse(localStorage.getItem("markelen_log") || "[]"); }
function saveLog(log) { localStorage.setItem("markelen_log", JSON.stringify(log)); }

function initLog() {
  const exerciseNames = [...Object.values(EXERCISES), ...Object.values(FASCITIS_EXERCISES)].map(e => e.name);
  document.getElementById("exerciseList").innerHTML = exerciseNames.map(n => `<option value="${n}">`).join("");

  document.getElementById("logForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const log = getLog();
    log.push({
      date: document.getElementById("logDate").value,
      exercise: document.getElementById("logExercise").value,
      weight: document.getElementById("logWeight").value,
      reps: document.getElementById("logReps").value,
      rpe: document.getElementById("logRpe").value,
      notes: document.getElementById("logNotes").value
    });
    saveLog(log);
    e.target.reset();
    renderLog();
  });

  document.getElementById("clearLogBtn").addEventListener("click", () => {
    if (confirm("¿Seguro que quieres borrar todo el registro? Esta acción no se puede deshacer.")) {
      saveLog([]);
      renderLog();
    }
  });

  document.getElementById("chartExerciseSelect").addEventListener("change", drawChart);
  renderLog();
}

function renderLog() {
  const log = getLog().slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const body = document.getElementById("logTableBody");
  if (!log.length) {
    body.innerHTML = `<tr><td colspan="7" class="log-empty">Todavía no hay registros. Añade tu primera sesión arriba.</td></tr>`;
  } else {
    body.innerHTML = log.map((r, i) => `
      <tr>
        <td>${r.date || "—"}</td><td>${r.exercise}</td><td>${r.weight ? r.weight + " kg" : "—"}</td>
        <td>${r.reps || "—"}</td><td>${r.rpe || "—"}</td><td>${r.notes || "—"}</td>
        <td><button class="log-row-delete" data-i="${i}" title="Borrar"><i class="fa-solid fa-xmark"></i></button></td>
      </tr>`).join("");
    body.querySelectorAll(".log-row-delete").forEach(btn => {
      btn.addEventListener("click", () => {
        const all = getLog().slice().sort((a, b) => (a.date < b.date ? 1 : -1));
        all.splice(Number(btn.dataset.i), 1);
        saveLog(all);
        renderLog();
      });
    });
  }

  const select = document.getElementById("chartExerciseSelect");
  const current = select.value;
  const uniqueEx = [...new Set(getLog().map(r => r.exercise))];
  select.innerHTML = `<option value="">Gráfico de evolución — elige un ejercicio</option>` +
    uniqueEx.map(ex => `<option value="${ex}" ${ex === current ? "selected" : ""}>${ex}</option>`).join("");
  drawChart();
}

function drawChart() {
  const canvas = document.getElementById("progressChart");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth || canvas.parentElement.clientWidth;
  canvas.width = cssWidth * dpr;
  canvas.height = 140 * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = cssWidth, H = 140;
  ctx.clearRect(0, 0, W, H);

  const exercise = document.getElementById("chartExerciseSelect").value;
  const points = getLog()
    .filter(r => r.exercise === exercise && r.weight !== "")
    .sort((a, b) => (a.date > b.date ? 1 : -1))
    .map(r => ({ date: r.date, weight: parseFloat(r.weight) }));

  ctx.font = "12px Inter, sans-serif";
  if (!exercise) {
    ctx.fillStyle = "#8a978f";
    ctx.fillText("Elige un ejercicio arriba para ver su evolución de peso.", 16, H / 2);
    return;
  }
  if (points.length < 2) {
    ctx.fillStyle = "#8a978f";
    ctx.fillText("Añade al menos 2 registros con peso para ver el gráfico.", 16, H / 2);
    return;
  }

  const pad = { l: 40, r: 20, t: 16, b: 24 };
  const weights = points.map(p => p.weight);
  const min = Math.min(...weights), max = Math.max(...weights);
  const range = max - min || 1;
  const x = i => pad.l + (i / (points.length - 1)) * (W - pad.l - pad.r);
  const y = w => H - pad.b - ((w - min) / range) * (H - pad.t - pad.b);

  // ejes
  ctx.strokeStyle = "rgba(20,48,42,0.15)";
  ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b); ctx.lineTo(W - pad.r, H - pad.b); ctx.stroke();

  // línea naranja (evolución)
  ctx.strokeStyle = "#e2761c";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  points.forEach((p, i) => { const px = x(i), py = y(p.weight); i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); });
  ctx.stroke();

  // puntos
  ctx.fillStyle = "#14302a";
  points.forEach((p, i) => {
    ctx.beginPath(); ctx.arc(x(i), y(p.weight), 3.5, 0, Math.PI * 2); ctx.fill();
  });

  ctx.fillStyle = "#4a5a53";
  ctx.fillText(`${max} kg`, 2, pad.t + 8);
  ctx.fillText(`${min} kg`, 2, H - pad.b + 4);
}

window.addEventListener("resize", () => {
  if (document.getElementById("chartExerciseSelect")?.value) drawChart();
});
