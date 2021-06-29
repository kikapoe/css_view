(function($) {
	"use strict";
		$('#sidebarCollapse').on('click', function() {
			$('#sidebar').toggleClass('active');
			$('body').toggleClass('toggle');
		});
		Waves.init();
		Waves.attach('.wave-effect', ['waves-button']);
		Waves.attach('.wave-effect-float', ['waves-button', 'waves-float']);
})(jQuery);