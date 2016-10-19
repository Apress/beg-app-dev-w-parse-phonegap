var addMarkersToMap = function(Messages) {
    $.each(Messages, function(index, Message) {
        if ($.inArray(Message.id, message_ids) > -1) {
            return;
        }
        message_ids.push(Message.id);
        addMessageMarker(Message);
    });
    loading = false;
};