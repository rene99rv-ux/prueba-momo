# EN ESENCIA · Web oficial

Adultas en proceso. Sin filtros.

## Estructura

```
en-esencia/
├── index.html          Home (una sola página con navegación por anclas)
├── css/
│   └── estilos.css     Sistema visual: variables de marca, secciones, responsive
├── js/
│   ├── contenido.js    Contenido editable: episodios, invitadas, preguntas, pregunta de la semana
│   └── main.js         Interacción: tachado de edades, reproductor, formularios, polaroids
└── img/                Imágenes (ahora son provisionales)
```

## Actualizar contenido cada semana

Todo está en `js/contenido.js`:

- **Nuevo episodio**: añádelo al principio del array `episodios`. El primero aparece como «El último episodio».
- **Polaroids**: array `personas` (foto, anotación manuscrita, giro y una marca opcional: `circulo`, `flecha` o `subrayado`).
- **Preguntas de oyentes**: array `preguntasOyentes`. Si pones `episodio`, aparece como respondida.
- **Una pregunta**: objeto `preguntaSemana`. El botón «Descargar para redes» genera un PNG de 1080 × 1350.

## Fotos

Las imágenes de `img/` son siluetas provisionales. Sustitúyelas por las reales (JPG o WebP, 4:5, mínimo 1200 px de alto) y actualiza las rutas en `contenido.js` y en `index.html` (foto de Irene). La web las muestra en blanco y negro y les da un poco de calidez al pasar el ratón.

## Pendiente de conectar

- Enlaces reales de Spotify, Apple Podcasts, YouTube y redes (ahora son `#`).
- Envío de los formularios: están validados en JavaScript pero el envío es simulado. Conéctalos a tu herramienta de newsletter y a un servicio de formularios.
- Páginas de aviso legal, privacidad y cookies.
