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

const url = 'http://127.0.0.1:5001/api/v1/status/';
const urlPlaces = 'http://127.0.0.1:5001/api/v1/places_search'
$.get(url, function (data, status) {
	if (data.status === 'OK') {
		$('div#api_status').addClass('available');
		$('div#api_status').css('background-color: ')
		dict = {}
		$.ajax({
			type: 'POST',
			url: urlPlaces,
			contentType: 'application/json',
			data: '{}',
			success: function (data) {
				console.log(typeof (lista));
				for (let place of data) {
					$('.places').append(`<article><div class="title_box"><h2>${place.name}</h2><div class="price_by_night">${place.price_by_night}</div></div><div class="information"><div class="max_guest">${place.max_guest} Guest${place.max_guest != 1 ? 's': ''}</div><div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms != 1 ? 's' : ''}</div><div class="number_bathrooms">${place.number_bathrooms}
						Bathroom${place.number_bathrooms != 1 ? 's': ''}</div></div><div class="description">${place.description}</div></article>`)
				}
			}
		})
	}
});
