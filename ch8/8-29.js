window.setTimeout(function() {
    $(window).scrollTop($("textarea").offset().top -
        ($(window).height() - $("textarea").height()));
    window.setTimeout(function() {
        $("textarea").focus();
    }, 300);
}, 150);