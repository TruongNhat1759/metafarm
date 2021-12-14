$(function(){
    $('a[href^="#"]').click(function() {
        if ($($(this).attr('href')).length) {
            $('.toggle-menu').removeClass('active');
            $('.menu-slide').removeClass('active');
            const positonElement = $($(this).attr('href')).offset().top;
            $('html, body').animate({ scrollTop: positonElement - 50 }, 400);
        }
        return false;
    })

    $(window).on('load resize scroll', function() {
        if($('body').find('.percent-list').length > 0) {
            if ($(window).scrollTop() > ($('.percent-list').offset().top + 50 - $(window).outerHeight())) {
                $('.percent-list').addClass('active');
            }
        }
    })
    
    const addressWallet = $('.addressWallet').html();
    if($('body').find('.addressWallet').length > 0) {
        $('.addressWallet').html(addressWallet.slice(0, 12) + '...' + addressWallet.slice(-16));
    }

    $('.copyWallet').on('click', function() {
        navigator.clipboard.writeText(addressWallet);
        $('.copied').css({
            'top': '2rem',
            'opacity': '1',
        });
        setTimeout(function() {
            $('.copied').removeAttr('style');
        }, 800)
    })
    
    const GetYoutubeCloneWithCloneElement = $('.videoYoutube').clone().css({
        'visibility': 'hidden',
        'position': 'absolute',
        'z-index': '-99999',
        'left': '99999999px',
        'top': '0px',
    }).appendTo('body');

    const WidthGetYoutubeCloneWithCloneElement = GetYoutubeCloneWithCloneElement.width();
    $('.videoYoutube').css('height', WidthGetYoutubeCloneWithCloneElement * 315 / 560);
    GetYoutubeCloneWithCloneElement.remove();

    $(window).bind('load resize', function(){
        $('.toggle-menu').removeClass('active');
        $('.menu-slide').removeClass('active');
    })

    $('.toggle-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.menu-slide').toggleClass('active');
    })

    $('[data-show-modal]').on('click', function () {
        $('.modalVideo').show()
    })

    $('[data-close-modal]').on('click', function () {
        $('.modalVideo').hide()
    })
    
    $('.checkbox-custom-remember, .checkbox-custom-remember-label').on('click', function() {
        $('.checkbox-custom-remember').toggleClass('active');
        $('#remember').attr('checked', !$('#remember').attr('checked'))
    })
    
})
