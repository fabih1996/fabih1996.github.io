document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('video');

    // Event listener for clicking the "Ottieni il regalo bibino" button
    document.getElementById('play-button').addEventListener('click', function() {
        videoContainer.style.display = 'flex'; // Display the video container
    });

    // Event listener for clicking the close button
    document.getElementById('close-button').addEventListener('click', function() {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset video to beginning
        videoContainer.style.display = 'none'; // Hide the video container
    });

    // Event listener for clicking the left spaceship image
    document.querySelector('.top-image').addEventListener('click', function() {
        videoContainer.style.display = 'flex'; // Display the video container
    });

    // Event listener for clicking the right spaceship image
    document.querySelector('.bottom-image').addEventListener('click', function() {
        videoContainer.style.display = 'flex'; // Display the video container
    });
});

