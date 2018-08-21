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
        $('#slider').slick({ //слайдер
            autoplay: true,
            arrows: false,
            infinite: true
        });

	});