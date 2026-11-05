/* =========================================================
   EN ESENCIA · Contenido editable
   VERSIÓN PRELANZAMIENTO: todavía no hay episodios publicados.

   Cuando salga el primer episodio:
   - Añádelo al array `episodios` (el primero aparece como "último").
   - Vuelve a poner en index.html los bloques «El último episodio»,
     «Todos los episodios» y, cuando tengas fotos reales, «Las personas».
   La versión completa de referencia está guardada en la copia de seguridad.
   ========================================================= */

window.EN_ESENCIA = {

  /* Formularios de Tally. Pega aquí el enlace para compartir de cada formulario
     (por ejemplo "https://tally.so/r/w4ABcd") o solo su código ("w4ABcd").
     Mientras esté vacío, la web enseña tu email en lugar del formulario. */
  formularios: {
    carta: "https://tally.so/r/q5aR9G",      // «Avísame del estreno» (lista de espera)
    pregunta: "https://tally.so/r/OQl7v7"    // «¿Tienes una pregunta?»
  },

  contacto: "enesenciapodcast@hotmail.com",

  episodios: [],

  /* Polaroids de «Las personas detrás de EN ESENCIA» (bloque oculto hasta tener invitadas) */
  personas: [],

  /* Preguntas que abren el podcast.
     "estado" es el texto pequeño de debajo. Cuando lleguen preguntas reales
     de oyentes, añádelas aquí con su "autora" (p. ej. "Andrea, 28"). */
  preguntasOyentes: [
    { texto: "¿Existe una edad correcta para tenerlo todo claro?", autora: "Irene, 27", estado: "La pregunta con la que empezó todo" },
    { texto: "¿Por qué nos da vergüenza decir que queremos más?", autora: "Me la hago yo", estado: "Para los primeros episodios" },
    { texto: "¿Qué pasa con una amistad cuando cada una va a un ritmo?", autora: "Me la hago yo", estado: "Para los primeros episodios" }
  ],

  /* «Una pregunta». Sin fecha mientras no haya episodios semanales. */
  preguntaSemana: {
    texto: "¿Qué harías si no tuvieras que demostrarle a nadie que vas bien?",
    fecha: "",
    usuario: "enesenciapodcast.com"
  }
};
