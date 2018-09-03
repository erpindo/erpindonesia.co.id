$(document).ready(function () {
    var getHeader = $("#catp-gheader");
    var mainWrap = $("#wrap");

    mainWrap.css('margin-top', getHeader.height());


    $(window).resize(function () {

        mainWrap.css('margin-top', getHeader.height());        

    });

});
document.addEventListener('DOMContentLoaded', function (e) {
    if ($('.welcome-section').length > 0) {
        var nav = $('#catp-gheader');
        nav.addClass('navbar-transparent');
        
        $(window).scroll(function () {
            var top = 200;
            if ($(window).scrollTop() >= top) {
                nav.removeClass('navbar-transparent');
            } else {
                nav.addClass('navbar-transparent');
                // nav.css('transition', 'background 1s ease-out');
            }
        });
    }
}, true);