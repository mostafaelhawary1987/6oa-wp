

$(document).ready(function(){
	// if(document.dir=="rtl"){
	// 	var dir_d=true;
	// }
	// else{
	// 	var dir_d=false;
	// }
    // $('.slider-head').owlCarousel({
    //     autoplay: false,
    //     rtl:dir_d,
    //     loop: true,
    //     nav: true,
    //     items: 1,
    //     dots:true,
	// 	navText: ["<i class='fa fa-angle-right' aria-hidden='true'></i>","<i class='fa fa-angle-left' aria-hidden='true'></i>"],

    // }); 
     $('.partner_slider').owlCarousel({
		items:5,
		autoplay:false,
		rtl:true,
		loop: true,
		margin:18,
		nav:false,
       
		responsive:{
			0:{
				items:1
			},
			425:{
				items:2
			},
			768:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:4
			},
			1200:{
				items:5
			}
		}
	}); 
     $('.testimonials_slider').owlCarousel({
		
		autoplay:false,
		rtl:true,
		loop: true,
		margin:18,
		nav:false,
       dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			991:{
				items:2
			},
			1199:{
				items:3
			},
			1200:{
				items:3
			}
		}
	}); 

$("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
});


});

$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");


    });
});
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.menu-head').addClass('fixedheader');
  } else {
    $('.menu-head').removeClass('fixedheader');
  }
}




