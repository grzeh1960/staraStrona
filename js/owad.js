$(".startWazka").stop().click(owadAnim);

		function owadAnim(){
		TweenMax.to(".owad", .2, {rotationY: '180deg', delay:1});
		TweenMax.to(".owad", 1, {left: '80%', top: '35%'});
		TweenMax.to(".owad", 1, {left: '80%', top: '5%', delay:2});
		TweenMax.to(".owad", 1, {left: '20%', top: '1%', delay:3});
		TweenMax.to(".owad", .2, {rotationY: '360deg', delay:4});
		TweenMax.to(".owad", 1, {left: '20%', top: '35%', delay:5});
		TweenMax.to(".owad", 1, {left: '50%', top: '10%', delay:6});
	}