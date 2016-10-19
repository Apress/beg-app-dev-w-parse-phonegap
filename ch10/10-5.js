// Remove Map on Click
map.on('click', function(e) {
    map.remove();
    $('#mapbox').remove();
});
// Disable drag and zoom handlers.
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
// Disable tap handler, if present.
if (map.tap) map.tap.disable();