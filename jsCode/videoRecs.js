
//allowes for youtube videos to be played on the website using the iframe api connected to the html
let player

function onYouTubeIframeAPIReady() {
    console.log("inside")
    for (i = 0; i < 6; i++) {   
    player = new YT.Player(`player${i}`, {
        height: 200,
        width: 300,
        videoId: "YAD0s9_kbU4",
        playerVars: {
            playersinline:1,
            autoplay:0,
            controls:1,
        }
    });
    };
    };

function filmResults() {
    
    for (i = 0; i < 6; i++) {
        console.log("hello")
        var videoContainer = document.createElement("section");
        videoContainer.setAttribute("id", `container-${i}`);

        var text = document.createElement("p");
        text.textContent = "film summary";
        videoContainer.appendChild(text);

        var button = document.createElement("button");
        button.textContent = "+";
        videoContainer.appendChild(button);

        var video = document.createElement("div");
        video.setAttribute("id", `player${i}`)
        videoContainer.appendChild(video);

        filmParent.appendChild(videoContainer);

        };
    };


