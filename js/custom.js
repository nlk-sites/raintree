jQuery(function($){

	// height setter by class
	$('[class*="js-set-height-"]').each( function() {
		var classes = $(this).attr('class').split( ' ' );
		for ( var index in classes ) {
			if ( classes[index].match ( /^js-set-height-\d+$/ ) ) {
				var h = classes[index].split ( '-' )[3];
				$(this).height( h );
				break;
			}
		}
	});

	$('[class*="js-set-min-height-"]').each( function() {
		var classes = $(this).attr('class').split( ' ' );
		for ( var index in classes ) {
			if ( classes[index].match ( /^js-set-min-height-\d+$/ ) ) {
				var h = classes[index].split ( '-' )[3];
				$(this).css( 'min-height', h );
				break;
			}
		}
	});

	// width setter by class
	$('[class*="js-set-width-"]').each( function() {
		var classes = $(this).attr('class').split( ' ' );
		for ( var index in classes ) {
			if ( classes[index].match ( /^js-set-width-\d+$/ ) ) {
				var w = classes[index].split ( '-' )[3];
				$(this).width( w );
				break;
			}
		}
	});

	$('[class*="js-center-block"]').each( function() {
		var h = $(this).height(),
			w = $(this).width();
		$(this).css({
			'position'	: 'relative',
			'margin'	: '50% auto 0',
			top			: h / -2,
		});
	});

});