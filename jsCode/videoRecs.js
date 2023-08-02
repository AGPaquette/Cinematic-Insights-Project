var vidName = null;

const youTubeKey = "";
const youTubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${youTubeKey}&q=${vidName}&type=video&part=snippet`;

var userFilm = localStorage.getItem("searched-film")

const openAIKey = '';
const openAiUrl = 'https://api.openai.com/v1/completions';

const apiHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${openAIKey}`
};

const AiPrompt = `I enjoy watching ${userFilm}, can recommend 10 films or shows that are like ${userFilm}, with a short summary. Make sure the recommended show or film is not in the data. Put a ":" after the title and before the summary all the time. Example 1. Title : summary of film`;

const AiData = {
    model: 'text-davinci-003', 
    prompt: AiPrompt,
    max_tokens: 1000,
};

const options = {
    method: "POST",
    headers: apiHeaders,
    body: JSON.stringify(AiData)
};

function youtubeData(titelArrays) {
    for (i = 0; i < titelArrays.length; i ++){
        vidName = titelArrays[i]
        fetch (youTubeUrl)
        .then(function (response){
            return response.json()
        })
        .then(function (data) {
            var Id = data.items[0].id.videoId
            localStorage.setItem(`VideoId-${[i]}`, Id)
            return data
        });
    }
};


function openAiRecommendations() {

    fetch (openAiUrl, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var recs = data.choices[0].text;

        var list = recs.split("\n");

        var filteredList = list.filter(function(element) {
            return element !== "" && element !== ' ';
        });

        extractedTitles = filteredList.map(item => {
            const match = item.match(/\. (.*?): (.*)/);
            return match ? match[1] : null;
          });

        for (i = 0; i < extractedTitles.length; i++) {
            localStorage.setItem(`HeaderTitle-${[i]}`, extractedTitles[i])
        };

        youtubeData(extractedTitles)
        filmResults(filteredList)
        onYouTubeIframeAPIReady()

        return recs;
    });
};

//allowes for youtube videos to be played on the website using the iframe api connected to the html
let player

function onYouTubeIframeAPIReady() {
    //loops through the youtube iframe apio to allow for the videos to be added to each videocontainer
    for (i = 0; i < 10; i++) {   
    player = new YT.Player(`player${i}`, {
        height: 200,
        width: 300,
        videoId: localStorage.getItem(`VideoId-${[i]}`),
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
        title.textContent = localStorage.getItem(`HeaderTitle-${[i]}`);
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

if (document.URL.includes("menu.html")) {
    openAiRecommendations()
};
