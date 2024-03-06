function containerW() {
	let container = $('.container-fluid').width();
	let screen = $(window).width();
	let ml = $('.ml-container');
	let pl = $('.pl-container');

	if (screen.width >= 992) {
		if (ml.length) {
			ml.css('margin-left', (screen - container) / 2);
		}

		if (pl.length) {
			pl.css('padding-left', (screen - container) / 2);
		}
	}
}

function headerScrollSticky() {
	var scrollTop;
	var header = $('header');
	var headerHeight = header.innerHeight();
	var wd;

	$('body').css('margin-top', headerHeight);

	if (screen.width >= 992) {
		$(document).on('mousewheel DOMMouseScroll', function (event) {
			event.preventDefault();
			wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

			if (wd < 0) {
				header.css({
					transform: 'translateY(-100%)',
					transition: 'transform .2s linear, padding .1s ease-in'
				});
			} else {
				header.css({
					transform: 'translateY(0)',
					transition: 'transform .2s linear, padding .1s ease-in'
				});
			}
		});
	}

	$(window).scroll(function (event) {
		scrollTop = $(window).scrollTop();

		if (scrollTop > headerHeight) {
			header.addClass('sticky');
		} else {
			header.removeClass('sticky');
		}
	});
}

function mobileMenu() {
	let menu = $('.header-menu');
	let btnOpen = $('.btn-hamburger');
	let btnClose = $('.btn-close-menu');

	if (screen.width < 1200) {
		btnClose.hide();
		menu.find('ul > li').children('ul').hide();

		btnOpen.click(function () {
			menu.find('ul').addClass('show');
			btnClose.fadeIn(200);
		});

		btnClose.click(function () {
			menu.find('ul').removeClass('show');
			btnClose.fadeOut(200);

			// setTimeout(() => {
			// 	menu.find('ul > li').children('ul').hide();
			// 	menu.find('ul > li > a').removeClass('active');
			// }, 400);
		});

		menu.find('ul > li > a').click(function () {
			$(this).toggleClass('active');
			$(this).siblings().slideToggle();
		});
	}
}

function headerSearchDropdown() {
	let body = $('body');
	let html = "<div class='overlay-header-dropdown'></div>";
	let header = $('.header');
	let headerHeight = header.outerHeight(true);
	let dropdown = $('.header-form-search');
	let button = $('.btn-search-toggle');
	let btnClose = $('#btnClose-dropdownForm');
	let overlay;

	// hide dropdown search
	dropdown.css('top', headerHeight);
	dropdown.hide();

	// create html overlay
	body.append(html);

	// hide overlay
	overlay = $('.overlay-header-dropdown');
	overlay.hide();

	// open form search dropdown
	button.click(function (e) {
		e.preventDefault();
		dropdown.fadeIn('fast');
		overlay.fadeIn('fast');
	});

	// btn close form
	btnClose.click(function (e) {
		e.preventDefault();
		dropdown.fadeOut('fast');
		overlay.fadeOut('fast');
	});

	// detech outside click
	$(document).mouseup(function (e) {
		if (
			!dropdown.is(e.target) &&
			dropdown.has(e.target).length === 0 &&
			!header.is(e.target) &&
			header.has(e.target).length === 0
		) {
			dropdown.fadeOut('fast');
			overlay.fadeOut('fast');
		}
	});

	$(window).scroll(function () {
		let headerScroll = $('.header').outerHeight(true);
		dropdown.css('top', headerScroll);
	});

	// check if scoll down - off header box dropdown
	$(document).on('mousewheel DOMMouseScroll', function (event) {
		event.preventDefault();
		wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

		if (wd) {
			dropdown.fadeOut('fast');
			overlay.fadeOut('fast');
		}
	});
}

$(document).ready(function () {
	// containerW();
	// headerSearchDropdown();
	// mobileMenu();
	// headerScrollSticky();
	//mobileMenuToggle();
});
