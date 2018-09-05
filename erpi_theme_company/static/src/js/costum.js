$(document).ready(function () {
    var getHeader = $("#catp-gheader");
    var mainWrap = $("#wrap");
    var loginWrap = $(".oe_website_login_container");

    mainWrap.css('padding-top', getHeader.height());
    loginWrap.css('padding-top', getHeader.height());


    $(window).resize(function () {

        mainWrap.css('padding-top', getHeader.height());        
        loginWrap.css('padding-top', getHeader.height());        

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

$(document).ready(function(){  
    $('#serv-1').waypoint(function() {
        $('#serv-1').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-2').waypoint(function () {
        $('#serv-2').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-3').waypoint(function () {
        $('#serv-3').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-4').waypoint(function () {
        $('#serv-4').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-5').waypoint(function () {
        $('#serv-5').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-6').waypoint(function () {
        $('#serv-6').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-7').waypoint(function () {
        $('#serv-7').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-8').waypoint(function () {
        $('#serv-8').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-9').waypoint(function () {
        $('#serv-9').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-10').waypoint(function () {
        $('#serv-10').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-11').waypoint(function () {
        $('#serv-11').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-12').waypoint(function () {
        $('#serv-12').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-13').waypoint(function () {
        $('#serv-13').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-14').waypoint(function () {
        $('#serv-14').addClass('animated fadeIn');
    }, { offset: '50%' });
    $('#serv-15').waypoint(function () {
        $('#serv-15').addClass('animated fadeIn');
    }, { offset: '50%' });
 
});