$(function(){
	$(window).scroll(function(){
		// Desktop Only
		if ($(window).width() > 500) {
			// Hide / Show Nav
			if ($(this).scrollTop() > 300) {
				$('.nav.detached').slideDown(200);
			} else {
				$('.nav.detached').slideUp(200);
			}
			// Hide Show Backtotop
			if ($(this).scrollTop() > 300) {
				$('.backtotop').fadeIn(200);
			} else {
				$('.backtotop').fadeOut(200);
			}
		}
	});

	$('.opencontact').click(function(){
		$('.contactform').slideDown(200);
		return false;
	});

	$('.closecontact').click(function(e){
		e.preventDefault();
		$('.contactform').slideUp(200, function () {
			$('input,textarea').val('');
		})
		return false;
	});

	function scrollTo(elm) {
		console.log('scroll to', elm)
		var offset = elm && $(elm).offset().top || 0;
		if (Math.abs($(window).scrollTop() - offset) > 100) {
			$('html, body').velocity("stop");
			$('html, body').velocity("scroll", { duration: 1000, offset: offset });
		}
	}

  $('.totop').click(function(){
		scrollTo();
		return false;
  });

	$(".towork").click(function (){
		scrollTo("#work")
		return false;
	});

	$(".tocontact").click(function (){
		scrollTo("#contact")
		return false;
	});

	$(".toresume").click(function (){
		$(".resume").slideDown();
		$("body,html").css("overflow-y", "hidden");
		return false;
	});

	$(".resume").on("click", ".closeresume", function (){
		$(".resume").slideUp();
		$("body,html").css("overflow-y", "scroll");
		return false;
	});


	$(".resume").load("resume/index.html", function () {
		$(".home").velocity("fadeIn", { duration: 2000 });
	});
});
