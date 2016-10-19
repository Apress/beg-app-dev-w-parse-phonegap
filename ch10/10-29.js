var onMapReady = function(_map) {
// Keep existing code...
// Replace getMapCenter with getVisibleRegion
    map.animateCamera(options, function() {
        map.on(plugin.google.maps.event.CAMERA_CHANGE, getVisibleRegion);
    });
});