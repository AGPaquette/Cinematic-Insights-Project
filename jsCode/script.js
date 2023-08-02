
function watchList() {
    window.location.href = "./watchlist.html"
};

function backButton() {
    window.location.href = "./menu.html"

};

if (document.URL.includes("menu.html")) {
    var film = document.location.search.split("=")[1];
    localStorage.setItem("searched-film", film);
    filmResults();
};
