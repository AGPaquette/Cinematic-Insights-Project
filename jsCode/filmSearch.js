var searchBtn = document.querySelector("#indexSearch")
var filmValue = document.getElementById("filmName")

function checkforValue () {
    //makes sure that the input element has text before doing any calls
    if (filmValue.value == "") {
        filmValue.setAttribute("placeholder", "PLEASE ENTER A FILM OR SHOW")
    }
    else {
        //sets the input text to the local stroage
        localStorage.setItem("searched-film", filmValue.value)
        //redirects the user to the menu html page
        if (document.URL.includes("index.html")) {
            window.location.href = "./htmlFiles/menu.html"
        }
        //calls the openAiReccommendations function
        else{
            openAiRecommendations()
        };
    };
};

//adds functionality to the search button
searchBtn.addEventListener("click", checkforValue);

