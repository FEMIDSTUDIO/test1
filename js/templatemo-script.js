/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').click(function(){
		$('.tm-nav').slideToggle();
	});

	$( window ).resize(function() {
		if($( window ).width() > 767) {
			$('.tm-nav').show();
		} else {
			$('.tm-nav').hide();
		}
	});

  // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  $('body').bind('touchstart', function() {});

  // Smooth scroll
  // https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

$(window).load(function() {
	// Remove preloader
	// https://ihatetomatoes.net/create-custom-preloading-screen/
	$('body').addClass('loaded');
});

function look(elemId,aId) {
  for (let i=1; i<=12; i++) {
	var elem = document.getElementById("link"+i);
	elem.style.display = "none";
	document.getElementById("maina"+i).style.color = "#7c6a51";
  }
  var elem = document.getElementById(elemId);
  document.getElementById(aId).style.color = "#e4c989";
  elem.style.display === "none" ?
    elem.style.display = "block" : elem.style.display = "none";
}

function look2(elemId,aId) {
  for (let i=1; i<=5; i++) {
	var elem = document.getElementById("clink"+i);
	elem.style.display = "none";
	document.getElementById("cmaina"+i).style.color = "#7c6a51";
  }
  var elem = document.getElementById(elemId);
  document.getElementById(aId).style.color = "#e4c989";
  elem.style.display === "none" ?
    elem.style.display = "block" : elem.style.display = "none";
}
function getInfo(elemId) {
  for (let i=1; i<=15; i++) {
	  var elem = document.getElementById("info"+i);
	  elem.style.display = "none";
  }
  var elem = document.getElementById("close-info")
  elem.style.display = "block";
  var elem = document.getElementById(elemId)
  elem.style.display === "none" ?
    elem.style.display = "block" : elem.style.display = "none";
}
function closeInfo() {
  for (let i=1; i<=15; i++) {
	  var elem = document.getElementById("info"+i);
	  elem.style.display = "none";
  }
  var elem = document.getElementById("close-info");
  elem.style.display = "none";
}