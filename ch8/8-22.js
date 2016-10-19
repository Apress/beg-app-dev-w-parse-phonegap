var MyParseMessage = Parse.Object.extend('Message', {
    getFromNow: function() {
        return moment(this.createdAt).fromNow();
    },
    send: function() {
        // Send Code
    },
    protectMessage: function() {
        // Protect Message Code
    }
});