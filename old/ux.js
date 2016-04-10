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
		
		$('.bg-layer-1, .bg-layer-2').css("transform", "translate(0px, "+scrl/1.5+"px)");
		$('.bg-layer-3').css("transform","translate(0px, "+scrl/3+"px)");
		$('.bg-layer-4, .bg-layer-5').css('transform','translate(0px, '+scrl/2+'px)');
		$('.logo').css('transform','translate(0px, '+scrl/2+'px)');

		// NavBar color change shit

		var lgtop = $('.parallax-bg .logo').offset().top;
		if(scrl > lgtop-90 ){
			$(".top-nav").css({"background":"rgba(255,255,255,0.95)", 
				"box-shadow":"0px 2px 5px #ccc",
				"height":"30px"});
			$('.site-name a').css({"color":"#333","font-size":"0.8em"});
			$('.site-logo').css({"color":"white",
								"background":"#333",
								"width":"20px",
								"height":"20px",
								"line-height": "20px",
								"font-size":"0.8em"});
			$('.nav-list ul li a').css({"color":"#333",
										"font-size": "0.8em",
										"padding-bottom":"3px"});
			oldColorOfNavLink = "#333";
		}
		else{
			$(".top-nav").css({"background":"rgba(0,0,0,0.1)",
				"box-shadow":"none",
				"height":"80px"});
			$('.site-name a').css({"color":"white","font-size":"1em"});
			$('.site-logo').css({"background":"rgba(50,150,255,0.5)",
								"width":"40px",
								"height":"40px",
								"line-height": "40px",
								"font-size":"1em"});
			$('.nav-list ul li a').css({"color":"white",
										"font-size":"1em",
										"padding-bottom":"25px"});
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
