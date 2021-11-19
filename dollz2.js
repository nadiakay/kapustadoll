var main = document.getElementById("main");

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
  var height = main.clientHeight;
  var width = main.clientWidth;

  var rowHeight = height * 0.4;
  populateRow(rowHeight, width);
  rowHeight = height * 0.8;
  populateRow(rowHeight, width);
}

function populateRow(height, width) {
  for (var i = 0.04; i <= 0.6; i += 0.56) {
    for (var d = 0; d < 3; d++) {
      const img = document.createElement("img");
      var j = Math.floor(Math.random() * paths.length);
      const path = "img/dollz/" + paths[j];
      img.setAttribute("src", path);
      img.setAttribute("width", width * 0.1);
      img.classList.add("doll");
      console.log(img);
      main.appendChild(img);
      img.style.left = width * i + width * d * 0.13;
      img.style.top = height;
      paths.splice(j, 1);
    }
  }
}

window.addEventListener("resize", populateDollz);
