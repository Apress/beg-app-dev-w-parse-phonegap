$('#navigation').on('hide.bs.collapse', function () {
    map.setClickable(true);
    $('.modal-backdrop').remove();
});
$('#navigation').on('show.bs.collapse', function () {
    map.setClickable(false);
    $('body').append('<div class="modal-backdrop fade in" style="z-index: 999"></div>');
});