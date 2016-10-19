var onSuccess = function (location) {
  var point = new Parse.GeoPoint({
    latitude: location.latitude,
    longitude: location.longitude
  });
  var ParseTracker = Parse.Object.extend("Tracker");
  var Tracker = new ParseTracker();
  Tracker.set("location", point);
  Tracker.set("User", Parse.User.current());
  Tracker.set("uuid ", device.uuid);
  Tracker.save().then(function () {
    bgGeo.finish();
  }).fail(function () {
    bgGeo.finish();
  });
};
