$(function(){
    // $('.precent-counter').counterUp({
    //     time: 1000
    // });
    $(window).on('load resize scroll', function() {
        if ($(window).scrollTop() > ($('.percent-list').offset().top + 50 - $(window).outerHeight())) {
            $('.percent-list').addClass('active');
        } else {
            $('.percent-list').removeClass('active');
        }
    })
    
    const addressWallet = $('.addressWallet').html();
    $('.addressWallet').html(addressWallet.slice(0, 12) + '...' + addressWallet.slice(-16));

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
    $(window).on('resize', function(){
        $('.videoYoutube').css('height', $('.videoYoutube').width() * 315 / 560);
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
    
})
