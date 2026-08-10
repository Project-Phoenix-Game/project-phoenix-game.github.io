/* @preserve Navbar */
document.addEventListener("DOMContentLoaded", function (event) {

  /*
   * Display the menu items on smaller screens
   */
  const pull = document.getElementById('pull');
  const menu = document.querySelector('nav ul');

  ['click', 'touch'].forEach(function (e) {
    pull?.addEventListener(e, function () {
      menu.classList.toggle('hide')
    }, false);
  });

  /*
   * Make the header images move on scroll - exposed as a custom property rather than a full
   * background-position string, so each #main (home's multi-layer starfield hero, the post
   * hero, plain page/custom headers) can fold the same scroll-driven offset into its own
   * background-position formula instead of one hardcoded layout winning for every page type.
   */
  window.addEventListener('scroll', function () {
    const offset = -(window.scrollY || window.pageYOffset || document.body.scrollTop) / 3;
    const main = document.getElementById('main');
    if (main) {
      main.style.setProperty('--parallax-offset', offset + 'px');
    }
  });
});
