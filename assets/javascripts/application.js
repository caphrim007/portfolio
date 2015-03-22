$(document).ready(function() {
	var items;

	items = [
		'savory',
        'deepsee',
        'greasemonkey',
        'resolver',
        'nessquik',
        'fsf',
		'portscanmenow',
        'splunk',
	];

    $('.img-trigger').on('click', function(){ 
        var e_id = $(this).attr('id');
		$("#" + e_id + "-thumb").fancybox({
			prevEffect: 'none',
			nextEffect: 'none',
			helpers	: {
				title: { type: 'inside' }
			}
		});

		$('#' + e_id + '-thumb').first().trigger('click');
    });

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
