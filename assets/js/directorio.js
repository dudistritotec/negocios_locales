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
    const buscador = document.getElementById('buscar');
    const selFamilia = document.getElementById('filtro-familia');
    const selGiro = document.getElementById('filtro-giro');
    const cuerpo = document.getElementById('cuerpo-directorio');
    const conteo = document.getElementById('conteo-resultados');

    const familias = [...new Set(negocios.map(n => n.familia))].sort();
    familias.forEach(f => {
      const o = document.createElement('option');
      o.value = f; o.textContent = f;
      selFamilia.appendChild(o);
    });

    function actualizarGiros(){
      const fam = selFamilia.value;
      const giros = [...new Set(negocios.filter(n => !fam || n.familia === fam).map(n => n.giro).filter(Boolean))].sort();
      selGiro.innerHTML = '<option value="">Todos los giros</option>' + giros.map(g => `<option value="${g}">${g}</option>`).join('');
    }
    actualizarGiros();

    function render(){
      const q = buscador.value.trim().toLowerCase();
      const fam = selFamilia.value;
      const giro = selGiro.value;

      const filtrados = negocios.filter(n => {
        if (fam && n.familia !== fam) return false;
        if (giro && n.giro !== giro) return false;
        if (q && !(n.nombre.toLowerCase().includes(q) || (n.descripcion||'').toLowerCase().includes(q))) return false;
        return true;
      });

      conteo.textContent = filtrados.length + (filtrados.length === 1 ? ' resultado' : ' resultados');

      cuerpo.innerHTML = filtrados.map(n => {
        const color = famColor[n.familia] || '#888';
        const mapsLink = n.maps ? `<a href="${n.maps}" target="_blank" rel="noopener">mapa</a>` : '';
        return `<tr>
          <td><strong>${n.nombre}</strong></td>
          <td><span class="etiqueta" style="background:${color}">${n.familia}</span></td>
          <td>${n.categoria}</td>
          <td>${n.giro || '—'}</td>
          <td>${mapsLink}</td>
        </tr>`;
      }).join('');
    }

    buscador.addEventListener('input', render);
    selFamilia.addEventListener('change', () => { actualizarGiros(); render(); });
    selGiro.addEventListener('change', render);

    render();
  });
})();
