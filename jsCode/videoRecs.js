
//allowes for youtube videos to be played on the website using the iframe api connected to the html
let player

function onYouTubeIframeAPIReady(x){
    player = new YT.Player(`player${x}`, {
        height: 300,
        width: 600,
        videoId: "YAD0s9_kbU4",
        playerVars: {
            playersinline:1,
            autoplay:0,
            controls:1,
        }
    });
};

function filmResults() {
    for (i = 0; i < 6; i++) {
        console.log("hello")
        var videoContainer = document.createElement("div").setAttribute("id", `player-container${i}`);

        var button = document.createElement("button")
        button.textContent = "+"
        videoContainer.appendChild(button)

        var text = document.createElement("p")
        text.textContent = "film summary"

        var video = document.createElement("div").setAttribute("id", `player${i}`)
        videoContainer.appendChild(video)

        videoContainer.appendChild(text)
        filmParent.appendChild(videoContainer)

        onYouTubeIframeAPIReady(i)

    };
};

