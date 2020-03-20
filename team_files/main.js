/**
 * Cache externally loaded scripts
 */
$.ajaxSetup({cache: true});


/**
 * Script loader
 */
$.when(
	// Scripts
	$.getScript("/files/protofuse.com/theme/js/lib/resize.js"),
	$.getScript("/files/protofuse.com/theme/js/lib/menu.js"),
	$.getScript("/files/protofuse.com/theme/js/lib/slider.js"),
	$.getScript("/files/protofuse.com/theme/js/lib/forms.js"),
	$.getScript("/files/protofuse.com/theme/js/lib/togglers.js"),
	$.getScript("/files/protofuse.com/theme/js/lib/smoothscroll.js"),
	$.getScript("/files/protofuse.com/theme/js/lib/gmap.js"),

	// DOM loaded
	$.Deferred(function(deferred) {
		$(deferred.resolve);
	})
).done(initialize);


/**
 * Initialize scripts needed
 */
function initialize() {
	Fuse.Checkboxes.add();
	setupFormSteps();
	setupTabs();
	setupStickyNav();
	setupIntelligentWebsitesField();
	setupPulse();
	setupBlogFilters();
	setupOurWork();
	setupAjaxForms();
	setupMap();
	setupSmoothScroll();

	new MobileMenu({
		position : ".header.columns",
		items    : [".menu-mobile"]
	});

	// var slider = new ContentSlider(".slider-items");
	// var total = slider.container.children().length;
	// slider.moveTo(total);
	// slider.next();
	setupCarousel();

	setupVideoLinks({
		modal  : true,
		scope  : '.videos a'
	});

	setupVideoLinks({
		modal  : false,
		scope  : '.region.masthead a',
		attach : '.viewport'
	});

	$("[title]").attr("title", "");

	setupOpenClose({
		container : $('#our-content-sticky'),
		openers   : $('#navigation-our-content-sticky'),
		outside   : true,
		action    : { open: "mouseenter" }
	});

	setupOpenClose({
		container : $('#our-content'),
		openers   : $('#navigation-our-content-main'),
		outside   : true,
		action    : { open: "mouseenter" }
	});

	setupOpenClose({
		container : $('#conversions-statistic-tooltip'),
		openers   : $('#conversions-statistic-toggle'),
		outside   : true,
		action    : { open: "mouseenter" }
	});

	setupOpenClose({
		container : $('#form-overlay'),
		togglers  : $('#form-toggle'),
		closers   : $('.masthead-form-close')
	});

	setupOpenClose({
		container : $('.field-selected + .field-drop'),
		togglers  : $('.field-selected'),
		closers   : $('.field-selected + .field-drop a')
	});

	$('.accordion-toggle').each(function() {
		var toggle  = $(this);
		var content = toggle.next('.accordion-content');
		if (content.length) {
			setupOpenClose({
				container : content,
				outside   : false,
				togglers  : toggle
			});
		}
	});

	var scrollEvent = function() {
		$(this).scrollTop() > 0 ? top.addClass('active') : top.removeClass('active');
	};

	var top = $('.sticky-top');
	$(window).on('scroll', scrollEvent);
	scrollEvent();

	$('.intelligent-websites-form').on('submit', function() {
		$(document.body).addClass('--waiting');
	});
}



/**
 * Set up ajax-based form submissions
 */
function setupAjaxForms() {
	$(document.forms).filter('.ajax-form').each(function() {
		$(this).on('submit', function(e) {

			var form = $(this)
				.attr('data-status', 'in-progress');

			var formID = '#' + form.attr('id');

			var request = {
				type        : $(this).attr('method').toUpperCase(),
				url         : $(this).attr('action'),
				data        : form.serialize(),
				cache       : false
			};

			$.ajax(request)
			 .done(function(data) {
			 	// Validation error
			 	if (data) {
			 		form.html($(data).find(formID).html())
			 			.attr('data-status', 'has-error');
					Fuse.Checkboxes.add();
			 	}

			 	// Success
			 	else {
			 		form.attr('data-status', 'is-success')
			 			.find('.error')
			 			.removeClass('error');
			 		form[0].reset();
			 	}
			 })
			 // Unknown error
			 .fail(function() {
				form.off('submit')
					.submit();
			});

			 e.preventDefault();
			// return false;
		});
	});
}


/**
 * Set up the 2-step Intelligent Websites form
 */
function setupFormSteps() {
	var doStep = function(dir) {
		var outgoing = $(this).parents(".form-step");
		var incoming = outgoing[dir](".form-step");

		if (incoming.length) {
			incoming.addClass("active").removeClass("inactive");
			outgoing.addClass("inactive").removeClass("active");
		}

		return false;
	}

	$(document.forms).each(function() {
		$(this).find(".form-step").each(function(index) {
			if (index === 0) {
				$(this).addClass("active");
			}
			else {
				$(this).addClass("inactive");
			}
		});

		$(this).find(".form-step").find("a.prev-step, a.next-step").on("click", function() {
			return doStep.bind(this)($(this).hasClass("prev-step") ? "prev" : "next");
		});
	});
}

