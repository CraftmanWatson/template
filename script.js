const navBtn = document.querySelector(".nav-btn");
const navScreen = document.querySelector(".nav-screen");
const homeScreen = document.querySelector(".hero");
const aboutScreen = document.querySelector(".about");
const catalogueScreen = document.querySelector(".catalogue");
const portfolioScreen = document.querySelector(".portfolio");
const testimonialScreen = document.querySelector(".testimonial");
const servicesScreen = document.querySelector(".services");
const contactScreen = document.querySelector(".footer");

const homeBtn = document.querySelector(".home-btn");
const homeBtn2 = document.querySelector(".logo")
const aboutBtn = document.querySelector(".about-btn");
const aboutBtn2 = document.querySelector(".hero-cta");
const catalogueBtn = document.querySelector(".catalogue-btn");
const portfolioBtn = document.querySelector(".portfolio-btn");
const testimonialBtn = document.querySelector(".testimonial-btn");
const servicesBtn = document.querySelector(".services-btn");
const contactBtn = document.querySelector(".contact-btn");

const catalogueToGo = document.querySelector(".catalogue-card");

navBtn.addEventListener("click", function () {
    navScreen.classList.toggle("active");
    navBtn.classList.toggle("cross");
});


homeBtn.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
homeBtn2.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

aboutBtn.addEventListener("click", function() {
    aboutScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
aboutBtn2.addEventListener("click", function() {
    aboutScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

catalogueBtn.addEventListener("click", function() {
    catalogueScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

portfolioBtn.addEventListener("click", function() {
    portfolioScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

testimonialBtn.addEventListener("click", function() {
    testimonialScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

servicesBtn.addEventListener("click", function() {
    servicesScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

contactBtn.addEventListener("click", function() {
    contactScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

// 1. Ambil SEMUA elemen yang punya class .catalogue-card
const catalogueCards = document.querySelectorAll(".catalogue-card");

// 2. Lakukan looping (forEach) untuk menempelkan klik ke masing-masing card
catalogueCards.forEach(function(card) {
    card.addEventListener("click", function() {
        window.location.href = "catalogue.html";
    });
});

const sliders = document.querySelectorAll(
    '.catalogue-cards-group, .portfolio-cards-group, .services-cards-group, .testimonial-cards-group, .catalogue-aisles-cards-group'
);

sliders.forEach((slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; 
        slider.scrollLeft = scrollLeft - walk;
    });
});