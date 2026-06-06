// Loading Screen

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }, 1200);
});

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("theme", "dark");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("theme", "light");
        }

    });

}

// Load Saved Theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

}

// Typing Effect

const typingElement = document.getElementById("typing");

const phrases = [
    "Master Physics.",
    "Clear Doubts.",
    "Score Higher.",
    "Crack JEE & NEET.",
    "Learn With Confidence."
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {

    if (!typingElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {

        typingElement.textContent =
            currentPhrase.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentPhrase.length) {

            deleting = true;

            setTimeout(typeLoop, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentPhrase.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            phraseIndex++;

            if (phraseIndex >= phrases.length) {
                phraseIndex = 0;
            }
        }
    }

    setTimeout(typeLoop, deleting ? 50 : 100);
}

typeLoop();

// Reveal Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

// Counter Animation

document.querySelectorAll(".count").forEach(counter => {

    const updateCounter = () => {

        const target =
            Number(counter.getAttribute("data-target"));

        const current =
            Number(counter.innerText);

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();
});

// FAQ Accordion

document.querySelectorAll(".faq-question")
.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        const isOpen =
            answer.style.maxHeight;

        document.querySelectorAll(".faq-answer")
        .forEach(item => {
            item.style.maxHeight = null;
        });

        if (!isOpen) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";
        }

    });

});

// Back To Top Button

const topButton =
    document.querySelector(".top");

window.addEventListener("scroll", () => {

    if (!topButton) return;

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "auto";

    } else {

        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";
    }

});

// Smooth Navigation

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Floating Physics Equations

const equations = [
    "E = mc²",
    "F = ma",
    "V = IR",
    "PV = nRT",
    "W = Fd",
    "P = VI",
    "a² + b² = c²"
];

function createEquation() {

    const eq = document.createElement("div");

    eq.className = "floating-equation";

    eq.innerText =
        equations[
            Math.floor(
                Math.random() *
                equations.length
            )
        ];

    eq.style.left =
        Math.random() * 100 + "vw";

    eq.style.fontSize =
        16 + Math.random() * 20 + "px";

    eq.style.opacity =
        0.05 + Math.random() * 0.08;

    document.body.appendChild(eq);

    setTimeout(() => {
        eq.remove();
    }, 15000);
}

setInterval(createEquation, 2000);

// Navbar Shadow On Scroll

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.15)";

    } else {

        navbar.style.boxShadow = "none";
    }

});

// Current Year

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();
}
