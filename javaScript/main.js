/*global $*/
$(function () {
    'use strict';

    var $win = $(window);
    var winH = $win.height(); // Get the window height.
    $('.loader').fadeOut(1000); //fadeout loader 

    // FOR PAGE TITLE
    //---------------------------------
    $win.focus(function () {
        document.title = "مصرف الدم زليتن";
    });

    $win.blur(function () {
        document.title = "لا تغادرنا !";
    });

    $win.on("scroll", function () {
        if ($(this).scrollTop() >= winH) {
            $('.to-top').addClass("appear");
        } else {
            $('.to-top').removeClass("appear");

        }
    });
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        console.log(scroll);

        $('.header-content ').css({
            marginTop: scroll / 5 + "px"
        })
    });

    // navigation bar lINKS functions 
    //---------------------------------
    $('.burger').on('click', function () {
        $('.burger').toggleClass('burger-active');
        $('header .navbar ul').toggleClass('sm-nav');
        $('header .navbar ul li').each(function (i) {
            setTimeout(function () {
                $('header .navbar ul li').eq(i).toggleClass('go-up');
            }, 150 * (i + 1));

        });
        $('header .social li').each(function (i) {
            setTimeout(function () {
                $('header .social li').eq(i).toggleClass('slide-social');
            }, 150 * (i + 1));

        });
    });

    $("ul.nav li a").on('click', function () {
        $('header .navbar ul').removeClass('sm-nav');
        $('.burger').removeClass('burger-active');
        $('header .navbar ul li').removeClass('go-up')
        $('html,body').animate({
            scrollTop: $("." + $(this).attr('id')).offset().top
        }, 1000);
    });

    //SCROLL DOWN button and to-top buttun  
    //---------------------------------  

    $(".scroll-down").on('click', function () {
        $('html,body').animate({
            scrollTop: winH
        }, 1000);
    });

    //to top button
    $('.to-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    //Counter Up
    $('.factcounter').counterUp({
        delay: 10,
        time: 3000
    });

    //image preview
    $('.portfolio .col-xs-12 figure').on('click', function () {
        var myImg = $(this).find('img').attr('src');
        $('.portfolio .open-img').css('display', 'flex');
        $('.portfolio .open-img img').attr('src', myImg);
    });
    $('.portfolio .open-img span').on('click', function () {
        $('.portfolio .open-img').css('display', 'none');
    });

    //header slider
    $('.skitter-large').skitter({
        dots: false,
        fullscreen: true,
        stop_over: true,
        navigation: true,
        interval: 5000,
        label_animation: 'fixed'

    });


    //playing video 
    $('.process').on('click', function () {
        $('.vede').fadeIn(500);
    });
    $('.vede svg').on('click', function () {
        $('.vede').fadeOut(500);
        consle.log("22")
    });
    //show map 
    $('.maping').on('click', function () {
        $('.map').fadeIn(500);
    });
    $('.map svg').on('click', function () {
        $('.map').fadeOut(500);
        consle.log("22")
    });
    for (var i = 0; i < $('.detail').length; i++) {
        $('.detail').eq(i).css({
            top: i * $('.detail').height() + "px"
        })
    }
    $('.det-con .row').css({
        height: $('.detail').length * $('.detail').height() + "px",
        width : $('.det-con').width()
    });
    $('.requ').on('click', function () {
        $('.sucsses').fadeIn(500);
    });

});
