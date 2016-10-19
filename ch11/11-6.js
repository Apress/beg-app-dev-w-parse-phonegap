var _save = function(photoData, viewCallback) {
    var parsePhoto = new Parse.File("photo.jpg", {
        base64: photoData
    });
    parsePhoto.save().then(function() {
        console.log(parsePhoto.url());
        viewCallback(parsePhoto);
    }, _onFail);
};