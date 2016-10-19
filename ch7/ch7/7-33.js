app.reset = {
    initialize: function() {
        $('form').on('submit', function(event) {
            event.preventDefault();
            app.reset.submit();
        });
    },
    submit: function() {}
};