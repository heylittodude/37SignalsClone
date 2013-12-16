$(document).ready(function() {
<<<<<<< HEAD
	$('div').css("background-color", "#ff0000");
=======
	$('#swap1').hide();
	$('#swap2').hide();
	$('#swap3').hide();
	$(document).on('mouseenter', '#hover1', function() {
		$('#swap1').toggle();
		$('#main').toggle();	
	});
	$(document).on('mouseleave', '#hover1', function() {
		$('#swap1').toggle();
		$('#main').toggle();
	});
	$(document).on('mouseenter', '#hover2', function() {
		$('#swap2').toggle();
		$('#main').toggle();	
	});
	$(document).on('mouseleave', '#hover2', function() {
		$('#swap2').toggle();
		$('#main').toggle();
	});
	$(document).on('mouseenter', '#hover3', function() {
		$('#swap3').toggle();
		$('#main').toggle();	
	});
	$(document).on('mouseleave', '#hover3', function() {
		$('#swap3').toggle();
		$('#main').toggle();
	});
>>>>>>> origin/gh-pages
});
