var cityId;

$(document).ready(function() {
	if(!window.location.href.includes("?")) {
		$("#cityContent").empty();
		return;
	}

	var args = window.location.href.split("?")[1];
	var city = args.split("=")[1];
	city = city.replace("#", "");

	cityId = city;

	$("#cityCarousel").carousel({
	    interval: false
	}); 

	initCityContent();
	initAboutContent();
	initTiles();
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
		var $img = $("<img>", {"class": "img-responsive carouselImages", "src": imgFolder + "/PicHero0" + (i+1) + ".jpg"});

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

function initAboutContent() {
	$("#aboutHeader").text(DESCRIPTIONS[cityId].ABOUT_HEADER);
	$("#aboutHeader").css("font-size", scaleFont(DESCRIPTIONS[cityId].ABOUT_HEADER)+"vw");

	var nLeft = Math.ceil(DESCRIPTIONS[cityId].ABOUT_BODY.length/2);
	var align = "right";

	for(var i = 0; i < DESCRIPTIONS[cityId].ABOUT_BODY.length; i++) {
		// if(align == "right" && nLeft <= i)
		// 	align = "left";

		// $(".aboutText."+align).append(DESCRIPTIONS[cityId].ABOUT_BODY[i]);
		// $(".aboutText."+align).append("<br><br>");

		$(".aboutText").append(DESCRIPTIONS[cityId].ABOUT_BODY[i]);
		$(".aboutText").append("<br><br>");
	}
}

function scaleFont(str) {
	var len = str.length;
	var val = -0.0058*(Math.pow(len, 3)) + 0.4146*(Math.pow(len, 2)) - 9.9467*len + 85.187;

	if(val < 3.5)
		val = 3.5;
	
	return val;
}

function initTiles() {
	initTagDesc($("#egContent").find(".col-lg-12"), "EMPLOYMENT");
	initTagDesc($("#hgContent").find(".col-lg-12"), "HOUSING");
	initTagDesc($("#gsContent").find(".col-lg-12"), "LOCALGOV");
}

function initTagDesc(dest, tag) {
	var $row = $("<div>", {"class": "row content-tiles"});
	var dbTiles = MIGRATION_HELP_TILES[cityId][tag].TILES;

	for(var i = 0; i < dbTiles.length; i++) {
		var $col = $("<div>", {"class": "col-lg-4 content-tile"});
		var $img = $("<img>", {"class": "img-responsive image-tile", "src": "res"+dbTiles[i].res});
		var $rect = $("<div>", {"class": "rectangle"});

		$rect.css("background-color", TAGS[tag].color);

		$col.append($img);
		$col.append($rect);

		$row.append($col);
	}

	dest.append($row);
}