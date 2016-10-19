app.modules.pictures = (function() {
    // Wrapper function to get a photo from the device's album(s)
    var getPhotoFromAlbums = function() {};
    // Wrapper function to get a photo via the device's camera
    var getPhotoFromCamera = function() {};
    // Common used function to get a photo from different sources
    var _getPhoto = function() {};
    // Save photo to parse
    var _save = function() {};
    // If something goes wrong...
    var _onFail = function(message) {
        console.log('Error: ' + message);
    };
    // public API
    return {
        getPhotoFromAlbums: getPhotoFromAlbums,
        getPhotoFromCamera: getPhotoFromCamera
    };
})();