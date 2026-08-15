/* =========================================
   BD BLUNIG-DIGITAL
   INTERACTIONS
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = mobileMenu.classList.toggle("active");

            document.body.classList.toggle("menu-open");

            menuButton.setAttribute("aria-expanded", String(isOpen));

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                document.body.classList.remove("menu-open");

                menuButton.setAttribute("aria-expanded", "false");

            });

        });

    }


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".section-label, .about-content, .service-card, .reason-card, " +
        ".project-featured, .project-card, .process-card, .tech-card, " +
        ".faq-item, .cta-inner"
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================
       CUSTOM CURSOR
    ===================================== */

    const cursor = document.createElement("div");

    cursor.classList.add("custom-cursor");

    document.body.appendChild(cursor);


    const cursorStyle = document.createElement("style");

    cursorStyle.innerHTML = `

        .custom-cursor {

            position: fixed;

            width: 12px;
            height: 12px;

            border-radius: 50%;

            background: #d8ff00;

            pointer-events: none;

            z-index: 10000;

            transform: translate(-50%, -50%);

            opacity: 0;

            transition:
                width .25s ease,
                height .25s ease,
                opacity .2s ease;

            mix-blend-mode: difference;

        }

        @media (max-width: 900px) {

            .custom-cursor {

                display: none;

            }

        }

    `;

    document.head.appendChild(cursorStyle);


    document.addEventListener("mousemove", event => {

        cursor.style.left = `${event.clientX}px`;

        cursor.style.top = `${event.clientY}px`;

        cursor.style.opacity = "1";

    });


    document.addEventListener("mouseleave", () => {

        cursor.style.opacity = "0";

    });


    const interactiveElements =
        document.querySelectorAll(
            "a, button, .service-card, .project-card, .reason-card, .tech-card"
        );


    interactiveElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            cursor.style.width = "35px";

            cursor.style.height = "35px";

        });


        element.addEventListener("mouseleave", () => {

            cursor.style.width = "12px";

            cursor.style.height = "12px";

        });

    });


    /* =====================================
       HERO FADE-IN
    ===================================== */

    const loader = document.querySelector(".loader");
    const hero = document.querySelector(".hero");

    if (hero) {

        if (loader) {

            loader.addEventListener(
                "animationend",
                () => hero.classList.add("hero-in"),
                { once: true }
            );

        } else {

            hero.classList.add("hero-in");

        }

    }


    /* =====================================
       HERO CTAs
    ===================================== */

    const heroPortfolioBtn =
        document.getElementById("heroPortfolioBtn");

    const heroWhatsappBtn =
        document.getElementById("heroWhatsappBtn");

    if (heroPortfolioBtn) {

        heroPortfolioBtn.addEventListener("click", () => {

            document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" });

        });

    }

    if (heroWhatsappBtn) {

        heroWhatsappBtn.addEventListener("click", () => {

            window.open(
                "https://wa.me/5490000000000",
                "_blank"
            );

        });

    }


    /* =====================================
       SCROLL TO CONTACT (about + services CTAs)
    ===================================== */

    const scrollToContactButtons =
        document.querySelectorAll(".js-scroll-contact, #aboutContactBtn");

    scrollToContactButtons.forEach(button => {

        button.addEventListener("click", () => {

            document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" });

        });

    });


    /* =====================================
       FAQ ACCORDION
    ===================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            const isOpen =
                item.classList.contains("open");

            faqItems.forEach(other => {

                other.classList.remove("open");

                other
                    .querySelector(".faq-question")
                    ?.setAttribute("aria-expanded", "false");

            });

            if (!isOpen) {

                item.classList.add("open");

                question.setAttribute("aria-expanded", "true");

            }

        });

    });


    /* =====================================
       ACTIVE NAV
    ===================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav a");


    const navObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navLinks.forEach(link => {

                            link.classList.remove("active");

                        });


                        const active =
                            document.querySelector(
                                `.nav a[href="#${entry.target.id}"]`
                            );


                        if (active) {

                            active.classList.add("active");

                        }

                    }

                });

            },

            {
                threshold: 0.4
            }

        );


    sections.forEach(section => {

        navObserver.observe(section);

    });

});