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

            mobileMenu.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                document.body.classList.remove("menu-open");

            });

        });

    }


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".section-label, .about-content, .service, .project, .process-card, .cta"
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
       PROJECT IMAGE CURSOR EFFECT
    ===================================== */

    const projects =
        document.querySelectorAll(".project");


    projects.forEach(project => {

        const viewButton =
            project.querySelector(".project-view");


        if (!viewButton) return;


        project.addEventListener("mousemove", event => {

            if (window.innerWidth <= 900) return;


            const rect =
                project.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            viewButton.style.left =
                `${x - 55}px`;


            viewButton.style.top =
                `${y - 55}px`;


            viewButton.style.right = "auto";

            viewButton.style.bottom = "auto";

        });

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
            "a, button, .service, .project"
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
       PARALLAX HERO
    ===================================== */

    const heroImage =
        document.querySelector(".hero-image img");


    window.addEventListener("scroll", () => {

        if (!heroImage) return;


        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroImage.style.transform =
                `scale(1.02) translateY(${scroll * 0.08}px)`;

        }

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