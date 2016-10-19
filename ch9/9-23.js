export: function () {
  var ParseTracker = Parse.Object.extend("Tracker");
  var query = new Parse.Query(ParseTracker);
  query.ascending("createdAt");
  query.find().then(function (results) {
    var locations = [];
    $(results).each(function (index, result) {
      var point = result.get('location');
      locations.push([point.longitude, point.latitude]);
    });
    console.log(JSON.stringify(locations));
  });
}
