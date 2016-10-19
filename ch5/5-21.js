getUserPhotos: function() {
  facebookConnectPlugin.api("me/photos", ["user_photos"],
    function(response) {
      var source = $("#photos-template").html();
      var template = Handlebars.compile(source);
      var html = template({
        photos: response
      });
      $(".panel-body").html(html);
    },
    myFacebookApp.debugResponse
  );
}
