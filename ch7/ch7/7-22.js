app.core = {
    initialize: function () {
// ...
    },
    afterLoad: function () {
// ...
        // Protect Access
        app.core.accessControl();
        // Init Global Events
        app.core.globalEvents();
        // Initialize View
        if (config.view in app) {
            app[config.view].initialize();
        }
    },
    accessControl: function () {
    },
    globalEvents: function () {
    }
}