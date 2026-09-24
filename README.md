<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>En esencia · El podcast para quien no tiene la vida resuelta (y está bien)</title>
<meta name="description" content="En esencia es un podcast de conversaciones reales, divertidas e imperfectas sobre trabajo, vocación, amor y propósito cuando te acercas a los 30.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Gloock&display=swap" rel="stylesheet">
<style>
  :root{
    /* Colores de marca */
    --lila:#EEE7F6;          /* fondo lila suave */
    --lila-2:#E2D6F0;        /* lila un punto más intenso para bloques */
    --berenjena:#3A1D3C;     /* texto */
    --berenjena-suave:#6B4F6E;/* texto secundario (contraste AA sobre lila) */
    --cereza:#B3103F;        /* acento */
    --cereza-oscura:#8E0C32;
    --mantequilla:#FBEFB4;   /* notas */
    --blanco:#FFFCF7;
    --ok:#2F6B45;
    --error:#B3103F;

    /* Tipografías */
    --titular:"Gloock", Georgia, "Times New Roman", serif;
    --texto:"Figtree", "Helvetica Neue", Arial, sans-serif;

    /* Medidas */
    --radio:14px;
    --ancho:1120px;
    --alto-header:68px;
    --sombra:0 14px 34px -20px rgba(58,29,60,.45);
    --t:.25s ease;
  }

  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;scroll-padding-top:calc(var(--alto-header) + 12px)}
  body{font-family:var(--texto);background:var(--lila);color:var(--berenjena);font-size:1.0625rem;line-height:1.6}
  img,svg{display:block;max-width:100%}
  a{color:inherit}
  button,input,select,textarea{font:inherit;color:inherit}
  :focus-visible{outline:3px solid var(--cereza);outline-offset:3px;border-radius:4px}
  .sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  .saltar{position:absolute;left:12px;top:-60px;background:var(--berenjena);color:var(--blanco);padding:10px 16px;border-radius:8px;z-index:100;text-decoration:none}
  .saltar:focus{top:12px}
  .contenedor{max-width:var(--ancho);margin:0 auto;padding:0 20px}

  h1,h2,h3{font-family:var(--titular);font-weight:400;line-height:1.1}
  h2{font-size:clamp(2rem,6vw,2.9rem);margin-bottom:.4em}
  h3{font-size:1.35rem}
  .entradilla{max-width:58ch;color:var(--berenjena-suave);font-size:1.08rem}

  .boton{display:inline-flex;align-items:center;justify-content:center;gap:.5em;padding:.8em 1.4em;border-radius:999px;
    border:2px solid var(--cereza);background:var(--cereza);color:var(--blanco);font-weight:600;text-decoration:none;cursor:pointer;
    transition:background var(--t),transform var(--t),color var(--t)}
  .boton:hover{background:var(--cereza-oscura);border-color:var(--cereza-oscura);transform:translateY(-2px)}
  .boton.contorno{background:transparent;color:var(--berenjena);border-color:var(--berenjena)}
  .boton.contorno:hover{background:var(--berenjena);color:var(--blanco)}
  .boton.peque{padding:.55em 1.1em;font-size:.95rem}

  section{padding:80px 0}

  /* ---------- Header ---------- */
  header{position:fixed;inset:0 0 auto 0;height:var(--alto-header);z-index:50;background:rgba(238,231,246,.9);
    backdrop-filter:blur(8px);transition:box-shadow var(--t)}
  header.con-sombra{box-shadow:0 6px 20px -14px rgba(58,29,60,.5)}
  .barra{height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
  .logo{font-family:var(--titular);font-size:1.6rem;text-decoration:none;display:flex;align-items:baseline;gap:4px}
  .logo .punto{width:9px;height:9px;border-radius:50%;background:var(--cereza);display:inline-block}
  .hamburguesa{width:44px;height:44px;border:0;background:transparent;cursor:pointer;display:grid;place-items:center;border-radius:10px}
  .hamburguesa span{display:block;width:24px;height:2px;background:var(--berenjena);position:relative;transition:background var(--t)}
  .hamburguesa span::before,.hamburguesa span::after{content:"";position:absolute;left:0;width:24px;height:2px;background:var(--berenjena);transition:transform var(--t)}
  .hamburguesa span::before{top:-7px}.hamburguesa span::after{top:7px}
  .hamburguesa[aria-expanded="true"] span{background:transparent}
  .hamburguesa[aria-expanded="true"] span::before{transform:translateY(7px) rotate(45deg)}
  .hamburguesa[aria-expanded="true"] span::after{transform:translateY(-7px) rotate(-45deg)}
  .menu{position:fixed;top:var(--alto-header);left:0;right:0;background:var(--lila);padding:12px 20px 28px;
    box-shadow:0 20px 30px -20px rgba(58,29,60,.4);display:none}
  .menu.abierto{display:block}
  .menu ul{list-style:none}
  .menu li a{display:block;padding:12px 0;text-decoration:none;font-weight:500;border-bottom:1px solid var(--lila-2)}
  .menu .boton{margin-top:18px;width:100%}
  .cta-header{display:none}

  /* ---------- Hero ---------- */
  .hero{padding:calc(var(--alto-header) + 48px) 0 72px}
  .hero .contenedor{display:grid;gap:48px}
  .hero-pregunta{font-family:var(--titular);font-size:clamp(2.2rem,8vw,4.3rem);line-height:1.05}
  .edades{display:flex;flex-wrap:wrap;gap:.1em .45em;font-family:var(--titular);font-size:clamp(2.6rem,11vw,5.6rem);line-height:1.1;margin:.15em 0 .1em}
  .edad{position:relative;display:inline-block;color:var(--berenjena)}
  .edad::after{content:"";position:absolute;left:-6%;top:54%;width:112%;height:.09em;background:var(--cereza);border-radius:4px;
    transform:scaleX(0) rotate(-6deg);transform-origin:left center;transition:transform .45s cubic-bezier(.6,.05,.3,1)}
  .edad.tachada{color:var(--berenjena-suave)}
  .edad.tachada::after{transform:scaleX(1) rotate(-6deg)}
  .spoiler{display:inline-block;background:var(--mantequilla);padding:.25em .7em;border-radius:6px;font-weight:600;font-size:clamp(1.05rem,3.5vw,1.35rem);
    transform:rotate(-1.5deg);opacity:0;translate:0 10px;transition:opacity .5s ease,translate .5s ease;margin-top:14px}
  .spoiler.visible{opacity:1;translate:0 0}
  .hero-texto .entradilla{margin-top:26px}
  .hero-acciones{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}

  .arco-wrap{display:flex;flex-direction:column;align-items:center}
  .arco{width:min(78vw,330px);aspect-ratio:3/4;border-radius:999px 999px 18px 18px;overflow:hidden;border:6px solid var(--blanco);
    background:linear-gradient(180deg,#D9C6EC 0%,#C9A9DD 60%,#B98BCB 100%);box-shadow:var(--sombra);position:relative}
  .arco img,.arco svg{width:100%;height:100%;object-fit:cover}
  .pie-foto{margin-top:14px;font-size:.95rem;color:var(--berenjena-suave);text-align:center}
  .pie-foto strong{color:var(--berenjena)}

  /* ---------- Último episodio (reproductor simulado) ---------- */
  .ultimo{padding:0 0 80px}
  .reproductor{background:var(--berenjena);color:var(--blanco);border-radius:22px;padding:24px;display:grid;gap:20px;box-shadow:var(--sombra)}
  .reproductor .etiqueta{font-size:.85rem;color:#E8C9D6;font-weight:600}
  .reproductor h3{font-size:clamp(1.4rem,4.5vw,1.9rem);margin:6px 0 8px}
  .reproductor p{color:#E3D6E6;font-size:.98rem;max-width:60ch}
  .controles{display:flex;align-items:center;gap:14px}
  .play{width:58px;height:58px;flex:none;border-radius:50%;border:0;background:var(--cereza);color:var(--blanco);cursor:pointer;display:grid;place-items:center;transition:transform var(--t),background var(--t)}
  .play:hover{transform:scale(1.06);background:#CC1B4D}
  .progreso{flex:1;display:grid;gap:6px}
  .progreso input[type=range]{width:100%;accent-color:var(--cereza);cursor:pointer}
  .tiempos{display:flex;justify-content:space-between;font-size:.82rem;color:#E3D6E6;font-variant-numeric:tabular-nums}
  .velocidad{border:1.5px solid #9A7F9D;background:transparent;color:var(--blanco);border-radius:999px;padding:.35em .8em;cursor:pointer;font-size:.88rem;font-weight:600}
  .ondas{display:flex;align-items:flex-end;gap:3px;height:22px}
  .ondas i{width:3px;background:#E8C9D6;border-radius:2px;height:30%}
  .reproductor.sonando .ondas i{animation:onda 1s ease-in-out infinite}
  .ondas i:nth-child(2){animation-delay:.15s}.ondas i:nth-child(3){animation-delay:.3s}.ondas i:nth-child(4){animation-delay:.45s}.ondas i:nth-child(5){animation-delay:.6s}
  @keyframes onda{0%,100%{height:25%}50%{height:100%}}

  /* ---------- Buscador ---------- */
  .buscador{background:var(--blanco);border-radius:22px;padding:20px;box-shadow:var(--sombra);margin-top:28px}
  .campo-busqueda{display:flex;gap:10px;flex-wrap:wrap}
  .campo-busqueda .input-wrap{flex:1 1 240px;position:relative}
  .campo-busqueda svg{position:absolute;left:14px;top:50%;translate:0 -50%;width:20px;height:20px;color:var(--berenjena-suave)}
  .campo-busqueda input{width:100%;padding:.85em 1em .85em 2.8em;border:2px solid var(--lila-2);border-radius:999px;background:var(--lila);transition:border-color var(--t)}
  .campo-busqueda input:focus{border-color:var(--cereza);outline:none}
  .filtros{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
  .filtro{border:1.5px solid var(--lila-2);background:transparent;border-radius:999px;padding:.4em 1em;cursor:pointer;font-size:.95rem;font-weight:500;transition:background var(--t),border-color var(--t),color var(--t)}
  .filtro:hover{border-color:var(--berenjena)}
  .filtro[aria-pressed="true"]{background:var(--berenjena);border-color:var(--berenjena);color:var(--blanco)}
  .contador{margin-top:18px;font-size:.95rem;color:var(--berenjena-suave)}
  .episodios{list-style:none;display:grid;gap:14px;margin-top:22px}
  .episodio{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start;background:var(--blanco);border-radius:var(--radio);padding:18px;
    border:1.5px solid transparent;transition:border-color var(--t),transform var(--t)}
  .episodio:hover{border-color:var(--lila-2);transform:translateY(-2px)}
  .episodio .num{font-family:var(--titular);font-size:1.6rem;color:var(--cereza);min-width:2ch}
  .episodio h3{font-size:1.2rem;margin-bottom:4px}
  .episodio p{color:var(--berenjena-suave);font-size:.97rem}
  .meta{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:10px;font-size:.88rem}
  .chip{background:var(--lila);padding:.2em .75em;border-radius:999px;font-weight:600}
  .meta .dur{color:var(--berenjena-suave)}
  .meta button{margin-left:auto;border:0;background:none;color:var(--cereza);font-weight:700;cursor:pointer;padding:4px 0;text-decoration:underline;text-underline-offset:3px}
  mark{background:var(--mantequilla);color:inherit;border-radius:3px;padding:0 2px}
  .sin-resultados{background:var(--mantequilla);border-radius:var(--radio);padding:22px;margin-top:22px}
  .sin-resultados p{margin-top:4px}

  /* ---------- Q&A (notas amarillas) ---------- */
  .qa{background:var(--lila-2)}
  .notas{display:grid;gap:22px;margin-top:32px}
  .nota{background:var(--mantequilla);padding:24px 22px 22px;border-radius:4px;box-shadow:0 10px 20px -14px rgba(58,29,60,.55);position:relative}
  .nota::before{content:"";position:absolute;top:-10px;left:50%;translate:-50% 0;width:70px;height:20px;background:rgba(255,255,255,.55);rotate:-3deg}
  .nota:nth-child(odd){rotate:-1deg}.nota:nth-child(even){rotate:1.2deg}
  .nota .pregunta{font-family:var(--titular);font-size:1.25rem;line-height:1.25;margin-bottom:10px}
  .nota .firma{font-size:.88rem;color:var(--berenjena-suave);margin-bottom:12px}
  .nota .respuesta{font-size:.98rem}

  /* ---------- Testimonios ---------- */
  .testimonios{display:grid;gap:22px;margin-top:32px}
  .testimonio{background:var(--blanco);border-radius:var(--radio);padding:26px}
  .testimonio blockquote{font-family:var(--titular);font-size:1.25rem;line-height:1.35}
  .testimonio figcaption{margin-top:14px;font-size:.93rem;color:var(--berenjena-suave)}

  /* ---------- FAQ ---------- */
  .faq-lista{margin-top:28px;border-top:1.5px solid var(--lila-2)}
  .faq-item{border-bottom:1.5px solid var(--lila-2)}
  .faq-item h3{font-family:var(--texto);font-size:1.05rem;font-weight:600}
  .faq-boton{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 0;background:none;border:0;cursor:pointer;text-align:left;font-weight:600}
  .faq-boton .signo{flex:none;width:28px;height:28px;border-radius:50%;background:var(--blanco);display:grid;place-items:center;transition:transform var(--t),background var(--t)}
  .faq-boton[aria-expanded="true"] .signo{transform:rotate(45deg);background:var(--mantequilla)}
  .faq-panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease}
  .faq-panel.abierto{grid-template-rows:1fr}
  .faq-panel > div{overflow:hidden}
  .faq-panel p{padding:0 0 20px;color:var(--berenjena-suave);max-width:64ch}

  /* ---------- Newsletter ---------- */
  .newsletter{background:var(--berenjena);color:var(--blanco)}
  .newsletter .entradilla{color:#E3D6E6}
  .formulario{background:var(--blanco);color:var(--berenjena);border-radius:22px;padding:24px;margin-top:32px;display:grid;gap:18px}
  .grupo{display:grid;gap:6px}
  .grupo label,.grupo legend{font-weight:600;font-size:.97rem}
  .opcional{font-weight:400;color:var(--berenjena-suave);font-size:.88rem}
  .ayuda{font-size:.85rem;color:var(--berenjena-suave)}
  .grupo input:not([type=checkbox]),.grupo select,.grupo textarea{width:100%;padding:.75em .9em;border:2px solid var(--lila-2);border-radius:10px;background:var(--lila);transition:border-color var(--t),background var(--t)}
  .grupo textarea{min-height:110px;resize:vertical}
  .grupo input:focus,.grupo select:focus,.grupo textarea:focus{outline:none;border-color:var(--berenjena)}
  .grupo.error input,.grupo.error select,.grupo.error textarea{border-color:var(--error);background:#FDF0F3}
  .grupo.ok input:not([type=checkbox]),.grupo.ok select,.grupo.ok textarea{border-color:var(--ok)}
  .mensaje-error{color:var(--error);font-size:.88rem;font-weight:600;min-height:1.2em}
  .check{display:flex;gap:10px;align-items:flex-start;font-weight:400!important}
  .check input{width:20px;height:20px;margin-top:3px;accent-color:var(--cereza);flex:none}
  .contador-car{font-size:.82rem;color:var(--berenjena-suave);text-align:right}
  .exito{display:none;background:var(--mantequilla);color:var(--berenjena);border-radius:var(--radio);padding:20px;margin-top:20px}
  .exito.visible{display:block}
  .exito h3{margin-bottom:4px}

  /* ---------- Footer ---------- */
  footer{padding:56px 0 32px;font-size:.95rem}
  .footer-grid{display:grid;gap:32px}
  footer h2{font-size:1.8rem}
  footer h3{font-family:var(--texto);font-size:1rem;font-weight:700;margin-bottom:10px}
  footer ul{list-style:none;display:grid;gap:6px}
  .redes{display:flex;gap:10px}
  .redes a{width:42px;height:42px;border-radius:50%;background:var(--blanco);display:grid;place-items:center;transition:background var(--t),transform var(--t)}
  .redes a:hover{background:var(--mantequilla);transform:translateY(-2px)}
  .redes svg{width:20px;height:20px}
  .legal{border-top:1.5px solid var(--lila-2);margin-top:36px;padding-top:20px;display:flex;flex-wrap:wrap;gap:8px 20px;color:var(--berenjena-suave);font-size:.88rem}

  /* ---------- Aparición al hacer scroll ---------- */
  .revelar{opacity:0;translate:0 18px;transition:opacity .6s ease,translate .6s ease}
  .revelar.visible{opacity:1;translate:0 0}

  /* ---------- Tablet / escritorio ---------- */
  @media (min-width:720px){
    section{padding:104px 0}
    .notas{grid-template-columns:repeat(2,1fr)}
    .testimonios{grid-template-columns:repeat(3,1fr)}
    .formulario{grid-template-columns:1fr 1fr;padding:36px}
    .grupo.ancho{grid-column:1/-1}
    .reproductor{grid-template-columns:1.2fr 1fr;align-items:center;padding:36px}
    .footer-grid{grid-template-columns:1.5fr 1fr 1fr}
    .buscador{padding:28px}
  }
  @media (min-width:960px){
    .hamburguesa{display:none}
    .menu{position:static;display:block!important;background:none;padding:0;box-shadow:none}
    .menu ul{display:flex;gap:26px}
    .menu li a{border:0;padding:6px 0;position:relative}
    .menu li a::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;background:var(--cereza);transform:scaleX(0);transform-origin:left;transition:transform var(--t)}
    .menu li a:hover::after{transform:scaleX(1)}
    .menu .boton{display:none}
    .cta-header{display:inline-flex}
    .hero .contenedor{grid-template-columns:1.25fr .75fr;align-items:center}
    .notas{grid-template-columns:repeat(3,1fr)}
    .newsletter .contenedor{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px;align-items:start}
    .formulario{margin-top:0}
  }

  @media (prefers-reduced-motion:reduce){
    *,*::before,*::after{transition:none!important;animation:none!important;scroll-behavior:auto!important}
    .revelar{opacity:1;translate:0 0}
  }
</style>
</head>
<body>
<a href="#contenido" class="saltar">Saltar al contenido</a>

<!-- ============ HEADER ============ -->
<header id="cabecera">
  <div class="contenedor barra">
    <a href="#inicio" class="logo" aria-label="En esencia, volver al inicio">En esencia<span class="punto" aria-hidden="true"></span></a>

    <nav aria-label="Principal">
      <button class="hamburguesa" aria-expanded="false" aria-controls="menu" aria-label="Abrir menú"><span></span></button>
      <div class="menu" id="menu">
        <ul>
          <li><a href="#episodios">Episodios</a></li>
          <li><a href="#qa">Q&amp;A</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#faq">Preguntas</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
        </ul>
        <a href="#ultimo" class="boton">Escuchar el último episodio</a>
      </div>
    </nav>

    <a href="#ultimo" class="boton peque cta-header">Escuchar el último episodio</a>
  </div>
</header>

<main id="contenido">
  <!-- ============ HERO ============ -->
  <section class="hero" id="inicio" aria-labelledby="titulo-hero">
    <div class="contenedor">
      <div class="hero-texto">
        <h1 id="titulo-hero">
          <span class="hero-pregunta">¿Ya deberías tener la vida resuelta a los…</span>
          <span class="edades" aria-hidden="true">
            <span class="edad">27</span><span class="edad">28</span><span class="edad">29</span><span class="edad">30</span>
          </span>
          <span class="sr-only">27, 28, 29 o 30? Spoiler: casi nadie la tiene.</span>
        </h1>
        <p class="spoiler" id="spoiler" aria-hidden="true">Spoiler: casi nadie la tiene.</p>

        <p class="entradilla">En esencia es un podcast de conversaciones reales, divertidas e imperfectas sobre trabajo, vocación, amor y propósito. Para cuando te sientes perdida pero, aun así, te atreves a seguir construyendo.</p>
        <div class="hero-acciones">
          <a href="#ultimo" class="boton">Escuchar el último episodio</a>
          <a href="#episodios" class="boton contorno">Buscar un episodio</a>
        </div>
      </div>

      <div class="arco-wrap revelar">
        <div class="arco">
          <!-- Sustituye este SVG por la foto real:
               <img src="irene.jpg" alt="Irene Romera sonriendo, con el micrófono del podcast"> -->
          <svg viewBox="0 0 300 400" role="img" aria-label="Ilustración provisional de la host de En esencia frente a un micrófono">
            <circle cx="150" cy="150" r="58" fill="#3A1D3C" opacity=".9"/>
            <path d="M92 155c0-45 26-72 58-72s58 27 58 72c0 30-10 60-10 90H102c0-30-10-60-10-90z" fill="#3A1D3C"/>
            <circle cx="150" cy="158" r="44" fill="#F3D9C6"/>
            <path d="M60 400c0-80 40-130 90-130s90 50 90 130z" fill="#B3103F"/>
            <rect x="140" y="270" width="20" height="70" rx="10" fill="#FBEFB4"/>
            <rect x="128" y="236" width="44" height="54" rx="22" fill="#3A1D3C"/>
          </svg>
        </div>
        <p class="pie-foto">Con <strong>Irene Romera</strong>, que tampoco la tiene resuelta.</p>
      </div>
    </div>
  </section>

  <!-- ============ ÚLTIMO EPISODIO ============ -->
  <div class="ultimo" id="ultimo">
    <div class="contenedor">
      <article class="reproductor revelar" id="reproductor" aria-labelledby="titulo-ultimo">
        <div>
          <p class="etiqueta">Último episodio · Ep. 08</p>
          <h3 id="titulo-ultimo">Las vidas que no vas a vivir (y cómo hacer las paces con ellas)</h3>
          <p>Hablamos de todas esas versiones de ti que se quedan en el camino: la que se fue a vivir fuera, la que estudió otra cosa, la que dijo que sí. Sin drama. Bueno, con un poco.</p>
        </div>
        <div>
          <div class="controles">
            <button class="play" id="btn-play" aria-label="Reproducir episodio">
              <svg id="icono-play" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg>
            </button>
            <div class="progreso">
              <label for="barra" class="sr-only">Posición del episodio</label>
              <input type="range" id="barra" min="0" max="2735" value="0" step="1" aria-valuetext="0 minutos 0 segundos">
              <div class="tiempos"><span id="actual">0:00</span><span id="total">45:35</span></div>
            </div>
          </div>
          <div class="controles" style="margin-top:14px;justify-content:space-between">
            <div class="ondas" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
            <button class="velocidad" id="btn-velocidad" aria-label="Cambiar velocidad de reproducción, actual 1x">1x</button>
          </div>
        </div>
      </article>
    </div>
  </div>

  <!-- ============ BUSCADOR ============ -->
  <section id="episodios" aria-labelledby="titulo-episodios">
    <div class="contenedor">
      <h2 id="titulo-episodios" class="revelar">Encuentra el episodio que necesitas hoy</h2>
      <p class="entradilla revelar">Busca por tema, por palabra o por cómo te sientes. Seguro que alguna conversación te suena demasiado.</p>

      <div class="buscador revelar" role="search">
        <div class="campo-busqueda">
          <div class="input-wrap">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            <label for="busqueda" class="sr-only">Buscar episodios</label>
            <input type="search" id="busqueda" placeholder="Prueba con «vocacion», «amigas» o «dinero»" autocomplete="off" aria-describedby="contador">
          </div>
          <button type="button" class="boton contorno" id="limpiar">Limpiar búsqueda</button>
        </div>
        <div class="filtros" role="group" aria-label="Filtrar por categoría" id="filtros"></div>
      </div>

      <p class="contador" id="contador" aria-live="polite"></p>
      <ul class="episodios" id="lista-episodios"></ul>
      <div class="sin-resultados" id="sin-resultados" hidden>
        <h3>Esta conversación todavía no la hemos tenido</h3>
        <p>Prueba con otra palabra o quita el filtro de categoría. Y si crees que falta este tema, cuéntanoslo en la newsletter.</p>
      </div>
    </div>
  </section>

  <!-- ============ Q&A ============ -->
  <section class="qa" id="qa" aria-labelledby="titulo-qa">
    <div class="contenedor">
      <h2 id="titulo-qa" class="revelar">Q&amp;A: lo que me preguntáis</h2>
      <p class="entradilla revelar">Preguntas que me habéis mandado y lo que yo haría. No son respuestas correctas: son las mías, por ahora.</p>
      <div class="notas">
        <article class="nota revelar">
          <p class="pregunta">«Todas mis amigas se casan y yo acabo de dejar el trabajo. ¿Voy tarde?»</p>
          <p class="firma">Lucía, 29</p>
          <p class="respuesta">¿Tarde respecto a qué reloj? Yo empezaría por preguntarme de quién es ese calendario. A lo mejor no es el tuyo.</p>
        </article>
        <article class="nota revelar">
          <p class="pregunta">«¿Cómo sé si lo mío es vocación o solo me da miedo cambiar?»</p>
          <p class="firma">Marta, 31</p>
          <p class="respuesta">Una pista: ¿qué harías si nadie fuera a enterarse? Lo que aparezca ahí suele decir más que cualquier test.</p>
        </article>
        <article class="nota revelar">
          <p class="pregunta">«¿Es normal sentir envidia de mi versión de otra vida?»</p>
          <p class="firma">Anónima, 27</p>
          <p class="respuesta">Normalísimo. Esa versión no paga alquiler ni tiene lunes. Quiérela, pero no le dejes las llaves de casa.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- ============ TESTIMONIOS ============ -->
  <section id="testimonios" aria-labelledby="titulo-testimonios">
    <div class="contenedor">
      <h2 id="titulo-testimonios" class="revelar">Lo que dicen quienes escuchan</h2>
      <div class="testimonios">
        <figure class="testimonio revelar">
          <blockquote>«Lo escucho de camino al trabajo y llego sintiéndome un poco menos rara.»</blockquote>
          <figcaption>Andrea, 28 · Valencia</figcaption>
        </figure>
        <figure class="testimonio revelar">
          <blockquote>«Es como tomarte un café con una amiga que no te juzga y además te hace reír.»</blockquote>
          <figcaption>Paula, 34 · Madrid</figcaption>
        </figure>
        <figure class="testimonio revelar">
          <blockquote>«Tengo 46 y me he sentido igual de identificada. Esto no va de edades, va de momentos.»</blockquote>
          <figcaption>Carmen, 46 · Sevilla</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- ============ FAQ ============ -->
  <section id="faq" aria-labelledby="titulo-faq" style="padding-top:0">
    <div class="contenedor">
      <h2 id="titulo-faq" class="revelar">Preguntas frecuentes</h2>
      <div class="faq-lista revelar" id="faq-lista">
        <div class="faq-item">
          <h3><button class="faq-boton" aria-expanded="false" aria-controls="faq-1" id="faq-b1">¿Dónde puedo escuchar En esencia?<span class="signo" aria-hidden="true">+</span></button></h3>
          <div class="faq-panel" id="faq-1" role="region" aria-labelledby="faq-b1"><div><p>En Spotify, Apple Podcasts, iVoox y YouTube. También puedes escuchar el último episodio aquí mismo.</p></div></div>
        </div>
        <div class="faq-item">
          <h3><button class="faq-boton" aria-expanded="false" aria-controls="faq-2" id="faq-b2">¿Cada cuánto sale un episodio nuevo?<span class="signo" aria-hidden="true">+</span></button></h3>
          <div class="faq-panel" id="faq-2" role="region" aria-labelledby="faq-b2"><div><p>Cada dos semanas, los jueves. Si te suscribes a la newsletter te avisamos el mismo día.</p></div></div>
        </div>
        <div class="faq-item">
          <h3><button class="faq-boton" aria-expanded="false" aria-controls="faq-3" id="faq-b3">¿Es solo para gente de 27 a 30?<span class="signo" aria-hidden="true">+</span></button></h3>
          <div class="faq-panel" id="faq-3" role="region" aria-labelledby="faq-b3"><div><p>Para nada. Esa edad es solo el punto de partida. Si alguna vez has sentido que ibas tarde a tu propia vida, este podcast también es para ti.</p></div></div>
        </div>
        <div class="faq-item">
          <h3><button class="faq-boton" aria-expanded="false" aria-controls="faq-4" id="faq-b4">¿Puedo mandar una pregunta para el Q&amp;A?<span class="signo" aria-hidden="true">+</span></button></h3>
          <div class="faq-panel" id="faq-4" role="region" aria-labelledby="faq-b4"><div><p>Sí, en el formulario de la newsletter tienes un espacio para contarnos lo que quieras. Si la elegimos, la publicamos de forma anónima salvo que nos digas lo contrario.</p></div></div>
        </div>
        <div class="faq-item">
          <h3><button class="faq-boton" aria-expanded="false" aria-controls="faq-5" id="faq-b5">¿Cómo se eligen las invitadas?<span class="signo" aria-hidden="true">+</span></button></h3>
          <div class="faq-panel" id="faq-5" role="region" aria-labelledby="faq-b5"><div><p>Son personas que admiro y que parecen tener clara su esencia. La idea es explorar la suya para seguir buscando la mía (y la tuya).</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ NEWSLETTER ============ -->
  <section class="newsletter" id="newsletter" aria-labelledby="titulo-news">
    <div class="contenedor">
      <div class="revelar">
        <h2 id="titulo-news">Cartas desde el ruido</h2>
        <p class="entradilla">Una newsletter cada dos semanas con el nuevo episodio, lo que no cupo en el audio y alguna pregunta para pensar con calma. Nada de spam, prometido.</p>
      </div>

      <div>
        <form class="formulario revelar" id="formulario" novalidate>
          <div class="grupo">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" autocomplete="given-name" required aria-describedby="err-nombre">
            <p class="mensaje-error" id="err-nombre"></p>
          </div>

          <div class="grupo">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" autocomplete="email" required aria-describedby="err-email">
            <p class="mensaje-error" id="err-email"></p>
          </div>

          <div class="grupo">
            <label for="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" autocomplete="tel-national" inputmode="numeric" placeholder="600 000 000" required aria-describedby="ayuda-tel err-telefono">
            <p class="ayuda" id="ayuda-tel">Solo para avisarte por WhatsApp de los directos.</p>
            <p class="mensaje-error" id="err-telefono"></p>
          </div>

          <div class="grupo">
            <label for="momento">¿En qué momento estás?</label>
            <select id="momento" name="momento" required aria-describedby="err-momento">
              <option value="">Elige una opción</option>
              <option>Replanteándome el trabajo</option>
              <option>Buscando mi vocación</option>
              <option>En pleno lío amoroso</option>
              <option>Empezando de cero</option>
              <option>Todo a la vez, gracias</option>
            </select>
            <p class="mensaje-error" id="err-momento"></p>
          </div>

          <div class="grupo">
            <label for="cumple">Tu próximo cumpleaños</label>
            <input type="date" id="cumple" name="cumple" required aria-describedby="ayuda-cumple err-cumple">
            <p class="ayuda" id="ayuda-cumple">Ese día te llegará un episodio especial.</p>
            <p class="mensaje-error" id="err-cumple"></p>
          </div>

          <div class="grupo">
            <label for="edad">¿Cuántos cumples?</label>
            <input type="number" id="edad" name="edad" min="18" max="99" inputmode="numeric" required aria-describedby="ayuda-edad err-edad">
            <p class="ayuda" id="ayuda-edad">Entre 18 y 99. Aquí ninguna edad llega tarde.</p>
            <p class="mensaje-error" id="err-edad"></p>
          </div>

          <div class="grupo ancho">
            <label for="tiempo">¿Cuánto tiempo tienes para escuchar a la semana?</label>
            <select id="tiempo" name="tiempo" required aria-describedby="err-tiempo">
              <option value="">Elige una opción</option>
              <option>Menos de 30 minutos</option>
              <option>Entre 30 minutos y 1 hora</option>
              <option>Más de 1 hora</option>
              <option>Lo que dure el trayecto al trabajo</option>
            </select>
            <p class="mensaje-error" id="err-tiempo"></p>
          </div>

          <div class="grupo ancho">
            <label for="mensaje">¿De qué te gustaría que habláramos?</label>
            <textarea id="mensaje" name="mensaje" required minlength="20" maxlength="500" aria-describedby="contador-msg err-mensaje"></textarea>
            <p class="contador-car" id="contador-msg">0 / 500 · mínimo 20</p>
            <p class="mensaje-error" id="err-mensaje"></p>
          </div>

          <div class="grupo ancho">
            <label class="check" for="privacidad">
              <input type="checkbox" id="privacidad" name="privacidad" required aria-describedby="err-privacidad">
              <span>He leído y acepto la <a href="#legal">política de privacidad</a>.</span>
            </label>
            <p class="mensaje-error" id="err-privacidad"></p>
          </div>

          <div class="grupo ancho">
            <button type="submit" class="boton">Suscribirme a la newsletter</button>
          </div>
        </form>

        <div class="exito" id="exito" role="status" tabindex="-1">
          <h3>Ya estás dentro</h3>
          <p id="texto-exito">Te llegará la primera carta con el próximo episodio.</p>
        </div>
      </div>
    </div>
  </section>
</main>

<!-- ============ FOOTER ============ -->
<footer id="legal">
  <div class="contenedor">
    <div class="footer-grid">
      <div>
        <h2>En esencia</h2>
        <p style="color:var(--berenjena-suave);max-width:36ch;margin-top:6px">Conversaciones reales, divertidas e imperfectas para quien no tiene la vida resuelta.</p>
      </div>
      <div>
        <h3>Contacto</h3>
        <ul>
          <li><a href="mailto:hola@enesenciapodcast.com">hola@enesenciapodcast.com</a></li>
          <li>Propuestas de colaboración e invitadas</li>
        </ul>
      </div>
      <div>
        <h3>Redes</h3>
        <div class="redes">
          <a href="#" aria-label="Instagram de En esencia"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
          <a href="#" aria-label="TikTok de En esencia"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46M14 3c.5 2.5 2.2 4 5 4.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></a>
          <a href="#" aria-label="Spotify de En esencia"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7.5 9.5c3-1 6.5-.7 9 .8M8 12.5c2.5-.7 5.3-.4 7.4.8M8.5 15.3c2-.5 4-.3 5.7.6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></a>
          <a href="#" aria-label="YouTube de En esencia"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg></a>
        </div>
      </div>
    </div>
    <div class="legal">
      <span>© <span id="anio"></span> En esencia</span>
      <a href="#">Aviso legal</a>
      <a href="#">Política de privacidad</a>
      <a href="#">Cookies</a>
    </div>
  </div>
</footer>

<script>
(() => {
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ================= HERO: tachado de edades ================= */
  const edades = document.querySelectorAll(".edad");
  const spoiler = document.getElementById("spoiler");
  if (reducirMovimiento) {
    edades.forEach(e => e.classList.add("tachada"));
    spoiler.classList.add("visible");
  } else {
    edades.forEach((e, i) => setTimeout(() => e.classList.add("tachada"), 700 + i * 550));
    setTimeout(() => spoiler.classList.add("visible"), 700 + edades.length * 550 + 250);
  }

  /* ================= HEADER + MENÚ MÓVIL ================= */
  const cabecera = document.getElementById("cabecera");
  window.addEventListener("scroll", () => cabecera.classList.toggle("con-sombra", window.scrollY > 10), {passive:true});

  const hamburguesa = document.querySelector(".hamburguesa");
  const menu = document.getElementById("menu");
  const cerrarMenu = () => {
    menu.classList.remove("abierto");
    hamburguesa.setAttribute("aria-expanded", "false");
    hamburguesa.setAttribute("aria-label", "Abrir menú");
  };
  hamburguesa.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    hamburguesa.setAttribute("aria-expanded", String(abierto));
    hamburguesa.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    if (abierto) menu.querySelector("a").focus();
  });
  menu.addEventListener("click", e => { if (e.target.closest("a")) cerrarMenu(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.classList.contains("abierto")) { cerrarMenu(); hamburguesa.focus(); }
  });

  /* ================= REPRODUCTOR SIMULADO ================= */
  const reproductor = document.getElementById("reproductor");
  const btnPlay = document.getElementById("btn-play");
  const iconoPlay = document.getElementById("icono-play");
  const barra = document.getElementById("barra");
  const actual = document.getElementById("actual");
  const btnVel = document.getElementById("btn-velocidad");
  const velocidades = [1, 1.25, 1.5, 2];
  let vel = 0, sonando = false, temporizador = null;

  const formato = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const pintarTiempo = () => {
    const s = Number(barra.value);
    actual.textContent = formato(s);
    barra.setAttribute("aria-valuetext", `${Math.floor(s / 60)} minutos ${Math.floor(s % 60)} segundos`);
    barra.style.background = "";
  };
  const pausar = () => {
    sonando = false; clearInterval(temporizador);
    reproductor.classList.remove("sonando");
    btnPlay.setAttribute("aria-label", "Reproducir episodio");
    iconoPlay.innerHTML = '<path d="M7 4.5v15l13-7.5z" fill="currentColor"/>';
  };
  const reproducir = () => {
    if (Number(barra.value) >= Number(barra.max)) barra.value = 0;
    sonando = true;
    reproductor.classList.add("sonando");
    btnPlay.setAttribute("aria-label", "Pausar episodio");
    iconoPlay.innerHTML = '<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/>';
    clearInterval(temporizador);
    temporizador = setInterval(() => {
      barra.value = Math.min(Number(barra.max), Number(barra.value) + velocidades[vel]);
      pintarTiempo();
      if (Number(barra.value) >= Number(barra.max)) pausar();
    }, 1000);
  };
  btnPlay.addEventListener("click", () => sonando ? pausar() : reproducir());
  barra.addEventListener("input", pintarTiempo);
  btnVel.addEventListener("click", () => {
    vel = (vel + 1) % velocidades.length;
    btnVel.textContent = velocidades[vel] + "x";
    btnVel.setAttribute("aria-label", `Cambiar velocidad de reproducción, actual ${velocidades[vel]}x`);
  });

  /* ================= BUSCADOR DE EPISODIOS ================= */
  const EPISODIOS = [
    {n:8, titulo:"Las vidas que no vas a vivir", descripcion:"Hacer las paces con las versiones de ti que se quedan en el camino.", categoria:"Propósito", duracion:"45 min"},
    {n:7, titulo:"Ser adulta sin dinero (y con humor)", descripcion:"Alquileres, nóminas justitas y por qué quizá ser adulta con dinero sí sería divertido.", categoria:"Dinero", duracion:"38 min"},
    {n:6, titulo:"¿Vocación o miedo a cambiar?", descripcion:"Con una invitada que dejó la oficina para dedicarse a la cerámica. Hablamos de dudas, no de éxitos.", categoria:"Vocación", duracion:"52 min"},
    {n:5, titulo:"Carrie tenía razón (a veces)", descripcion:"Lo que Sex and the City nos enseñó del amor, la amistad y escribir sobre una misma.", categoria:"Amor", duracion:"41 min"},
    {n:4, titulo:"Amigas que se van a vivir fuera", descripcion:"Cómo cambian las amistades cuando cada una tira hacia un lado. Con mucho cariño y algún audio de WhatsApp.", categoria:"Amistad", duracion:"36 min"},
    {n:3, titulo:"El trabajo no es tu identidad", descripcion:"Qué queda de ti cuando dejas de presentarte por tu puesto. Reflexiones después de cambiar de empresa.", categoria:"Trabajo", duracion:"44 min"},
    {n:2, titulo:"La generación de Friends ya tiene 30", descripcion:"Nadie tenía la vida resuelta en Central Perk. ¿Por qué nos exigimos tenerla nosotras?", categoria:"Amistad", duracion:"39 min"},
    {n:1, titulo:"Un atrevimiento", descripcion:"Por qué nace En esencia: sentirse perdida y aun así atreverse a construir sin tenerlo todo claro.", categoria:"Propósito", duracion:"31 min"}
  ];

  const normalizar = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const escapar = t => t.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

  // Resalta coincidencias sin romper las tildes del texto original
  function resaltar(texto, termino) {
    if (!termino) return escapar(texto);
    const norm = normalizar(texto);
    let resultado = "", i = 0, pos;
    while ((pos = norm.indexOf(termino, i)) !== -1) {
      resultado += escapar(texto.slice(i, pos)) + "<mark>" + escapar(texto.slice(pos, pos + termino.length)) + "</mark>";
      i = pos + termino.length;
    }
    return resultado + escapar(texto.slice(i));
  }

  const inputBusqueda = document.getElementById("busqueda");
  const contFiltros = document.getElementById("filtros");
  const lista = document.getElementById("lista-episodios");
  const contador = document.getElementById("contador");
  const sinResultados = document.getElementById("sin-resultados");
  let categoriaActiva = "Todas";

  const categorias = ["Todas", ...new Set(EPISODIOS.map(e => e.categoria))];
  contFiltros.innerHTML = categorias.map(c =>
    `<button type="button" class="filtro" data-cat="${c}" aria-pressed="${c === "Todas"}">${c}</button>`).join("");

  function filtrar() {
    const termino = normalizar(inputBusqueda.value.trim());
    const resultados = EPISODIOS.filter(ep => {
      const okCat = categoriaActiva === "Todas" || ep.categoria === categoriaActiva;
      const okTexto = !termino || normalizar(`${ep.titulo} ${ep.descripcion} ${ep.categoria}`).includes(termino);
      return okCat && okTexto;
    });

    lista.innerHTML = resultados.map(ep => `
      <li class="episodio">
        <span class="num" aria-hidden="true">${String(ep.n).padStart(2, "0")}</span>
        <div>
          <h3>${resaltar(ep.titulo, termino)}</h3>
          <p>${resaltar(ep.descripcion, termino)}</p>
          <div class="meta">
            <span class="chip">${resaltar(ep.categoria, termino)}</span>
            <span class="dur">Ep. ${ep.n} · ${ep.duracion}</span>
            <button type="button" data-ep="${ep.n}" aria-label="Escuchar episodio ${ep.n}: ${escapar(ep.titulo)}">Escuchar</button>
          </div>
        </div>
      </li>`).join("");

    const n = resultados.length;
    contador.textContent = n === 1 ? "1 episodio encontrado" : `${n} episodios encontrados`;
    sinResultados.hidden = n !== 0;
  }

  inputBusqueda.addEventListener("input", filtrar);
  contFiltros.addEventListener("click", e => {
    const b = e.target.closest(".filtro");
    if (!b) return;
    categoriaActiva = b.dataset.cat;
    contFiltros.querySelectorAll(".filtro").forEach(f => f.setAttribute("aria-pressed", String(f === b)));
    filtrar();
  });
  document.getElementById("limpiar").addEventListener("click", () => {
    inputBusqueda.value = "";
    categoriaActiva = "Todas";
    contFiltros.querySelectorAll(".filtro").forEach(f => f.setAttribute("aria-pressed", String(f.dataset.cat === "Todas")));
    filtrar();
    inputBusqueda.focus();
  });
  // "Escuchar" lleva al reproductor (simulado)
  lista.addEventListener("click", e => {
    const b = e.target.closest("[data-ep]");
    if (!b) return;
    document.getElementById("ultimo").scrollIntoView({behavior: reducirMovimiento ? "auto" : "smooth"});
    btnPlay.focus({preventScroll:true});
  });
  filtrar();

  /* ================= FAQ ACORDEÓN ================= */
  document.querySelectorAll(".faq-boton").forEach(boton => {
    boton.addEventListener("click", () => {
      const abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      document.getElementById(boton.getAttribute("aria-controls")).classList.toggle("abierto", !abierto);
    });
  });

  /* ================= FORMULARIO CON VALIDACIÓN ================= */
  const form = document.getElementById("formulario");
  const exito = document.getElementById("exito");
  const EDAD_MIN = 18, EDAD_MAX = 99, MIN_MENSAJE = 20;

  const hoy = () => { const d = new Date(); d.setHours(0,0,0,0); return d; };
  const manana = new Date(hoy()); manana.setDate(manana.getDate() + 1);
  document.getElementById("cumple").min = manana.toISOString().split("T")[0];

  const reglas = {
    nombre: v => !v.trim() ? "Escribe tu nombre." :
                 v.trim().length < 2 ? "El nombre debe tener al menos 2 letras." : "",
    email: v => !v.trim() ? "Escribe tu email." :
                !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "Revisa el email: debe tener el formato nombre@dominio.com." : "",
    telefono: v => {
      const t = v.replace(/[\s.-]/g, "").replace(/^(\+34|0034)/, "");
      if (!t) return "Escribe tu teléfono.";
      return /^[6789]\d{8}$/.test(t) ? "" : "Escribe un teléfono español de 9 cifras que empiece por 6, 7, 8 o 9.";
    },
    momento: v => v ? "" : "Elige el momento en el que estás.",
    cumple: v => {
      if (!v) return "Indica la fecha de tu próximo cumpleaños.";
      const [a, m, d] = v.split("-").map(Number);
      return new Date(a, m - 1, d) > hoy() ? "" : "La fecha tiene que ser posterior a hoy.";
    },
    edad: v => {
      if (v === "") return "Indica cuántos años cumples.";
      const n = Number(v);
      return Number.isInteger(n) && n >= EDAD_MIN && n <= EDAD_MAX ? "" : `Escribe un número entero entre ${EDAD_MIN} y ${EDAD_MAX}.`;
    },
    tiempo: v => v ? "" : "Elige cuánto tiempo tienes para escuchar.",
    mensaje: v => {
      const largo = v.trim().length;
      if (!largo) return "Cuéntanos de qué te gustaría que habláramos.";
      return largo < MIN_MENSAJE ? `Escribe al menos ${MIN_MENSAJE} caracteres (llevas ${largo}).` : "";
    },
    privacidad: (_, campo) => campo.checked ? "" : "Tienes que aceptar la política de privacidad para suscribirte."
  };

  function validarCampo(campo) {
    const error = reglas[campo.name](campo.value, campo);
    const grupo = campo.closest(".grupo");
    const msg = document.getElementById("err-" + campo.name);
    msg.textContent = error;
    grupo.classList.toggle("error", !!error);
    grupo.classList.toggle("ok", !error);
    campo.setAttribute("aria-invalid", String(!!error));
    return !error;
  }

  const campos = Object.keys(reglas).map(n => form.elements[n]);
  campos.forEach(campo => {
    // Validación al salir del campo
    campo.addEventListener("blur", () => validarCampo(campo));
    // Si ya tenía error, se corrige mientras se escribe
    campo.addEventListener(campo.type === "checkbox" || campo.tagName === "SELECT" ? "change" : "input", () => {
      if (campo.closest(".grupo").classList.contains("error") || campo.type === "checkbox" || campo.tagName === "SELECT") validarCampo(campo);
    });
  });

  const mensaje = document.getElementById("mensaje");
  const contadorMsg = document.getElementById("contador-msg");
  mensaje.addEventListener("input", () => { contadorMsg.textContent = `${mensaje.value.length} / 500 · mínimo ${MIN_MENSAJE}`; });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const invalidos = campos.filter(c => !validarCampo(c));
    if (invalidos.length) {
      invalidos[0].focus();
      return;
    }
    // Envío simulado (sin backend)
    const nombre = form.elements.nombre.value.trim();
    document.getElementById("texto-exito").textContent =
      `Gracias, ${nombre}. Te llegará la primera carta con el próximo episodio. Y el día de tu cumple, una sorpresa.`;
    form.reset();
    contadorMsg.textContent = `0 / 500 · mínimo ${MIN_MENSAJE}`;
    campos.forEach(c => {
      c.closest(".grupo").classList.remove("ok", "error");
      c.removeAttribute("aria-invalid");
    });
    exito.classList.add("visible");
    exito.focus();
  });

  /* ================= APARICIÓN AL HACER SCROLL ================= */
  const revelables = document.querySelectorAll(".revelar");
  if (!reducirMovimiento && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver(entradas => {
      entradas.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); } });
    }, {threshold:.15, rootMargin:"0px 0px -40px 0px"});
    revelables.forEach(el => obs.observe(el));
  } else {
    revelables.forEach(el => el.classList.add("visible"));
  }

  document.getElementById("anio").textContent = new Date().getFullYear();
})();
</script>
</body>
</html>
