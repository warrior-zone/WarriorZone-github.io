/* =========================
SIDEBAR TOGGLE
========================= */

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// Toggle sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (
        !sidebar.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        sidebar.classList.remove('active');
    }
});

// Close sidebar when clicking a link (important for mobile)
const links = document.querySelectorAll('.sidebar a');

links.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});



/* =========================
FAQ ACCORDION
========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});

/* =========================
SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// run once on load
revealOnScroll();
