// Selectors
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = document.querySelector(".navbar .links .close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const signupLoginLink = document.querySelectorAll(".form-popup .bottom-link a");

// Functions

// Show mobile menu
function toggleMenu() {
    navbarMenu.classList.toggle("show-menu");
}

// Hide mobile menu
function hideMenu() {
    if (navbarMenu.classList.contains("show-menu")) {
        navbarMenu.classList.remove("show-menu");
    }
}

// Show login popup
function togglePopup() {
    document.body.classList.toggle("show-popup");
}

// Hide login popup
function hidePopup() {
    if (document.body.classList.contains("show-popup")) {
        document.body.classList.remove("show-popup");
    }
}

// Show or hide signup form
function toggleSignupForm(link) {
    const isSignup = link.id === 'signup-link';
    formPopup.classList.toggle("show-signup", isSignup);
}

// Event Listeners

// Mobile menu event listener
hamburgerBtn.addEventListener("click", toggleMenu);

// Hide mobile menu event listener
hideMenuBtn.addEventListener("click", hideMenu);

// Show login popup event listener
showPopupBtn.addEventListener("click", togglePopup);

// Hide login popup event listener
hidePopupBtn.addEventListener("click", hidePopup);

// Signup form event listeners
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        toggleSignupForm(link);
    });
});

// Google Sign-in function
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById(".name").textContent = profile.getName();
    document.getElementById(".email").textContent = profile.getEmail();
    document.getElementById(".image").setAttribute('src', profile.getImageUrl());
    document.querySelector(".data").style.display = "block";
}