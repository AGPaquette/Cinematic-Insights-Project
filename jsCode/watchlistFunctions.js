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
        LiContainer.setAttribute("class", `flex justify-between items-center m-2 bg-neutral-900 border-solid border-2 border-amber-400`)

        var nameOfFilm = document.createElement("p");
        nameOfFilm.setAttribute("class", 'filmName w-10/12 flex justify-center items-center h-20 text-center  text-7xl text-yellow-300');
        nameOfFilm.textContent = "Love is War";
        LiContainer.appendChild(nameOfFilm)

        var subBtn = document.createElement("button");
        subBtn.setAttribute("class", "removeBtn justify-self-end my-2 mx-2 text-amber-400 text-center w-14 h-20 my-2 border-8 border-amber-400 border-double bg-black");
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

if (document.URL.includes("watchlist.html")) {
    backBtn.addEventListener("click", backToMenu);
};

/*



*/