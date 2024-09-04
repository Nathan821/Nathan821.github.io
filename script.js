//main js file


document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
});


let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;

    
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add('visible');
        }
    });
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.burger').classList.remove('active');
    });
});


const typingText = document.querySelector('.typing');
const words = ["Front End Developer", "Designer", "Freelancer", "Video Editor"];
let wordIndex = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        currentText = words[wordIndex].substring(0, letterIndex + 1);
        letterIndex++;
    }

    typingText.textContent = currentText;

    if (!isDeleting && currentText === words[wordIndex]) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

type();


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("project-card");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
        console.error("No elements found with the class 'project-card'.");
        return;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }

    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }

    setTimeout(showSlides, 2000);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

window.onload = function() {
    document.getElementById("form").reset();
};

let ken = document.getElementById("ken");//current year
ken.innerHTML = new Date().getFullYear();


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Form validation
    let nam = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

    if (nam === "" || nam.length < 2) {
        alert("Please enter a valid name.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail, Yahoo, or Outlook email address.");
        return false;
    }

    if (message === "" || message.length < 2) {
        alert("Please enter your message.");
        return false;
    }

    // Redirect to another HTML file after validation is successful
    window.location.href = "contactonsb.html";
});
