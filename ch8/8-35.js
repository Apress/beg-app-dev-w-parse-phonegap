var MyParseMessage = Parse.Object.extend('Message', {
    getPreview: function() {
        return this.get('message_body').length > 40 ?
        this.get('message_body').substring(0, 40) + '..' :
            this.get('message_body');
    }
}, {
    // Keep existing code
});