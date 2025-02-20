"use strict";

jQuery(window).on('elementor/frontend/init', function () {

    elementorFrontend.hooks.addAction('frontend/element_ready/lte-partners.default', init2xImg);
});

function init2xImg() {

	jQuery('.lte-2x-yes img').each(function() {

		if ( jQuery(this).style === undefined ) {

			var width = jQuery(this).prop('naturalWidth');
			jQuery(this).css('width', (width / 2) + 'px');
		}
	});
	
}