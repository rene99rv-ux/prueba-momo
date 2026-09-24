/* =========================================================
   EN ESENCIA · Contenido editable
   Todo lo que cambia cada semana está aquí.
   El primer episodio del array es el que aparece como "último".
   ========================================================= */

window.EN_ESENCIA = {

  episodios: [
    {
      numero: 8,
      invitada: "Laura Méndez",
      titulo: "Dejar una carrera que ya no era tuya",
      pregunta: "¿Cuánto tiempo hay que quedarse en algo para no haberlo «tirado»?",
      frase: "No estaba cansada del trabajo. Estaba cansada de ser esa versión de mí.",
      descripcion: "Laura estudió Derecho, ejerció cinco años y a los 29 lo dejó sin tener un plan B. Hablamos de culpa, de dinero, de lo que dirán y de cómo se empieza cuando no sabes muy bien qué estás empezando.",
      duracion: "52:14",
      foto: "img/invitada-01.svg",
      anotacion: "grabado un martes lluvioso",
      enlaces: { spotify: "#", apple: "#", youtube: "#" }
    },
    {
      numero: 7,
      invitada: "Nuria Salas",
      titulo: "Tener 30 y compartir piso",
      pregunta: "¿Quién decidió cuándo se es adulta?",
      frase: "Mi madre a mi edad tenía dos hijos. Yo tengo una planta y estoy orgullosa.",
      duracion: "44:30",
      foto: "img/invitada-02.svg",
      enlaces: { spotify: "#" }
    },
    {
      numero: 6,
      invitada: "Carmen Ortiz",
      titulo: "Empezar otra vez a los 45",
      pregunta: "¿Y si el momento no llega nunca y hay que inventarlo?",
      frase: "No llegué tarde a nada. Llegué cuando pude, que es muy distinto.",
      duracion: "48:02",
      foto: "img/invitada-03.svg",
      enlaces: { spotify: "#" }
    },
    {
      numero: 5,
      invitada: "Sara Quintana",
      titulo: "Querer una vida que nadie te enseñó",
      pregunta: "¿Y si no quiero la vida que se supone que debería querer?",
      frase: "Lo difícil no fue decidirlo. Lo difícil fue explicarlo en cada comida familiar.",
      duracion: "41:47",
      foto: "img/invitada-04.svg",
      enlaces: { spotify: "#" }
    },
    {
      numero: 4,
      invitada: "Paula Rey",
      titulo: "La ambición también es cosa nuestra",
      pregunta: "¿Por qué nos da vergüenza decir que queremos más?",
      frase: "Aprendí a decir «quiero esto» sin pedir perdón justo después.",
      duracion: "39:55",
      foto: "img/invitada-05.svg",
      enlaces: { spotify: "#" }
    },
    {
      numero: 3,
      invitada: "Elena Vidal",
      titulo: "Amigas que se quedan, amigas que se van",
      pregunta: "¿Qué pasa con una amistad cuando cada una va a un ritmo?",
      frase: "Dejamos de vernos cada semana y seguimos siendo lo que éramos. Solo cambió el calendario.",
      duracion: "46:10",
      foto: "img/invitada-06.svg",
      enlaces: { spotify: "#" }
    },
    {
      numero: 2,
      invitada: "Marina Costa",
      titulo: "El miedo a elegir mal",
      pregunta: "¿Cómo sabes que estás tomando la decisión correcta?",
      frase: "No existe la decisión correcta. Existe la que eres capaz de sostener.",
      duracion: "43:21",
      foto: "img/invitada-07.svg",
      enlaces: { spotify: "#" }
    },
    {
      numero: 1,
      invitada: "Irene Romera",
      titulo: "Un atrevimiento",
      pregunta: "¿Existe una edad correcta para tenerlo todo claro?",
      frase: "Empecé esto porque no tenía respuestas. Sigo sin tenerlas, pero ahora tengo compañía.",
      duracion: "31:08",
      foto: "img/irene.svg",
      enlaces: { spotify: "#" }
    }
  ],

  /* Polaroids de la sección "Las personas detrás de EN ESENCIA" */
  personas: [
    { nombre: "Laura Méndez",  foto: "img/invitada-01.svg", nota: "Laura, el día que dijo «basta»", giro: -4, velocidad: .06, marca: "circulo" },
    { nombre: "Nuria Salas",   foto: "img/invitada-02.svg", nota: "Nuria y su planta (se llama Pepa)", giro: 3, velocidad: -.04 },
    { nombre: "Carmen Ortiz",  foto: "img/invitada-03.svg", nota: "Carmen: 45 años y cero prisa", giro: -2, velocidad: .08, marca: "flecha" },
    { nombre: "Sara Quintana", foto: "img/invitada-04.svg", nota: "Sara, riéndose de la pregunta de siempre", giro: 2.5, velocidad: -.06 },
    { nombre: "Paula Rey",     foto: "img/invitada-05.svg", nota: "Paula pidiendo más, sin perdón", giro: -3, velocidad: .05, marca: "subrayado" },
    { nombre: "Elena Vidal",   foto: "img/invitada-06.svg", nota: "Elena y la amiga que se fue a Lisboa", giro: 4, velocidad: -.03 }
  ],

  /* Preguntas de oyentes. "episodio" es opcional: si existe, enlaza a la respuesta */
  preguntasOyentes: [
    { texto: "¿Cómo sabes que estás tomando la decisión correcta?", autora: "Andrea, 28", episodio: 2 },
    { texto: "¿Y si no quiero la vida que se supone que debería querer?", autora: "Anónima, 31", episodio: 5 },
    { texto: "¿Es normal sentir que todo el mundo avanza menos yo?", autora: "Lucía, 26" },
    { texto: "¿Cuándo se deja de tener miedo a cambiar?", autora: "Bea, 34" }
  ],

  /* La pregunta de la semana (sección "Una pregunta") */
  preguntaSemana: {
    texto: "¿Qué harías si no tuvieras que demostrarle a nadie que vas bien?",
    fecha: "2026-09-20",
    usuario: "@enesenciapodcast"
  }
};
