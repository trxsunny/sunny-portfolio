// Click Button Animation
document.getElementById("clickButton").addEventListener("click", function() {
    var person = document.getElementById("person");
    person.classList.add("showPerson");

    setTimeout(function() {
        person.classList.remove("showPerson");
    }, 4000); // Hides the person after 4 seconds
});

// Hamburger Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});