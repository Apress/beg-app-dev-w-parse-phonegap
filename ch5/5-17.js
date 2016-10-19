getEmailAddress: function() {
  facebookConnectPlugin.api("/me?fields=id,email", ["email"],
    // success callback
    myFacebookApp.debugResponse,
    // error callback
    myFacebookApp.debugResponse
  );
}
