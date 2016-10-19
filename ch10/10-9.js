map.on('fullscreenchange', function(e) {
    map.setView([Message.get('location').latitude,
        Message.get('location').longitude]);
    if (map.isFullscreen()) {
        $('#mapbox').removeClass(mapClasses);
        map.dragging.enable();
        map.touchZoom.enable();
    } else {
        $('#mapbox').addClass(mapClasses);
        map.dragging.disable();
        map.touchZoom.disable();
    }
});