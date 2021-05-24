(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
    });

    wow.init();    

        /* Testimonials Carousel 
    ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        items:5,
        loop:true,
        // margin:10,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        number: 1,
        nav: false,
        dots: true,
        center: true,
        // margin: 15,
        // slideSpeed: 500,
        // stopOnHover: true,
        // autoPlay: true,
        // autoplaySpeed: 1000,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 1
            },
            1200 : {
                items: 1
            },
            1920 : {
                items: 1
            }
        }
      });

      

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

    //   Form Submit Handler
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        fetch('/api/lead/contact_us', {
           method: 'POST',
           mode: 'cors',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               name,
               phone,
               message
           })
        }).then(res => document.getElementById("msgSubmit").innerHTML = "Message Sent!")
    });

  });      

}(jQuery));