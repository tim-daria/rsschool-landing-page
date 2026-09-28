
const themeSwitch = document.querySelector('.theme-switch__input');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', () => {
    const isDark = themeSwitch.checked;

    document.body.classList.toggle('dark-theme', isDark);

    localStorage.setItem(
        'theme',
        isDark ? 'dark' : 'light'
    );
});
