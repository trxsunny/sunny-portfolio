// Toggle Menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});

// Button Click Animation
document.getElementById("clickButton").addEventListener("click", function () {
    var animeGirl = document.getElementById("anime-girl");
    animeGirl.classList.toggle("show");

    setTimeout(() => {
        animeGirl.classList.remove("show");
    }, 3000); // Hides after 3 seconds
});