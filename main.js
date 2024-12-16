const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu')
    })
}

/*  Remove Menu Mobile  */

const navLink = document.querySelectorAll('.nav_link');

function linkAction () {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click' , linkAction));


// GSAP ANIMATION

TweenMax.from('.home_title', 1 , {delay: 0.2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home_description', 1 , {delay: 0.3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home_button', 1 , {delay: 0.4, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home_liquid', 1 , {delay: 0.7, opacity: 0, y: 200, ease: Expo.easeInOut})
TweenMax.from('.home_juice_animate', 1 , {delay: 1.2, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_apple1', 1 , {delay: 1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_apple2', 1 , {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_leaf:nth-child(1)', 2 , {delay: 1.3, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_leaf:nth-child(2)', 2 , {delay: 1.4, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_leaf:nth-child(3)', 2 , {delay: 1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_leaf:nth-child(4)', 2 , {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_leaf:nth-child(5)', 2 , {delay: 1.7, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_leaf:nth-child(6)', 2 , {delay: 1.8, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home_shape_small', 2 , {delay: 1.3, opacity: 0, x: -800, ease: Expo.easeInOut})
TweenMax.from('.home_shape_big', 2 , {delay: 1.3, opacity: 0, x: 800, ease: Expo.easeInOut})