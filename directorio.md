---
title: Directorio
permalink: /directorio/
---
<main class="contenido ancho" markdown="1">

# Directorio completo

Los 207 negocios y espacios del levantamiento. Busca por nombre, o filtra por familia y giro específico.

<div class="buscador">
  <input type="search" id="buscar" placeholder="Buscar por nombre o descripción…">
  <select id="filtro-familia"><option value="">Todas las familias</option></select>
  <select id="filtro-giro"><option value="">Todos los giros</option></select>
</div>

<div class="conteo-resultados" id="conteo-resultados"></div>

<div style="overflow-x:auto;">
<table class="directorio">
  <thead>
    <tr><th>Nombre</th><th>Familia</th><th>Categoría</th><th>Giro específico</th><th></th></tr>
  </thead>
  <tbody id="cuerpo-directorio"></tbody>
</table>
</div>

</main>

<script src="{{ '/assets/js/directorio.js' | relative_url }}"></script>
