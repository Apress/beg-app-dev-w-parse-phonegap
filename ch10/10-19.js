var _init = function(_Message) {
    Message = _Message;
    switchView();
    getMap();
    closeEvent();
    map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
};