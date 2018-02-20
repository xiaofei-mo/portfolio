/* Javascript Document */
$( document ).ready(function() {
	$('.content').mousewheel(function(event, delta) {
		event.preventDefault();
		this.scrollLeft -= (delta * 30);
		return false;
	});
});
