$(document).ready(function() {
	$(".savory-thumb").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		helpers	: {
			title: { type: 'inside' }
		}
	});

	$('.savory-trig').click(function(){
		$('.savory-thumb').first().trigger('click');
	});
});
