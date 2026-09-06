(function(){
  const base = window.SITE_BASEURL || '';

  Promise.all([
    fetch(base + '/assets/data/network.json').then(r => r.json()),
    fetch(base + '/assets/data/negocios.json').then(r => r.json())
  ]).then(([net, negocios]) => {
    buildNetwork(net, negocios);
  });

  function buildNetwork(net, negocios){
    const levelSize = { 0: 30, 1: 20, 2: 13, 3: 8 };
    const levelFont  = { 0: 20, 1: 16, 2: 13, 3: 11 };

    const nodes = new vis.DataSet(net.nodes.map(n => ({
      id: n.id,
      label: n.label + (n.level > 0 ? '  (' + n.count + ')' : ''),
      level: n.level,
      shape: 'dot',
      size: levelSize[n.level] + Math.sqrt(n.count) * (n.level === 3 ? 2.2 : 1.4),
      color: {
        background: n.color,
        border: n.level === 0 ? '#F6F4EC' : 'rgba(0,0,0,.25)',
        highlight: { background: n.color, border: '#F6F4EC' }
      },
      font: { color: '#F6F4EC', size: levelFont[n.level], face: 'Barlow Condensed, sans-serif', vadjust: -2 },
      _filter: n.filter,
      _count: n.count,
      _label: n.label
    })));

    const edges = new vis.DataSet(net.edges.map((e,i) => ({
      id: i, from: e.from, to: e.to,
      color: { color: 'rgba(246,244,236,.18)', highlight: 'rgba(246,244,236,.6)' },
      width: 1
    })));

    const container = document.getElementById('red');
    const data = { nodes, edges };
    const options = {
      layout: { improvedLayout: true },
      physics: {
        solver: 'forceAtlas2Based',
        forceAtlas2Based: { gravitationalConstant: -70, springLength: 90, springConstant: 0.06, avoidOverlap: 0.6 },
        stabilization: { iterations: 250 }
      },
      interaction: { hover: true, tooltipDelay: 120 },
      nodes: { borderWidth: 1.5 }
    };

    const network = new vis.Network(container, data, options);

    const panelTitulo = document.querySelector('#panel-red .titulo');
    const panelMeta = document.querySelector('#panel-red .meta');
    const panelLista = document.querySelector('#panel-red .lista');

    function matches(neg, filtro){
      for (const k in filtro){
        if (neg[k] !== filtro[k]) return false;
      }
      return true;
    }

    function mostrarNodo(nodeId){
      const n = nodes.get(nodeId);
      panelTitulo.textContent = n._label;
      const items = negocios.filter(neg => matches(neg, n._filter));
      panelMeta.textContent = items.length + (items.length === 1 ? ' negocio en este nodo' : ' negocios en este nodo') + ' · nivel: ' + ['distrito','familia','categoría','giro específico'][n.level];
      panelLista.innerHTML = items.slice(0, 60).map(it => '<li>' + it.nombre + '</li>').join('');
      if (items.length > 60){
        panelLista.innerHTML += '<li>… y ' + (items.length - 60) + ' más (ver Directorio)</li>';
      }
    }

    network.on('click', function(params){
      if (params.nodes.length > 0){
        mostrarNodo(params.nodes[0]);
      }
    });

    // estado inicial: raíz
    mostrarNodo('root');

    // controles de nivel
    document.querySelectorAll('.controles button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.controles button').forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        const maxLevel = parseInt(btn.dataset.level, 10);
        const updates = net.nodes
          .filter(n => n.level > maxLevel)
          .map(n => ({ id: n.id, hidden: true }));
        const visibles = net.nodes
          .filter(n => n.level <= maxLevel)
          .map(n => ({ id: n.id, hidden: false }));
        nodes.update(updates.concat(visibles));
      });
    });
  }
})();
