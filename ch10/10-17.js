var onMapReady = function(map) {
    map.animateCamera({
        'target': getGLocationFromMessage(Message),
        'zoom': 15,
        'duration': 3000,
        'tilt': 0,
        'bearing': 0
    });
};