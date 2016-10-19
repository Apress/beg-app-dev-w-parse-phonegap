app.core = {
    initialize: function () {
        $LAB.script(scripts.common).wait()
            .script(scripts.models).wait(app.core.afterLoad);
    },
    afterLoad: function () {
        // Initialize this Parse application
        Parse.initialize('your-app-id', 'your-javascript-key');
        // Initialize View
        if (config.view in app) {
            app[config.view].initialize();
        }
    }
};