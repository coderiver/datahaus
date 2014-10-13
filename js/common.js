head.ready(function() {

	//main page range
	$(".range").slider({
		range: "min",
		value: 40.38,
		step: 6.73
	});

	//vps page range
	$(".range-big").slider({
		range: "min",
		value: 16.2,
		step: 2.7
	});

	//main page language list
	function showCountryList(elem) {
		elem.find('.country').toggleClass('is-visible');
		elem.toggleClass('is-active');
	}

	$('.select').click(function() {
		showCountryList($(this));
		return false;
	});

	$('.select').find('.country a').click(function() {
		var countryChange = $(this).data('name');
		var countryFlag = $(this).attr('class');
		var chosen = $('.select').children('.chosen');

		$(chosen).removeAttr('class').addClass('chosen ' + countryFlag).text(countryChange);
	});

	//hide language list on click outside of it
	$('html').click(function() {
		$('.select').removeClass('is-active');
		if($('.country').is(':visible')) {
			$('.country').hide();
		}
	});

	$('.select').click(function(event){
		if($(this).hasClass('is-active')) {
			$(this).children('.country').show();
		} else {
			$(this).children('.country').hide();
		}
	});

	//custom product search
	$('.s').change(function(event) {
		var option = ($(this).val())
		$(this).parent().find('span').text(option);
	});

	//hosting page table scroll
	$('.features__table').jScrollPane({
		verticalDragMaxHeight: 30
	});

	//hosting page toggle button
	$('.butn').click(function() {
		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			$(this).siblings().addClass('is-active');
		} else {
			$(this).addClass('is-active');
			$(this).siblings().removeClass('is-active');
		}
	});

	//domain page tabs
	var tabs = $('.js-tabs'),
		tab = tabs.find('.js-tab').children(),
		tabContent = tabs.find('.js-tabcontent > .tabs__wrap').children(),
		activeClass = 'is-active'

	tabContent.not(':first-child').hide();

	tab.click(function(event) {
		var activeTabIndex = $(this).index();
		// change active tab
		tab.removeClass(activeClass);
		$(this).addClass(activeClass);
		// change active tabcontent
		tabContent.hide();
		tabContent.eq(activeTabIndex).show();
		return false;
	});

	//tabs scroller
	$('.tabs__wrap').jScrollPane({
		verticalDragMaxHeight: 47,
		scrollbarMargin: 100
	});

});