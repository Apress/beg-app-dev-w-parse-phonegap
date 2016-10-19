$('#js-event-use-albums').on('click', function(e) {
    e.preventDefault();
    $('form').addClass('uploading');
    app.modules.pictures.getPhotoFromAlbums(function(parsePhoto) {
    // callback
    });
});
$('#js-event-use-camera').on('click', function(e) {
    e.preventDefault();
    $('form').addClass('uploading');
    app.modules.pictures.getPhotoFromCamera(function(parsePhoto) {
    // callback
    });
});