/* =========================================================
   HERO SLIDER
========================================================= */

const heroSlides = [
  "Assets/BG-img.jpg",
  "Assets/Midnight-Lamborghini.jpg",
  "Assets/BMW-M4.jpg"
];

let currentHeroSlide = 0;
const heroImage = document.getElementById("heroImage");
const heroSlideNumber = document.getElementById("heroSlideNumber");

function showHeroSlide(index) {
  currentHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroImage.style.backgroundImage = `url("${heroSlides[currentHeroSlide]}")`;
  heroSlideNumber.textContent = String(currentHeroSlide + 1).padStart(2, "0");
}

document.getElementById("heroPrevious").addEventListener("click", () => {
  showHeroSlide(currentHeroSlide - 1);
});

document.getElementById("heroNext").addEventListener("click", () => {
  showHeroSlide(currentHeroSlide + 1);
});

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = document.getElementById("mainNavigation");
const navigationLinks = document.querySelectorAll(".navbar-nav .nav-link");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      bootstrap.Collapse.getOrCreateInstance(navigation).hide();
    }
  });
});

document.getElementById("navSearchButton").addEventListener("click", () => {
  document.getElementById("search").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("navWishlistButton").addEventListener("click", () => {
  const savedCars = document.querySelectorAll(".wishlist-button.saved").length;

  if (savedCars === 0) {
    alert("Your wishlist is empty. Select the heart on a car to save it.");
    return;
  }

  alert(`You have saved ${savedCars} car${savedCars === 1 ? "" : "s"} to your wishlist.`);
});

/* =========================================================
   CAR FILTERING
========================================================= */

const carCards = document.querySelectorAll(".car-card");
const carColumns = document.querySelectorAll(".car-column");
const brandFilter = document.getElementById("brandFilter");
const typeFilter = document.getElementById("typeFilter");
const priceFilter = document.getElementById("priceFilter");
const emptyMessage = document.getElementById("emptyMessage");

function filterCars(brand, type, price) {
  let visibleCars = 0;

  carCards.forEach((card, index) => {
    const cardBrand = card.dataset.brand;
    const cardType = card.dataset.type;
    const cardPrice = Number(card.dataset.price);

    let matchesPrice = true;

    if (price === "under1") matchesPrice = cardPrice < 1;
    if (price === "1to2") matchesPrice = cardPrice >= 1 && cardPrice <= 2;
    if (price === "2to3") matchesPrice = cardPrice > 2 && cardPrice <= 3;
    if (price === "above3") matchesPrice = cardPrice > 3;

    const matchesBrand = brand === "all" || cardBrand === brand;
    const matchesType = type === "all" || cardType === type;
    const isVisible = matchesBrand && matchesType && matchesPrice;

    carColumns[index].classList.toggle("d-none", !isVisible);

    if (isVisible) visibleCars++;
  });

  emptyMessage.hidden = visibleCars !== 0;
}

document.getElementById("searchCarsButton").addEventListener("click", () => {
  filterCars(brandFilter.value, typeFilter.value, priceFilter.value);
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("viewAllCars").addEventListener("click", () => {
  brandFilter.value = "all";
  typeFilter.value = "all";
  priceFilter.value = "all";
  filterCars("all", "all", "all");
});

document.querySelectorAll(".brand-item").forEach((brandButton) => {
  brandButton.addEventListener("click", () => {
    const selectedBrand = brandButton.dataset.brand;

    document.querySelectorAll(".brand-item").forEach((item) => {
      item.classList.remove("selected");
    });

    brandButton.classList.add("selected");
    brandFilter.value = selectedBrand;
    typeFilter.value = "all";
    priceFilter.value = "all";

    filterCars(selectedBrand, "all", "all");
    document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
  });
});

/* =========================================================
   WISHLIST AND CAR DETAILS
========================================================= */

document.querySelectorAll(".wishlist-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("saved");
    button.setAttribute(
      "aria-pressed",
      button.classList.contains("saved") ? "true" : "false"
    );
    button.innerHTML = button.classList.contains("saved")
      ? '<i class="bi bi-heart-fill"></i>'
      : '<i class="bi bi-heart"></i>';
  });
});

const carModal = new bootstrap.Modal(document.getElementById("carModal"));
const carModalTitle = document.getElementById("carModalTitle");
const carModalBody = document.getElementById("carModalBody");

document.querySelectorAll(".car-detail-button").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".car-card");
    const brand = card.dataset.brand;
    const model = card.querySelector("h3").textContent;
    const image = card.querySelector(".car-image").src;
    const price = card.querySelector(".car-price").textContent;
    const specifications = card.querySelector(".car-specs").innerText;

    carModalTitle.textContent = `${brand} ${model}`;
    carModalBody.innerHTML = `
      <img class="car-modal-image" src="${image}" alt="${brand} ${model}">
      <h3 class="h5 text-white">${brand} ${model}</h3>
      <p class="mb-2">${price}</p>
      <p class="mb-0">${specifications.replaceAll("\n", " · ")}</p>
      <p class="mt-3 mb-0">These details are sample listing information. Contact Aurum Motors for current availability.</p>
    `;

    carModal.show();
  });
});

/* =========================================================
   VIDEO MODAL
========================================================= */

document.getElementById("watchVideoButton").addEventListener("click", () => {
  bootstrap.Modal.getOrCreateInstance(document.getElementById("videoModal")).show();
});

/* =========================================================
   TESTIMONIAL SLIDER
========================================================= */

const testimonials = [
  {
    quote: "“Aurum Motors made my dream car experience absolutely unforgettable. The service is beyond exceptional.”",
    name: "Priya Sharma",
    role: "Sample Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "“The team made the entire selection process feel personal, thoughtful and effortless from beginning to end.”",
    name: "Arjun Mehta",
    role: "Sample Customer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  },
  {
    quote: "“An impressive collection, a beautiful showroom and a level of attention that made the visit memorable.”",
    name: "Ananya Rao",
    role: "Sample Customer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
  }
];

let currentTestimonial = 0;
const testimonialContent = document.getElementById("testimonialContent");
const testimonialDots = document.querySelectorAll("#testimonialDots button");

function showTestimonial(index) {
  currentTestimonial = (index + testimonials.length) % testimonials.length;
  const item = testimonials[currentTestimonial];

  testimonialContent.innerHTML = `
    <p class="testimonial-quote">${item.quote}</p>
    <div class="customer-info">
      <img src="${item.image}" alt="Sample customer portrait">
      <div><strong>${item.name}</strong><span>${item.role}</span></div>
    </div>
  `;

  testimonialDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentTestimonial);
  });
}

document.getElementById("testimonialPrevious").addEventListener("click", () => {
  showTestimonial(currentTestimonial - 1);
});

document.getElementById("testimonialNext").addEventListener("click", () => {
  showTestimonial(currentTestimonial + 1);
});

testimonialDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showTestimonial(Number(dot.dataset.index));
  });
});

/* =========================================================
   NEWSLETTER FORM
========================================================= */

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.getElementById("newsletterEmail");
  const message = document.getElementById("newsletterMessage");

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  message.textContent = "Thank you! Your email has been added to this demo form.";
  emailInput.value = "";
});

/* =========================================================
   SCROLL EFFECTS
========================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 350);

  const sections = document.querySelectorAll("main section[id]");
  let currentSection = "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      currentSection = section.id;
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(
  ".collection-section, .brands-section, .about-section, .experience-section"
);

revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
