document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {

        if(window.scrollY > 50){
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        updateActiveNav();
        revealElements();
    });

    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Load saved theme
    if(localStorage.getItem("theme") === "dark"){
        body.classList.add("dark-mode");

        if(themeToggle){
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

    // Toggle Theme
    if(themeToggle){

        themeToggle.addEventListener("click", () => {

            body.classList.toggle("dark-mode");

            if(body.classList.contains("dark-mode")){

                localStorage.setItem("theme", "dark");

                themeToggle.innerHTML =
                    '<i class="fa-solid fa-sun"></i>';

            } else {

                localStorage.setItem("theme", "light");

                themeToggle.innerHTML =
                    '<i class="fa-solid fa-moon"></i>';
            }

        });

    }
    function revealElements(){

        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach((element) => {

            const windowHeight = window.innerHeight;
            const elementTop =
                element.getBoundingClientRect().top;

            const revealPoint = 100;

            if(elementTop < windowHeight - revealPoint){
                element.classList.add('active');
            }

        });
    }

    revealElements();

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveNav(){

        let current = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop;

            if(pageYOffset >= sectionTop - 200){
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active-link");

            if(link.getAttribute("href") === `#${current}`){
                link.classList.add("active-link");
            }

        });
    }

    updateActiveNav();

    body.style.opacity = "0";

    setTimeout(() => {
        body.style.transition = "opacity 0.6s ease";
        body.style.opacity = "1";
    }, 100);

});