$(document).ready(function() {
	var tab = $('.tab');
	tab.on('click', function() {
		$('.content').removeClass('content_active');
		$('.content[data-tab='+$(this).attr('data-tab')+']').addClass('content_active');
		$(tab).removeClass('tab_active')
		$(this).addClass('tab_active');
	});

	var overlay = $('.overlay');
	var modal = $('.modal-window');
	var close = $('.close-btn');
	var start = $('.footer-btn');

	start.on('click',function(){
		overlay.addClass('overlay_active');
		modal.addClass('modal-window_active');
	});
	close.click(function() {
		overlay.removeClass('overlay_active');
		modal.removeClass('modal-window_active');
	});
	overlay.click(function() {
		$(this).removeClass('overlay_active');
		modal.removeClass('modal-window_active');
	});
});