function setupIntelligentWebsitesField() {
	var urlField = $('input[name=url]')
	     .addClass('enhanced');

	if (!urlField.length) {
		return;
	}

	var urlCondition = /^[a-z0-9-.]+\.[a-z]+/;

	var validateButton = function(field, button, condition) {
		if ($(field).val().match(condition)) {
			$(button).removeClass('disabled')
				.removeAttr('disabled');
		}
		else {
			$(button).addClass('disabled')
				.attr('disabled', 'disabled');
		}
	}

	var protocol = $('<select name="protocol"></select>')
	     .append('<option value="http">http://</option>')
	     .append('<option value="https">https://</option>')
	     .insertBefore(urlField)
	     .parent().addClass('enhanced');

	var urlButton = urlField.parents('.form-step').find('a.next-step');

	urlField.on('keyup select input change', function() {
		validateButton(urlField, urlButton, urlCondition);
	});

	var nameField = $('input[name=name]');

	if (!nameField.length) {
		return;
	}

	var nameCondition = /^[A-Za-z0-9 -.]+$/;

	var nameButton = nameField.parents('.form-step').find('input[type=submit]');

	nameField.on('keyup select input change', function() {
		validateButton(nameField, nameButton, nameCondition);
	});

	validateButton(urlField, urlButton, urlCondition);
	validateButton(nameField, nameButton, nameCondition);
}

function setupPulse() {
	$('.home-page .region.before')
		.addClass('pulse')
		.on('click', function() {
			$(this).removeClass('pulse');
		});
}


/**
 * Set up youtube video links
 */
function setupVideoLinks(options) {
	var links = $(options.scope || document.links).filter("[href*='youtube.com/watch?v=']"),
		overlay,
		frame,
		player,
		viewport,
		close;

	if (!links.length) {
		return;
	}

	var add = function(youtubeid) {
		overlay = $('<div class="video-overlay' + (options.modal ? ' video-modal' : '') + '"></div>')
			.append(player = $('<div class="video-player"></div>')
				.append(viewport = $('<div class="video-viewport"></div>')
					.append(frame = $('<iframe class="video-frame" src="//www.youtube.com/embed/' + youtubeid + '?autoplay=1&rel=0" />'))))
			.append(close = $('<a class="video-close"><img src="/files/protofuse.com/theme/img/close.svg" alt="Close" width="36" height="36" /></a>'))
			.appendTo($(options.attach || 'body').first());

		close.on("click", remove);

		if (options.modal) {
			$(document.body).on("click", function(e) {
				if (player && !$.contains(player.get()[0], e.target) && !player.is(e.target)) {
					$(this).off('click');
					remove();
				}
			});
		}
	};

	var remove = function() {
		overlay.remove();
		overlay = frame = player = viewport = close = null;
	};

	var directLinked = false;

	links.each(function() {
		$(this).data('youtubeid', $(this).attr("href").match(/\?v=([a-zA-Z0-9_-]+)/)[1]);
		$(this).on("click", function() {
			add($(this).data('youtubeid'));
			return false;
		});
		if ($(this).attr('data-direct-link') && !directLinked) {
			directLinked = true;
			add($(this).data('youtubeid'));
		}
	});
}


/**
 * Set up content tabs
 */
function setupTabs() {
	$('.tabs').each(function() {
		var togglers = $(this).find('.tabs-toggle');
		var content  = $(this).find('.tabs-content');

		togglers.on('click', function() {
			if ($(this).hasClass('active')) {
				return;
			}

			togglers.add(content).removeClass('active');
			$(this).add($(this).next('.tabs-content')).addClass('active');
		});

		var hash   = window.location.hash.slice(1);
		var active = 0;

		if (hash) {
			togglers.each(function(index) {
				if ($(this).attr('id') && $(this).attr('id') === hash) {
					active = index;
				}
			});
		}

		$(togglers[active]).add($(togglers[active]).next('.tabs-content')).addClass('active');
	});
}


/**
 * Setup our work fake pagination
 */
function setupOurWork() {
	var container = $('.region.our-work');

	if (!container.length) {
		return;
	}

	var next    = 0,
		per     = 4,
		clients = container.find(".clients a"),
		more    = container.find(".our-work-button a");

	var showMore = function() {
		var start = next,
			end   = Math.min(next + per, clients.length);

		for (var i = start; i < end; i++) {
			$(clients[next++]).addClass('active');
		}

		if (next >= clients.length) {
			more.removeClass("active");
		}

		return false;
	}

	showMore();
	more.addClass("active")
		.on("click", showMore);
}


