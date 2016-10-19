addMap: function(event) {
    event.preventDefault();
    if ($('#mapbox').length) {
        $('#mapbox').remove();
    }
// ...
}