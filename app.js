const flowElements = document.querySelectorAll('.grid-even-columns .flow');
const bioText = document.querySelector('.bioText');
const bioItems = bioText.querySelectorAll('div');
const box = document.querySelector('#box');
const secondPage = document.querySelector('#secondPage');
const thirdPage = document.querySelector('#thirdPage');
const githubWindow = document.querySelector('.item-6');
const linkedInLogo = document.querySelector('.linkedinImg');
const githubLogo = document.querySelector('.githubImg');
const gifContainer = document.querySelector('.gifContainer');
const gifOne = document.querySelector('.gifOne');
const projectDesc = document.querySelector('.projectDescription');


githubLogo.addEventListener('click', function(){
    const url = 'https://github.com/asacripanti'

    window.location.href = url;
})

linkedInLogo.addEventListener('click', function(){
    const url = 'https://www.linkedin.com/in/alejandro-sacripanti-7abaa823a/'

    window.open(url);
    // window.location.href = url;
})

// navigate to about page
document.getElementById("navigateToAbout").addEventListener("click", function() {
    secondPage.scrollIntoView({ behavior: "smooth" });
  });

// navigate to project page 
document.getElementById('navigateToProjects').addEventListener('click', function(){
    thirdPage.scrollIntoView({behavior: 'smooth'});
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


//fade in and out for biotext and pic divider
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
   
        // Get the bottom of the image
        const imageTop = gifOne.getBoundingClientRect().top;
        // const descTop = projectDesc.getBoundingClientRect().top;
        // Check if the image is in the viewport
        const isImageVisible = imageTop <= window.innerHeight;
        // const isDescVisible = descTop <= window.innerHeight;
        
        if (isImageVisible) {
            gifOne.classList.add("active");
            projectDesc.classList.add("active");
            console.log('added');
        } else {
            // gifOne.classList.remove("active");
        }

        // if (isDescVisible) {
        //     projectDesc.classList.add("active");
        //     console.log('added');
        // } else {
        //     projectDesc.classList.remove("active");
        // }
}

window.addEventListener("scroll", debounce(checkSlide));

// Initial check when the page loads
window.addEventListener("DOMContentLoaded", checkSlide);
