var searchBtn = document.querySelector("#indexSearch")
var filmValue = document.getElementById("filmName")

function searchFilm() { 
    console.log("film")
    var userFilm = filmValue.value
    if (document.URL.includes("index.html")) {
        window.location.href = "./htmlFiles/menu.html?film=" + userFilm;
    }
    else {
        window.location.href = "./menu.html?film=" + userFilm;
    };

};

function checkforValue () {
    if (filmValue.value == "") {
        filmValue.setAttribute("placeholder", "PLEASE ENTER A FILM OR SHOW")
    }
    else {
        localStorage.setItem("searched-film", filmValue.value)
        openAiRecommendations()
    };
};

searchBtn.addEventListener("click", checkforValue);

