login: function() {
  facebookConnectPlugin.login(["public_profile"],
    myFacebookApp.handleLoginResponse,
    myFacebookApp.debugResponse
  );
},
logout: function() {
  facebookConnectPlugin.logout(
    myFacebookApp.switchToView.loggedout,
    myFacebookApp.switchToView.loggedin
  );
}
