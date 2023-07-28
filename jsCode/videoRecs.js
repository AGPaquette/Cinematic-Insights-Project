
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
    })
};