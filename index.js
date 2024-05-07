document.addEventListener('DOMContentLoaded', function() {
    // Waits for the user to submit a fahrenheit number
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Calculates celsius and displays number on page
        fahrenheit = document.querySelector('#f').value;
        celsius = (fahrenheit - 32) * 5 / 9;
        document.querySelector('h2').innerText = (celsius + "\u00B0C")

    });
});
