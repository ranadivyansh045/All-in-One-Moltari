// ======================================
// ALL IN ONE MOLTARI
// Professional Script V2
// ======================================

// ==========================
// Typing Effect
// ==========================

const typing = document.getElementById("typing");

if (typing) {

    const text = "Your Trusted Digital Service Center";
    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            typing.innerHTML += text.charAt(i);
            i++;

            setTimeout(typeWriter, 70);

        }

    }

    typeWriter();

}

// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 100;

            const update = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => observer.observe(counter));

// ==========================
// Scroll To Top
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ==========================
// Hero Background Slider
// ==========================

const hero = document.querySelector(".hero");

if (hero) {

    const heroImages = [

        "images/hero1.png",
        "images/hero2.png",
        "images/hero3.png"

    ];

    let current = 0;

    setInterval(() => {

        current++;

        if (current >= heroImages.length) {

            current = 0;

        }

        hero.style.background =
            `linear-gradient(rgba(10,77,158,.75),rgba(10,77,158,.75)),
            url('${heroImages[current]}') center/cover no-repeat`;

    }, 4000);

}

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navLinks.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

            } else {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        }

    });

}

// ==========================
// Close Menu After Click
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==========================
// Console Message
// ==========================

console.log("✅ All in One Moltari Website Loaded Successfully");

// ==========================
// PRELOADER
// ==========================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 800); // 0.8 second loading animation

    }

});

// ==========================
// Gallery Lightbox
// ==========================

const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

if (galleryImages.length && lightbox && lightboxImg && closeLightbox) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            lightbox.classList.remove("active");

        }

    });

}

// ==========================
// DARK MODE
// ==========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    const icon = themeToggle.querySelector("i");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }

        } else {

            localStorage.setItem("theme", "light");

            if (icon) {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }

        }

    });

}

// ==========================
// SWIPER REVIEW SLIDER
// ==========================

const reviewSwiper = document.querySelector(".reviewSwiper");

if (reviewSwiper && typeof Swiper !== "undefined") {

    new Swiper(".reviewSwiper", {

        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        speed: 800,

        spaceBetween: 30,

        grabCursor: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 2,
            },

            1200: {
                slidesPerView: 2,
            }

        }

    });

}

// ==========================
// AOS Animation
// ==========================

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,
        once: true,
        easing: "ease-in-out"

    });

}

// ==========================
// Sticky Header + Active Menu
// ==========================

const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    // Sticky Header
    if(window.scrollY > 80){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

    // Active Menu
    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// // ==========================
// // Premium Hero Slider
// // ==========================

// const hero = document.querySelector(".hero");

// if (hero) {

//     const images = [
//         "images/hero1.png",
//         "images/hero2.png",
//         "images/hero3.png"
//     ];

//     let index = 0;

//     function changeHero() {

//         hero.style.background =
//             `linear-gradient(rgba(10,77,158,.70),rgba(10,77,158,.70)),
//             url('${images[index]}') center/cover no-repeat`;

//         index++;

//         if(index >= images.length){
//             index = 0;
//         }

//     }

//     changeHero();

//     setInterval(changeHero, 5000);

//}

// ==========================
// SCROLL PROGRESS BAR
// ==========================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ==========================
// SERVICE SEARCH FILTER
// ==========================

const serviceSearch = document.getElementById("serviceSearch");
const serviceCards = document.querySelectorAll(".service-card");

if (serviceSearch) {

    serviceSearch.addEventListener("keyup", () => {

        const value = serviceSearch.value.toLowerCase();

        serviceCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// // ==========================
// // APPOINTMENT FORM
// // ==========================

// const appointmentForm = document.querySelector(".appointment-form");

// if (appointmentForm) {

//     appointmentForm.addEventListener("submit", function (e) {

//         e.preventDefault();

//         alert("✅ Your Appointment Request has been submitted successfully!\n\nWe will contact you shortly.");

//         appointmentForm.reset();

//     });

// }

// ==========================
// WHATSAPP APPOINTMENT BOOKING
// ==========================

const appointmentForm = document.querySelector(".appointment-form");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = appointmentForm.querySelector('input[type="text"]').value;
        const mobile = appointmentForm.querySelector('input[type="tel"]').value;
        const date = appointmentForm.querySelector('input[type="date"]').value;
        const service = appointmentForm.querySelector("select").value;
        const message = appointmentForm.querySelector("textarea").value;

        const whatsappMessage =
`📋 *New Appointment Request*

👤 Name: ${name}
📱 Mobile: ${mobile}
📅 Date: ${date}
🛠 Service: ${service}

📝 Details:
${message}`;

        const whatsappURL =
`https://wa.me/918979834055?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        appointmentForm.reset();

    });

}