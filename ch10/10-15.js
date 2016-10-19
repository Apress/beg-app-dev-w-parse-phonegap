var getMap = function() {
    map = plugin.google.maps.Map.getMap($('#myMap')[0], {
        'controls': {
            'compass': true,
            'myLocationButton': true,
            'zoom': true
        }
    });
};