document.getElementById('play-button').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'flex';
});

document.getElementById('close-button').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('video');
    video.pause();
    video.currentTime = 0; // Riporta il video all'inizio quando si chiude
    videoContainer.style.display = 'none';
});

