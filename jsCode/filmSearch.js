
function searchFilm() { 
    var userFilm = document.getElementById("filmName").value
    window.location.href = "./htmlFiles/menu.html?film=" + userFilm;

};

if (document.URL.includes("index.html")) {
    searchBtn.addEventListener("click", searchFilm);
};