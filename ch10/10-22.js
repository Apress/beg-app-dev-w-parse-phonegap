var addMessageMarker = function(Message) {
    map.addMarker({
        'position': getGLocationFromMessage(Message),
        'title': Message.get('sender').get('first_name'),
        'snippet': Message.get('message_body')
    });
};