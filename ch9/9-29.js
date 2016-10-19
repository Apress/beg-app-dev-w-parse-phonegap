Parse.Cloud.httpRequest({
  url: 'http://www.google.com/search',
  params: {
    q: 'phonegap'
  },
  success: function (httpResponse) {
    console.log(httpResponse.text);
  },
  error: function (httpResponse) {
    console.error('Request failed with response code ' + httpResponse.status);
  }
});
