---
title: Metodología
permalink: /metodologia/
---
<main class="contenido" markdown="1">

# Metodología

## Origen de los datos

La base parte de un levantamiento propio de negocios y puntos de interés dentro de distritotec, Monterrey: 216 filas con nombre, categoría de Google Places, dirección, coordenadas, descripción y enlace a Google Maps.

## Familias de negocio

Las 17 categorías originales de Google Places se agruparon en 8 familias editoriales, pensadas para leer la vocación del distrito y no solo su clasificación comercial:

| Familia | Categorías originales agrupadas |
|---|---|
| Gastronomía y Bebidas | Restaurant, Cafe, Bar, Snacks, Bakery |
| Espacio Público y Naturaleza | Park |
| Arte Urbano | Arte Público |
| Cultura y Entretenimiento | Cultura, Entretenimiento, Event |
| Educación e Innovación | Tec, School |
| Comercio y Servicios | Store, Shopping, Florería |
| Deporte y Bienestar | Sport |
| Sin clasificar | Sin categoría |

## Giros específicos (gastronomía)

Los datos originales no incluyen un subtipo de cocina o giro específico. Para poder construir el tercer nivel de la red conceptual, se infirió el giro de cada negocio de la familia Gastronomía y Bebidas a partir de palabras clave presentes en su nombre y descripción (por ejemplo: "taquería", "burger", "café", "mariscos", "bar", "vietnamita"). Los negocios que no calzaron con ninguna regla quedaron como **"Otras propuestas gastronómicas"**.

Esta inferencia es una clasificación editorial y heurística, no un dato verificado en campo por negocio; su valor es mostrar la composición general de la oferta gastronómica, no certificar el giro exacto de cada punto.

## Estructura de la red conceptual

La red conceptual (inspirada en los mapas de códigos de software de análisis cualitativo como Atlas.ti) tiene tres niveles:

1. **Familia** — la vocación general (p. ej. Gastronomía y Bebidas).
2. **Categoría** — la clasificación original de Google Places dentro de esa familia (p. ej. Restaurant).
3. **Giro específico** — el subtipo inferido, solo aplicable a gastronomía (p. ej. Tacos, antojitos y tortas).

El tamaño de cada nodo es proporcional al número de negocios que agrupa.

</main>
