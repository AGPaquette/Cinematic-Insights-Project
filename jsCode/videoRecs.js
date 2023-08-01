//holds the videoId that will be grabbed from the youtube data api
var idForVideo = "YAD0s9_kbU4"
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
    for (i = 0; i < 6; i++) {   
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

function filmResults() {
    var filmParent = document.querySelector("#films")
    
    for (i = 0; i < 6; i++) {
        var videoContainer = document.createElement("section");
        videoContainer.setAttribute("id", `container-${i}`);

        var video = document.createElement("div");
        video.setAttribute("id", `player${i}`)
        videoContainer.appendChild(video);

        var title = document.createElement("h3");
        title.setAttribute("class", "showOrFilm")
        title.textContent = "Your Lie in April";
        videoContainer.appendChild(title);

        var text = document.createElement("p");
        text.textContent = "film summary";
        videoContainer.appendChild(text);

        var button = document.createElement("button");
        button.addEventListener("click", addWatchList);
        button.textContent = "+";
        videoContainer.appendChild(button);

        filmParent.appendChild(videoContainer);

        };
    };


