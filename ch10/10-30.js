var getVisibleRegion = function(position) {
    if (loading) {
        return;
    }
    loading = true;
    map.getVisibleRegion(function(latLngBounds) {
        getMessagesWithinBounds(latLngBounds).then(addMarkersToMap);
    });
};