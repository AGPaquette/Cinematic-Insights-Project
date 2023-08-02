var vidName = "Your Lie in April"

const youTubeKey = ""
const youTubeUrl = `https://www.googleapis.com/youtube/v3/search?key${youTubeKey}&q=${vidName}&type=video&part=snippet`

var userFilm = localStorage.getItem("searched-film")
console.log(userFilm)

const openAIKey = ''
const openAiUrl = 'https://api.openai.com/v1/completions';

const apiHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${openAIKey}`
};

const AiPrompt = `I enjoy watching ${userFilm}, can recommend 10 films or shows that are like ${userFilm}, with a short summary.`;

const AiData = {
    model: 'text-davinci-003', 
    prompt: AiPrompt,
    max_tokens: 1000,
};

const options = {
    method: "POST",
    headers: apiHeaders,
    body: JSON.stringify(AiData)
}

function youtubeData() {
    fetch (youTubeUrl)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        var videoData = data
        console.log(videoData)
        return videoData
    });
};


function openAiRecommendations() {
    console.log("entered function")

    fetch (openAiUrl, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var recs = data.choices[0].text;

        console.log(recs);

        list = recs.split("\n");
        var filteredList = list.filter(function(element) {
            return element !== "" && element !== ' ';
        });
        console.log(filteredList)

        filmResults(filteredList)
        onYouTubeIframeAPIReady()

        return recs;
    });
};

//holds the videoId that will be grabbed from the youtube data api
var idForVideo = "YAD0s9_kbU4";
//allowes for youtube videos to be played on the website using the iframe api connected to the html
let player

function addWatchList() {
    console.log("added")
    var titleID = $(this).parent().attr("id");
    var name = $(this).siblings(".showOrFilm").text();
    localStorage.setItem(titleID, name);
};

function onYouTubeIframeAPIReady() {
    //loops through the youtube iframe apio to allow for the videos to be added to each videocontainer
    for (i = 0; i < 10; i++) {   
    player = new YT.Player(`player${i}`, {
        height: 200,
        width: 300,
        videoId: idForVideo,
        playerVars: {
            playersinline:1,
            autoplay:0,
            controls:1,
        }
    });
    };
    };

function filmResults(array) {
    var filmParent = document.querySelector("#films");

    filmParent.innerHTML = ""

    for (i = 0; i < array.length; i++) {
        var filmParent = document.querySelector("#films");
        
        var videoContainer = document.createElement("section");
        videoContainer.setAttribute("id", `container-${i}`);
        videoContainer.setAttribute("class", "flex flex-col space-y-4 mx-3.5 bg-neutral-900 pb-6 pr-4 pl-4 border-solid border-2 border-amber-400");
        
        var title = document.createElement("h3");
        title.setAttribute("class", "showOrFilm text-amber-400 text-xl text-start pt-4");
        title.textContent = "Your Lie in April";
        videoContainer.appendChild(title);
        
        var contentContainer = document.createElement("div");
        contentContainer.setAttribute("class", "flex space-x-4");
        
        var video = document.createElement("div");
        video.setAttribute("id", `player${i}`);
        video.setAttribute("class", "flex-grow");
        contentContainer.appendChild(video);
        
        var text = document.createElement("p");
        text.setAttribute("class", "flex-grow text-start italic text-neutral-400 pr-2.5");
        text.textContent = array[i];
        contentContainer.appendChild(text);
        
        //var button = document.createElement("button");
        //button.addEventListener("click", addWatchList);
        //button.setAttribute("class", "my-2 mx-2 text-amber-400 text-center w-14 h-36 my-2 border-8 border-amber-400 border-double bg-black")
        //button.textContent = "+";
        //contentContainer.appendChild(button);
        
        videoContainer.appendChild(contentContainer);
        filmParent.appendChild(videoContainer);
    };
};

youtubeData()