update: function(Message) {
    var Receiver = Message.get('Receiver');
    // Update the Conversation for the current User
    this.getOrCreate(MyParseUser.current(), Receiver)
        .then(function(Conversation) {
            Conversation.set('last_message', Message);
            Conversation.save();
        });
    // Update the Conversation for the Receiver
    this.getOrCreate(Receiver, MyParseUser.current())
        .then(function(Conversation) {
            Conversation.set('last_message', Message);
            Conversation.save();
        });
}