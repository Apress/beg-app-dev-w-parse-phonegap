$('#facebook-login').on('click', function(event) {
    event.preventDefault();
    app.login.facebookLogin();
});