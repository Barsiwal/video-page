(function () {
	var button = $(".nav-circle");
	var close = true;
	var menu = $("#menu");
	button.click(function () {
		if (close === false) {
			close = true;
			menu.removeClass('expand');
			setTimeout(function () {
				menu.removeClass('expand');
			}, 250);
		} else {
			close = false;
			menu.addClass('expand');
			setTimeout(function () {
				menu.addClass('expand');
			}, 250);
		}
	});
})();
(function () {
	var button = $(".follow-click");
	var close = true;
	var menu = $(".follow");
	button.click(function () {
		if (close === false) {
			close = true;
			menu.removeClass('expand');
			setTimeout(function () {
				menu.removeClass('expand');
			}, 250);
		} else {
			close = false;
			menu.addClass('expand');
			setTimeout(function () {
				menu.addClass('expand');
			}, 250);
		}
	});
})();
(function () {
	var i, counter = $('.msg-container>div').length;
	var prev = $('.prev'),
		next = $('.next');
	prev.click(function () {
		if (counter > 1) {

			$('.msg-container>div:nth-child(' + counter + ')').addClass('expand-page');
			counter--;
			setTimeout(function () {
				$('.msg-container>div:nth-child(' + counter + ') div').removeClass('hide-page');
				}, 0);
		}
	});
	next.click(function () {
		if (counter < $('.msg-container>div').length) {
			counter++;
			$('.msg-container>div:nth-child(' + counter + ')').removeClass('expand-page');
			counter--;
				$('.msg-container>div:nth-child(' + counter + ') div').addClass('hide-page');
			counter++;
		}
	});

})();
