document.addEventListener('DOMContentLoaded', function (e) {
    if ($('#nc_gets').length > 0) {
        $('header').hide();
        $(document).ready(function () {
            $('footer').hide();
            $('#wrap').css('padding-top',0);
        });
        $(function () {
            var ncheader = $('#nc-header');
            $(window).scroll(function () {
                if ($(this).scrollTop() > 30) {
                    ncheader.addClass('nc-head-active');
                } else {
                    ncheader.removeClass('nc-head-active')
                }
            });
        });    
    }
}, true);