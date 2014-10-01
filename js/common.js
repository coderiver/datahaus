head.ready(function() {

	$(".slider").slider({
		range: "min",
		step: 6.730752
	});

	$('.features__table').jScrollPane({
		verticalDragMaxHeight: 30
	});

	$('.butn').click(function() {
		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			$(this).siblings().addClass('is-active');
		} else {
			$(this).addClass('is-active');
			$(this).siblings().removeClass('is-active');
		}
	});
});