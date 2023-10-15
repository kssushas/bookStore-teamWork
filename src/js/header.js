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
    }
  })();


//   function setTheme(themeName) {
//     localStorage.setItem('theme', themeName);
//     document.documentElement.className = themeName;
// }

// // function to toggle between light and dark theme
// function toggleTheme() {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-light');
//     } else {
//         setTheme('theme-dark');
//     }
// }

// // Immediately invoked function to set the theme on initial load
// (function () {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-dark');
//         document.getElementById('slider').checked = false;
//     } else {
//         setTheme('theme-light');
//       document.getElementById('slider').checked = true;
//     }
// })();

const themeSwitch = document.getElementById("slider");
themeSwitch.addEventListener("change", function(){
    if(this.checked){
        document.body.classList.add("theme-dark");
    } else {
            document.body.classList.remove("theme-dark")
        }
    
})