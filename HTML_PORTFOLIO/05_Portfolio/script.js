/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");

document.addEventListener("mousemove", function (e) {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(function () {

        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";

    }, 80);

});


/* Make cursor bigger on clickable elements */

const clickableElements = document.querySelectorAll(
    "a, button, .skill-pill, .project-card, .contact-card, .about-card"
);

clickableElements.forEach(function (element) {

    element.addEventListener("mouseenter", function () {

        cursor.style.width = "20px";
        cursor.style.height = "20px";

        ring.style.width = "50px";
        ring.style.height = "50px";

    });


    element.addEventListener("mouseleave", function () {

        cursor.style.width = "12px";
        cursor.style.height = "12px";

        ring.style.width = "36px";
        ring.style.height = "36px";

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.1
    }
);


/* Find all elements with reveal class */

const revealElements = document.querySelectorAll(".reveal");


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar-custom");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   CLOSE MOBILE NAVBAR
========================= */

const navLinks = document.querySelectorAll(".nav-link");

const navbarMenu = document.getElementById("navbarMenu");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(navbarMenu);

            if (bootstrapCollapse) {

                bootstrapCollapse.hide();

            }

        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const currentYear = new Date().getFullYear();

console.log("Portfolio loaded in " + currentYear);
