window.addEventListener('camera-init', (data) => {
    console.log('camera-init', data);
})

window.addEventListener('camera-error', (error) => {
    console.log('camera-error', error);
})

window.addEventListener('model-loaded', ()=>{
    console.log("Modelo listo XD");
    document.getElementById("splassScreen").style.display="none";
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

var bar = new ProgressBar.Line(progressBar, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });
  
  bar.animate(1.0); 