/**
 * Setup blog filters
 */
function setupBlogFilters() {
	var drop     = $('.field-selected + .field-drop');
	var selected = $('.field-selected');
	var active   = drop.find('a.active');

	if (!drop.length || !selected.length) {
		return;
	}

	drop.find('a').on('click', function() {
		selected.text($(this).find('.item-label').text() || "Filter by type...");
	});

	if (active.length) {
		selected.text(active.find('.item-label').text() || "Filter by type...");
	}
}


/**
 * (R.A.) Set up sticky navigation
 */
function setupStickyNav() {
	var headerSticky = document.getElementsByClassName("header sticky")[0];

	if (headerSticky == null) {
		return;
	}

	var currentScrollPosition = document.body.scrollTop + document.documentElement.scrollTop;
	var prevScrollPosition;
	var scrollUpDelay = 0;

	window.onscroll = function() {
		currentScrollPosition = document.body.scrollTop + document.documentElement.scrollTop;

		if (currentScrollPosition < prevScrollPosition && currentScrollPosition >= 69) {
			if (scrollUpDelay == 0) {
				scrollUpDelay = prevScrollPosition;
			}

			if (headerSticky.className != "columns header sticky active" && scrollUpDelay > (currentScrollPosition + 200)) {
				headerSticky.className = "columns header sticky active";
			}
		} else {
			if (headerSticky.className != "columns header sticky") {
				headerSticky.className = "columns header sticky";
			}
			scrollUpDelay = 0;
		}

		prevScrollPosition = currentScrollPosition;
	};
}


/**
 * Generate a Google Map widget
 */
function setupMap() {
	var container   = $("#map-canvas"),
		hcolor      = "#E87722",
		coordinates = ['28.565868', '-81.325988'],
		icon        = 'https://www.protofuse.com/files/protofuse.com/images/logos/pin.svg',
		markers     = [],
		zoom        = 16;

	var info =  "<strong>ProtoFuse, Inc.</strong><br>" +
				"1450 Lake Baldwin Lane<br>" +
				"Suite A<br>" +
				"Orlando, Florida 32814<br>" +
				"<a href=\"tel:+1-407-745-4560\">(407) 745-4560</a><br>" +
				"<a href=\"http://maps.google.com/maps?hl=en&f=d&daddr=1450+Lake+Baldwin+Lane+Suite+A+Orlando%2C+FL+32814\" target=\"_blank\">Directions</a>";

	if (container.length) {

		markers.push({
			position: [coordinates[0], coordinates[1]],
			title   : 'ProtoFuse, Inc.',
			icon: icon
		});

		var map = new GoogleMap(container, markers, {
			mapSettings : {
				center    : ['28.565868', '-81.325988'],
				zoom      : zoom,
				mapTypeId : 'terrain'
			}
		});
	}

	var infowindow;

	$(map).on("mapReady", function() {
		infowindow = new google.maps.InfoWindow({
			content : info
		});

	});

	$(map).on("clickMarker", function(e, index, marker) {
		infowindow.open(map, marker);
	});
}


/**
 * Generate the client logo carousel
 */
function setupCarousel() {
	$('.slider').each(function() {
		var container = $(this).find('.slider-items');
		var items     = $(this).find('.image');

		container.css('width', items.width() * items.length);
		container.append(items.clone()).addClass('active');
	});
}


/**
 * Smooth scrolling
 */
function setupSmoothScroll() {
	var uri = location.pathname.replace(/^\//, '');

	$('a[href*="#"]:not([href="#"])').on("click", function(e) {
		var href = this.pathname.replace(/^\//, '');

		if (uri == href && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			var offset = target.offset().top;
			var sticky = $(".sticky-header");

			if (sticky.length && sticky.hasClass("active")) {
				offset -= sticky.height();
			}

			if (target.length) {
				$("html, body").animate({
					scrollTop: offset
				}, 250);
				return false;
			}
		}
	});
}


/**
 * This was the old conversion counter code
(function($) {
	var conversions = $(".ajax-conversions");
	if (!conversions.length) {
		return;
	}

	conversions.html('<img src="/wp-content/uploads/loading.gif" alt="" />');

	function counter(element, value) {
		element.prop("data-count", 0).animate({
			"data-count": value
		}, {
			duration : 2000,
			easing   : "swing",
			step     : function(current) {
				element.text(Math.ceil(current).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
			}
		});
	}

	$.ajax({
		url : "/wp-content/themes/quince/inc/analytics/GoogleAnalyticsConversions.php"
	}).done(function(result) {
		counter(conversions, result);
	});
})(jQuery);
 */