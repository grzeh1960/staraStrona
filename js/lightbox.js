	$(document).ready(function() {

				var activeImg;
				var urlImg;

				// ###################################
				// OPEN & CLOSE LIGHTBOX
				// ###################################

				$("img").stop().click(function() {
					urlImg = $(this).attr("src");

					$("#lightBox #lightBoxInside #imgInside img").attr("src", urlImg);
					$("#lightBox").fadeIn(500);

					activeImg = $(this);
				});

				$(".fa-times").stop().click(function() {
					$("#lightBox").fadeOut(500);
				});

				// #############################################
				// NEXT IMAGES
				// #############################################

				$(".fa-chevron-right").stop().click(function() {
					nextImg(activeImg);

				})

				function nextImg(object) {
					if ($(object).next().is("img")) {
						activeImg = $(object).next();
						urlImg = $(object).next("img").attr("src");
						$("#lightBox #lightBoxInside img").attr("src", urlImg);
					} else {
						activeImg = $(object).parent().children("img").first();
						imgUrl = $(object).parent().children("img").first().attr("src");
						$("#lightBox #lightBoxInside img").attr("src", imgUrl);

					}
				}

				// ##############################################
				// PRV IMAGES
				// ##############################################

				$(".fa-chevron-left").stop().click(function() {
					prvImg(activeImg);
				})

				function prvImg(object) {
					if ($(object).prev().is("img")) {
						activeImg = $(object).prev();
						urlImg = $(object).prev("img").attr("src");
						$("#lightBox #lightBoxInside img").attr("src", urlImg);
					} else {
						activeImg = $(object).parent().children("img").last();
						imgUrl = $(object).parent().children("img").last().attr("src");
						$("#lightBox #lightBoxInside img").attr("src", imgUrl);
					}
				}

});





