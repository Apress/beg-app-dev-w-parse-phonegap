postToFeed: function() {
  facebookConnectPlugin.login(["publish_actions"],
    function(response) {
      if (response.status != "connected") {
        return false;
      }
      $.ajax({
        type: "POST",
        url: "https://graph.facebook.com/me/feed",
        data: {
          access_token: response.authResponse.accessToken,
          message: "Hello World!",
          link: "http://www.parse.com/"
        },
        success: function(response) {
          console.log(response);
        },
        dataType: "json"
      });
    },
    myFacebookApp.debugResponse
  );
}
