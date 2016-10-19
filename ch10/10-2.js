addMap: function (event) {
    event.preventDefault();
    // Add Map Element
    var mapClasses = 'alert well-sm alert-info';
    $('<div id="mapbox" class="' + mapClasses + '"></div>').insertBefore(this);
    // Set Mapbox Access Token
    L.mapbox.accessToken = '{your-mapbox-access-token}';
    // Create Mapbox Instance
    var map = L.mapbox.map('mapbox', '{your-mapbox-map-id}', {
        zoomControl: false,
        attributionControl: false
    });
}