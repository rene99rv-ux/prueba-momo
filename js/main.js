/* =========================================================
   EN ESENCIA · Interacción
   Lento, íntimo, editorial.
   ========================================================= */
(() => {
  "use strict";

  const datos = window.EN_ESENCIA || { episodios: [], personas: [], preguntasOyentes: [], preguntaSemana: {} };
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const dosCifras = n => String(n).padStart(2, "0");
  const escapar = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const SVG = "http://www.w3.org/2000/svg";

  /* ---------- Generador de trazos "a mano" ----------
     Devuelve un path SVG con pequeñas irregularidades,
     siempre igual para la misma semilla. */
  function aleatorio(semilla) {
    let a = semilla >>> 0;
    return () => {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function trazoMano(x0, y0, x1, y1, semilla, temblor = 1.6, tramos = 6) {
    const r = aleatorio(semilla);
    let d = `M${x0.toFixed(1)} ${y0.toFixed(1)}`;
    let px = x0, py = y0;
    for (let k = 1; k <= tramos; k++) {
      const x = x0 + (x1 - x0) * (k / tramos);
      const y = y0 + (y1 - y0) * (k / tramos) + (k < tramos ? (r() - .5) * temblor * 2 : 0);
      const cx = (px + x) / 2 + (r() - .5) * temblor;
      const cy = (py + y) / 2 + (r() - .5) * temblor * 2.2;
      d += ` Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
      px = x; py = y;
    }
    // pequeño remate final, como cuando levantas el lápiz
    d += ` q${(2 + r() * 2).toFixed(1)} ${(-.6 + r()).toFixed(1)} ${(4 + r() * 2).toFixed(1)} ${(1 + r()).toFixed(1)}`;
    return d;
  }

  /* =========================================================
     CABECERA Y MENÚ
     ========================================================= */
  const cabecera = $(".cabecera");
  const botonMenu = $(".boton-menu");
  const menu = $("#menu");
  const hero = $(".hero");

  function abrirMenu() {
    menu.hidden = false;
    botonMenu.setAttribute("aria-expanded", "true");
    botonMenu.textContent = "Cerrar";
    document.body.classList.add("menu-abierto");
    cabecera.classList.add("con-marca");
    $("a", menu).focus();
  }
  function cerrarMenu(devolverFoco = true) {
    menu.hidden = true;
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.textContent = "Menú";
    document.body.classList.remove("menu-abierto");
    actualizarCabecera();
    if (devolverFoco) botonMenu.focus();
  }
  botonMenu.addEventListener("click", () => (menu.hidden ? abrirMenu() : cerrarMenu()));
  menu.addEventListener("click", e => { if (e.target.closest("a")) cerrarMenu(false); });
  document.addEventListener("keydown", e => {
    if (menu.hidden) return;
    if (e.key === "Escape") cerrarMenu();
    // Mantener el foco dentro del menú y el botón de cerrar
    if (e.key === "Tab") {
      const enfocables = [botonMenu, ...$$("a", menu)];
      const i = enfocables.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); enfocables[enfocables.length - 1].focus(); }
      else if (!e.shiftKey && i === enfocables.length - 1) { e.preventDefault(); enfocables[0].focus(); }
    }
  });
  function actualizarCabecera() {
    const finHero = hero.offsetHeight - window.innerHeight * .6;
    cabecera.classList.toggle("con-marca", window.scrollY > finHero || !menu.hidden);
  }

  /* =========================================================
     1. HERO · Edades que se tachan al hacer scroll
     ========================================================= */
  const edades = $$(".edad");
  const tachones = edades.map((edad, i) => {
    const svg = document.createElementNS(SVG, "svg");
    svg.setAttribute("class", "tachon");
    svg.setAttribute("viewBox", "0 0 120 46");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("aria-hidden", "true");
    // Cada línea sube ligeramente, con una inclinación distinta
    const inclinacion = 7 + i * 1.5;
    const pasadas = [
      trazoMano(3, 27 + inclinacion / 2, 113, 24 - inclinacion / 2, 11 + i * 17, 1.4),
      trazoMano(9, 30 + inclinacion / 2, 110, 27 - inclinacion / 2, 97 + i * 29, 2, 5)
    ];
    const paths = pasadas.map((d, k) => {
      const p = document.createElementNS(SVG, "path");
      p.setAttribute("d", d);
      p.setAttribute("pathLength", "1");
      p.setAttribute("class", `pasada-${k + 1}`);
      svg.appendChild(p);
      return p;
    });
    edad.appendChild(svg);
    return paths;
  });

  const claim1 = $(".claim-1");
  const claim2 = $(".claim-2");
  const subrayadoClaim = $(".claim-subrayado path");
  const pista = $(".hero-pista");

  function pintarHero(p) {
    edades.forEach((edad, i) => {
      const inicio = .06 + i * .17;
      const local = clamp((p - inicio) / .15);
      const [primera, segunda] = tachones[i];
      const local2 = clamp((local - .45) / .55);
      primera.style.strokeDashoffset = 1 - local;
      segunda.style.strokeDashoffset = 1 - local2;
      primera.style.opacity = local > 0 ? 1 : 0;   // evita el punto del remate redondo
      segunda.style.opacity = local2 > 0 ? .55 : 0;
      edad.classList.toggle("tachada", local > .55);
    });
    const c1 = clamp((p - .72) / .08);
    const c2 = clamp((p - .8) / .08);
    claim1.style.opacity = c1; claim1.style.transform = `translateY(${(1 - c1) * 14}px)`;
    claim2.style.opacity = c2; claim2.style.transform = `translateY(${(1 - c2) * 14}px)`;
    subrayadoClaim.style.strokeDashoffset = 1 - clamp((p - .88) / .08);
    if (pista) pista.style.opacity = 1 - clamp(p / .05);
  }

  function progresoHero() {
    const recorrido = hero.offsetHeight - window.innerHeight;
    if (recorrido <= 0) return 1;
    return clamp(-hero.getBoundingClientRect().top / recorrido);
  }

  /* =========================================================
     3. ÚLTIMO EPISODIO + reproductor simulado
     ========================================================= */
  const aSegundos = t => t.split(":").reduce((acc, n) => acc * 60 + Number(n), 0);
  const aTiempo = s => `${Math.floor(s / 60)}:${dosCifras(Math.floor(s % 60))}`;

  const ultimo = datos.episodios[0];
  if (ultimo) {
    $("#ultimo-numero").textContent = dosCifras(ultimo.numero);
    const img = $("#ultimo-img");
    img.src = ultimo.foto;
    img.alt = `Retrato de ${ultimo.invitada}, invitada del episodio ${ultimo.numero}`;
    $("#ultimo-anotacion").textContent = ultimo.anotacion || "";
    $("#ultimo-meta").textContent = `Episodio ${dosCifras(ultimo.numero)}, con ${ultimo.invitada}`;
    $("#ultimo-titulo").textContent = ultimo.titulo;
    $("#ultimo-desc").textContent = ultimo.descripcion || ultimo.pregunta;
    const enl = ultimo.enlaces || {};
    [["spotify", "#enlace-spotify"], ["apple", "#enlace-apple"], ["youtube", "#enlace-youtube"]].forEach(([k, sel]) => {
      const a = $(sel);
      if (enl[k]) a.href = enl[k]; else a.remove();
    });
  }

  const btnPlay = $("#btn-play");
  const posicion = $("#posicion");
  const tActual = $("#t-actual");
  const total = ultimo ? aSegundos(ultimo.duracion) : 0;
  let sonando = false, reloj = null;
  posicion.max = total;
  $("#t-total").textContent = aTiempo(total);

  function pintarPosicion() {
    const s = Number(posicion.value);
    tActual.textContent = aTiempo(s);
    posicion.style.setProperty("--progreso", `${(s / total) * 100}%`);
    posicion.setAttribute("aria-valuetext", `${Math.floor(s / 60)} minutos y ${Math.floor(s % 60)} segundos de ${Math.floor(total / 60)} minutos`);
  }
  function pausar() {
    sonando = false; clearInterval(reloj);
    btnPlay.textContent = "Escuchar"; btnPlay.setAttribute("aria-pressed", "false");
  }
  function reproducir() {
    if (Number(posicion.value) >= total) posicion.value = 0;
    sonando = true;
    btnPlay.textContent = "Pausar"; btnPlay.setAttribute("aria-pressed", "true");
    reloj = setInterval(() => {
      posicion.value = Math.min(total, Number(posicion.value) + 1);
      pintarPosicion();
      if (Number(posicion.value) >= total) pausar();
    }, 1000);
  }
  btnPlay.addEventListener("click", () => (sonando ? pausar() : reproducir()));
  posicion.addEventListener("input", pintarPosicion);
  pintarPosicion();

  /* =========================================================
     4. ARCHIVO DE EPISODIOS
     ========================================================= */
  const lista = $("#archivo-lista");
  lista.innerHTML = datos.episodios.map((ep, i) => {
    const giro = [-3, 2.5, -1.5, 3.5, -2.5, 1.5][i % 6];
    const enlace = (ep.enlaces && ep.enlaces.spotify) || "#";
    return `
      <li class="ep">
        <a class="ep-enlace" href="${escapar(enlace)}" ${enlace !== "#" ? 'target="_blank" rel="noopener"' : ""}
           aria-label="Episodio ${ep.numero}: ${escapar(ep.titulo)}, con ${escapar(ep.invitada)}">
          <span class="ep-num" aria-hidden="true">${dosCifras(ep.numero)}</span>
          <span class="ep-polaroid" style="--giro:${giro}deg" aria-hidden="true">
            <img src="${escapar(ep.foto)}" alt="" loading="lazy" width="800" height="1000">
          </span>
          <span class="ep-textos">
            <span class="ep-nombre">${escapar(ep.invitada)}</span>
            <span class="ep-titulo">${escapar(ep.titulo)}</span>
          </span>
          <span class="ep-lado">
            <span class="ep-pregunta">${escapar(ep.pregunta)}</span>
            <span class="ep-frase">«${escapar(ep.frase)}»</span>
          </span>
        </a>
      </li>`;
  }).join("");
  lista.addEventListener("click", e => {
    const a = e.target.closest(".ep-enlace");
    if (a && a.getAttribute("href") === "#") e.preventDefault(); // enlaces pendientes de completar
  });
  if (window.matchMedia("(hover: none)").matches) {
    $("#archivo-intro").textContent = "Un archivo de conversaciones. Debajo de cada una, una frase que se quedó.";
  }

  /* =========================================================
     5. POLAROIDS
     ========================================================= */
  const marcas = {
    circulo: '<svg class="marca-mano dibujo" viewBox="0 0 60 60" style="width:58px;right:-18px;top:-20px"><path pathLength="1" d="M30 8 C 46 6, 54 22, 50 36 C 46 50, 24 54, 14 42 C 4 30, 12 12, 32 10"/></svg>',
    flecha: '<svg class="marca-mano dibujo" viewBox="0 0 70 50" style="width:64px;left:-44px;bottom:30px"><path pathLength="1" d="M4 40 C 20 34, 40 26, 62 12 M50 10 C 55 11, 59 11, 63 11 C 61 15, 59 19, 57 23"/></svg>',
    subrayado: '<svg class="marca-mano dibujo" viewBox="0 0 120 12" preserveAspectRatio="none" style="width:70%;left:12px;bottom:10px;height:10px"><path pathLength="1" d="M2 7 C 30 3, 70 9, 118 5"/></svg>'
  };
  const tablero = $("#tablero");
  tablero.innerHTML = datos.personas.map(p => `
    <li class="polaroid revelar" style="--r:${p.giro}deg" data-velocidad="${p.velocidad || 0}">
      <figure>
        <img src="${escapar(p.foto)}" alt="Polaroid de ${escapar(p.nombre)}" loading="lazy" width="800" height="1000">
        <figcaption>${escapar(p.nota)}</figcaption>
      </figure>
      ${p.marca ? marcas[p.marca] : ""}
    </li>`).join("");
  const polaroids = $$(".polaroid", tablero);
  const esMovil = () => window.matchMedia("(max-width: 760px)").matches;

  function moverPolaroids() {
    if (reducirMovimiento || esMovil()) return;
    const rect = tablero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const centro = rect.top + rect.height / 2 - window.innerHeight / 2;
    polaroids.forEach(el => el.style.setProperty("--py", `${(-centro * Number(el.dataset.velocidad)).toFixed(1)}px`));
  }

  /* =========================================================
     8. PREGUNTAS DE OYENTES
     ========================================================= */
  $("#preguntas-lista").innerHTML = datos.preguntasOyentes.map(q => `
    <li class="pregunta-oyente revelar">
      <blockquote>«${escapar(q.texto)}»</blockquote>
      <p><span>${escapar(q.autora)}</span>
        ${q.episodio ? `<a href="#episodios">Respondida en el episodio ${dosCifras(q.episodio)}</a>` : "<span>Todavía sin respuesta</span>"}
      </p>
    </li>`).join("");

  /* =========================================================
     FORMULARIOS · validación sin librerías
     ========================================================= */
  function mostrarError(campo, mensaje) {
    const contenedor = campo.closest(".campo");
    const error = document.getElementById(`${campo.id}-error`);
    contenedor.classList.toggle("con-error", !!mensaje);
    campo.setAttribute("aria-invalid", mensaje ? "true" : "false");
    if (error) error.textContent = mensaje;
    return !mensaje;
  }

  function prepararFormulario(form, reglas, alEnviar) {
    const campos = Object.keys(reglas).map(id => document.getElementById(id));
    const validar = campo => mostrarError(campo, reglas[campo.id](campo));
    campos.forEach(campo => {
      campo.addEventListener("blur", () => validar(campo));
      campo.addEventListener(campo.type === "checkbox" ? "change" : "input", () => {
        if (campo.getAttribute("aria-invalid") === "true" || campo.type === "checkbox") validar(campo);
      });
    });
    form.addEventListener("submit", e => {
      e.preventDefault();
      const errores = campos.filter(c => !validar(c));
      if (errores.length) { errores[0].focus(); return; }
      alEnviar();
      form.reset();
      campos.forEach(c => { c.removeAttribute("aria-invalid"); c.closest(".campo").classList.remove("con-error"); });
    });
  }

  // Formulario de preguntas
  const formPregunta = $("#form-pregunta");
  const okPregunta = $("#ok-pregunta");
  const textoPregunta = $("#p-pregunta");
  const contador = $("#p-contador");
  textoPregunta.addEventListener("input", () => { contador.textContent = textoPregunta.value.length; });

  prepararFormulario(formPregunta, {
    "p-nombre": c => c.value.trim().length > 40 ? "El nombre puede tener como máximo 40 caracteres." : "",
    "p-edad": c => {
      if (c.value === "") return "";
      const n = Number(c.value);
      return Number.isInteger(n) && n >= 16 && n <= 99 ? "" : "Si pones tu edad, que sea un número entre 16 y 99.";
    },
    "p-pregunta": c => {
      const largo = c.value.trim().length;
      if (!largo) return "Escribe tu pregunta. Aunque sea a medias.";
      return largo < 15 ? "Cuéntala un poco más: al menos 15 caracteres." : "";
    },
    "p-autorizo": c => c.checked ? "" : "Necesito tu permiso para poder leerla en un episodio."
  }, () => {
    formPregunta.hidden = true;
    okPregunta.hidden = false;
    contador.textContent = "0";
    okPregunta.focus();
  });
  $("#otra-pregunta").addEventListener("click", () => {
    okPregunta.hidden = true;
    formPregunta.hidden = false;
    textoPregunta.focus();
  });

  // Carta de los domingos
  const formCarta = $("#form-carta");
  const okCarta = $("#ok-carta");
  prepararFormulario(formCarta, {
    "c-email": c => {
      const v = c.value.trim();
      if (!v) return "Escribe tu email para recibir la carta.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Revisa el email: debería tener la forma nombre@correo.com.";
    }
  }, () => {
    formCarta.hidden = true;
    okCarta.hidden = false;
    okCarta.focus();
  });

  /* =========================================================
     11. UNA PREGUNTA · también exportable para redes
     ========================================================= */
  const semana = datos.preguntaSemana || {};
  $("#una-pregunta-texto").textContent = semana.texto || "";
  if (semana.fecha) {
    const [a, m, d] = semana.fecha.split("-").map(Number);
    const fecha = new Date(a, m - 1, d).toLocaleDateString("es-ES", { day: "numeric", month: "long" });
    $("#una-pregunta-fecha").textContent = `Semana del ${fecha}`;
  }
  const aviso = $("#aviso-pregunta");
  const avisar = t => { aviso.textContent = t; setTimeout(() => (aviso.textContent = ""), 3500); };

  $("#copiar-pregunta").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(semana.texto);
      avisar("Pregunta copiada.");
    } catch {
      avisar("No se ha podido copiar. Selecciona el texto y cópialo a mano.");
    }
  });

  function partirTexto(ctx, texto, ancho) {
    const lineas = [];
    let actual = "";
    texto.split(" ").forEach(palabra => {
      const prueba = actual ? `${actual} ${palabra}` : palabra;
      if (ctx.measureText(prueba).width > ancho && actual) { lineas.push(actual); actual = palabra; }
      else actual = prueba;
    });
    if (actual) lineas.push(actual);
    return lineas;
  }

  $("#descargar-pregunta").addEventListener("click", async () => {
    try {
      await Promise.all([
        document.fonts.load('96px "Libre Caslon Display"'),
        document.fonts.load('italic 34px "Libre Caslon Text"'),
        document.fonts.load('600 26px "Figtree"'),
        document.fonts.load('44px "Reenie Beanie"')
      ]);
    } catch { /* si falla la carga, se usan las fuentes de respaldo */ }

    const W = 1080, H = 1350, M = 96;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#F8F7F4"; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#121212";
    ctx.font = '600 24px "Figtree", Arial, sans-serif';
    ctx.letterSpacing = "10px";
    ctx.fillText("EN ESENCIA", M, M + 10);
    ctx.letterSpacing = "0px";

    ctx.fillStyle = "#5F5E5B";
    ctx.font = 'italic 34px "Libre Caslon Text", Georgia, serif';
    ctx.fillText("Una pregunta", M, 300);

    ctx.fillStyle = "#121212";
    let tam = 104;
    let lineas;
    do {
      ctx.font = `${tam}px "Libre Caslon Display", Georgia, serif`;
      lineas = partirTexto(ctx, semana.texto, W - M * 2);
      tam -= 4;
    } while (lineas.length * tam * 1.05 > 660 && tam > 56);
    const alto = tam * 1.05;
    lineas.forEach((l, i) => ctx.fillText(l, M, 420 + i * alto));

    // Subrayado a mano bajo la última línea
    const ultimaY = 420 + (lineas.length - 1) * alto + 34;
    const anchoUltima = ctx.measureText(lineas[lineas.length - 1]).width;
    ctx.strokeStyle = "#D8C8A8"; ctx.lineWidth = 7; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.stroke(new Path2D(trazoMano(M - 6, ultimaY + 6, M + anchoUltima + 10, ultimaY - 4, 2026, 4, 5)));

    ctx.fillStyle = "#121212";
    ctx.font = '48px "Reenie Beanie", cursive';
    ctx.fillText("No vas tarde. Vas a tu tiempo.", M, H - M - 40);
    ctx.fillStyle = "#5F5E5B";
    ctx.font = '500 24px "Figtree", Arial, sans-serif';
    ctx.fillText(semana.usuario || "", M, H - M + 6);

    const enlace = document.createElement("a");
    enlace.download = "en-esencia-una-pregunta.png";
    enlace.href = canvas.toDataURL("image/png");
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
    avisar("Imagen descargada (1080 × 1350).");
  });

  /* =========================================================
     APARICIONES AL HACER SCROLL
     ========================================================= */
  const revelables = $$(".revelar, .dibujo");
  if (reducirMovimiento || !("IntersectionObserver" in window)) {
    revelables.forEach(el => el.classList.add("visible"));
  } else {
    const observador = new IntersectionObserver(entradas => {
      entradas.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("visible"); observador.unobserve(en.target); }
      });
    }, { threshold: .18, rootMargin: "0px 0px -8% 0px" });
    revelables.forEach(el => observador.observe(el));
  }

  /* =========================================================
     BUCLE DE SCROLL (un solo requestAnimationFrame)
     ========================================================= */
  let pendiente = false;
  function alHacerScroll() {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(() => {
      pintarHero(reducirMovimiento ? 1 : progresoHero());
      moverPolaroids();
      actualizarCabecera();
      pendiente = false;
    });
  }
  window.addEventListener("scroll", alHacerScroll, { passive: true });
  window.addEventListener("resize", alHacerScroll);
  alHacerScroll();

  $("#anio").textContent = new Date().getFullYear();
})();
