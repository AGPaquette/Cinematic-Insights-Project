var searchBtn = document.querySelector("#indexSearch")

function searchFilm() { 
    console.log("film")
    var userFilm = document.getElementById("filmName").value
    if (document.URL.includes("index.html")) {
        window.location.href = "./htmlFiles/menu.html?film=" + userFilm;
    }
    else {
        window.location.href = "./menu.html?film=" + userFilm;
    };

};

searchBtn.addEventListener("click", searchFilm);
