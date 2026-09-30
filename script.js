/* =========================================
   SELECT ELEMENTS
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.querySelector(".nav-menu");

const themeBtn =
    document.getElementById("themeBtn");

const typingText =
    document.getElementById("typingText");

const scrollTopBtn =
    document.getElementById("scrollTopBtn");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


/* =========================================
   MOBILE MENU
========================================= */

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon =
        menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================================
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
========================================= */

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon =
            menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    const icon =
        themeBtn.querySelector("i");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    const icon =
        themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}


/* =========================================
   TYPING ANIMATION
========================================= */

const roles = [

    "Full Stack Developer",

    "Power BI Developer",

    "Data Analyst"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex ===
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 50 : 100;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


/* =========================================
   SKILL BAR ANIMATION
========================================= */

const skillProgress =
    document.querySelectorAll(
        ".skill-progress"
    );


function animateSkills() {

    skillProgress.forEach(skill => {

        const progress =
            skill.getAttribute(
                "data-progress"
            );

        skill.style.width =
            progress + "%";

    });

}


let skillsAnimated = false;


window.addEventListener("scroll", () => {

    const skillsSection =
        document.getElementById("skills");


    const sectionPosition =
        skillsSection.getBoundingClientRect().top;


    const screenPosition =
        window.innerHeight * 0.8;


    if (
        sectionPosition <
        screenPosition &&
        !skillsAnimated
    ) {

        animateSkills();

        skillsAnimated = true;

    }

});


/* =========================================
   SCROLL TO TOP BUTTON
========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   CONTACT FORM
========================================= */

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        formMessage.textContent =
            `Thank you, ${name}! Your message has been received.`;


        formMessage.style.color =
            "#22c55e";


        contactForm.reset();

    }
);


/* =========================================
   PROJECT MODAL
========================================= */

const projectModal =
    document.getElementById(
        "projectModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalTechnologies =
    document.getElementById(
        "modalTechnologies"
    );


const projectDetails =
    document.querySelectorAll(
        ".project-details-btn"
    );


const projects = {

    1: {

        title:
            "Crop Disease Detection",

        description:
            "An AI-based crop disease detection web application that analyzes leaf images and provides disease predictions, preventive measures and recommendations.",

        technologies: [
            "Python",
            "TensorFlow",
            "Keras",
            "VGG16",
            "ResNet50",
            "OpenCV",
            "Flask"
        ]

    },


    2: {

        title:
            "Car Parking System",

        description:
            "A parking management system designed to manage vehicle registration, parking slots, vehicle numbers, charges and vehicle search.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ]

    },


};


projectDetails.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const projectId =
                button.getAttribute(
                    "data-project"
                );


            const project =
                projects[projectId];


            modalTitle.textContent =
                project.title;


            modalDescription.textContent =
                project.description;


            modalTechnologies.innerHTML =
                "";


            project.technologies.forEach(
                technology => {

                    const span =
                        document.createElement(
                            "span"
                        );

                    span.textContent =
                        technology;

                    modalTechnologies.appendChild(
                        span
                    );

                }
            );


            projectModal.classList.add(
                "active"
            );

        }
    );

});


/* =========================================
   CLOSE MODAL
========================================= */

modalClose.addEventListener(
    "click",
    () => {

        projectModal.classList.remove(
            "active"
        );

    }
);


/* =========================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================= */

projectModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            projectModal
        ) {

            projectModal.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections =
    document.querySelectorAll(
        "section"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >=
                sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);