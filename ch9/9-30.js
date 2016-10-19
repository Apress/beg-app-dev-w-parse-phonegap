Parse.Cloud.httpRequest({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  url: 'http://www.domain.com/path',
  body: {
    key: 'value'
  },
  success: function (httpResponse) {
    console.log(httpResponse.text);
  },
  error: function (httpResponse) {
    console.error('Request failed with response code ' + httpResponse.status);
  }
});
