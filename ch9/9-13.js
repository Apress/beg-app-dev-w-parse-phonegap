initialize: function () { // handle location button
  app.conversation.locationHandler();
}, locationHandler: function () {
  var receiver_id = app.core.getParameterByName('id');
  $('#location').on('click', function (e) {
    e.preventDefault();
    app.modules.location.toggle(receiver_id);
    $('#location').toggleClass('active');
  });
  if (app.modules.location.isEnabled(receiver_id)) {
    $('#location').addClass('active');
  }
}
