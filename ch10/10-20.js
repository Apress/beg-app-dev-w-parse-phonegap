addMap: function(event) {
    event.preventDefault();
    var Message = app.conversation.Messages[$(this).data('id')];
    app.modules.map.init(Message);
}