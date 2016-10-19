addLocation: function (Message) {
  navigator.geolocation.getCurrentPosition(function (location) {
    var point = new Parse.GeoPoint({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
    Message.set('location', point);
    Message.save();
  }, function (error) {
    alert('ERROR(' + error.code + '): ' + error.message);
  });
}
