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
    photo: "img/ejercicios/rdl.jpg", video: "uhghy9pFIPY",
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
    photo: "img/ejercicios/hip-thrust.jpg", video: "4hYRM_60BD4",
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
  dominadas: { name: "Dominadas", icon: "fa-arrow-up-long", series: "4", reps: "RIR 2", tempo: "", descanso: "2-3 min", rpe: "",
    photo: "img/ejercicios/dominadas.jpg", video: "",
    tecnica: ["Agarre prono un poco más ancho que los hombros, escápulas deprimidas antes de tirar.", "Sube hasta que la barbilla supere la barra.", "Baja con control total, sin dejarte caer."],
    claves: ["Rango completo: brazos totalmente extendidos abajo"],
    errores: ["Usar impulso de piernas o balanceo (kipping) fuera de un contexto específico de potencia"],
    donde: "Dorsal y bíceps.", progresion: "Si superas 4×8 limpias, añade lastre (chaleco o disco). Si aún no llegas a series completas, usa banda elástica de asistencia." },
  flexionesLastradas: { name: "Flexiones lastradas", icon: "fa-person", series: "4", reps: "RIR 2", tempo: "", descanso: "2 min", rpe: "",
    photo: "img/ejercicios/flexiones.jpg", video: "",
    tecnica: ["Manos ligeramente más anchas que los hombros, cuerpo en línea recta de cabeza a talones.", "Baja hasta que el pecho casi toque el suelo.", "Empuja sin perder la alineación de la cadera."],
    claves: [], errores: ["Dejar caer la cadera o elevarla en exceso (\"cadera de cobra\" o \"tienda de campaña\")"],
    donde: "Pecho, tríceps, hombro.", progresion: "Añade el chaleco lastrado en cuanto completes 4×12 limpias sin lastre." },
  remoTRX: { name: "Remo TRX", icon: "fa-grip-lines", series: "4", reps: "12", tempo: "", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/remo-trx.jpg", video: "N_14s8zFOms",
    tecnica: ["Cuerpo inclinado hacia atrás en ángulo (más horizontal = más difícil).", "Tira llevando el pecho hacia las manos y juntando los omóplatos, codos pegados al cuerpo."],
    claves: ["Cuerpo rígido de cabeza a talones durante todo el recorrido"], errores: ["Encoger los hombros en vez de juntar los omóplatos"], donde: "Espalda media.", progresion: "" },
  pesoMuertoUnilateral: { name: "Peso muerto unilateral", icon: "fa-person-walking", series: "3", reps: "10", tempo: "", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/pm-unilateral.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Isquios y equilibrio.", progresion: "" },
  nordicCurl: { name: "Nordic Curl", icon: "fa-person-falling", series: "3", reps: "5", tempo: "", descanso: "2 min", rpe: "",
    photo: "img/ejercicios/nordic-curl.jpg", video: "_e9vFU9-tkc",
    tecnica: ["De rodillas, tobillos fijados (con ayuda de un compañero o anclados bajo un peso).", "Baja el tronco lo más lento posible manteniendo la cadera extendida.", "Frena con los isquiotibiales todo lo que puedas y \"cae\" amortiguando con las manos."],
    claves: ["Cadera extendida durante todo el descenso, sin flexionarla hacia atrás", "Es el ejercicio con mayor evidencia científica para prevenir tirones de isquiotibiales", "Empieza con rango parcial si aún no controlas el descenso completo; progresa el rango antes que las repeticiones"],
    errores: ["Flexionar la cadera para \"aguantar más\": quita tensión al isquiotibial, que es justo lo que buscamos entrenar"], donde: "Isquiotibiales.", progresion: "" },
  gemeloViernes: { name: "Gemelo (viernes)", icon: "fa-shoe-prints", series: "3", reps: "15", tempo: "", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/gemelo-viernes.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Gemelos.", progresion: "" },
  woodChop: { name: "Wood Chop", icon: "fa-bolt", series: "3", reps: "12", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/wood-chop.jpg", video: "", tecnica: ["Rotación de tronco con polea/banda, de arriba-fuera a abajo-dentro."], claves: [], errores: [], donde: "Core rotacional.", progresion: "" },
  abWheel: { name: "Ab Wheel", icon: "fa-circle-notch", series: "3", reps: "10", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/ab-wheel.jpg", video: "",
    tecnica: ["De rodillas, rueda hacia delante manteniendo el abdomen apretado y la zona lumbar sin hundirse.", "Recorre solo hasta donde puedas volver con control."],
    claves: [], errores: ["Dejar que la cadera caiga y la zona lumbar se hiperextienda"], donde: "Core.",
    progresion: "Nota: aún no hay un vídeo de referencia verificado para este ejercicio en tu manual — añade el enlace cuando lo confirmes." },
  deadBug: { name: "Dead Bug", icon: "fa-bug", series: "3", reps: "10", tempo: "", descanso: "30-45 seg", rpe: "",
    photo: "img/ejercicios/dead-bug.jpg", video: "", tecnica: ["Espalda pegada al suelo, extiende brazo y pierna contraria sin perder contacto lumbar."], claves: [], errores: [], donde: "Core profundo.", progresion: "" },
  sidePlank: { name: "Side Plank", icon: "fa-child-reaching", series: "3", reps: "30 seg", tempo: "", descanso: "30-45 seg", rpe: "",
    photo: "img/ejercicios/side-plank.jpg", video: "", tecnica: ["Cadera elevada y alineada, sin rotar el tronco."], claves: [], errores: [], donde: "Oblicuos, glúteo medio.", progresion: "" },
  birdDog: { name: "Bird Dog", icon: "fa-dog", series: "3", reps: "10", tempo: "", descanso: "30-45 seg", rpe: "",
    photo: "img/ejercicios/bird-dog.jpg", video: "", tecnica: ["Extiende brazo y pierna contraria manteniendo la zona lumbar neutra."], claves: [], errores: [], donde: "Core y estabilidad lumbopélvica.", progresion: "" },

  /* ---- NUEVO v2.1: variante CASA — Fuerza A (Lunes) ---- */
  rdlUnilateralCasa: {
    name: "RDL a una pierna con mancuernas", icon: "fa-person-walking",
    series: "4 por pierna", reps: "8-10", tempo: "3-1-X-1", descanso: "2 min", rpe: "",
    photo: "img/ejercicios/rdl-unilateral-casa.jpg", video: "Zfr6wizR8rs",
    tecnica: ["Sostén mancuernas de 5 kg (una en cada mano, o ambas en la mano contraria a la pierna de apoyo para más exigencia de equilibrio).", "Pierna de apoyo con rodilla ligeramente flexionada; la otra pierna se extiende hacia atrás como contrapeso mientras el tronco baja en bloque.", "Sube empujando el talón de apoyo."],
    claves: ["Cadera y hombros permanecen cuadrados, sin rotar", "Si el peso de 5 kg se queda corto, añade el chaleco lastrado para aumentar la exigencia sin comprometer la técnica"],
    errores: ["Perder el equilibrio y compensar rotando el tronco"], donde: "Isquios y glúteos.", progresion: "Entre series: 10 repeticiones de Short Foot."
  },
  bulgaraCasa: {
    name: "Sentadilla búlgara con mancuernas", icon: "fa-person-running",
    series: "3 por pierna", reps: "8-10", tempo: "2-1-X-1", descanso: "90-120 seg", rpe: "",
    photo: "img/ejercicios/bulgara-casa.jpg", video: "",
    tecnica: ["Igual que en gimnasio, pero con el pie trasero elevado en una silla, sofá bajo o step, sosteniendo una mancuerna de 5 kg en cada mano.", "Si te queda ligero, añade el chaleco lastrado."],
    claves: [], errores: [], donde: "Cuádriceps y glúteo de la pierna delantera.", progresion: "Entre series: 12 Tibial Raises."
  },
  curlFemoralTRX: {
    name: "Curl femoral en TRX (supino)", icon: "fa-dumbbell",
    series: "3", reps: "10-12", tempo: "2-1-2", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/curl-femoral-trx.jpg", video: "",
    tecnica: ["Tumbado boca arriba, talones dentro de los estribos del TRX, cadera elevada en puente.", "Flexiona las rodillas llevando los talones hacia los glúteos manteniendo la cadera arriba.", "Vuelve a extender con control."],
    claves: ["Cadera elevada y estable durante todo el recorrido"], errores: ["Dejar caer la cadera al suelo entre repeticiones"], donde: "Isquiotibiales.", progresion: ""
  },
  hipThrustUnilateralCasa: {
    name: "Hip Thrust unilateral con chaleco/mancuerna", icon: "fa-arrow-up",
    series: "4 por pierna", reps: "8-10", tempo: "2-2-X-1", descanso: "2 min", rpe: "",
    photo: "img/ejercicios/hip-thrust-unilateral.jpg", video: "4hYRM_60BD4",
    tecnica: ["Espalda apoyada en sofá/banco, una pierna apoyada en el suelo y la otra extendida o flexionada sin apoyar.", "Añade el chaleco lastrado o una mancuerna sobre la cadera para aumentar la carga.", "Aprieta el glúteo 2 segundos arriba."],
    claves: [], errores: [], donde: "Glúteos.", progresion: ""
  },
  gemeloPieCasa: {
    name: "Gemelo de pie con chaleco lastrado", icon: "fa-shoe-prints",
    series: "4", reps: "12", tempo: "1-1-3", descanso: "60-90 seg", rpe: "",
    photo: "img/ejercicios/gemelo-pie-casa.jpg", video: "",
    tecnica: ["De pie sobre un escalón con las puntas de los pies, talones colgando, chaleco lastrado puesto.", "Sube al máximo recorrido, baja en 3 segundos controlados."],
    claves: [], errores: [], donde: "Gemelos.", progresion: ""
  },
  soleoCasa: {
    name: "Sóleo sentado con mancuerna", icon: "fa-shoe-prints",
    series: "3", reps: "15", tempo: "2-1-3", descanso: "60-90 seg", rpe: "",
    photo: "img/ejercicios/soleo-casa.jpg", video: "",
    tecnica: ["Sentado, mancuerna de 5 kg sobre las rodillas, puntas de los pies sobre un libro grueso o escalón bajo.", "Misma ejecución que en gimnasio."],
    claves: [], errores: [], donde: "Sóleo.", progresion: ""
  },
  abduccionCasa: {
    name: "Abducción de cadera con banda", icon: "fa-arrows-left-right",
    series: "3", reps: "15 por lado", tempo: "", descanso: "20 seg", rpe: "",
    photo: "img/ejercicios/abduccion-casa.jpg", video: "",
    tecnica: ["De pie o tumbado de lado, banda por encima de las rodillas o tobillos.", "Eleva la pierna lateralmente controlando el movimiento en ambas fases."],
    claves: [], errores: [], donde: "Glúteo medio.", progresion: ""
  },
  pallofBanda: { name: "Pallof Press con banda anclada", icon: "fa-shield", series: "3", reps: "12", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/pallof-banda.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Core (oblicuos).", progresion: "" },
  farmerCarryCasa: { name: "Farmer Carry con mancuernas/chaleco", icon: "fa-weight-hanging", series: "3", reps: "30 m", tempo: "", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/farmer-carry-casa.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Core, trapecios y agarre.", progresion: "" },

  /* ---- NUEVO v2.1: variante CASA — Fuerza B (Viernes) ---- */
  sentadillaSaltoCasa: {
    name: "Sentadilla con salto (sustituye al Broad Jump)", icon: "fa-person-running",
    series: "3", reps: "6", tempo: "", descanso: "Completo", rpe: "",
    photo: "img/ejercicios/sentadilla-salto.jpg", video: "",
    tecnica: ["Si dispones de espacio y superficie adecuada en el exterior, mantén el Broad Jump.", "En interior, la sentadilla con salto entrena el mismo patrón de potencia sin riesgo de golpearte con el mobiliario."],
    claves: [], errores: [],
    donde: "Potencia de piernas.",
    progresion: "Semáforo del dolor: si la fascia molesta ≥3/10, elimina el componente de salto y sustitúyelo por elevación de talones sin despegue, o trabajo isométrico de cadera."
  },
  dominadasORemoCasa: {
    name: "Dominadas (barra) o Remo TRX invertido a una mano", icon: "fa-arrow-up-long",
    series: "4", reps: "RIR 2", tempo: "", descanso: "2-3 min", rpe: "",
    photo: "img/ejercicios/dominadas-casa.jpg", video: "",
    tecnica: ["Si tienes acceso a una barra de dominadas en casa, mantén el ejercicio original y progresa con el chaleco lastrado.", "Si no dispones de barra, sustitúyelo por Remo TRX con el cuerpo lo más horizontal posible (máxima dificultad de tracción que permite el TRX)."],
    claves: [], errores: [], donde: "Dorsal, bíceps y espalda media.", progresion: ""
  },
  pesoMuertoUnilateralCasa: {
    name: "Peso muerto unilateral con mancuerna", icon: "fa-person-walking",
    series: "3 por pierna", reps: "10", tempo: "", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/pm-unilateral-casa.jpg", video: "",
    tecnica: ["Igual que en gimnasio, con la mancuerna de 5 kg. Si te resulta ligero, súmale el chaleco lastrado."],
    claves: [], errores: [], donde: "Isquios y equilibrio.", progresion: ""
  },
  nordicCurlAsistido: {
    name: "Nordic Curl asistido", icon: "fa-person-falling",
    series: "3", reps: "5-8", tempo: "", descanso: "2 min", rpe: "",
    photo: "img/ejercicios/nordic-curl-asistido.jpg", video: "_e9vFU9-tkc",
    tecnica: ["Ancla los tobillos bajo un sofá pesado, o pide a alguien que te sujete los tobillos.", "Si el rango completo es demasiado exigente, ancla el TRX por delante del pecho para asistir la subida (reduce la carga en la fase más difícil)."],
    claves: [], errores: [], donde: "Isquiotibiales.", progresion: ""
  },
  gemeloViernesCasa: { name: "Gemelo de pie con chaleco lastrado", icon: "fa-shoe-prints", series: "3", reps: "15", tempo: "", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/gemelo-viernes-casa.jpg", video: "", tecnica: [], claves: [], errores: [], donde: "Gemelos.", progresion: "" },
  abWheelCasa: { name: "Ab Wheel (rodillas o de pie)", icon: "fa-circle-notch", series: "3", reps: "10", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/ab-wheel-casa.jpg", video: "", tecnica: ["De rodillas o, si dominas la técnica, de pie."], claves: [], errores: ["Arquear la espalda baja"], donde: "Core.", progresion: "" },
  woodChopBanda: { name: "Wood Chop con banda anclada", icon: "fa-bolt", series: "3", reps: "12 por lado", tempo: "", descanso: "45 seg", rpe: "",
    photo: "img/ejercicios/wood-chop-banda.jpg", video: "", tecnica: ["Rotación de tronco con banda anclada, de arriba-fuera a abajo-dentro."], claves: [], errores: [], donde: "Core rotacional.", progresion: "" },
  rotacionBandaCasa: {
    name: "Rotación de potencia con banda (sustituye al Landmine)", icon: "fa-bolt",
    series: "3", reps: "8 por lado", tempo: "", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/rotacion-banda.jpg", video: "",
    tecnica: ["Ancla la goma elástica a una altura media (pomo de puerta, barandilla) a un lado de tu cuerpo.", "Desde posición atlética, gira cadera y tronco a la vez llevando ambas manos desde la cadera del lado anclado hasta cruzar el cuerpo hacia el lado contrario.", "Frena con control al final del recorrido."],
    claves: ["El giro nace en la cadera; los brazos solo transmiten la fuerza, no la generan"],
    errores: ["Tirar solo de brazos sin implicar cadera y pies"],
    donde: "Core rotacional, transferencia directa al golpeo.",
    progresion: "Si no tienes un punto de anclaje adecuado, sustitúyelo por una mancuerna de 5 kg sujeta con ambas manos, con el mismo patrón de rotación explosiva controlada."
  },
  landmineRotation: {
    name: "Landmine Rotation (rotación de potencia)", icon: "fa-bolt",
    series: "3", reps: "8 por lado", tempo: "", descanso: "90 seg", rpe: "",
    photo: "img/ejercicios/landmine-rotation.jpg", video: "",
    tecnica: ["Barra encajada en un landmine (o en la esquina de una sala, apoyada contra la pared con un trapo/disco viejo para no dañar el suelo).", "Agarra el extremo libre con ambas manos, brazos extendidos.", "Desde una posición atlética (rodillas semiflexionadas, pies algo más anchos que los hombros), gira la cadera y el tronco a la vez llevando la barra de un lado a la altura de la cadera hacia el otro, dejando que los pies pivoten de forma natural."],
    claves: ["El movimiento nace en la cadera, no solo en los brazos: brazos y tronco van \"enganchados\" al giro de cadera", "Ritmo controlado pero con intención de velocidad — no es un ejercicio lento"],
    errores: ["Rotar solo con los brazos manteniendo la cadera fija", "Perder el apoyo de los pies o descontrolar el final del recorrido"],
    donde: "Core rotacional, transferencia directa al golpeo.",
    progresion: "Empieza sin peso extra en la barra para grabar el patrón, y añade carga progresivamente solo cuando el movimiento sea fluido y controlado en ambos lados. Sustituye al Suitcase Carry: mucha más transferencia directa al gesto de golpeo."
  },

  /* ---- NUEVO v2.1: Miércoles — equilibrio y core ampliado ---- */
  equilibrioAlcance: {
    name: "Equilibrio monopodal con alcance (Single-Leg Reach)", icon: "fa-person",
    series: "2", reps: "8 alcances por pierna", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/equilibrio-alcance.jpg", video: "",
    tecnica: ["De pie sobre una pierna, con la rodilla ligeramente flexionada.", "Inclina el tronco adelante y toca el suelo con la mano contraria delante, luego a un lado y luego atrás.", "Vuelve a la posición inicial entre cada toque."],
    claves: ["Rodilla de apoyo estable, sin colapsar hacia dentro (valgo)"],
    errores: ["Apoyar la otra pierna en el suelo para \"salvar\" el equilibrio — si ocurre, reduce el alcance"],
    donde: "Equilibrio y control de rodilla en apoyo unipodal.", progresion: ""
  },
  equilibrioOjosCerrados: {
    name: "Equilibrio monopodal, ojos cerrados", icon: "fa-eye-slash",
    series: "3", reps: "20-30 seg por pierna", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/equilibrio-ojos-cerrados.jpg", video: "",
    tecnica: ["De pie sobre una pierna, cierra los ojos y mantén la posición el mayor tiempo posible sin apoyar la otra pierna."],
    claves: ["Elimina el control visual y obliga al tobillo y al pie a trabajar más", "Muy útil en la fase de recuperación de la fascitis, donde buscamos recuperar la propiocepción completa del pie"],
    errores: [], donde: "Propiocepción de tobillo y pie.", progresion: ""
  },
  equilibrioPerturbacion: {
    name: "Equilibrio con perturbación (pelota lacrosse/tenis)", icon: "fa-basketball",
    series: "2", reps: "10 lanzamientos por pierna", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/equilibrio-perturbacion.jpg", video: "",
    tecnica: ["De pie sobre una pierna, lanza la pelota contra una pared cercana y recupérala.", "Mantén el equilibrio en cada lanzamiento y recepción."],
    claves: ["Simula la inestabilidad real de jugar apoyado en una sola pierna mientras reaccionas a un estímulo"],
    errores: [], donde: "Equilibrio reactivo.", progresion: ""
  },
  planchaCopenhague: {
    name: "Plancha Copenhague (adaptada, rodilla apoyada)", icon: "fa-child-reaching",
    series: "2", reps: "10-12 seg por lado", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/plancha-copenhague.jpg", video: "",
    tecnica: ["Túmbate de lado apoyado en el antebrazo; la pierna de abajo flexionada con la rodilla apoyada en el suelo o sobre un banco bajo.", "La pierna de arriba extendida en línea con el tronco.", "Eleva la cadera formando una línea recta desde la rodilla de apoyo hasta la cabeza, y mantén la posición."],
    claves: ["Cadera elevada y alineada, sin rotar el tronco hacia delante ni hacia atrás", "Trabajo de aductor: en pelota, los cambios de dirección y salidas laterales cargan mucho esta zona"],
    errores: ["Dejar caer la cadera o compensar apoyando la pierna superior en el suelo"],
    donde: "Aductores.",
    progresion: "Introduce este ejercicio solo cuando la fascitis plantar esté en fase verde estable. No es un ejercicio de impacto, pero conviene no sumar variables nuevas mientras el pie sigue en fase de recuperación activa."
  },
  bandRotationalThrow: {
    name: "Rotación explosiva con banda (Band Rotational Throw)", icon: "fa-bolt",
    series: "4", reps: "6-8 por lado", tempo: "", descanso: "60-90 seg", rpe: "",
    photo: "img/ejercicios/band-rotational-throw.jpg", video: "",
    tecnica: ["Ancla la banda a una altura media-baja, a un lado y ligeramente detrás de ti (simulando de dónde \"viene\" la pelota).", "Posición atlética, sujeta la banda con ambas manos a la altura de la cadera del lado anclado.", "Carga girando cadera y tronco hacia ese lado, y después gira de forma explosiva hacia el lado contrario, como si lanzaras la banda, dejando que el brazo se extienda al final igual que en un golpeo.", "Vuelve a la posición de carga con control."],
    claves: ["La potencia se genera con la extensión y rotación de cadera, no solo con el brazo", "Pies pivotan de forma natural, igual que en un golpe real de frontón", "Es el ejercicio más exigente del bloque: reproduce directamente el gesto de golpeo del pelotari"],
    errores: ["Realizarlo despacio de principio a fin: este ejercicio busca específicamente velocidad de rotación, a diferencia del Pallof Press", "Perder la postura y \"tirar\" solo desde el hombro"],
    donde: "Core rotacional explosivo, transferencia directa al golpeo.",
    progresion: "Es un patrón de potencia, no de fuerza máxima: prioriza la velocidad de ejecución sobre la carga de la banda. Sube la resistencia solo cuando el gesto sea limpio y explosivo en ambos lados."
  }
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
  tibialRaises: { name: "Tibial Raises", icon: "fa-shoe-prints", series: "3", reps: "15", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/tibial-raises.jpg", video: "UVh1ztx8kZI",
    tecnica: ["Apoyado en la pared, eleva únicamente las puntas de los pies (dorsiflexión), sin doblar rodillas."],
    claves: ["Fortalece el tibial anterior, que ayuda a controlar el descenso del pie tras cada zancada"], errores: [], donde: "Tibial anterior.", progresion: "" },
  gemeloExcentrico: {
    name: "Elevación de talón excéntrica — protocolo de carga alta", icon: "fa-shoe-prints",
    series: "3", reps: "10-15", tempo: "3\" concéntrico + 2\" pausa + 3\" excéntrico", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/gemelo-excentrico.jpg", video: "Tx2Of1T1zI4",
    tecnica: ["Es el ejercicio con mayor evidencia científica para regenerar la fascia plantar (protocolo de carga alta, similar al usado en tendinopatías).", "De pie sobre un escalón con las puntas de los pies y un rodillo de toalla bajo los dedos del pie afectado (para aumentar el estiramiento de la fascia en la posición final).", "Sube en 3 segundos, mantén 2 segundos arriba y baja en 3 segundos controlados."],
    claves: ["Clave en la recuperación de fascitis"],
    errores: [], donde: "Gemelo, sóleo y fascia plantar.",
    progresion: "Empieza sin peso extra. Cuando domines 3×12 sin dolor, añade el chaleco lastrado o una mochila con peso, reduciendo repeticiones a 8-10 y aumentando series a 4-5, tal y como recomienda la literatura de carga progresiva para fascitis."
  },
  soleoExcentrico: {
    name: "Elevación de talón excéntrica — sóleo (rodilla flexionada)", icon: "fa-shoe-prints",
    series: "3", reps: "12", tempo: "Bajada lenta con rodilla flexionada", descanso: "60 seg", rpe: "",
    photo: "img/ejercicios/soleo-excentrico.jpg", video: "",
    tecnica: ["Misma ejecución que la elevación de talón excéntrica, pero con la rodilla ligeramente flexionada durante todo el recorrido para llevar el énfasis al sóleo."],
    claves: [], errores: [], donde: "Sóleo y fascia plantar.", progresion: ""
  },
  toallaEstiramiento: {
    name: "Estiramiento de fascia con toalla (al levantarte)", icon: "fa-sun",
    series: "3", reps: "30 seg", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/toalla-estiramiento.jpg", video: "",
    tecnica: ["Sentado, pasa una toalla por la planta del pie y tira de los dedos hacia ti manteniendo la rodilla estirada."],
    claves: ["Hazlo antes del primer paso del día: es el momento de mayor rigidez de la fascia"],
    errores: ["Pisar descalzo y en frío nada más levantarte sin haber hecho antes este estiramiento"],
    donde: "Fascia plantar.", progresion: ""
  },
  estiramientoGemeloSoleo: {
    name: "Estiramiento de gemelo y sóleo (después de entrenar)", icon: "fa-shoe-prints",
    series: "2-3", reps: "30 seg cada uno", tempo: "", descanso: "", rpe: "",
    photo: "img/ejercicios/estiramiento-gemelo-soleo.jpg", video: "",
    tecnica: ["Gemelo: en pared, pierna afectada atrás con la rodilla extendida y el talón en el suelo, inclínate hacia la pared.", "Sóleo: misma posición pero con la rodilla trasera ligeramente flexionada, para llevar el estiramiento más abajo, hacia el sóleo y la fascia."],
    claves: [], errores: [], donde: "Gemelo, sóleo y fascia plantar.", progresion: ""
  },
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
    "Dominadas máximas", "Flexiones máximas", "Plancha frontal (segundos)", "Plancha lateral (segundos, cada lado)",
    "Ab Wheel — distancia máxima controlada", "Elevación de gemelo unilateral (reps máx.)", "Salto horizontal (cm)",
    "Test de dorsiflexión — rodilla a pared (cm)", "Equilibrio a una pierna, ojos cerrados (seg.)",
    "Test funcional adicional — Y-Balance o salto a una pierna (single-leg hop)",
    "Dolor fascitis en reposo (0-10)", "Dolor fascitis primeros pasos al levantarte (0-10)"
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
    { name: "Miércoles", title: "Movilidad + Core + Fascitis", dur: "70-85 min" },
    { name: "Jueves", title: "Frontón", dur: "90-120 min" },
    { name: "Viernes", title: "Fuerza B · Potencia + Tren superior", dur: "75-90 min" },
    { name: "Sábado", title: "Recuperación activa", dur: "30-45 min" },
    { name: "Domingo", title: "Descanso completo", dur: "—" }
  ],
  days: {
    Lunes: {
      subtitle: "Fuerza A — Construir el motor (cadena posterior)",
      meta: "85 min · RPE 7-8 · Deja 2-3 RIR en las primeras series, 1-2 en la última",
      variants: {
        gimnasio: [
          { title: "Calentamiento", icon: "fa-fire", note: "Liberación plantar · Movilidad de tobillo · 90/90 · Monster Walk · Tibial Raises · Short Foot · Skipping (10 min)" },
          { title: "Bloque A — Fuerza principal", icon: "fa-dumbbell", exercises: ["rdl"], note: "Entre series: 10 repeticiones de Short Foot." },
          { title: "Bloque B — Fuerza unilateral", icon: "fa-person-walking", exercises: ["hipThrust", "bulgara"], note: "Entre series: 12 Tibial Raises." },
          { title: "Bloque C — Isquios", icon: "fa-child-reaching", exercises: ["curlFemoral"] },
          { title: "Bloque D — Gemelos", icon: "fa-shoe-prints", exercises: ["gemeloPie", "soleo"] },
          { title: "Bloque E — Glúteo medio", icon: "fa-arrows-left-right", exercises: ["abduccion"] },
          { title: "Bloque F — Core", icon: "fa-shield", exercises: ["pallof", "farmerCarry", "planchaHombro"] },
          { title: "Vuelta a la calma", icon: "fa-wind", note: "Estiramientos de cadena posterior y movilidad — 5 min." }
        ],
        casa: [
          { title: "Calentamiento", icon: "fa-fire", note: "Igual que en gimnasio: no necesitas material especial para calentar (10 min)." },
          { title: "Bloque A — Fuerza principal", icon: "fa-dumbbell", exercises: ["rdlUnilateralCasa"] },
          { title: "Bloque B — Fuerza unilateral", icon: "fa-person-walking", exercises: ["hipThrustUnilateralCasa", "bulgaraCasa"] },
          { title: "Bloque C — Isquios", icon: "fa-child-reaching", exercises: ["curlFemoralTRX"] },
          { title: "Bloque D — Gemelos", icon: "fa-shoe-prints", exercises: ["gemeloPieCasa", "soleoCasa"] },
          { title: "Bloque E — Glúteo medio", icon: "fa-arrows-left-right", exercises: ["abduccionCasa"] },
          { title: "Bloque F — Core", icon: "fa-shield", exercises: ["pallofBanda", "farmerCarryCasa", "planchaHombro"] },
          { title: "Vuelta a la calma", icon: "fa-wind", note: "Estiramientos de cadena posterior y movilidad de pie — 5 min." }
        ]
      }
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
      meta: "70-85 min · día clave para llegar fresco al jueves",
      blocks: [
        { title: "Bloque 1 — Movilidad (18-20 min)", icon: "fa-arrows-spin",
          note: "Tobillo: dorsiflexión contra pared, círculos de tobillo · Cadera: 90/90, World's Greatest Stretch, balanceos de cadera · Torácica: rotaciones a cuadrupedia, apertura de libro · Pie: liberación con pelota + Short Foot. 2 series de 8-10 repeticiones (o 30-45\" si es estiramiento mantenido) por ejercicio." },
        { title: "Bloque 1 — Equilibrio", icon: "fa-person",
          note: "El equilibrio monopodal es directamente transferible al pelotari: cada golpe se ejecuta apoyado en una sola pierna, en pleno frenado o cambio de dirección.",
          exercises: ["equilibrioAlcance", "equilibrioOjosCerrados", "equilibrioPerturbacion"] },
        { title: "Bloque 2 — Protocolo de fascitis (15 min)", icon: "fa-shoe-prints",
          note: "Short Foot 3×10 (5\" mantenidos) · Toe Yoga 2×10 · Tibial Raises 3×15 · Elevación de talón excéntrica (gemelo) 3×10 (3\" bajando) · Elevación de talón excéntrica (sóleo, rodilla flexionada) 3×12. Ver fichas técnicas completas en <a href=\"#fascitis\">Fascitis plantar</a>." },
        { title: "Bloque 3 — Core (30 min)", icon: "fa-shield",
          note: "Combina anti-extensión, anti-rotación, flexión resistida y, al final, un patrón explosivo de rotación: los cuatro patrones con mayor transferencia al golpeo y a la estabilidad en el frontón.",
          exercises: ["abWheel", "deadBug", "sidePlank", "birdDog", "pallof", "planchaCopenhague", "bandRotationalThrow"] },
        { title: "Vuelta a la calma", icon: "fa-wind", note: "Respiración diafragmática 3-5 minutos + liberación plantar suave." }
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
      meta: "75-90 min · RPE 7-8, RIR 2 en dominadas/flexiones",
      variants: {
        gimnasio: [
          { title: "Calentamiento", icon: "fa-fire", note: "10 minutos." },
          { title: "Bloque A — Potencia", icon: "fa-bolt", exercises: ["broadJump"], note: "Descanso completo entre series (2-3 min): buscamos velocidad, no fatiga." },
          { title: "Bloque B — Empuje y tracción", icon: "fa-arrow-up-long", exercises: ["dominadas", "flexionesLastradas", "remoTRX"] },
          { title: "Bloque C — Cadena posterior", icon: "fa-person-walking", exercises: ["pesoMuertoUnilateral", "nordicCurl"] },
          { title: "Bloque D — Gemelos", icon: "fa-shoe-prints", exercises: ["gemeloViernes"] },
          { title: "Bloque E — Core y potencia rotacional", icon: "fa-shield", exercises: ["abWheel", "woodChop", "landmineRotation"] },
          { title: "Recuperación", icon: "fa-spa", note: "9 minutos de protocolo de pie (ver Fascitis plantar)." }
        ],
        casa: [
          { title: "Calentamiento", icon: "fa-fire", note: "10 minutos." },
          { title: "Bloque A — Potencia", icon: "fa-bolt", exercises: ["sentadillaSaltoCasa"] },
          { title: "Bloque B — Empuje y tracción", icon: "fa-arrow-up-long", exercises: ["dominadasORemoCasa", "flexionesLastradas", "remoTRX"] },
          { title: "Bloque C — Cadena posterior", icon: "fa-person-walking", exercises: ["pesoMuertoUnilateralCasa", "nordicCurlAsistido"] },
          { title: "Bloque D — Gemelos", icon: "fa-shoe-prints", exercises: ["gemeloViernesCasa"] },
          { title: "Bloque E — Core y potencia rotacional", icon: "fa-shield", exercises: ["abWheelCasa", "woodChopBanda", "rotacionBandaCasa"] },
          { title: "Recuperación", icon: "fa-spa", note: "9 minutos de protocolo de pie (ver Fascitis plantar)." }
        ]
      }
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
    "La fascia plantar es una banda gruesa de tejido que va del talón a los dedos y actúa como un cable que sostiene el arco del pie. La fascitis aparece cuando ese tejido recibe más carga de la que puede tolerar de forma repetida: apoyos, frenadas y cambios de dirección en el frontón son exactamente ese tipo de carga.",
    "Casi nunca es un problema aislado de la fascia: suele existir un déficit en toda la cadena — gemelo y sóleo rígidos, tibial posterior débil, musculatura intrínseca del pie poco activa, o glúteo medio débil que compromete el apoyo. Por eso este programa no solo trabaja el pie: trabaja glúteo, isquios y gemelos como parte del mismo problema."
  ],
  protocoloDiario: [
    { icon: "fa-sun", title: "Al levantarte (antes del primer paso)", items: ["Estiramiento de fascia con toalla: 30 segundos × 3 (ver ficha más abajo).", "Nunca pises descalzo y en frío nada más levantarte sin haber hecho antes este estiramiento — es el momento de mayor rigidez de la fascia."] },
    { icon: "fa-dumbbell", title: "Antes de cada entrenamiento (pelota o fuerza)", items: ["Liberación con pelota de lacrosse/tenis: 1 minuto por pie.", "Short Foot + Toe Yoga: activación de la musculatura intrínseca.", "Movilidad de tobillo (dorsiflexión contra pared)."] },
    { icon: "fa-spa", title: "Después de cada entrenamiento", items: ["Liberación con pelota, 1-2 minutos por pie.", "Estiramiento de gemelo y sóleo, 30 segundos × 2 cada uno.", "Opcional: frío local (botella de agua congelada rodando bajo el pie) 10 minutos si notas inflamación."] }
  ],
  fascitisTips: [
    { icon: "fa-shoe-prints", title: "Calzado", text: "Usa calzado de frontón en buen estado (no desgastado) y considera una plantilla con soporte de arco si el fisioterapeuta lo recomienda." },
    { icon: "fa-chart-line", title: "Progresión de carga", text: "Nunca aumentes el volumen o la intensidad de impacto (saltos, sprints) más de un 10% semanal." },
    { icon: "fa-road", title: "Superficies", text: "No entrenes descalzo sobre superficies duras hasta tener el pie completamente asintomático durante varias semanas." },
    { icon: "fa-shield-heart", title: "Mantén el trabajo preventivo", text: "Sigue con la fuerza de cadena posterior incluso cuando ya no tengas molestias: la fascitis recae con mucha frecuencia cuando se abandona el trabajo preventivo al desaparecer el dolor." },
    { icon: "fa-weight-scale", title: "Controla tu peso corporal", text: "Cada kilo extra incrementa la carga por impacto en cada apoyo." },
    { icon: "fa-calendar-minus", title: "Semanas de mucho volumen de pelota", text: "Si vas a aumentar mucho el volumen de pelota (torneo, pretemporada), añade una semana de descarga de impactos antes y después." },
    { icon: "fa-clipboard-check", title: "Repite los tests cada 8 semanas", text: "Repite el test de dorsiflexión y el semáforo del dolor cada 8 semanas para detectar cualquier retroceso a tiempo (ver Evaluación inicial)." }
  ],
  recomendacionesIntro: "Análisis de la guía original: esto es lo que se ha añadido en esta edición y lo que conviene tener en cuenta a partir de ahora. Ninguna de estas adiciones es obligatoria desde el primer día — introdúcelas de una en una, y siempre después de haber consolidado el programa base durante al menos 4 semanas sin dolor.",
  recomendaciones: [
    { icon: "fa-calendar-minus", title: "Semana de descarga (deload)", text: "Cada 5-6 semanas, reduce el volumen un 40-50% (mantén la intensidad, baja las series) durante una semana completa. Permite que la fascia y los tendones consoliden la adaptación de carga sin acumular fatiga crónica." },
    { icon: "fa-hand-fist", title: "Trabajo de agarre y muñeca (opcional)", text: "El golpeo repetido en frontón somete a la muñeca y el antebrazo a cargas específicas. Si notas fatiga o molestias, añade extensores de muñeca con banda 2×15 — el Farmer Carry ya trabaja parcialmente el agarre." },
    { icon: "fa-drumstick-bite", title: "Nutrición e hidratación", text: "La reparación de tejido conectivo (fascia, tendones) se beneficia de una ingesta proteica suficiente (aprox. 1,6-2,2 g/kg/día) y de una hidratación adecuada, especialmente en los días de doble sesión (fuerza + pelota)." },
    { icon: "fa-bed", title: "Sueño", text: "Por debajo de 7 horas de sueño de forma sostenida, la capacidad de recuperación de tendón y fascia cae de forma medible. Probablemente la variable con mayor impacto y menor coste de todas las de este manual." }
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
  renderProtocolDiario();
  renderRecomendaciones();
  initNav();
  initLog();
  initWeekly();
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

const dayVariantState = {}; // recuerda la última versión elegida (Gimnasio/Casa) por día

function renderDayPanel(dayName) {
  const day = DATA.days[dayName];
  const hasVariants = !!day.variants;
  const currentVariant = dayVariantState[dayName] || "gimnasio";
  const blocks = hasVariants ? day.variants[currentVariant] : day.blocks;

  let html = `<div class="day-panel-head"><h3>${dayName} — ${day.subtitle}</h3><div class="meta">${day.meta}</div></div>`;

  if (hasVariants) {
    html += `
      <div class="variant-toggle" role="tablist" aria-label="Versión de la sesión">
        <button class="variant-btn ${currentVariant === "gimnasio" ? "active" : ""}" data-variant="gimnasio"><i class="fa-solid fa-dumbbell"></i> Gimnasio</button>
        <button class="variant-btn ${currentVariant === "casa" ? "active" : ""}" data-variant="casa"><i class="fa-solid fa-house"></i> Casa</button>
      </div>`;
  }

  blocks.forEach(block => {
    html += `<div class="day-block"><h4><i class="fa-solid ${block.icon}"></i> ${block.title}</h4>`;
    if (block.note) html += `<div class="day-note">${block.note}</div>`;
    if (block.exercises) {
      html += `<div class="exercise-grid">${block.exercises.map(slug => exerciseCard(EXERCISES[slug], slug)).join("")}</div>`;
    }
    html += `</div>`;
  });
  document.getElementById("dayPanel").innerHTML = html;
  bindExerciseToggles();

  if (hasVariants) {
    document.querySelectorAll(".variant-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        dayVariantState[dayName] = btn.dataset.variant;
        renderDayPanel(dayName);
      });
    });
  }
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
    <div class="warmup-block">
      <div class="warmup-block-head">
        <div class="warmup-block-num"><i class="fa-solid fa-shoe-prints"></i></div>
        <div><h4>Activación específica del pie (fascitis plantar)</h4><span class="dur">2-3 min</span></div>
      </div>
      <div class="day-note">Antes de cualquier sesión de fuerza o de pelota, añade 2-3 minutos de activación específica del complejo pie-tobillo: Short Foot, Toe Yoga y elevaciones de talón excéntricas. Ficha técnica completa en <a href="#fascitis">Fascitis plantar</a>.</div>
    </div>`;
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

/* ---------- PROTOCOLO DIARIO (fascitis) ---------- */
function renderProtocolDiario() {
  document.getElementById("protocolGrid").innerHTML = DATA.protocoloDiario.map(p => `
    <div class="fascitis-tip protocol-step">
      <h4><i class="fa-solid ${p.icon}"></i> ${p.title}</h4>
      <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`).join("");
}

/* ---------- RECOMENDACIONES Y PRÓXIMOS PASOS ---------- */
function renderRecomendaciones() {
  document.getElementById("recomendacionesIntro").textContent = DATA.recomendacionesIntro;
  document.getElementById("recomendacionesGrid").innerHTML = DATA.recomendaciones.map(r => `
    <div class="material-card">
      <h4><i class="fa-solid ${r.icon}"></i> ${r.title}</h4>
      <p style="font-size:0.88rem;color:#4a5a53;margin:0;">${r.text}</p>
    </div>`).join("");
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

/* ---------- RESUMEN SEMANAL (cabecera: peso, sueño, versión, dolor, sensación) ---------- */
function getWeekly() { return JSON.parse(localStorage.getItem("markelen_weekly") || "[]"); }
function saveWeekly(list) { localStorage.setItem("markelen_weekly", JSON.stringify(list)); }

function initWeekly() {
  document.getElementById("weeklyForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const list = getWeekly();
    list.push({
      week: document.getElementById("weekNumber").value,
      date: document.getElementById("weekDate").value,
      bodyWeight: document.getElementById("weekBodyWeight").value,
      sleep: document.getElementById("weekSleep").value,
      version: document.getElementById("weekVersion").value,
      pain: document.getElementById("weekPain").value,
      feeling: document.getElementById("weekFeeling").value,
      notes: document.getElementById("weekNotes").value
    });
    saveWeekly(list);
    e.target.reset();
    renderWeeklyTable();
  });
  renderWeeklyTable();
}

function renderWeeklyTable() {
  const list = getWeekly().slice().sort((a, b) => (a.week < b.week ? 1 : -1));
  const body = document.getElementById("weeklyTableBody");
  if (!list.length) {
    body.innerHTML = `<tr><td colspan="9" class="log-empty">Todavía no hay resúmenes semanales. Añade la primera semana arriba.</td></tr>`;
    return;
  }
  body.innerHTML = list.map((w, i) => `
    <tr>
      <td>${w.week || "—"}</td><td>${w.date || "—"}</td><td>${w.bodyWeight ? w.bodyWeight + " kg" : "—"}</td>
      <td>${w.sleep ? w.sleep + " h" : "—"}</td><td>${w.version || "—"}</td><td>${w.pain || "—"}</td>
      <td>${w.feeling || "—"}</td><td>${w.notes || "—"}</td>
      <td><button class="log-row-delete" data-i="${i}" title="Borrar"><i class="fa-solid fa-xmark"></i></button></td>
    </tr>`).join("");
  body.querySelectorAll(".log-row-delete").forEach(btn => {
    btn.addEventListener("click", () => {
      const all = getWeekly().slice().sort((a, b) => (a.week < b.week ? 1 : -1));
      all.splice(Number(btn.dataset.i), 1);
      saveWeekly(all);
      renderWeeklyTable();
    });
  });
}

/* ---------- REGISTRO SEMANAL (series por ejercicio) ---------- */
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
