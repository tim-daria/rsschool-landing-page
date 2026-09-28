const slider = document.querySelector('.slider');

if (slider) {

    const track = slider.querySelector('.slider__track');
    const slides = slider.querySelectorAll('.coffee-card');
    const prevButton = slider.querySelector('.slider__button--prev');
    const nextButton = slider.querySelector('.slider__button--next');
    const indicators = document.querySelectorAll('.slider__indicator');

    const total = slides.length;
    let current = 0;

    // Slides are always the same width as the slider window,
    // so the offset for slide N is N * card width in px.
    const applyPosition = (animate) => {
        const cardWidth = slides[0].getBoundingClientRect().width;

        track.classList.toggle('no-transition', !animate);
        track.style.transform = `translateX(-${current * cardWidth}px)`;

        if (!animate) {
            // Re-enable the transition after this frame so the
            // next slide change animates again
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    track.classList.remove('no-transition');
                });
            });
        }
    };

    const goTo = (index, animate = true) => {
        // Cyclic: (index % total + total) % total wraps
        // 1 -> total and total+1 -> 1
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

    // Keep the position exact after any window resize
    // (card width changes on mobile), without animating
    window.addEventListener('resize', () => goTo(current, false));

    goTo(current);
}
