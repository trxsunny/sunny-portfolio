/* Global Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    position: relative;
    text-align: center;
    color: white;
    overflow: hidden;
    max-width: 100%;
    height: auto;
}

#banner img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
}

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    padding: 20px 40px;
    border-radius: 8px;
}

.banner-text h1 {
    font-size: 36px;
    margin: 0;
    font-weight: bold;
}

.banner-text p {
    font-size: 18px;
    margin: 5px 0 0;
}

/* Navbar */
.navbar {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.nav-links li a {
    color: white;
    text-decoration: none;
    padding: 10px;
    transition: background 0.3s;
}

.nav-links li a:hover {
    background-color: #555;
    border-radius: 5px;
}

/* Anime Girl Animation */
.anime-girl {
    position: fixed;
    bottom: -100px;
    left: -100px;
    background: #ffcccb;
    padding: 20px;
    border-radius: 50%;
    font-size: 24px;
    display: none;
    transition: all 0.8s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    animation: wave 1s infinite alternate;
}

@keyframes slideIn {
    from {
        left: -150px;
        bottom: -150px;
    }
    to {
        left: 20px;
        bottom: 20px;
    }
}

@keyframes wave {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(20deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        background-color: #333;
        position: absolute;
        top: 50px;
        right: 20px;
        width: 150px;
        border-radius: 5px;
    }

    .nav-links.show {
        display: flex;
    }

    .menu-toggle {
        display: block;
        cursor: pointer;
        font-size: 28px;
    }
}