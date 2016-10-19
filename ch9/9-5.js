afterSave: function (Message) {
  MyParseMessage.addLocation(Message);
  return Message;
}, addLocation: function (Message) {
  navigator.geolocation.getCurrentPosition(function (location) {
    console.log(location);
  }, function (error) {
    alert('ERROR(' + error.code + '): ' + error.message);
  });
}
