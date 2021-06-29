(function($) {
	"use strict";
	
	
	
	
	// ______________Left Menu Light
	$(document).on('click', '#myonoffswitch5', function(e){
		if (this.checked) {
			$('body').addClass('Left-menu-light');
			$('body').removeClass('Left-menu-Default');
			$('body').removeClass('Left-menu-Dark');
		}
		else {
			$('body').removeClass('Left-menu-light');
			localStorage.setItem("Left-menu-light", "false");
		}
	});
	
	// ______________Left Menu White
	$(document).on('click', '#myonoffswitch6', function(e){
		if (this.checked) {
			$('body').addClass('Left-menu-Default');
			$('body').removeClass('Left-menu-light');
			$('body').removeClass('Left-menu-Dark');
		}
		else {
			$('body').removeClass('Left-menu-Default');
			localStorage.setItem("Left-menu-Default", "false");
		}
	});
	
	// ______________Left Menu Dark
	$(document).on('click', '#myonoffswitch7', function(e){
		if (this.checked) {
			$('body').addClass('Left-menu-Dark');
			$('body').removeClass('Left-menu-light');
			$('body').removeClass('Left-menu-Default');
		}
		else {
			$('body').removeClass('Left-menu-Dark');
			localStorage.setItem("Left-menu-Dark", "false");
		}
	});
	
	// ______________Light Mode
	$(document).on('click', '#myonoffswitch1', function(e){
		if (this.checked) {
			$('body').addClass('light-mode');
			$('body').removeClass('dark-mode');
		}
		else {
			$('body').removeClass('light-mode');
			localStorage.setItem("light-mode", "false");
		}
	});
	
	// ______________Dark Mode
	$(document).on('click', '#myonoffswitch2', function(e){
		if (this.checked) {
			$('body').addClass('dark-mode');
			$('body').removeClass('light-mode');
		}
		else {
			$('body').removeClass('dark-mode');
			localStorage.setItem("dark-mode", "false");
		}
	});
	
	
	
	// ______________Boxed
	$(document).on('click', '#myonoffswitch3', function(e){
		if (this.checked) {
			$('body').addClass('boxed');
			$('body').removeClass('default');
		}
		else {
			$('body').removeClass('boxed');
			localStorage.setItem("boxed", "false");
		}
	});
	
	// ______________Boxed
	$(document).on('click', '#myonoffswitch4', function(e){
		if (this.checked) {
			$('body').addClass('default');
			$('body').removeClass('boxed');
		}
		else {
			$('body').removeClass('default');
			localStorage.setItem("default", "false");
		}
	});
	
	
	
})(jQuery);
