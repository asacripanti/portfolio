const flowElements = document.querySelectorAll('.grid-even-columns .flow');

flowElements.forEach(flow => {
    flow.addEventListener('mouseenter', () => {
        flow.classList.add('transition-active');
    });

    flow.addEventListener('mouseleave', () => {
        setTimeout(() => {
            flow.classList.remove('transition-active');
        }, 1000); // Adjust the delay as needed
    });
});

