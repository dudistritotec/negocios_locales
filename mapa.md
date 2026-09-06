---
title: Mapa
permalink: /mapa/
---
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<main class="contenido ancho" markdown="1">

# Mapa del ecosistema comercial

Los 207 puntos ubicados sobre DistritoTec, coloreados por familia de negocio. Desactiva capas en la leyenda para aislar una familia, o haz clic en un punto para ver su ficha.

<div id="mapa"></div>

<div id="leyenda-mapa" style="display:flex;flex-wrap:wrap;gap:.9rem 1.4rem;margin-top:1.2rem;font-size:.95rem;"></div>

<p class="nota">Cartografía base: CARTO / OpenStreetMap. Las coordenadas provienen del levantamiento original de Reveel.</p>

</main>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="{{ '/assets/js/mapa.js' | relative_url }}"></script>
