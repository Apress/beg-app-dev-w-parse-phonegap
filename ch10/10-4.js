var Message = app.conversation.Messages[$(this).data('id')];
map.setView([Message.get('location').latitude, Message.get('location').longitude], 14);
L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [
            Message.get('location').longitude,
            Message.get('location').latitude
        ]
    },
    properties: {
        title: Message.get('sender').get('first_name'),
        description: Message.get('message_body'),
        'marker-size': 'large',
        'marker-color': '#BE9A6B',
        'marker-symbol': 'post'
    }
}).addTo(map);