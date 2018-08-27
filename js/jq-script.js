'use strict';
	$(document).ready(function () {
        var isotope = $('.images').isotope({ // для фильтрации картинок по типу data-filter
            itemSelector: '.images-image',
            percentPosition: true,
            // layoutMode: 'masonry'
            masonry: {
                columnWidth: '.image-sizer',
                gutter: '.gutter-sizer'
                // fitWidth: true
            }
        });
        $('.switchers a').on('click', function (e) {
            $('.switchers li').removeClass('active');
            $(this).parent().addClass('active');
            e.preventDefault();
            var filter = $(this).attr('data-filter');
            filter = filter == '*' ? filter : '.' + filter;
            isotope.isotope({
                filter: filter
            })
        });
        $('.nav__menu a').on('click', function (e) {
            $('.nav__menu li').removeClass('active');
            $(this).parent().addClass('active');
            e.preventDefault();
        });
        $('.footer__icons a').on('click', function (e) {
            $('.footer__icons--list').removeClass('active');
            $(this).parent().addClass('active');
            e.preventDefault();
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() > '850') {
                $('header').css({"background-color": "rgba(89, 89, 89, 0.6)"});
                $('.nav').css({"padding": "0"});
            } else if ($(window).scrollTop() < '850') {
                $('header').css({"background-color": "transparent"});
                $('.nav').css({"padding": "2rem 0"});
            }
        });
        // $('#slider').slick({ //слайдер
        //     arrows: true,
        //     dots: false,
        //     infinite: false,
        //     fade: true,
        //     easing: 'ease-in'
        // });

	});