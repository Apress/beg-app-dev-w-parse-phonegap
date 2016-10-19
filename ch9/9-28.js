var query = new Parse.Query("Message");
query.get(request.params.id, function (Message) {
  var location = Message.get('location');
  if (!location) {
    return response.error("No location provided");
  }
}).fail(function (error) {
  response.error(error);
});
