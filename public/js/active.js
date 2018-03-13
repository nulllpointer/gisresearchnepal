(function($) {
    "use strict";

    // jquery document ready function
    jQuery(document).on('ready', function() {

        function imran_constructo_js() {
            // constructo variable
            var windowS = $(window),
                windowH = windowS.height(),
                WelcomeTexS = $('.welcome-text'),
                WelcomeH = WelcomeTexS.height(),
                menuS = $('.constructo-navtop-area'),
                MenuH = menuS.height(),
                BannerH = (windowH - MenuH),
                middleP = ((BannerH - WelcomeH) / 2),
                contsH = $('.constructo-home-area'),
                contsMenu = $('.constructo-menu-area'),
                SearchBoxS = $('.searchboxinput'),
                closebtnS = $('.closebtn'),
                searchbtnS = $('.searchbtn');

            contsH.css('height', BannerH);
            WelcomeTexS.css({
                paddingTop: middleP + 'px',
                paddingBottom: middleP + 'px',
            });
            // Sticky Menu
            windowS.on('scroll', function() {
                if ($(this).scrollTop() > windowH) {
                    contsMenu.addClass("sticky");
                } else {
                    contsMenu.removeClass("sticky");
                }
            });

            searchbtnS.on('click', function() {
                SearchBoxS.fadeIn();
                closebtnS.fadeIn();
                $(this).fadeOut();
            });
            closebtnS.on('click', function() {
                SearchBoxS.fadeOut();
                closebtnS.fadeIn();
                $(this).fadeOut();
            });
        }

        function parallax_config() {

            if ($.fn.parallax) {
                $('.parallax-window').parallax({
                    zIndex: -1000
                });
            }

            if ($.fn.parallax) {
                $('.parallax-windowf').parallax({
                    zIndex: -1000
                });
            }
        }
        if ($.fn.slick) {
            $('.home-slider-active').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 4000,
                prevArrow: '<button type="button" class="slick-prev homeprev fa fa-angle-left"></button>',
                nextArrow: '<button type="button" class="slick-next homenext fa fa-angle-right"></button>',
            });
        }

        if ($.fn.slick) {
            $('.features-side-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow: '<button type="button" class="slick-prev side-sliderprev fa fa-angle-left"></button>',
                nextArrow: '<button type="button" class="slick-next side-slidernext fa fa-angle-right"></button>',
            });
        }
        if ($.fn.slick) {
            $('.single-news-active').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow: '<button type="button" class="slick-prev singlepos-sliderprev fa fa-angle-left"></button>',
                nextArrow: '<button type="button" class="slick-next singlepos-slidernext fa fa-angle-right"></button>',
            });
        }
        if ($.fn.slick) {
            $('.widget-sider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                vertical: true,
                autoplaySpeed: 4000,
                prevArrow: '<button type="button" class="slick-prev widgetprev fa fa-angle-up"></button>',
                nextArrow: '<button type="button" class="slick-next widgetnext fa fa-angle-down"></button>',
            });
        }


        if ($.fn.slick) {
            $('.active-team-slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: true,
                arrows: false,
                responsive: [{
                    breakpoint: 780,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }]

            });

        }

        if ($.fn.slick) {
            $('.constructo-brand-slider').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: false,
                arrows: false,
                responsive: [{
                    breakpoint: 1400,
                    settings: {
                        arrows: false,
                        slidesToShow: 5
                    }
                }, {
                    breakpoint: 1100,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 780,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }]

            });
        }

        if ($.fn.slick) {
            // client slider 
            $('.detailst-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.details-nav',
            });
        }
        if ($.fn.slick) {
            $('.details-nav').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.detailst-for',
                dots: false,
                centerMode: true,
                focusOnSelect: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev clientprev fa fa-angle-left"></button>',
                nextArrow: '<button type="button" class="slick-next clientnext fa fa-angle-right"></button>',
                responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5
                    }
                }, {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        }

        $('.details-nav .slick-slide.slick-active').next().addClass('opacity0');

        $('.widget-single-slider.slick-slide.slick-current.slick-active').addClass('beforen');
        if ($.fn.slick) {
            $('.active-news-slider').slick({
                slidesToShow: 5,
                arrows: false,
                dots: true,
                responsive: [{
                    breakpoint: 1400,
                    settings: {
                        arrows: false,
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 1100,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 780,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }]
            });
        }
        // jquery window load function
        jQuery(window).on('load', function() {
            parallax_config()
            imran_constructo_js();
            $('#preloader').fadeOut('slow', function() {
                $(this).remove();
            });
        });
        // jquery magnifiq active
        $('.magnifiq').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });
        // jquery rippler active
        $(".rippler").rippler({
            effectClass: 'rippler-effect',
            effectSize: 0 // Default size (width & height)
                ,
            addElement: 'div' // e.g. 'svg'(feature)
                ,
            duration: 400
        });

        // jquery window resize function
        jQuery(window).on('resize', function() {
            imran_constructo_js();
            parallax_config();

        });

        // jqeury collapse code
        $('.collapse.in').prev('.panel-heading').addClass('active');
        $('#accordion, #bs-collapse')
            .on('show.bs.collapse', function(a) {
                $(a.target).prev('.panel-heading').addClass('active');
            })
            .on('hide.bs.collapse', function(a) {
                $(a.target).prev('.panel-heading').removeClass('active');
            });

        // isotop active
        if ($.fn.isotope) {
            $(".isotop-active").isotope({
                filter: '*',
            });

            $('.isotop-nav ul li').on('click', function() {

                $(".isotop-nav ul li").removeClass("current");
                $(this).addClass("current");

                var selector = $(this).attr('data-filter');
                $(".isotop-active").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'easeOutCirc',
                        queue: false,
                    }
                });
                return false;
            });
        }
        // jquery countdown active
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
        // jquery scroll to code
        $('.scroll-top').on('click', function() {
            $('body,html').animate({
                scrollTop: 0,
            }, 500);
        });
        // Change navbar header Icon on click
        $(".navbar-toggle").on("click", function() {
            $(this).toggleClass("active");
        });
        // jqeury video background code
        if ($.fn.YTPlayer) {
            $(".tubular").YTPlayer();
        }


    });


})(jQuery);
