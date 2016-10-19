var closeEvent = function() {
    $('#closeMyMap').on('tap click', function() {
        $('.container').show();
        $('#myMap, #closeMyMap').css('display', 'none');
        map.remove();
    });
};