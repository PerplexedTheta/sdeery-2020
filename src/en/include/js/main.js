/* sdeery, main.js, greco-roman digital 2020 */
$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar, #content').toggleClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
});

$(".carousel-item").each(function() {
	// vars
	var img_url = $(this).find('img').attr('src');
	
	// apply additional css to centre image and fill
  $(this).css({
    'background-size': 'cover',
    'background-image': 'url(' + img_url + ')',
    'background-position': '50% 50%'
	});
	
	// hide la img (just in case)
  $(this).find('img').hide();
});
