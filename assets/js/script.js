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
    countDownTimer('Dec 23, 2021 00:00:00', '.seed-sale');
    countDownTimer('Dec 26, 2021 18:25:05', '.private-sale');
})
function countDownTimer(timeEnd, section) {
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
	const countDown = new Date(timeEnd).getTime();
	const timer = setInterval(function() {    
		const now = new Date().getTime();
		const distance = countDown - now;
		$(section).find('.days').html(Math.floor(distance / (day)));
		$(section).find('.hours').html(Math.floor((distance % (day)) / (hour)));
		$(section).find('.minutes').html(Math.floor((distance % (hour)) / (minute)));
		$(section).find('.seconds').html(Math.floor((distance % (minute)) / second));
		if (distance < 1000) {
			clearInterval(timer);
		}
	}, 1000)
}
