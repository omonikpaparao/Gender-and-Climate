
    const animateOnScroll = (entries, observer)=>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(animateOnScroll);

    // Target all elements that should be animated
    const animatedElements = document.querySelectorAll('.case-study-text, .case-study-image, .adjacent-container');
    
    animatedElements.forEach(element => {
        observer.observe(element); // Start observing each element
    });
