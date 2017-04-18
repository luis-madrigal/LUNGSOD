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

	// var $captions = $("#carouselCaption");
	// var $captionHeader = $("<p>", {"class": "captionHeader"});
	// var $breadCrumbs = $("<p>", {"class": "breadCrumbs"});
	// var $mainCircle = $(".mainCircle");
	// var city = (CITIES[cityId].name.indexOf(" ") >= 0)? "":" CITY";
	// var fullName = CITIES[cityId].name.toUpperCase()+city+ ", " +CITIES[cityId].province.toUpperCase();

	// $breadCrumbs.append("HOME > BROWSE CITIES > <span class = 'breadCrumbsPage'>" +fullName+ "</span>")
	// $captionHeader.append(fullName);

	// $captions.append($breadCrumbs);
	// $captions.append($captionHeader);
	initCarouselCaptions();

}

function initCarouselCaptions(){
	var $captions = $("#carouselCaption");
	var $captionHeader = $(".captionHeader");
	var $breadCrumbs = $(".breadCrumbs");
	var $mainCircle = $(".mainCircle");
	var city = (CITIES[cityId].name.indexOf(" ") >= 0)? "":" CITY";
	var fullName = CITIES[cityId].name.toUpperCase()+city+ ", " +CITIES[cityId].province.toUpperCase();

	$breadCrumbs.html("<a class = 'breadLinks' href = 'HomePage.html'>HOME</a> > <a class = 'breadLinks' href = 'BrowseCity.html'>BROWSE CITIES</a> > <span class = 'breadCrumbsPage'>" +fullName+ "</span>");
	$captionHeader.html(fullName);
	$mainCircle.text(CITIES[cityId].overallScore);

	// $captions.append($breadCrumbs);
	// $captions.append($captionHeader);
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
	if(!initTagDesc($("#egContent").find(".col-lg-12"), "EMPLOYMENT"))
		$("#employmentGuide").remove();
	if(!initTagDesc($("#hgContent").find(".col-lg-12"), "HOUSING"))
		$("#housingGuide").remove();
	if(!initTagDesc($("#gsContent").find(".col-lg-12"), "LOCALGOV"))
		$("#governmentGuide").remove();
}

function initTagDesc(dest, tag) {
	if(MIGRATION_HELP_TILES[cityId][tag] == undefined)
		return false;

	var $row = $("<div>", {"class": "row content-tiles"});
	var dbTiles = MIGRATION_HELP_TILES[cityId][tag].TILES;

	for(var i = 0; i < dbTiles.length; i++) {
		var $col = $("<div>", {"class": "col-lg-4 content-tile"});
		var $img = $("<img>", {"class": "img-responsive image-tile", "src": "res"+dbTiles[i].res});
		var $rect = $("<div>", {"class": "rectangle"});
		var $textDiv = $("<div>", {"class": "tile-text"});
		var $header = $("<p>", {"class": "tile-text-name"});
		var $body = $("<p>", {"class": "tile-text-address"});
		var $contact = $("<p>", {"class": "tile-text-contactnum"});
		var $link = $("<a>", {"class": "tile-text-sitelink"});

		$rect.css("background-color", TAGS[tag].color);

		$header.append(dbTiles[i].desc.header);
		if(dbTiles[i].desc.body) {
			for(var j = 0; j < dbTiles[i].desc.body.length; j++) {
				$body.append(dbTiles[i].desc.body[j]);
				$body.append("<br>");
			}
		}
		$contact.append(dbTiles[i].desc.contact);
		$link.append(dbTiles[i].desc.link);
		if(dbTiles[i].desc.link) {
			if(dbTiles[i].desc.link.substring(0, 4) != "http")
				$link.attr("href", "http://"+dbTiles[i].desc.link);
			else
				$link.attr("href", dbTiles[i].desc.link);
		}

		$textDiv.append($header);
		$textDiv.append($body);
		$textDiv.append($contact);
		$textDiv.append($link);

		$col.append($img);
		$col.append($rect);
		$col.append($textDiv);

		$row.append($col);
	}

	dest.append($row);

	return true;
}