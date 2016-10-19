submit: function () {
    $('button, input').attr('disabled', 'disabled');
    var first_name = $('input[name=first_name]').val();
    var last_name = $('input[name=last_name]').val();
    var email = $('input[name=email]').val();
    var password = $('input[name=password]').val();
    var user = new Parse.User();
    user.set("first_name", first_name);
    user.set("last_name", last_name);
    user.set("username", email);
    user.set("email", email);
    user.set("password", password);
    // View the details of the user variable a Parse.User object
    console.log(user.attributes);
}