const flowElements = document.querySelectorAll('.grid-even-columns .flow');
const bioText = document.querySelector('.bioText');
const bioItems = bioText.querySelectorAll('div');
const box = document.querySelector('#box');
const secondPage = document.querySelector('#secondPage');
const githubWindow = document.querySelector('.item-6');
const linkedInLogo = document.querySelector('.linkedinImg');
const githubLogo = document.querySelector('.githubImg');


githubLogo.addEventListener('click', function(){
    const url = 'https://github.com/asacripanti'

    window.location.href = url;
})



function fadeInItemsOnScroll() {
    const middleOfViewport = window.innerHeight / 2 + window.scrollY;

    bioItems.forEach(item => {
        const itemMiddle = item.offsetTop + item.offsetHeight / 2;
        if (itemMiddle < middleOfViewport) {
            item.style.opacity = 1;
            item.style.transition = 'opacity 1s ease';
        } else {
            item.style.opacity = 0;
        }
    });
}

window.addEventListener('scroll', fadeInItemsOnScroll);
window.addEventListener('resize', fadeInItemsOnScroll);
fadeInItemsOnScroll(); // Call the function initially to handle elements in the initial view

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Adjust these values to match your desired scroll positions
    if (scrollPosition > 600) {
        bioText.classList.add('scroll-pos-1');
    } else if (scrollPosition < 600) {
        bioText.classList.remove('scroll-pos-1');
    }
});

box.addEventListener('mouseover', () => {
    secondPage.classList.add('hovered');
});

box.addEventListener('mouseout', () => {
    secondPage.classList.remove('hovered');
});


// flowElements.forEach(flow => {
//     flow.addEventListener('mouseenter', () => {
//         flow.classList.add('transition-active');
//     });

//     flow.addEventListener('mouseleave', () => {
//         setTimeout(() => {
//             flow.classList.remove('transition-active');
//         }, 1000); // Adjust the delay as needed
//     });
// });



// function logoSlide(){
//     const middleOfViewport = window.innerHeight / 2 + window.scrollY;
//     const itemMiddle = item.offsetTop + item.offsetHeight / 2;

//     if(itemMiddle < middleOfViewport){
//         linkedInLogo.style.transform = 'translate(120px';
//     }
//     else{
//         linkedInLogo.style.transform = 'none';
//     }
// }

// githubWindow.addEventListener('scroll', logoSlide);

// script.js
const slideInImages = document.querySelectorAll(".slide-in-image");

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    slideInImages.forEach((image) => {
        // Get the bottom of the image
        const imageBottom = image.getBoundingClientRect().bottom;
        // Check if the image is in the viewport
        const isImageVisible = imageBottom <= window.innerHeight;
        
        if (isImageVisible) {
            image.classList.add("active");
        } else {
            image.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlide));

// Initial check when the page loads
window.addEventListener("DOMContentLoaded", checkSlide);
