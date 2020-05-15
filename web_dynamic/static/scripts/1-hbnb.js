$(document).ready(function () {
	let names = [];
	let ids = [];
	$('input[type="checkbox"]').click(function () {
		if ($(this).prop("checked") === true) {
			console.log($(this).attr("data-id"))
			names.push($(this).attr("data-name"));
			ids.push($(this).attr("data-id"));
			$(".amenities h4").text(names)
		} else {
			const index = names.indexOf($(this).attr("data-name"));
			if (index !== -1) {
				names.splice(index);
				ids.splice(index);
				$(".amenities h4").text(names)
			}
		}
	});
});
