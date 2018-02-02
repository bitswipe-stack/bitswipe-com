

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Test-i Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 60
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team, #Clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
		   autoPlay: 3000, //Set AutoPlay to 3 seconds
		   
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	 

  	});
	
	
	
	
	
	


 /*====================================
    video
    ======================================*/
$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});

$("#watch-video").on('hidden.bs.modal', function (e) {
    $("#watch-video iframe").attr("src", $("#watch-video iframe").attr("src"));
});

 /*====================================
    counter
    ======================================*/
	
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 500) {
        $(window).off("scroll", startCounter);
$('.Count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 15000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

	}
}


//$(window).scroll(startCounter);
//function startCounter() {
//    if ($(window).scrollTop() > 200) {
//        $(window).off("scroll", startCounter);
//        $('.Count').each(function () {
//            var $this = $(this);
//            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//                duration: 1000,
//                easing: 'swing',
//                step: function () {
//                    $this.text(Math.ceil(this.Counter));
//                }
//            });
//        });
//    }
//}




/*====================================
owlCarousel
    ======================================*/

$(document).ready(function() {
 
  $("#team2").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 2,
      
 
  });
 
});








/*=====================================
calender
*/
$(document).ready(function() {
  // page is now ready, initialize the calendar...
  // options and github  - http://fullcalendar.io/

$('#calendar').fullCalendar({
   // dayClick: function() {
    //    alert('a day has been clicked!');
    //}
});

});
/*========================================
Video
=========================================*/



//var vid = document.getElementById("bgvid");
//var pauseButton = document.querySelector("#polina button");

//function vidFade() {
//  vid.classList.add("stopfade");
//}

//vid.addEventListener('ended', function()
//{
// only functional if "loop" is removed 
//vid.pause();
// to capture IE10
//vidFade();
//}); 








  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();