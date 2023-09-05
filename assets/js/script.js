'use strict';

// Navbar Toggle In Mobile

const /** {NodeElement} */ $navbar = document.querySelector('[data-navbar]');

const /** {NodeElement} */ $navToggler =
    document.querySelector('[data-nav-toggler]');

$navToggler.addEventListener('click', () => $navbar.classList.toggle('active'));

// Header Scroll State

const /** {NodeElement} */ $header = document.querySelector('[data-header]');

window.addEventListener('scroll', (e) => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
});

// Add Property to Favorites

const /** {NodeList} */ $toggleBtns =
    document.querySelectorAll('[data-toggle-btn]');

$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener('click', () => {
    $toggleBtn.classList.toggle('active');
  });
});
