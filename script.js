var player;

function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('responsive-iframe', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

    // bind events
    var playButton = document.getElementById("video-btn-iframe");
    playButton.addEventListener("click", function() {
        $("#video-wrapper-iframe").css("display", "flex");
        player.playVideo();
    });

    var pauseButton = document.getElementById("video-exit-btn-iframe");
    pauseButton.addEventListener("click", function() {
        $("#video-wrapper-iframe").css("display", "none");
        player.pauseVideo();
    });

    var pauseButton = document.getElementById("video-wrapper-iframe");
    pauseButton.addEventListener("click", function() {
        $("#video-wrapper-iframe").css("display", "none");
        player.pauseVideo();
    });

}
// onPlayerReady();


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);