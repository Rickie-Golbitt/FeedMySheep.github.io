// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

        // This script adds a class to the body after scrolling 100px
    // and we used these body.scroll styles to create some on scroll 
    // animations with the navbar
    
    document.addEventListener('scroll', (e) => { 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
    document.querySelector('body').classList.add('scroll')
        } else {
        document.querySelector('body').classList.remove('scroll')
        }
    });


    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }


const slides = document.querySelectorAll(".slide-hero");
const icons = document.querySelectorAll(".slider-icon");

let currentIndex = 0;
let slideInterval;


function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    icons.forEach(icon => icon.classList.remove("active"));

    slides[index].classList.add("active");
    icons[index].classList.add("active");

    currentIndex = index;
}

function startSlider() {
    slideInterval = setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }, 5000); 
}

function stopSlider() {
    clearInterval(slideInterval);
}

icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        stopSlider();        // Stop auto slider on manual interaction
        showSlide(index);    // Show clicked slide
        startSlider();       // Restart auto slider
    });
});


startSlider();

// ================================
// SplideJS Slider Initialization
// ================================
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.splide')) {
    new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      pagination: false,
      gap:'1rem',
      autoScroll: {
        speed: 0.3,
      },
      extensions: {
        AutoScroll: window.splide.Extensions.AutoScroll,
      },
    }).mount(window.splide.Extensions);
  }

  
});


