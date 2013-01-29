$(document).ready(function() {
	var items;

	items = [
		'savory', 'deepsee', 'greasemonkey', 'resolver', 'nessquik', 'fsf',
		'portscanmenow'
	];

	$.each(items, function(idx, value) {
		$("." + value + "-thumb").fancybox({
			prevEffect: 'none',
			nextEffect: 'none',
			helpers	: {
				title: { type: 'inside' }
			}
		});

		$('.' + value + '-trig').click(function(){
			$('.' + value + '-thumb').first().trigger('click');
		});
	});
});
