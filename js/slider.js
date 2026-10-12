const slider = document.querySelector('.slider');

if (slider) {

    const track = slider.querySelector('.slider__track');
    const slides = slider.querySelectorAll('.coffee-card');
    const prevButton = slider.querySelector('.slider__button--prev');
    const nextButton = slider.querySelector('.slider__button--next');
    const indicators = document.querySelectorAll('.slider__indicator');

    const total = slides.length;
    let current = 0;

    const applyPosition = (animate) => {
        const cardWidth = slides[0].getBoundingClientRect().width;

        track.classList.toggle('no-transition', !animate);
        track.style.transform = `translateX(-${current * cardWidth}px)`;

        if (!animate) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    track.classList.remove('no-transition');
                });
            });
        }
    };

    const goTo = (index, animate = true) => {
        current = (index % total + total) % total;

        applyPosition(animate);

        indicators.forEach((indicator, i) => {
            const isActive = i === current;

            indicator.classList.toggle('slider__indicator--active', isActive);

            if (isActive) {
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.removeAttribute('aria-current');
            }
        });
    };

    prevButton.addEventListener('click', () => goTo(current - 1));
    nextButton.addEventListener('click', () => goTo(current + 1));

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => goTo(i));
    });

    window.addEventListener('resize', () => goTo(current, false));

    goTo(current);
}
