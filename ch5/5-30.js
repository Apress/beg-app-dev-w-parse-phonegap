showDialog: function() {
  facebookConnectPlugin.showDialog({
      method: "feed",
      link: "https://www.parse.com/",
      caption: "Add a message ..."
    },
    // success callback
    myFacebookApp.debugResponse,
    // error callback
    myFacebookApp.debugResponse
  );
}
