$(document).ready(function(){
	//toggle click + cursor 
	$('.js-nav-secondary-toggle').on('click', function(){
		$(this).parent().next('.nav-breadcrumb-child').toggleClass('is-collapsed');
	
		//toggle click - cursor
		if($(this).hasClass('is-closed')) { 
			($(this).removeClass('is-closed').text('-'));
		}

		else {
			($(this).addClass('is-closed').text('+'));
		}
	});



/*
Step 1: Natural language: if our toggle is closed -> do this -> else do this
Step 2: Translate that into the basic JS syntax:
	$('.js-nav-toggle').hasClass('is-closed') 
	then$('.js-nav-toggle').removeClass('is-closed').text('-')
	else$('.js-nav-toggle').addClass('is-closed').text('+');
Step 3: Fix the syntax:
*/


	//toggle click + cursor 
	$('.js-nav-primary-toggle').on('click', function(e){
		console.log('click');
		e.preventDefault(); 
		$(this).next('.nav-primary-level-2').toggleClass('is-collapsed');
	
		//toggle click - cursor
		if($(this).hasClass('is-closed')) { 
			($(this).removeClass('is-closed').text('-'));
		}

		else {
			($(this).addClass('is-closed').text('+'));
		}
	});



	//toggle click + cursor 
	$('.js-header-login-toggle').on('click', function(e){ //Notice the "e" here, which means don't try to follow a link (since it's an a class). If it doesn't have this and the next line, it will send the user to the top of the page when she clicks it.
		e.preventDefault(); 
		$(this).siblings('.header-login-content').toggleClass('is-collapsed');
	});
	//toggle click + cursor 

	// $('.js-nav-primary-toggle').on('click', function(e){ //Notice the "e" here, which means don't try to follow a link (since it's an a class). If it doesn't have this and the next line, it will send the user to the top of the page when she clicks it.
	// 	console.log('click');
	// 	e.preventDefault(); 
	// 	$(this).parent().next('.nav-primary-content').toggleClass('is-collapsed');
	// });
	// This is the JS that we came up with to use on the main nav before we put a hover on the flyouts. 
}); 