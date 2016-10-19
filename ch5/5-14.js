login: function() {
  facebookConnectPlugin.login(
    [
      "public_profile",
      "email",
      "user_photos",
      "user_tagged_places"
    ],
    myFacebookApp.handleLoginResponse,
    myFacebookApp.debugResponse
  );
}
