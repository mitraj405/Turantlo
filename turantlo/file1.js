document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function setActiveDot(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function nextDot() {
        currentIndex = (currentIndex + 1) % dots.length;
        setActiveDot(currentIndex);
    }

    setInterval(nextDot, 2000);
});
