const navBtn = document.querySelector(".nav-btn");
const navScreen = document.querySelector(".nav-screen");
const catalogueScreen = document.querySelector(".catalogue-aisles");
const contactScreen = document.querySelector(".footer");

const homeBtn = document.querySelector(".home-btn");
const homeBtn2 = document.querySelector(".logo")
const catalogueBtn = document.querySelector(".catalogue-btn");
const contactBtn = document.querySelector(".contact-btn");

navBtn.addEventListener("click", function () {
    navScreen.classList.toggle("active");
    navBtn.classList.toggle("cross");
});


homeBtn.addEventListener("click", function() {
    window.location.href = "index.html";
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
homeBtn2.addEventListener("click", function() {
    window.location.href = "index.html";
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

catalogueBtn.addEventListener("click", function() {
    catalogueScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

contactBtn.addEventListener("click", function() {
    contactScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

const slider = document.querySelector('.catalogue-aisles-cards-group');

// Pastikan elemennya ada dulu sebelum dipasang event listener
if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active'); // Opsional: bisa dipake buat ubah cursor di CSS
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
        const walk = (x - startX) * 1; // Angka 1.5 ini adalah kecepatan scroll, bisa kamu sesuaikan
        slider.scrollLeft = scrollLeft - walk;
    });
}