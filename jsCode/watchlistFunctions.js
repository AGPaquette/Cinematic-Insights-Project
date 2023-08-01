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

