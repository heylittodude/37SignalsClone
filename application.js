$(document).ready(function() {
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	var n = weekday[d.getDay()];
	$('#dayOfWeek').append(n);
	$('#hover1').hover(function() {
		$('#swap1, #main').toggle();
	});
	$('#hover2').hover(function() {
		$('#swap2, #main').toggle();
	});
	$('#hover3').hover(function() {
		$('#swap3, #main').toggle();
	});
});
