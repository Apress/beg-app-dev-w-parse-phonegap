initialize: function() {
    app.conversation.setReceiver();
// With whom are we talking?
    app.conversation.getReceiverName();
// Load Messages in parallel
    app.conversation.renderMessages();
// handle media attachements
    app.conversation.messageHandler();
}