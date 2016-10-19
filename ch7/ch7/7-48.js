updateUserData: function(User) {
    var requestPath = '/me?fields=email,first_name,last_name,picture';
    var callback = function(response) {
        User.set('email', response.email);
        User.set('first_name', response.first_name);
        User.set('last_name', response.last_name);
        User.set('picture', response.picture.data.url);
        User.save().then(function() {
            window.location.href = 'logout.html';
        });
    };
    if (!window.cordova) {
        FB.api(requestPath, callback);
    } else {
        facebookConnectPlugin.api(requestPath, null, callback, alert);
    }
}