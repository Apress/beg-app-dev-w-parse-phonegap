var onMapReady = function(_map) {
// Keep existing code...
    map.animateCamera(options, function() {
        map.on(plugin.google.maps.event.CAMERA_CHANGE, getMapCenter);
    });
});