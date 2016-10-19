app.registration = {
    initialize: function () {
        $('form').on('submit', function (event) {
            event.preventDefault();
            app.registration.submit();
        });
    },
    submit: function () {
    }
};