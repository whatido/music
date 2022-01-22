$.each(data, function (key, val) {
	$(".list ul").append("<li id='" + val.code + "'>🎼 " + val.name + "</li>");
});