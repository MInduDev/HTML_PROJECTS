/* ========================================
   M INDU PORTFOLIO - MAIN JAVASCRIPT
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Navbar scroll effect
    // =========================

    const navbar = document.getElementById("mainNav");

    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }


    // =========================
    // Mobile navbar
    // =========================

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {
                const collapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (collapse) {
                    collapse.hide();
                }
            }
        });
    });


    // =========================
    // Typing effect
    // =========================

    const typedText = document.getElementById("typed");

    if (typedText) {

        const roles = [
            "Front-End Developer",
            "Web Developer",
            "React.js Developer",
            "Full-Stack Developer",
            "MCA Graduate"
        ];

        let roleIndex = 0;
        let letterIndex = 0;
        let isDeleting = false;

        function typeText() {

            const currentRole = roles[roleIndex];

            if (!isDeleting) {

                typedText.textContent =
                    currentRole.substring(0, letterIndex + 1);

                letterIndex++;

                if (letterIndex === currentRole.length) {
                    isDeleting = true;

                    setTimeout(typeText, 1800);
                    return;
                }

                setTimeout(typeText, 90);

            } else {

                typedText.textContent =
                    currentRole.substring(0, letterIndex - 1);

                letterIndex--;

                if (letterIndex === 0) {
                    isDeleting = false;

                    roleIndex++;

                    if (roleIndex === roles.length) {
                        roleIndex = 0;
                    }

                    setTimeout(typeText, 400);
                    return;
                }

                setTimeout(typeText, 50);
            }
        }

        typeText();
    }


    // =========================
    // Scroll reveal animation
    // =========================

    const revealElements = document.querySelectorAll(".reveal");

    if (revealElements.length > 0) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                        observer.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    }


    // =========================
    // Skill bar animation
    // =========================

    const skillBars = document.querySelectorAll(".skill-progress");

    if (skillBars.length > 0) {

        const skillObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const bar = entry.target;
                        const width = bar.getAttribute("data-width");

                        if (width) {
                            bar.style.width = width + "%";
                        }

                        observer.unobserve(bar);
                    }
                });

            },
            {
                threshold: 0.3
            }
        );

        skillBars.forEach(function (bar) {
            skillObserver.observe(bar);
        });
    }


    // =========================
    // Certificate modal
    // =========================

    const certificateModal = document.getElementById("certModal");
    const modalImage = document.getElementById("modalImg");
    const modalPlaceholder = document.getElementById("modalPlaceholder");
    const modalTitle = document.getElementById("modalTitle");
    const certificateCards = document.querySelectorAll("[data-certificate]");


    // Open certificate
    function openCertificate(card) {

        if (!certificateModal) {
            return;
        }

        const image = card.querySelector("img");

        let title = card.getAttribute("data-title");

        if (!title && image) {
            title = image.getAttribute("alt");
        }

        if (!title) {
            title = "Certificate";
        }


        if (image && image.src && modalImage) {

            modalImage.src = image.src;
            modalImage.alt = title;
            modalImage.style.display = "block";

            if (modalPlaceholder) {
                modalPlaceholder.style.display = "none";
            }

        } else {

            if (modalImage) {
                modalImage.style.display = "none";
            }

            if (modalPlaceholder) {
                modalPlaceholder.style.display = "flex";
            }

            if (modalTitle) {
                modalTitle.textContent = title;
            }
        }

        certificateModal.classList.add("show");
        document.body.classList.add("modal-open");
    }


    // Close certificate
    function closeCertificate() {

        if (!certificateModal) {
            return;
        }

        certificateModal.classList.remove("show");
        document.body.classList.remove("modal-open");

        if (modalImage) {
            modalImage.src = "";
        }
    }


    // Certificate click
    certificateCards.forEach(function (card) {

        card.addEventListener("click", function () {
            openCertificate(card);
        });

    });


    // Close button
    const closeModalButton =
        document.querySelector(".cert-modal-close");

    if (closeModalButton) {
        closeModalButton.addEventListener(
            "click",
            closeCertificate
        );
    }


    // Close modal by clicking outside
    if (certificateModal) {

        certificateModal.addEventListener(
            "click",
            function (event) {

                if (event.target === certificateModal) {
                    closeCertificate();
                }

            }
        );
    }


    // =========================
    // Close modal with Escape
    // =========================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeCertificate();
        }

    });


    // =========================
    // Back to top button
    // =========================

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // =========================
    // Hero particles
    // =========================

    const particleContainer =
        document.getElementById("particles");

    if (particleContainer) {

        const particleCount = 35;

        for (let i = 0; i < particleCount; i++) {

            const particle =
                document.createElement("span");

            particle.className = "particle";

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.top =
                Math.random() * 100 + "%";

            particle.style.animationDelay =
                Math.random() * 5 + "s";

            particle.style.animationDuration =
                4 + Math.random() * 5 + "s";

            particleContainer.appendChild(particle);
        }
    }


    // =========================
    // Contact form
    // =========================

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();

                const email =
                    document.getElementById("email").value.trim();

                const subject =
                    document.getElementById("subject").value.trim();

                const message =
                    document.getElementById("message").value.trim();


                // Check required fields
                if (!name || !email || !message) {
                    alert("Please fill in all required fields.");
                    return;
                }


                // Check email
                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }


                // Create email
                const mailSubject =
                    encodeURIComponent(
                        subject || "Portfolio Contact - " + name
                    );

                const mailBody =
                    encodeURIComponent(
                        "Name: " + name +
                        "\nEmail: " + email +
                        "\n\nMessage:\n" + message
                    );


                // Open email application
                window.location.href =
                    "mailto:maddhi.indu@gmail.com" +
                    "?subject=" + mailSubject +
                    "&body=" + mailBody;
            }
        );
    }


    // =========================
    // Active navigation
    // =========================

    const sections =
        document.querySelectorAll("section[id]");

    if (sections.length > 0 && navLinks.length > 0) {

        const sectionObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            const currentId =
                                entry.target.id;

                            navLinks.forEach(function (link) {

                                if (
                                    link.getAttribute("href") ===
                                    "#" + currentId
                                ) {
                                    link.classList.add("active");
                                } else {
                                    link.classList.remove("active");
                                }

                            });
                        }
                    });

                },
                {
                    rootMargin: "-30% 0px -60% 0px"
                }
            );


        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }


    // =========================
    // Image error handling
    // =========================

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {
            image.classList.add("image-error");
        });

    });


    // =========================
    // Current year
    // =========================

    const yearElements =
        document.querySelectorAll("[data-current-year]");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    // =========================
    // Page loaded
    // =========================

    document.body.classList.add("loaded");

});
