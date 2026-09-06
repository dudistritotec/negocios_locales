(function(){
  const base = window.SITE_BASEURL || '';
  const famColor = {
    'Gastronomía y Bebidas': '#C4531D',
    'Espacio Público y Naturaleza': '#3F6B4F',
    'Arte Urbano': '#B0308F',
    'Cultura y Entretenimiento': '#2C5F8A',
    'Educación e Innovación': '#8A6D2C',
    'Comercio y Servicios': '#5B4A8A',
    'Deporte y Bienestar': '#2C8A7A',
    'Sin clasificar': '#6B6B6B'
  };

  fetch(base + '/assets/data/negocios.json').then(r => r.json()).then(negocios => {

    const map = L.map('mapa', { scrollWheelZoom: false }).setView([25.6524, -100.2865], 15);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      maxZoom: 19
    }).addTo(map);

    const layers = {};
    Object.keys(famColor).forEach(f => layers[f] = L.layerGroup());

    negocios.forEach(n => {
      const color = famColor[n.familia] || '#888';
      const marker = L.circleMarker([n.lat, n.lon], {
        radius: 6, color: '#F6F4EC', weight: 1, fillColor: color, fillOpacity: 0.9
      });
      let html = '<strong>' + n.nombre + '</strong><br>' +
                 '<span style="color:' + color + '">' + n.categoria + '</span>';
      if (n.giro) html += ' · ' + n.giro;
      if (n.descripcion) html += '<br><small>' + n.descripcion.slice(0,160) + (n.descripcion.length>160?'…':'') + '</small>';
      if (n.maps) html += '<br><a href="' + n.maps + '" target="_blank" rel="noopener">ver en Google Maps</a>';
      marker.bindPopup(html);
      layers[n.familia].addLayer(marker);
    });

    Object.values(layers).forEach(l => l.addTo(map));

    const legend = document.getElementById('leyenda-mapa');
    Object.keys(famColor).forEach(fam => {
      if (!layers[fam].getLayers().length) return;
      const item = document.createElement('label');
      item.style.display = 'flex';
      item.style.alignItems = 'center';
      item.style.gap = '.5rem';
      item.innerHTML = '<input type="checkbox" checked data-fam="' + fam + '"> ' +
        '<span class="chip" style="background:' + famColor[fam] + '"></span> ' + fam +
        ' <span class="dato" style="color:#5B564A">(' + layers[fam].getLayers().length + ')</span>';
      legend.appendChild(item);
    });

    legend.addEventListener('change', e => {
      const fam = e.target.dataset.fam;
      if (!fam) return;
      if (e.target.checked) map.addLayer(layers[fam]);
      else map.removeLayer(layers[fam]);
    });
  });
})();
