

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

if (burger && mobileMenu) {

    const setMenu = (isOpen) => {
        mobileMenu.classList.toggle('is-open', isOpen);
        burger.textContent = isOpen ? '✕' : '☰';
        burger.setAttribute('aria-expanded', String(isOpen));
        burger.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
        mobileMenu.inert = !isOpen;
        document.body.classList.toggle('menu-open', isOpen);
    };

    setMenu(false);

    burger.addEventListener('click', () => {
        setMenu(!mobileMenu.classList.contains('is-open'));
    });


    mobileMenu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            setMenu(false);
        }
    });


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenu(false);
        }
    });

    const desktopQuery = window.matchMedia('(min-width: 769px)');

    desktopQuery.addEventListener('change', (event) => {
        if (event.matches) {
            setMenu(false);
        }
    });
}
