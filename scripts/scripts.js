/* functions here are used to enable light/dark mode 
functionality. */

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('portfolio-container').classList.toggle('dark-mode');
    document.getElementById('dark-mode-toggle').classList.toggle('dark-mode');
    document.getElementById('navbar').classList.toggle('dark-mode'); 
    document.getElementsByClassName('project-card').forEach(card => card.classList.toggle('dark-mode'));

    /* Save or remove the dark mode preference based on the current state */
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    if (darkModeEnabled) {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.removeItem('darkMode');
    }
}

function checkDarkModePreference() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        document.getElementById('portfolio-container').classList.add('dark-mode');
        document.querySelectorAll('.project-card').forEach(card => card.classList.add('dark-mode'));
        document.getElementById('dark-mode-toggle').classList.add('dark-mode');
    }
}



