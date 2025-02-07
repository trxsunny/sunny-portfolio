// Adding event listener to the button with id "clickButton"
document.getElementById("clickButton").addEventListener("click", function() {
    alert("Hello,Welcome to my portfolio.");
});
// JavaScript for Hamburger Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");  // Toggle the 'show' class to display/hide the menu
});