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
   * Measure the actual rendered height of the sticky header and expose it as
   * --mobile-nav-offset, so the off-canvas mobile menu (_navbar.scss) can sit
   * flush below it instead of guessing a fixed px value that drifts with
   * font-loading reflow or a wrapping site title. Scoped to its own custom
   * property (rather than reusing --site-header-overlay-height) so it can't
   * affect the unrelated, desktop-inclusive uses of that variable elsewhere
   * (post hero offset, tags/categories sticky rail).
   */
  const header = document.querySelector('.site-header');
  function setMobileNavOffset() {
    if (header) {
      document.documentElement.style.setProperty('--mobile-nav-offset', header.offsetHeight + 'px');
    }
  }
  setMobileNavOffset();
  window.addEventListener('resize', setMobileNavOffset);
  window.addEventListener('load', setMobileNavOffset);

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
