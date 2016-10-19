var MyParseConversation = Parse.Object.extend('Conversation', {
    // The user ID of the conversation partner
    getPartnerId: function() {
        return this.get('Partner').id;
    },
    // Name of the conversation partner
    getPartnerName: function() {
        return this.get('Partner').get('first_name') + ' ' +
            this.get('Partner').get('last_name');
    },
    // Profile picture of the conversation partner
    getPicture: function() {
        return this.get('Partner').getPicture();
    },
    // A preview of the last message
    getMessagePreview: function() {
        return this.get('last_message').getPreview();
    },
    // The time elapsed since the last message was sent
    getFromNow: function() {
        return this.get('last_message').getFromNow();
    }
}, {
    // Keep existing code
});