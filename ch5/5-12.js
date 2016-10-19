handleLoginResponse: function(response) {
  if (response.status == 'connected') {
    myFacebookApp.switchToView.loggedin();
  } else {
    myFacebookApp.switchToView.loggedout();
  }
},
switchToView: {
  loggedin: function() {
    $('.loggedin').show();
    $('.loggedout').hide();
  },
  loggedout: function() {
    $('.loggedin').hide();
    $('.loggedout').show();
  }
}
