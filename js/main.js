window.addEventListener('camera-init', (data) => {
    console.log('camera-init', data);
})

window.addEventListener('camera-error', (error) => {
    console.log('camera-error', error);
})

window.addEventListener('model-loaded', (e)=>{
    

    document.getElementById("splassScreen").style.display="none";
    console.log(e.detail.model)
    let azuldelgado = e.detail.model.getObjectByName('AzulDelgado001')
    let AzulGrueso001 = e.detail.model.getObjectByName('AzulGrueso001')
    let BlancoGrueso001 = e.detail.model.getObjectByName('BlancoGrueso001')
    let BlancoTop001 = e.detail.model.getObjectByName('BlancoTop001')
    let TelaTempur001 = e.detail.model.getObjectByName('TelaTempur001')
    AzulGrueso001.material.opacity=0.5
    azuldelgado.material.opacity=0.5
    BlancoGrueso001.material.opacity=0.5
    BlancoTop001.material.opacity=0.5
    TelaTempur001.material.opacity=0.5
    
});

AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;
        marker.addEventListener('markerFound', function() {
            var markerId = marker.id;
            console.log('markerFound', markerId);
            // TODO: Add your own code here to react to the marker being found.
        });

        marker.addEventListener('markerLost', function() {
            var markerId = marker.id;
            console.log('markerLost', markerId);
            // TODO: Add your own code here to react to the marker being lost.
        });
    }
});

AFRAME.registerComponent('model-opacity', {
    schema: {default: 1.0},
    init: function () {
      this.el.addEventListener('model-loaded', this.update.bind(this));
    },
    update: function () {
      var mesh = this.el.getObject3D('mesh');
      var data = this.data;
      if (!mesh) { return; }
      mesh.traverse(function (node) {
        if (node.isMesh) {
          node.material.opacity = data;
          node.material.transparent = data < 1.0;
          node.material.needsUpdate = true;
        }
      });
    }
  });
