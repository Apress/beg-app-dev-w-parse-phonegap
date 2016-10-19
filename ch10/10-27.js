var getMessagesNearBy = function (position) {
    var currentPosition = new Parse.GeoPoint({
        latitude: position.target.lat,
        longitude: position.target.lng
    });
    var query = new Parse.Query(MyParseMessage);
    query.near("location", currentPosition);
    // Alternatives:
// query.withinMiles("location", currentPosition, 3);
// query.withinKilometers("location", currentPosition, 5);
    query.limit(10);
    return query.find();
};