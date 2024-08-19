const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const answer = accordion.querySelector('.answer');
    
    accordion.addEventListener('click', () => {
        const isActive = icon.classList.contains('active');
        
        // Close other accordions (optional)
        accordions.forEach(otherAccordion => {
            const otherIcon = otherAccordion.querySelector('.icon');
            const otherAnswer = otherAccordion.querySelector('.answer');
            if (otherAccordion !== accordion) {
                otherIcon.classList.remove('active');
                otherAnswer.style.maxHeight = null;
            }
        });

        if (isActive) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});


