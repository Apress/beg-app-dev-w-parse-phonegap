submit: function() {
    $('button, input').attr('disabled', 'disabled');
    var email = $('input[name=email]').val();
    var password = $('input[name=password]').val();
}