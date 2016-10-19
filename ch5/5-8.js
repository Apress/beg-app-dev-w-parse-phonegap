var myFacebookApp = {
  init: function() {
    facebookConnectPlugin.getLoginStatus(
      myFacebookApp.handleLoginResponse,
      myFacebookApp.debugResponse
    );
  },
  handleLoginResponse: function(response) {
    console.log('response', response);
    alert("Message: " + JSON.stringify(response));
  },
  debugResponse: function(response) {
    console.log('response', response);
    alert("Message: " + JSON.stringify(response));
  }
};
