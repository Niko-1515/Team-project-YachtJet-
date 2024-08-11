(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  // добавили доп класс что бы закрыть после нажатия на ссылку
  const menuLinks = document.querySelectorAll('.mobile-modal-link');
const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

//  добавили что бы закрывалось при нажатии на ссылку
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', toggleMenu);
  });

  // стандартно из скрипта от Репеты
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

// Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

//Menu open-close animation//
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const openMenu = () => {
      mobileMenu.classList.remove('is-closing');
      mobileMenu.classList.add('is-open');
  };

  const closeMenu = () => {
      mobileMenu.classList.remove('is-open');
      mobileMenu.classList.add('is-closing');

      mobileMenu.addEventListener('animationend', function onAnimationEnd() {
          if (mobileMenu.classList.contains('is-closing')) {
              mobileMenu.style.visibility = 'hidden';
              mobileMenu.classList.remove('is-closing');
          }
          mobileMenu.removeEventListener('animationend', onAnimationEnd);
      });
  };

  openMenuBtn.addEventListener('click', () => {
      mobileMenu.style.visibility = 'visible'; 
      openMenu();
  });

  closeMenuBtn.addEventListener('click', closeMenu);
})();