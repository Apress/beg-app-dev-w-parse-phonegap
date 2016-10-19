Parse.User.logIn(email, password, {
    success: function (user) {
        if (user.get('emailVerified') == true) {
            window.location.href = 'contacts.html';
        } else {
            Parse.User.logOut();
            $('button, input').removeAttr('disabled');
        }
    },
    error: function (user, error) {
        $('button, input').removeAttr('disabled');
    }
});