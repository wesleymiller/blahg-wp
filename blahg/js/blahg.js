jQuery(document).ready(function() {
	jQuery("body").addClass("js");
	if ('ontouchstart' in document.documentElement) {
	} else {
		jQuery("#top-nav").prepend('<h3 class="nav-title">navigation &darr;</h3>');
		var startH = jQuery("#top-nav").height();
		jQuery("#top-nav").animate({"height" : "30px"}, 0);
		jQuery(".post-info, .post-data").animate({"opacity" : "0.0"}, 0);
		jQuery(".single header").animate({"opacity" : "0.0"}, 0);
		jQuery("#top-nav").hover(function() {
			jQuery(this).stop().animate({"height" : startH}, 500);} , function() {
			jQuery(this).stop().animate({"height" : "30px"}, 500);
		});
		jQuery(".post").hover(function() {
			jQuery(this).stop().find(".post-info, .post-data").fadeTo("fast", 1.0)}, function() {
			jQuery(this).stop().find(".post-info, .post-data").fadeTo("fast", 0.0)
		});
		jQuery(".single header").hover(function() {
			jQuery(this).stop().fadeTo("fast", 1.0)}, function() {
			jQuery(this).stop().fadeTo("fast", 0.0)
		});
	}
});
