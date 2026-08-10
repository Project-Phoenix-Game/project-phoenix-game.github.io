/* @preserve Facet filter (Categories & Tags pages) */
/*
 * Drives the "Signal Index" filter console on the Categories and Tags pages
 * (_layouts/categories.liquid, _layouts/tags.liquid): a shared implementation instead of
 * the two near-identical per-page controllers this replaced, since both pages need the
 * same chip-toggle / live-count / hash-deep-link behavior.
 *
 * Each console declares its own matching mode via data-facet-mode:
 *   "union"     - categories: a post has exactly one, so multi-select broadens the set.
 *   "intersect" - tags: a post can carry several, so multi-select narrows the set.
 */
;(function () {
  function cgiUnescape(raw) {
    try {
      return decodeURIComponent(raw.replace(/\+/g, ' '));
    } catch (e) {
      return raw;
    }
  }

  function initConsole(panel) {
    var facetAttr = panel.dataset.facetAttr;
    var mode = panel.dataset.facetMode || 'union';
    var rail = panel.querySelector('[data-facet-rail]');
    var grid = panel.querySelector('[data-facet-grid]');
    if (!facetAttr || !rail || !grid) return;

    var chips = Array.prototype.slice.call(rail.querySelectorAll('.facet-chip'));
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.post-card'));
    var emptyState = panel.querySelector('[data-facet-empty]');
    var countEl = panel.querySelector('[data-facet-count]');
    var resetBtn = panel.querySelector('[data-facet-reset]');
    var selected = new Set();

    var cardValues = function (card) {
      var raw = card.dataset[facetAttr] || '';
      var values = raw.split('|').filter(Boolean);
      return values.length ? values : ['Uncategorized'];
    };

    var matches = function (card) {
      if (selected.size === 0) return true;
      var values = cardValues(card);
      if (mode === 'intersect') {
        return Array.from(selected).every(function (v) {
          return values.indexOf(v) !== -1;
        });
      }
      return values.some(function (v) { return selected.has(v); });
    };

    var render = function () {
      var shown = 0;
      cards.forEach(function (card) {
        var ok = matches(card);
        card.classList.toggle('is-hidden', !ok);
        if (ok) shown++;
      });

      chips.forEach(function (chip) {
        chip.classList.toggle('is-active', selected.has(chip.dataset.facetValue));
      });

      if (countEl) countEl.textContent = shown;
      if (emptyState) emptyState.classList.toggle('is-active', shown === 0);
      grid.style.display = shown === 0 ? 'none' : '';
    };

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var value = chip.dataset.facetValue;
        if (selected.has(value)) {
          selected.delete(value);
        } else {
          selected.add(value);
        }
        render();
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        selected.clear();
        render();
      });
    }

    var activateFromHash = function () {
      var raw = (window.location.hash || '').replace(/^#/, '');
      if (!raw) return;

      var id = cgiUnescape(raw);
      var chip = chips.find(function (c) { return c.dataset.facetValue === id; });
      if (!chip) return;

      selected.clear();
      selected.add(id);
      render();

      if (typeof chip.scrollIntoView === 'function') {
        chip.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    };

    render();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', activateFromHash);
    } else {
      activateFromHash();
    }
    window.addEventListener('hashchange', activateFromHash);
  }

  var consoles = document.querySelectorAll('[data-facet-attr]');
  consoles.forEach(initConsole);
})();
