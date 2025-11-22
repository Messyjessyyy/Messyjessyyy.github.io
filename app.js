// Get the button element and the body element
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Check if a preference is saved in local storage (for persistence)
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on load, or default to light mode
if (savedTheme) {
    body.classList.add(savedTheme);
    // Update button text to reflect current state
    modeToggle.textContent = savedTheme === 'dark-mode' ? 'Toggle Light Mode' : 'Toggle Dark Mode';
} else {
    // Default to light mode and set button text
    modeToggle.textContent = 'Toggle Dark Mode';
}


// Add event listener to the button
modeToggle.addEventListener('click', function() {
    // 1. Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // 2. Update the button text based on the new state
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Toggle Light Mode';
        // 3. Save preference
        localStorage.setItem('theme', 'dark-mode');
    } else {
        modeToggle.textContent = 'Toggle Dark Mode';
        // 3. Save preference
        localStorage.setItem('theme', 'light-mode');
    }
});
