var orbsCanvas = document.createElement("canvas");
var orbsCtx = orbsCanvas.getContext("2d");
main.appendChild(orbsCanvas);

render();

function render() {
  var w = (orbsCanvas.width = main.clientWidth);
  var h = (orbsCanvas.height = main.clientHeight);

  orbsCtx.clearRect(0, 0, w, h);

  var orbs = [];
  //for i in n orbs.push({center point, radius})
  for (i = 0; i < 8; i++) {
    orbs.push({ center: getCenter(w, h), radius: Math.random() * 40 });
  }

  var i = orbs.length;
  while (i--) {
    drawOrb(orbs[i].center, orbs[i].radius);
  }
}

function drawOrb(center, radius) {
  orbsCtx.strokeStyle = "white";
  orbsCtx.beginPath();
  orbsCtx.arc(center[0], center[1], radius, 0, 2 * Math.PI);
  orbsCtx.fill();
  orbsCtx.stroke();
}

function getCenter(w, h) {
  var x = Math.random() * w;
  var y = (Math.random() * h) / 2;
  return [x, y];
}

main.addEventListener("resize", render());
