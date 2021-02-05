
const bar = new ProgressBar.Line(progressBar, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
  });
  
  bar.animate(1.0); 