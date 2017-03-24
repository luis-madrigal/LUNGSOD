var cityId;

$(document).ready(function(){
	var args = window.location.href.split("?")[1];
	var city = args.split("=")[1];
	city = city.replace("#", "");

	cityId = city;

	$("#compareText").text("Compare "+CITIES[cityId].name+" City to:");

	$(".scoreCircle").text(CITIES[cityId].overallScore);

	initCarousel();
	initWheel();

	$(".scoreCircle").css("border-color", "#56DA65");

	$("#cityCarousel").carousel({
	    interval: false
	}); 

	$("#city1").carousel({
	    interval: false
	}); 

	$("#city2").carousel({
	    interval: false
	}); 

	$(".wheelTag").mouseenter(function() {
		if(this.toggled)
			return;
		var span = $(this).find("span");
		$(this).css("background-image", "url('" +TAGS[$(this).data("id")].altRes.HOVER+ "')");
		TweenMax.to(span, 0.2, {css: {"opacity": "0"}});
	});

	$(".wheelTag").mouseleave(function() {
		if(this.toggled)
			return;

		var span = $(this).find("span");
		$(this).css("background-image", "url('" +TAGS[$(this).data("id")].altRes.UNSELECTED+ "')");
		TweenMax.to(span, 0.2, {css: {"opacity": "1"}});
	});

	$(".wheelTag").click(function() {
		var children = $(this).parent().children();

		if(this.toggled) {
			for(var i = 0; i < children.length; i++) {
				if(this != children[i]) {
					var span = $(children[i]).find("span");
					$(children[i]).css("background-image", "url('" +TAGS[$(children[i]).data("id")].altRes.UNSELECTED+ "')");
					TweenMax.to(span, 0.2, {css: {"opacity": "1"}});
				}
			}
			$(this).css("background-image", "url('" +TAGS[$(this).data("id")].altRes.UNSELECTED+ "')");
			$(".scoreCircle").css("border-color", "#56DA65");
		} else {
			for(var i = 0; i < children.length; i++) {
				if(this != children[i]) {
					var span = $(children[i]).find("span");
					$(children[i]).css("background-image", "url('" +TAGS[$(children[i]).data("id")].altRes.SELECTED+ "')");
					TweenMax.to(span, 0.2, {css: {"opacity": "0"}});
				}
			}
			var span = $(this).find("span");
			$(this).css("background-image", "url('" +TAGS[$(this).data("id")].altRes.UNSELECTED+ "')");
			TweenMax.to(span, 0.2, {css: {"opacity": "1"}});
			$(".scoreCircle").css("border-color", TAGS[$(this).data("id")].color);
		}
		this.toggled = !this.toggled;
	});

	$("#tempBtn").click(function() {
		compare("SANTA_ROSA");
	});

	$("#compareModal").on("show.bs.modal", function() {
		$("body").css("overflow-y", "hidden");
	});

	$("#compareModal").on("hide.bs.modal", function() {
		$("body").css("overflow-y", "visible");
	});
});

function initCarousel(){
	var imgFolder = CITIES[cityId].mainres + "/Pics_Hero";
	var dest = $("#cityImages");
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

function initWheel() {
	var wheel = $(".wheelTags");
	var xyOffsetsImg = [
		{x: 355, y: -300},
		{x: 200, y: -478},
		{x: 45, y: -300},
		{x: 200, y: -136},
		{x: 90, y: -425},
		{x: 310, y: -170},
		{x: 92, y: -170},
		{x: 305, y: -425}
	];
	var j = 0;

	for(var i in TAGS) {
		var $div = $("<div>", {"class": "wheelTag", "data-toggle": "collapse", "data-target": "#content", "data-id": i});
		var $tagScore = $("<span>", {"class": "wheelTagScore"});

		$div.css("background-image", "url('" +TAGS[i].altRes.UNSELECTED+ "')");

		$tagScore.append(CITIES[cityId].scores[TAGS[i].id]);
		$div.css("-webkit-transform", "translate(" +xyOffsetsImg[j].x+ "%, " +xyOffsetsImg[j].y+ "%)");

		$div.append($tagScore);
		wheel.append($div);

		j++;
	}
}

function compare(otherCity) {
	$(".scores").empty();
	var scores = $(".scores");

	for(var i in TAGS) {
		var score1 = CITIES[cityId].scores[TAGS[i].id];
		var score2 = CITIES[otherCity].scores[TAGS[i].id];

		var $row = $("<div>", {"class": "row"});
		var $col1 = $("<div>", {"class": "col-lg-3"});
		var $col2 = $("<div>", {"class": "col-lg-6"});
		var $col3 = $("<div>", {"class": "col-lg-3"});

		var $tagIcon = $("<img>", {"class": "scoreIcons img-responsive", "src": TAGS[i].res});
		var $iconLabel = $("<span>", {"class": "iconLabel"});
		$iconLabel.append(TAGS[i].name);

		var $scoreVal1 = $("<span>", {"class": "tagScoreCircle score-1 right"});
		$scoreVal1.append(score1);

		var $scoreVal2 = $("<span>", {"class": "tagScoreCircle score-2 left"});
		$scoreVal2.append(score2);

		var $scoreLine1 = $("<div>", {"class": "scoreLine scoreLine-2 scoreLine-1", "style": "color: "+TAGS[i].color+";"});
		var $scoreLine2 = $("<div>", {"class": "scoreLine scoreLine-2", "style": "color: "+TAGS[i].color+";"});

		$scoreLine1.css("width", (score1*5)+"%");
		$scoreLine2.css("width", (score2*5)+"%");

		$col1.append($scoreVal1);

		$col2.append($tagIcon);
		$col2.append($scoreLine1);
		$col2.append($scoreLine2);

		$col3.append($scoreVal2);

		$row.append($col1);
		$row.append($col2);
		$row.append($col3);

		scores.append($row);
	}
}