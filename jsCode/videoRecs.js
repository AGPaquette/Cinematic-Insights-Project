
//allowes for youtube videos to be played on the website using the iframe api connected to the html
let player

function onYouTubeIframeAPIReady(){
    player = new YT.Player("player", {
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