$(document).ready(function() {
	$(".savory-thumb").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		helpers	: {
			thumbs	: {
				width	: 50,
				height	: 50
			},
			title: { type: 'inside' }
		}
	});

	$('.savory-trig').click(function(){
		$('.savory-thumb').first().trigger('click');
	});
});
