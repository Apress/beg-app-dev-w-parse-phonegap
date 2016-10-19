var getGLocationFromMessage = function(Message) {
    return new plugin.google.maps.LatLng(
        Message.get('location').latitude,
        Message.get('location').longitude);
};