var backBtn = document.querySelector("#backBtn")
var watchListBtn = document.querySelector("#watchListBtn")
var watchListArray = [];
var stringArray = JSON.stringify(watchListArray);

function subtractWatchList() {
    var stringList = localStorage.getItem("watchList", stringArray);
    JSON.parse(stringList)
};

function yourWatchList() {
    var UlContainer = document.querySelector("#WatchList");

     for (i = 0; i < 6; i++) {
        console.log("entered loop")
        var LiContainer = document.createElement("li");
        LiContainer.setAttribute("id", `listNum${i}`)

        var nameOfFilm = document.createElement("p");
        nameOfFilm.setAttribute("class", 'filmName');
        nameOfFilm.textContent = "Love is War";
        LiContainer.appendChild(nameOfFilm)

        var subBtn = document.createElement("button");
        subBtn.setAttribute("class", "removeBtn");
        LiContainer.appendChild(subBtn);

        UlContainer.appendChild(LiContainer)
     };
};


function watchListPage() {
    window.location.href = "./watchlist.html";
};


function backToMenu() {
    window.location.href = "./menu.html";
};

if (document.URL.includes("menu.html")) {
    watchListBtn.addEventListener("click", watchListPage);
};

if (document.URL.includes("watchlist.html")) {
    backBtn.addEventListener("click", backToMenu);
};