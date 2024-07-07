document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('video');
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');
    const loginError = document.getElementById('login-error');

    // Simulated correct information
    const correctName = 'Laura';
    const correctSurname = 'Ghiani';
    const correctBirthdate = '1998-10-29'; // YYYY-MM-DD format
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const nameInput = document.getElementById('name').value;
        const surnameInput = document.getElementById('surname').value;
        const birthdateInput = document.getElementById('birthdate').value;
    
        const name = nameInput.trim().toLowerCase();  // Convert to lowercase
        const surname = surnameInput.trim().toLowerCase();  // Convert to lowercase
        const birthdate = birthdateInput.trim();  // Trim whitespace
    
        if (name === correctName.toLowerCase() && surname === correctSurname.toLowerCase() && birthdate === correctBirthdate) {
            loginContainer.style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            loginError.textContent = 'Invalid name, surname, or birthdate';
        }
    });
    

    // Hide main content by default
    mainContent.style.display = 'none';

    // Existing event listeners
    document.getElementById('play-button').addEventListener('click', function() {
        videoContainer.style.display = 'flex'; // Display the video container
    });

    document.getElementById('close-button').addEventListener('click', function() {
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset video to beginning
        videoContainer.style.display = 'none'; // Hide the video container
    });

    document.querySelector('.top-image').addEventListener('click', function() {
        videoContainer.style.display = 'flex'; // Display the video container
    });

    document.querySelector('.bottom-image').addEventListener('click', function() {
        videoContainer.style.display = 'flex'; // Display the video container
    });
});
