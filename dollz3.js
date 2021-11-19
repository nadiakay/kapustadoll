var dollCanvas = document.createElement("canvas");
var main = document.getElementById("main");
var dollCtx = dollCanvas.getContext("2d");
main.appendChild(dollCanvas);

const paths = [
  "spdrskll.gif",
  "SD_Shuni18.gif",
  "SD_Shuni29.gif",
  "SD_Shuni68.gif",
  "SD_Shuni82.gif",
  "J.gif",
  "gothicpinkwings.png",
  "SD_Anime09.gif",
  "SD_Anime14.gif",
  "SD_Anime16.gif",
  "SD_Anime19.gif"
];

populateDollz();

function populateDollz() {
  var w = (dollCanvas.width = main.clientWidth);
  var h = (dollCanvas.height = main.clientHeight);

  var rowHeight = h * 0.4;
  populateRow(rowHeight, w);
  rowHeight = h * 0.8;
  populateRow(rowHeight, w);
}

function populateRow(h, w) {
  for (var i = 0.04; i <= 0.6; i += 0.56) {
    for (var d = 0; d < 3; d++) {
      var j = Math.floor(Math.random() * paths.length);
      const path = "img/dollz/" + paths[j];
      var img = new Image();
      img.onload = function () {
        var x = w * i + w * d + 0.13;
        dollCtx.drawImage(img, x, h, w * 0.1, h * 0.1);
      };
      img.src = path;
      console.log(img);
      paths.splice(j, 1);
    }
  }
}

window.addEventListener("resize", populateDollz);
