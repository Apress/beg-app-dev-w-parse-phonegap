user.signUp(null, {
    success: function(user) {
        Parse.User.logOut();
        window.location.href = 'verification_pending.html';
    },
    error: function(user, error) {
        $('button, input').removeAttr('disabled');
    }
});