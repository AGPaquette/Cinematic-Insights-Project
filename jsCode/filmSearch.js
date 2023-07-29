
function searchFilm() { 
    var userFilm = document.getElementById("filmName").value
    window.location.href = "./htmlFiles/menu.html?film=" + userFilm;

};

searchBtn.addEventListener("click", searchFilm);
