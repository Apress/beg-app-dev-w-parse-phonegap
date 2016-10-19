Parse.Cloud.httpRequest({
  url: 'http://api.tiles.mapbox.com/v4/geocode/mapbox.places-city-v1/' + location.longitude +
    ',' + location.latitude + '.json',
  params: {
    'access_token': '{access_token}'
  }
}).then(function (httpResponse) { // Note: The API response handling method // will be populated later in this chatper
}).then(function () { // Send a success response if the location name was added
  response.success("Location name added ");
});
