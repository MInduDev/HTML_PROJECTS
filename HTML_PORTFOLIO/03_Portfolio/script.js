/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 900);

});


/* =========================================================
   NAVIGATION
========================================================= */

const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

  // Navbar background on scroll
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }


  // Active navigation link
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {

      navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }

      });

    }

  });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

navLinks.forEach((link) => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {

      window.scrollTo({
        top: targetSection.offsetTop - 75,
        behavior: "smooth"
      });

    }


    // Close mobile menu
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarCollapse.classList.contains("show")) {

      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();

    }

  });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }

});

backTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================================================
   CONTACT FORM
========================================================= */

function sendMsg(btn) {

  btn.innerHTML =
    '<i class="fas fa-check me-2"></i>Message Sent!';

  btn.style.background = "#16a34a";
  btn.style.borderColor = "#16a34a";


  setTimeout(() => {

    btn.innerHTML =
      '<i class="fas fa-paper-plane me-2"></i>Send Message';

    btn.style.background = "";
    btn.style.borderColor = "";

  }, 3000);

}


/* =========================================================
   HERO TYPING EFFECT
========================================================= */

const roles = [
  "Full Stack Web Developer",
  "React.js Developer",
  "MERN Stack Developer",
  "Frontend Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero-role strong");

function typeRole() {

  const currentRole = roles[roleIndex];

  if (deleting) {
    characterIndex--;
  } else {
    characterIndex++;
  }

  roleElement.textContent =
    currentRole.slice(0, characterIndex);


  // Start deleting after completing the role
  if (
    !deleting &&
    characterIndex === currentRole.length
  ) {

    deleting = true;
    setTimeout(typeRole, 1400);
    return;

  }


  // Move to next role
  if (deleting && characterIndex === 0) {

    deleting = false;
    roleIndex++;

    if (roleIndex === roles.length) {
      roleIndex = 0;
    }

  }

  setTimeout(typeRole, deleting ? 45 : 90);

}

setTimeout(typeRole, 1200);
