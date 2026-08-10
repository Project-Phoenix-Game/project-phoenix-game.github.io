/* @preserve Gallery Lightbox Init */
/*
 * Drives the click-to-enlarge viewer on the Gallery page (_includes/gallery.html): a
 * single <dialog> reused for every tile, populated from each .grid-item's data
 * attributes on open. No-ops on every other page, same guarded pattern as
 * masonry_init.js, since #gallery-lightbox only exists in the gallery's markup.
 */
;(function () {
  var grid = document.querySelector('#masonry.grid');
  var dialog = document.getElementById('gallery-lightbox');
  if (!grid || !dialog || typeof dialog.showModal !== 'function') return;

  var items = Array.prototype.slice.call(grid.querySelectorAll('.grid-item'));
  var img = dialog.querySelector('.gallery-lightbox__image');
  var titleEl = dialog.querySelector('.gallery-lightbox__title');
  var descEl = dialog.querySelector('.gallery-lightbox__description');
  var btnPrev = dialog.querySelector('[data-action="prev"]');
  var btnNext = dialog.querySelector('[data-action="next"]');
  var btnClose = dialog.querySelector('[data-action="close"]');

  var currentIndex = -1;
  var lastTrigger = null;

  function render(index) {
    var item = items[index];
    if (!item) return;
    currentIndex = index;
    img.src = item.dataset.fullSrc;
    img.alt = item.dataset.alt || '';
    titleEl.textContent = item.dataset.title || '';
    descEl.textContent = item.dataset.description || '';
  }

  function open(index, trigger) {
    lastTrigger = trigger || null;
    render(index);
    dialog.showModal();
  }

  function close() {
    dialog.close();
  }

  function step(delta) {
    if (!items.length) return;
    render((currentIndex + delta + items.length) % items.length);
  }

  // Single delegated listener on the grid handles every tile, current and future.
  grid.addEventListener('click', function (e) {
    var trigger = e.target.closest('.grid-item');
    if (!trigger) return;
    var index = items.indexOf(trigger);
    if (index === -1) return;
    open(index, trigger);
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', function () { step(-1); });
  btnNext.addEventListener('click', function () { step(1); });

  // A click landing on the <dialog> element itself (not on .gallery-lightbox__shape or
  // its children) is a backdrop click, since the dialog's own box is transparent.
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) close();
  });

  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      step(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      step(1);
    }
    // Escape is handled natively by <dialog> ('cancel' -> 'close').
  });

  // Native <dialog> doesn't guarantee focus returns to the invoker across browsers.
  dialog.addEventListener('close', function () {
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
  });
})();
