var getMessagesWithinBounds = function(latLngBounds) {
    var southwest = new Parse.GeoPoint(latLngBounds.southwest.lat,
        latLngBounds.southwest.lng);
    var northeast = new Parse.GeoPoint(latLngBounds.northeast.lat,
        latLngBounds.northeast.lng);
    var query = new Parse.Query(MyParseMessage);
    query.withinGeoBox("location", southwest, northeast);
    query.limit(10);
    return query.find();
};