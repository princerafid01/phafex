$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.services .row .col-sm-4').hover(function () {
        $('.services .row .col-sm-4').removeClass('active-card');
        $(this).addClass('active-card');
    });

    $('a.bg-green').hover(function () {

        $('a.bg-fff').css('background-color', '#37E679');
        $('a.bg-fff').css('color', '#fff');
    });
    $('a.bg-green').mouseleave(function () {

        $('a.bg-fff').css('background-color', '#fff');
        $('a.bg-fff').css('color', '#37E679');
    });

    $('.testimonial .row').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pullDrag: false,
        mouseDrag: false,
        autoplayTimeout: 3000,
        animateOut: 'slideOut',
        animateIn: 'slideIn',
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        }
    }
    });

    $('.cilents .company-logo').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 4,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pullDrag: false,
        mouseDrag: false,
        autoplayTimeout: 4000,
        animateOut: 'slideOut',
        animateIn: 'slideIn',
        responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true
        }
    }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.main-menu').addClass("sticky");
        } else {
            $('.main-menu').removeClass("sticky");
        }
    });
    

    
    
    // menu
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    // active button
    
     // Active menu link
    $('.main-menu li a').click(function () {
        $('a').removeClass('a-active');
        $(this).addClass('a-active');
        $('a.home-link').removeClass('a-active');
    });
    
    
     
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        
        
        if (height > 600) {
            $('.main-menu li:first-child').addClass("active");
        }
        else {
            $('.main-menu li').removeClass("active");
        }
        
    });
    
    
    $(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	     $('.main-menu li').removeClass("active");
	}
});
    
    
    
    $(".main-menu .col-sm-10").scrollspy({
         offset: 0,
        animate:true
     });
    
    
    $('ul.navigation').slicknav();
});