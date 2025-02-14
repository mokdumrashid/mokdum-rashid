(function($) {
  "use strict";
  
    
      /* Loader Code Start */
      $(window).on("load", function() { 
          $(".section-loader").fadeOut("slow");
          
          var $container = $('.portfolioContainer');
          $container.isotope({
              filter: '*',
              animationOptions: {
                  queue: true
              }
          });
       
          $('.portfolio-nav li').click(function(){
              $('.portfolio-nav .current').removeClass('current');
              $(this).addClass('current');
       
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                      queue: true
                  }
               });
               return false;
          });
        });
      /* Loader Code End */
  
   
    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */
    
    var trigger = $('.navbar-toggler'),
      overlay     = $('.overlay'),
      navc     = $('.navbar-collapse'),
      active      = false;
  

      $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
          $('.navbar-toggler').toggleClass('active')
        //   $('#js-navbar-menu').toggleClass('active');
        //   $('.navbar-collapse').toggleClass('show');
          overlay.toggleClass('active');
          navc.toggleClass('active');
      });  
      
          	
	
    /*
    |===============
    | WOW ANIMATION
    |==================
    */
	var wow = new WOW({
	  mobile: false  // trigger animations on mobile devices (default is true)
		});
    wow.init();     
       
  
    /*
    |=========================
    |Carousel Slider Interval
    |=========================
    */   
    
	$('.carousel').carousel({
		interval: 2500
	})
	
	/*
    |=========================
    |Carousel Slider Interval
    |=========================
    */  
	var words = ['Software Developer|', 'Oracle Apex Developer|', 'Data Analyst|', 'Database Administrator|'],
		part,
		i = 0,
		offset = 0,
		len = words.length,
		forwards = true,
		skip_count = 0,
		skip_delay = 15,
		speed = 70;
	var wordflick = function () {
	  setInterval(function () {
		if (forwards) {
		  if (offset >= words[i].length) {
			++skip_count;
			if (skip_count == skip_delay) {
			  forwards = false;
			  skip_count = 0;
			}
		  }
		}
		else {
		  if (offset == 0) {
			forwards = true;
			i++;
			offset = 0;
			if (i >= len) {
			  i = 0;
			}
		  }
		}
		part = words[i].substr(0, offset);
		if (skip_count == 0) {
		  if (forwards) {
			offset++;
		  }
		  else {
			offset--;
		  }
		}
		$('.position-word').text(part);
	  },speed);
	};

	$(document).ready(function () {
	  wordflick();
	});
	/*
	|===============
    | Sticky Navbar
    |==================
    */
	window.onscroll = function() {myFunction()};

		var navbar = document.getElementById("stcky_nv");
		var sticky = navbar.offsetTop;

		function myFunction() {
		  if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky")
		  } else {
			navbar.classList.remove("sticky");
		  }
		}
	
    
}(jQuery));
