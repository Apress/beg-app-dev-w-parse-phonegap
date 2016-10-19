user.signUp(null, {
    success: function(user) {
        alert("Success!");
    },
    error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
        $('button, input').attr('disabled', 'disabled');
    }
});