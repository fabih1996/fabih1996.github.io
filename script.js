document.getElementById('play-button').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('video');
    videoContainer.style.display = 'flex';
    video.play();
});

document.getElementById('close-button').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('video');
    video.pause();
    videoContainer.style.display = 'none';
});

