var watchListArray = [];
var stringArray = JSON.stringify(watchListArray);

function subtractWatchList() {
    var stringList = localStorage.getItem("watchList", stringArray);
    JSON.parse(stringList)
};

function yourWatchList() {
    //placeholder for now 
     for (i = 0; i < 6; i++) {

     };
};

