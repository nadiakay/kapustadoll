const swapDollz = document.getElementById("swap-dollz");

const topDollPaths = [
    "spdrskll.gif",
    "SD_Shuni18.gif",
    "SD_Shuni29.gif",
    "SD_Shuni68.gif",
    "SD_Shuni82.gif",
    "J.gif",
    "gothicpinkwings.png",
];
const btmDollPaths = [
    "SD_Anime09.gif",
    "SD_Anime14.gif",
    "SD_Anime16.gif",
    "SD_Anime19.gif",
];

populateDollz();

function populateDollz() {
    // Select all dollz containers on the screen; exclude bottom row for mobile
    var topDollz = document.querySelectorAll("div.top-row > .dollz");
    var bottomDollz = document.querySelectorAll("div.bottom-row > .dollz");
    bottomDollz.innerHTML = "";

    
    var topPaths = [...topDollPaths];
    var btmPaths = [...btmDollPaths];

    for (const container of topDollz) {
        container.innerHTML = "";

        for (i = 0; i < 3; i++) {
            const img = document.createElement("img");
            var j = Math.floor(Math.random() * topPaths.length);
            const path =
                "img/dollz/" +
                topPaths[j];
            img.setAttribute("src", path);
            container.appendChild(img);
            topPaths.splice(j, 1);
        }
    }

    for (const container of bottomDollz) {
        container.innerHTML = "";

        if (!window.matchMedia("(max-width: 700px)").matches) {
            for (i = 0; i < 2; i++) {
                const img = document.createElement("img");
                var j = Math.floor(Math.random() * btmPaths.length);
                const path =
                    "img/dollz/" +
                    btmPaths[j];
                img.setAttribute("src", path);
                container.appendChild(img);
                btmPaths.splice(j, 1);
            }
        }
    }
}

window.addEventListener("resize", populateDollz);
swapDollz.addEventListener("click", populateDollz);
