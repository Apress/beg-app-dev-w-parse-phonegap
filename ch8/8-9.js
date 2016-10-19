setReceiver: function() {
    app.conversation.Receiver = new MyParseUser();
    app.conversation.Receiver.id = app.core.getParameterByName('id');
}