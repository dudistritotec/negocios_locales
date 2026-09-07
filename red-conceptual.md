---
title: Red conceptual
permalink: /red-conceptual/
---
<main class="contenido ancho" markdown="1">

# Red conceptual del ecosistema comercial

Igual que un mapa de códigos y familias en un análisis cualitativo, esta red organiza los 207 puntos del levantamiento en tres niveles: **familia de negocio → categoría → giro específico**. El tamaño de cada nodo es proporcional al número de negocios que agrupa; el color identifica su familia.

Haz clic en cualquier nodo para ver qué negocios lo componen. Arrastra para reacomodar, usa la rueda para acercar.

<div class="controles">
  <button class="activo" data-level="1">Solo familias</button>
  <button data-level="2">+ Categorías</button>
  <button data-level="3">+ Giros específicos</button>
</div>

<div class="red-envoltura">
  <div id="red"></div>
  <div id="panel-red" class="red-panel">
    <div class="titulo">distritotec</div>
    <div class="meta">207 negocios · haz clic en un nodo para explorarlo</div>
    <ul class="lista"></ul>
  </div>
</div>

<p class="red-ayuda">La red parte de una clasificación editorial propia: los giros específicos de gastronomía se infirieron a partir del nombre y la descripción de cada negocio (ver <a href="{{ '/metodologia/' | relative_url }}">metodología</a>).</p>

## Lectura de la red

**Gastronomía y Bebidas** domina el mapa con más nodos y mayor tamaño acumulado: dentro de esa familia, **tacos, antojitos y tortas** es el giro más numeroso, seguido de **café y repostería** y de **hamburguesas, pizza y comida rápida**. Es la vocación comercial más evidente del distrito: comida de consumo rápido y frecuente, pensada para población estudiantil y flujo peatonal constante.

Alrededor de ese núcleo gastronómico aparecen dos familias que sostienen la experiencia urbana sin ser comercios: **espacio público y naturaleza** (parques) y **arte urbano** (murales y galerías abiertas), ambas parte del Programa de Arte Público distritotec. Cultura, educación, deporte y comercio especializado son familias más pequeñas pero que amplían el uso del distrito más allá de comer y caminar.

</main>

<script src="https://unpkg.com/vis-network@9.1.9/standalone/umd/vis-network.min.js"></script>
<script src="{{ '/assets/js/red.js' | relative_url }}"></script>
