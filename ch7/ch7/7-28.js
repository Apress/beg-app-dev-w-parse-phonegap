//...
},
render: function(target, template_name, data) {
    var source = $("#" + template_name + "-template").html();
    var template = Handlebars.compile(source);
    $(target).html(template(data));
},
// ...