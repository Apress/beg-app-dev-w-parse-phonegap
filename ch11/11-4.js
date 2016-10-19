var getPhotoFromAlbums = function(viewCallback) {
    _getPhoto(navigator.camera.PictureSourceType.PHOTOLIBRARY, viewCallback);
};
var getPhotoFromCamera = function(viewCallback) {
    _getPhoto(navigator.camera.PictureSourceType.CAMERA, viewCallback);
};
var _getPhoto = function(source, viewCallback) {
    navigator.camera.getPicture(function(photoData) {
        _save(photoData, viewCallback);
    }, _onFail, {
        allowEdit: true,
        destinationType: navigator.camera.DestinationType.DATA_URL,
        encodingType: navigator.camera.EncodingType.JPEG,
        quality: 40,
        saveToPhotoAlbum: true,
        sourceType: source,
        targetWidth: 1024,
        targetHeight: 1024
    });
};