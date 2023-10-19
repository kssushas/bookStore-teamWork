const bodyThemeSwitch = document.getElementById('slider');
const mobileMenuThemeSwitch = document.getElementById('mobile-slider');
const mobileMenu = document.querySelector('.mob-menu');
const modal = document.querySelector('.modal-field')

const selectedTheme = localStorage.getItem('selectedTheme');

if (selectedTheme === 'dark') {
  bodyThemeSwitch.checked = true;
  applyDarkTheme();
} else {
  bodyThemeSwitch.checked = false;
  applyLightTheme();
}

bodyThemeSwitch.addEventListener('change', function () {
  const isDark = this.checked;
  setTheme(isDark);
});

mobileMenuThemeSwitch.addEventListener('change', function () {
  const isDark = this.checked;
  setTheme(isDark);
});

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    closeMenuLink: document.querySelectorAll('.header-mob-link'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink.forEach(item =>
    item.addEventListener('click', toggleMenu)
  );

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');

    setTheme(mobileMenuThemeSwitch.checked);
  }
})();

function setTheme(isDark) {
  if (isDark) {
    applyDarkTheme();
  } else {
    applyLightTheme();
  }
}

function applyLightTheme() {
  document.body.classList.remove('theme-dark');
  mobileMenu.classList.remove('theme-dark');
  if(modal){
    modal.classList.remove('theme-dark');
  }
  localStorage.setItem('selectedTheme', 'light');
  
}

//*MODAL


function applyDarkTheme() {
  document.body.classList.add('theme-dark');
  mobileMenu.classList.add('theme-dark');
  localStorage.setItem('selectedTheme', 'dark');
  if (document.body.classList.contains('theme-dark')) {
    if(modal){
      modal.classList.add('theme-dark');
    }
    
  }
  
}
const currentURL = window.location.href;

const links = document.querySelectorAll('#menu a');

links.forEach(link => {
  if (link.href === currentURL) {
    link.classList.add('current');
  }
});