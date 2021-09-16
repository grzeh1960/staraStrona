$(".lihaRun").click(function lihaAnim() {

			var tl = new TimelineMax({onComplete:lihaAnim});
			var X = $("#liha").offset().left;
			var ww = $(window).width();



			tl.to("#liha", 0.5, {left: "+=45"});

				if(X > ww) {
					/*return false;*/
					TweenMax.killAll();
					$("#liha").animate({"left": -200}, .1)
					$("#liha").stop(lihaAnim);
				}
});