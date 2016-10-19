facebookLogin: function() {
    var scope = ['email'];
    if (!window.cordova) {
        return FB.login(app.login.parseFacebookLogin, { scope: scope.join(',') });
    }
    facebookConnectPlugin.login(scope, app.login.parseFacebookLogin);
}