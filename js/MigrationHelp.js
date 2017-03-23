var cityId;

$(document).ready(function() {
	// if(!window.location.href.includes("?")) {
	// 	$("#cityContent").css("visibility", "hidden");
	// 	return;
	// }

	// var args = window.location.href.split("?")[1];
	// var city = args.split("=")[1];
	// city = city.replace("#", "");

	cityId = "LEGAZPI";

	$("#cityCarousel").carousel({
	    interval: false
	}); 

	initCityContent();

});

function initCityContent(){
	var div = $("#cityContent");

	$(".btn-seeCity").text("See " +CITIES[cityId].name+ " City");

	$(".btn-seeCity").click(function() {
		var dest = window.location.href.split("/");

		dest[dest.length-1] = "CityPage.html?city=" + cityId;
		dest = dest.join("/");

		document.location.href = dest;
	});

	initCarousel($("#cityImages"));

	$(".collapse-guide").on('shown.bs.collapse', function () {
		var toggle = $($(this).data("origin")).find(".guideToggle");
		$(toggle).attr("src", "res/migration_help/00 - For all pages/CollapseButton.png");
	});

	$(".collapse-guide").on('hidden.bs.collapse', function () {
		var toggle = $($(this).data("origin")).find(".guideToggle");
		$(toggle).attr("src", "res/migration_help/00 - For all pages/ExpandButton.png");
	});
}

function initCarousel(dest){
	var imgFolder = CITIES[cityId].mainres + "/Pics_Hero";
	var active = "active";
	var noFiles = false
	var i = 1;

	for(var i = 0; i < 4; i++) {
		var $div = $("<div>", {"class": "item "+active});
		var imgPath = imgFolder + "/pics-" + i;
		var $img = $("<img>", {"class": "img-responsive carouselImages", "src": imgFolder + "/pics-" + (i+1) + ".jpg"});

		$div.append($img);
		dest.append($div);

		active = "";
	}

	var $captions = $("#carouselCaption");
	var $captionHeader = $("<p>", {"class": "captionHeader"});
	var $breadCrumbs = $("<p>", {"class": "breadCrumbs"});
	var city = (CITIES[cityId].name.indexOf(" ") >= 0)? "":" CITY";
	var fullName = CITIES[cityId].name.toUpperCase()+city+ ", " +CITIES[cityId].province.toUpperCase();

	$breadCrumbs.append("HOME > BROWSE CITIES > <span class = 'breadCrumbsPage'>" +fullName+ "</span>")
	$captionHeader.append(fullName);

	$captions.append($breadCrumbs);
	$captions.append($captionHeader);

}