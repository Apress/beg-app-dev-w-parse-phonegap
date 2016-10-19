var getMapCenter = function(position) {
    if (loading) {
        return;
    }
    loading = true;
    getMessagesNearBy(position).then(addMarkersToMap);
};