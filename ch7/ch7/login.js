app.login = {
    initialize: function () {
        $('form').on('submit', function (event) {
            event.preventDefault();
            app.login.submit();
        });
        $('#facebook-login').on('click', function (event) {
            event.preventDefault();
            app.login.facebookLogin();
        });
    },
    submit: function () {
        $('button, input').attr('disabled', 'disabled');
        var email = $('input[name=email]').val();
        var password = $('input[name=password]').val();
        Parse.User.logIn(email, password, {
            success: function (user) {
                window.location.href = 'contacts.html';
            },
            error: function (user, error) {
                $('button, input').removeAttr('disabled');
            }
        });
    },
    facebookLogin: function () {
        var scope = ['email'];
        if (!window.cordova) {
            return FB.login(app.login.parseFacebookLogin, scope.join(','));
        }
        console.log(facebookConnectPlugin);
        facebookConnectPlugin.login(scope, app.login.parseFacebookLogin);
    },
    parseFacebookLogin: function (response) {
        var expiresIn = new Date();
        expiresIn.setSeconds(expiresIn.getSeconds() + response.authResponse.expiresIn);
        var facebookAuthData = {
            "id": response.authResponse.userID,
            "access_token": response.authResponse.accessToken,
            "expiration_date": expiresIn.toISOString()
        };
        Parse.FacebookUtils.logIn(facebookAuthData).then(app.login.updateUserData);
    },
    updateUserData: function () {
        var requestPath = '/me?fields=id,email,first_name,last_name,picture';
        var callback = function (response) {
            var User = Parse.User.current();
            User.set('email', response.email);
            User.set('first_name', response.first_name);
            User.set('last_name', response.last_name);
            User.set('picture', response.picture.data.url);
            User.save().then(function () {
                window.location.href = 'contacts.html';
            });
        };
        if (!window.cordova) {
            FB.api(requestPath, callback);
        } else {
            facebookConnectPlugin.api(requestPath, null, callback, alert);
        }
    }
};