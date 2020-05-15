$(document).ready(() => {
	let names = ["platano"];
	let ids = [];
	$('input[type="checkbox"]').click(
		() => {
			alert(names)
			if ($(this).prop("checked") === true) {
				names.push($(this).attr("data-id"));
				ids.push($(this).attr("data-name"));
			} else {
				const index = names.indexOf($(this).attr("data-name"));
				if (index !== -1) {
					names.splice(index);
					ids.splice(index);
				}
			}
		}
	);
	$(".amenities h4").text(names)
});
