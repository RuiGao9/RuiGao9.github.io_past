// Example of a script to log page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded successfully!");
});

// Dropdown behavior for "GR Lab"
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});
