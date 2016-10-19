submit: function() {
    $('button, input').attr('disabled', 'disabled');
    var email = $('input[name=email]').val();
    Parse.User.requestPasswordReset(email, {
        success: function() {
            window.location.href = 'reset-success.html';
        },
        error: function(error) {
            alert("Error: " + error.message);
            $('button, input').removeAttr('disabled');
        }
    });
}
}