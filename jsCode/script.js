
const openUrl = "https://api.openai.com/v1/chat/completions"
const openAiKey = "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"
const youTubeKey = "AIzaSyCi65x5y483f_VCrY8AP-ZQHf-o5e-eXcA"
const youTubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${youTubeKey}q=${userSearchFilm}&type=video&part=snippet`


function main() {
    
};


function watchList() {
    window.location.href = "./watchlist.html"
};

function backButton() {
    window.location.href = "./menu.html"

};




if (document.URL.includes("menu.html")) {
    var film = document.location.search.split("=")[1]
    console.log(film)
    filmResults();
};
