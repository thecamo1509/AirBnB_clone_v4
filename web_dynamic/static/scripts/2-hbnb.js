$(document).ready(function () {
	let names = [];
	let ids = [];
	$('input[type="checkbox"]').click(function () {
		if ($(this).prop("checked") === true) {
			console.log($(this).attr("data-id"))
			names.push($(this).attr("data-name"));
			ids.push($(this).attr("data-id"));
		} else {
			const index = names.indexOf($(this).attr("data-name"));
			if (index !== -1) {
				names.splice(index, 1);
				ids.splice(index, 1);
			}
		}
		$(".amenities h4").text(names)
	}); 
});

const url = 'http://0.0.0.0:5001/api/v1/status/';

$.get(url, function(data, status) {
    if (data.status === 'OK') {
        $('div#api_status').addClass('available');
        $('div#api_status').css('background-color: ')
    }
});
