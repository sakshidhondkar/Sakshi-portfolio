
    // JavaScript to stop the animation on hover (optional)
    const typingText = document.querySelector('.typing-text');

    typingText.addEventListener('mouseenter', function() {
        typingText.style.animation = 'none';
    });

    typingText.addEventListener('mouseleave', function() {
        typingText.style.animation = 'typing 5s steps(10) infinite';
    });
