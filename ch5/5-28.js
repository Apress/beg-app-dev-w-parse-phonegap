uploadFile: function() {
  facebookConnectPlugin.login(["publish_actions"],
    function(response) {
      var options = new FileUploadOptions();
      options.fileKey = "source";
      options.chunkedMode = false;
      options.httpMethod = "POST";

      options.params = {};
      options.params.access_token = response.authResponse.accessToken
        options.params.message = "Hello World!";

      var filePath = cordova.file.applicationDirectory +
        "/www/img/my_photo.jpg";

      var ft = new FileTransfer();
      ft.upload(filePath,
        encodeURI("https://graph.facebook.com/me/photos"),
        myFacebookApp.onUploadSuccess, myFacebookApp.onUploadFail,
        options
      );
    },
    myFacebookApp.debugResponse
  );
},
onUploadSuccess: function(uploadResponse) {
  console.log(uploadResponse);
  var response = JSON.parse(uploadResponse.response);
  console.log(response);
},
onUploadFail: function(response) {
  myFacebookApp.debugResponse(response);
}
