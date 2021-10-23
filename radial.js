var radial = document.createElement("canvas");
var radialCtx = radial.getContext("2d");
var w = (radial.width = 300);
var h = (radial.height = 150);
container.appendChild(radial);

var r = h / 4;
var p = { x: r, y: r };

function init() {
  radialCtx.strokeStyle = "white";
  window.requestAnimationFrame(radDrawer);
}

init();

function radDrawer() {
  radialCtx.clearRect(0, 0, w, h);
  drawRad(getRandomAngle());
  if (Math.floor(Math.random() * 20) == 3) getRandomRadius();
  window.requestAnimationFrame(radDrawer);
}

function drawRad(angle) {
  radialCtx.beginPath();
  radialCtx.moveTo(p.x, p.y);
  radialCtx.lineTo(p.x + Math.sin(angle) * r, p.y + Math.cos(angle) * r);
  radialCtx.stroke();
}

function getRandomAngle() {
  return (Math.floor(Math.random() * 360) * Math.PI) / 180;
}

function getRandomRadius() {
  newR = r * (Math.random() * 4);
  if (newR < h / 2 && newR > 20) r = newR;
  p = { x: r, y: r };
}

