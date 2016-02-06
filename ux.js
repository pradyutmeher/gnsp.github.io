var oldColorOfNavLink = "white";

/*$(window).load(function(){
	$('.loading').css('visibility', 'hidden');
});*/

$(document).ready(function(){

	$('.loading').css('visibility', 'hidden');

	setInterval(function(){
		var x = Math.floor((Math.random() * 100) + 1) % 50;
		if(x == 11){
			$('.bg-layer-5').css('visibility', 'hidden');
		}
		else{
			$('.bg-layer-5').css('visibility', 'visible');
		}
	}, 100);



	$(window).scroll(function(){
		var scrl = $(this).scrollTop();

		// Parallax Shit
		
		$('.bg-layer-1, .bg-layer-2').css("transform", "translate(0px, "+scrl/4+"px)");
		$('.bg-layer-3').css("transform","translate(0px, "+scrl/5+"px)");
		$('.bg-layer-4, .bg-layer-5').css('transform','translate(0px, '+scrl/2+'px)');
		$('.logo').css('transform','translate(0px, '+scrl/2+'px)');

		// NavBar color change shit

		var lgtop = $('.parallax-bg .logo').offset().top;
		if(scrl > lgtop-90 ){
			$(".top-nav").css({"background":"rgba(255,255,255,0.9)", 
				"box-shadow":"0px 2px 5px #ccc"});
			$('.site-name a').css("color","#333");
			$('.site-logo').css("borderColor", "#333");
			$('.nav-list ul li a').css("color","#333");
			oldColorOfNavLink = "#333";
		}
		else{
			$(".top-nav").css({"background":"rgba(0,0,0,0.5)",
				"box-shadow":"none"});
			$('.site-name a').css("color","white");
			$('.site-logo').css("borderColor", "white");
			$('.nav-list ul li a').css("color","white");
			oldColorOfNavLink = "white";
		}
	});


	$('.nav-list ul li a').hover(
		function(){
			$(this).css("color","#f83");
		},

		function(){
			$(this).css("color", oldColorOfNavLink);
		}
	);




});
