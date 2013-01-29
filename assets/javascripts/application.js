$(document).ready(function() {
	$(".savory-thumb, .deepsee-thumb, .greasemonkey-thumb, .resolver-thumb, .nessquik-thumb, .fsf-thumb").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		helpers	: {
			title: { type: 'inside' }
		}
	});

	$('.savory-trig').click(function(){
		$('.savory-thumb').first().trigger('click');
	});
	$('.deepsee-trig').click(function(){
		$('.deepsee-thumb').first().trigger('click');
	});
	$('.greasemonkey-trig').click(function(){
		$('.greasemonkey-thumb').first().trigger('click');
	});
	$('.resolver-trig').click(function(){
		$('.resolver-thumb').first().trigger('click');
	});
	$('.nessquik-trig').click(function(){
		$('.nessquik-thumb').first().trigger('click');
	});
	$('.fsf-trig').click(function(){
		$('.fsf-thumb').first().trigger('click');
	});
});
