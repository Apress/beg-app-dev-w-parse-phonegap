getPublishingPermissions: function() {
  facebookConnectPlugin.login(["publish_actions"],
    myFacebookApp.handleLoginResponse,
    myFacebookApp.debugResponse
  );
}
