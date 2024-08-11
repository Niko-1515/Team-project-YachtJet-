(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    
    if(anchors.length === 0) return;
    
    if(!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener("click", toggleMenu)
      })
      return;
    }
    
    anchors.forEach(anchor => {
        anchor.removeEventListener("click", toggleMenu)
      })
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Вказати брейкпоінт після якого повинна зачинятися
  window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
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