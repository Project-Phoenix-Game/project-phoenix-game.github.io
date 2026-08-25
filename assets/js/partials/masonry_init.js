/* @preserve Masonry Init */
try {
  var elem = document.querySelector('.grid');
  var msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
    // Masonry defaults to animating (CSS transform transition) every reposition - with
    // layout() re-running as each image finishes loading below (imagesLoaded's 'progress'
    // handler), an item placed early can visibly slide/jump across the grid once a later
    // image's real dimensions change the packing. Instant repositioning instead.
    transitionDuration: 0
  });

  // layout Masonry after each image loads
  var imgLoad = imagesLoaded(elem);
  imgLoad.on('progress', function (instance, image) {
    msnry.layout();
  });
} catch (err) {
  if (err instanceof ReferenceError) {
    // Do nothing, Masonry is defined only in the gallery page
  } else {
    throw err;
  }
}
