addLocation: function (Message) {
  var receiver_id = Message.get('Receiver').id;
  if (!app.modules.location.isEnabled(receiver_id)) {
    return false;
  }
  navigator.geolocation.getCurrentPosition(function (location) {
    console.log(location);
  });
}
