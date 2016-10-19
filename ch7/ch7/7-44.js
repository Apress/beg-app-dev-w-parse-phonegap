parseFacebookLogin: function(response) {
    var expiresIn = new Date();
    expiresIn.setSeconds(expiresIn.getSeconds() + response.authResponse.expiresIn);
    var facebookAuthData = {
        "id": response.authResponse.userID,
        "access_token": response.authResponse.accessToken,
        "expiration_date": expiresIn.toISOString()
    };
    Parse.FacebookUtils.logIn(facebookAuthData).then(app.login.updateUserData);
}