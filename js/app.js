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
const gifTwo = document.querySelector('.gifTwo');
const projectDesc = document.querySelectorAll('.projectDescription');
const skillText = document.querySelectorAll('.skillText');
const line = document.querySelector('.line');
const blur = document.querySelector('.blur');
const lineTwo = document.querySelector('.lineTwo');
const blurTwo = document.querySelector('.blurTwo');
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const projDescContainer = document.querySelector('.projectDescriptionContainer');
const projDescContainerTwo = document.querySelector('.projectDescriptionContainerTwo')
const descHeader = document.querySelector('.descHeader');
const form = document.querySelector('.contact_form');
const serverBtn = document.querySelector('.serverBtn');
const codeBtn = document.querySelector('.codeBtn');


githubLogo.addEventListener('click', function(){
    const url = 'https://github.com/asacripanti'
    window.open(url);
    // window.location.href = url;
})

linkedInLogo.addEventListener('click', function(){
    const url = 'https://www.linkedin.com/in/alejandro-sacripanti-7abaa823a/'

    window.open(url);
    // window.location.href = url;
})

serverBtn.addEventListener('click', function(){
    const url = 'https://asacripanti.github.io/MTGdeckbuilder/'

    window.open(url);
    // window.location.href = url;
})

codeBtn.addEventListener('click', function(){
    const url = 'https://github.com/asacripanti/MTGdeckbuilder'

    window.open(url);

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
   
    
        const imageTop = gifOne.getBoundingClientRect().top;
         const isImageVisible = imageTop <= window.innerHeight;
// if(gifTwo.classList != 'active'){
//     if (isImageVisible) {
//         gifOne.classList.add("active");

//         skillText.forEach((span) => {
//             span.classList.add("active");
//         })

//         projectDesc.forEach((span) =>{
//             span.classList.add("active");
//         })

//         descHeader.classList.add('active');
//         console.log('added');
//     } 
// }
        if (isImageVisible) {
            gifOne.classList.add("active");

            skillText.forEach((span) => {
                span.classList.add("active");
            })

            projectDesc.forEach((span) =>{
                span.classList.add("active");
            })
            console.log('added');

            descHeader.classList.add('active');
            //         console.log('added');
        } 

}

window.addEventListener("scroll", debounce(checkSlide));

// Initial check when the page loads
window.addEventListener("DOMContentLoaded", checkSlide);

project1.addEventListener('click', function(){
    blur.classList.add('glow-blur');
    line.classList.add('glow-line');
    blurTwo.classList.remove('glow-blur');
    lineTwo.classList.remove('glow-line');

    gifTwo.classList.remove('active');
    gifOne.classList.add('active');

    projDescContainer.classList.add('active');
    projDescContainerTwo.classList.remove('active');
})

project2.addEventListener('click', function(){
    blurTwo.classList.add('glow-blur');
    lineTwo.classList.add('glow-line');
    blur.classList.remove('glow-blur')
    line.classList.remove('glow-line');

    gifOne.classList.remove('active')
    gifTwo.classList.add('active');

    projDescContainerTwo.classList.add('active');
    projDescContainer.classList.remove('active');

})

form.addEventListener('submit', function(e){
    e.preventDefault();
})
