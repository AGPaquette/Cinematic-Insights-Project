const openUrl = "https://api.openai.com/v1/chat/completions"
const openAiKey = "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"
const youTubeKey = "AIzaSyCi65x5y483f_VCrY8AP-ZQHf-o5e-eXcA"
var userSearchFilm = "none"
const youTubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${youTubeKey}q=${userSearchFilm}&type=video&part=snippet`
var videoId = "none"
var searchBtn = document.querySelector("#indexSearch")
var filmParent = document.querySelector("#films")


function main() {
    
};


function backButton() {
    window.location.href = "./menu.html"

};

function filmResults() {
    for (i = 0; i < 6; i++) {
        console.log("hello")
        var liElement = document.createElement("li");

        var button = document.createElement("button")
        button.textContent = "+"
        liElement.appendChild(button)

        var text = document.createElement("p")
        text.textContent = "film summary"

        var image = document.createElement("img")
        image.src = "../IMG_0033.PNG"
        liElement.appendChild(image)

        liElement.appendChild(text)
        filmParent.appendChild(liElement)
    };
};

main()


if (document.URL.includes("menu.html")) {
    var film = document.location.search.split("=")[1]
    console.log(film)
    filmResults();
};
