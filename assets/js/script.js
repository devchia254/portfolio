 // Function for enabling a responsive menu button
 const menuBtn = (e) => {

  const navBar = document.getElementById("sideNav");
  const style = window.getComputedStyle(navBar);
  const left = style.getPropertyValue("left");

  if (window.matchMedia("(max-width: 700px)").matches && left == "-210px") { // If media query/ viewport width is less than 700px and navbar is outside viewport
    e.classList.toggle("change"); // Toggle menu-icon animation
    navBar.style.left = "0px"; // Shift navbar back to viewport
  } else {
    e.classList.toggle("change");
    navBar.style.left = "-210px";
  }
}

// Listener Function for detecting size of viewport to enable a responsive navbar
const responseNav = (x) => { 

  const navBar = document.getElementById("sideNav");
 
  if (x.matches) { // If media query/viewport width becomes more than 700px 
    navBar.style.left = "0px"; // Shift navbar back to viewport
  } else {
    navBar.style.left = "-210px";
  }
} 

const x = window.matchMedia("(min-width: 700px)");
responseNav(x); // Call listener function at run time
x.addListener(responseNav); // Attach listener function on state changes

//jQuery Function for transitioning between sections of the container
$(document).ready(function() { 

	(function ($) { 
		$('.navbar-main .navlinks').find('> a:eq(0)').addClass('active'); //Adds 

    $('body nav .navbar-main .navlinks a').click(function (g) { 
			var body = $(this).closest('body'), 
          index = $(this).closest('.navbar-main .navlinks a').index();

			body.find('nav .navbar-main .navlinks > a').removeClass('active');
      $(this).closest('a').addClass('active');

      body.find('.container').find('section').not('section:eq(' + index + ')').slideUp(); // Hide the matched elements by sliding up.
      body.find('.container').find('section:eq(' + index + ')').slideDown(); // Display the matched elements by sliding down.
			
			g.preventDefault();
		}); 
	})(jQuery);

});

//jQuery function for Home Section title animation
jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 1500,
		//clip effect 
		revealDuration = 900,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}


	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
      
      if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
      } 
      
      ;

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
    
    if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

    } 
    
    
    else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word) {
    
    if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}


	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}


	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});