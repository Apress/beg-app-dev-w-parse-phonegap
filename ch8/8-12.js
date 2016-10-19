var MyParseMessage = Parse.Object.extend('Message', {
    // Instance Methods
    send: function (options) {
        // Set the Receiver
        this.set('Receiver', options.Receiver);
        // Set the Sender
        this.set('Sender', MyParseUser.current());
        // Set the Message Body
        this.set('message_body', options.message_body);
        // Save the Message to Parse
        return this.save().then(MyParseMessage.afterSave);
    }
}, {
    // Class Methods
    afterSave: function (Message) {
        return Message;
    }
});