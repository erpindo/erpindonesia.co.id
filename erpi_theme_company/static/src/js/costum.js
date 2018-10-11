$(document).ready(function () {
    var getHeader = $("#catp-gheader");
    var mainWrap = $("#wrap");
    var mainClassWrap = $(".wrap");
    var loginWrap = $(".oe_website_login_container");
    var pageWrap = $("#catp-wrap-spc");

    mainWrap.css('padding-top', getHeader.height());
    mainClassWrap.css('padding-top', getHeader.height());
    loginWrap.css('padding-top', getHeader.height());
    pageWrap.css('padding-top', getHeader.height());


    $(window).resize(function () {

        mainWrap.css('padding-top', getHeader.height());        
        mainClassWrap.css('padding-top', getHeader.height());
        loginWrap.css('padding-top', getHeader.height());        
        pageWrap.css('padding-top', getHeader.height());

    });

});
document.addEventListener('DOMContentLoaded', function (e) {
    if ($('.welcome-section').length > 0) {
        var nav = $('#catp-gheader');
        nav.addClass('navbar-transparent');
        
        $(window).scroll(function () {
            var top = 30;
            if ($(window).scrollTop() >= top) {
                nav.removeClass('navbar-transparent');
                nav.css('transition', 'background .25s ease-out');
            } else {
                nav.addClass('navbar-transparent');
                nav.css('transition', 'background .25s ease-out');
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

$(document).ready(function () {
    var cform = nod();

    // We disable the submit button if there are errors.
    cform.configure({
        submit: $('#cform-submit'),
        disableSubmit: true,
    });

    cform.add([{
        selector: '#cf-name',
        validate: 'presence',
        errorMessage: 'Don\'t leave empty.'
    }, {
        selector: '#cf-email',
        validate: 'email',
        errorMessage: 'Thats Not Valid Email.'
    }, {
        selector: '#cf-phone',
        validate: 'presence',
        errorMessage: 'Don\'t leave empty.'
    }, {
        selector: '#cf-how',
        validate: 'presence',
        errorMessage: 'Don\'t leave empty.'    
    }, {
        selector: '#cf-company',
        validate: 'presence',
        errorMessage: 'Don\'t leave empty.'
    }, {
        selector: '#cf-text',
        validate: 'min-length:100',
        errorMessage: 'Please give us more detail.' 
    }, {
        selector: '#cf-check',
        validate: 'checked',
        errorMessage: 'You must agree to our terms and canditions.'   
    }]);

});