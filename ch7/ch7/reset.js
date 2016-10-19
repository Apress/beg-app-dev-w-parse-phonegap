app.reset = {

    initialize: function() {
        $('form').on('submit', function(event) {
            event.preventDefault();
            app.reset.submit();
        });
    },

    submit: function() {

        $('button, input').attr('disabled', 'disabled');

        var email = $('input[name=email]').val();

        Parse.User.requestPasswordReset(email, {
            success: function() {
                window.location.href = 'reset-success.html';
            },
            error: function(error) {
                $('button, input').removeAttr('disabled');
            }
        });

    }

};