var cityId;
var expanded = {val: false, tag: null};
var collapsable = true;

$(document).ready(function(){
	var args = window.location.href.split("?")[1];
	var city = args.split("=")[1];
	city = city.replace("#", "");

	cityId = city;

	$("#compareText").text("Compare "+CITIES[cityId].name+" City to:");

	$(".scoreCircle").text(CITIES[cityId].overallScore);
	displayLivIndex();

	initCarousel($("#cityImages"), cityId);
	initCarouselCaptions();
	initWheel();

	$(".scoreCircle").css("border-color", "#2c95d6");

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
		if(expanded.val)
			return;
		var span = $(this).find("span");
		$(this).css("background-image", "url('" +TAGS[$(this).data("id")].altRes.HOVER+ "')");
		TweenMax.to(span, 0.2, {css: {"opacity": "0"}});
	});

	$(".wheelTag").mouseleave(function() {
		if(expanded.val)
			return;

		var span = $(this).find("span");
		$(this).css("background-image", "url('" +TAGS[$(this).data("id")].altRes.UNSELECTED+ "')");
		TweenMax.to(span, 0.2, {css: {"opacity": "1"}});
	});

	$(".wheelTag").click(function() {
		var changedTag = false;
		if($(this).data("id") != expanded.tag) {
			changedTag = true;
		}

		var children = $(this).parent().children();

		if(this.toggled) {
			hideTagContents(this);
		} else {
			showTagContents(this);
			expanded.tag = $(this).data("id");

			if(changedTag) {
				for(var i = 0; i < children.length; i++) {
					if(this != children[i]) {
						children[i].toggled = false;						
					}
				}
			}
		}
	});

	$("#collapsableContent").on('hide.bs.collapse', function (e) {
		return collapsable;
	}).on('show.bs.collapse', function (e) {
		return collapsable;
	});

	$("#tempBtn").click(function() {
		compare("BACOLOD");
	});

	$("#compareModal").on("show.bs.modal", function() {
		$("body").css("overflow-y", "hidden");
	});

	$("#compareModal").on("hide.bs.modal", function() {
		$("body").css("overflow-y", "visible");
	});

	initAboutContent();
	initCompareCity();

	$("#city1Desc").find(".linkToCity").on("click", function() {
		console.log("Asd")
		$("#compareModal").modal("toggle");
	});

	$("#city2Desc").find(".linkToCity").on("click", function() {
		var dataId = $(this).data("id");
		var dest = window.location.href.split("/");

		dest[dest.length-1] = "CityPage.html?city=" + dataId;
		dest = dest.join("/");

		document.location.href = dest;
	});

	$(".btn-migrate").on("click", function() {
		var dest = window.location.href.split("/");

		dest[dest.length-1] = "MigrationHelp.html?city=" + cityId;
		dest = dest.join("/");

		document.location.href = dest;
	});
});

function showTagContents(tag) {
	var children = $(tag).parent().children();

	for(var i = 0; i < children.length; i++) {
		if(tag != children[i]) {
			var span = $(children[i]).find("span");
			$(children[i]).css("background-image", "url('" +TAGS[$(children[i]).data("id")].altRes.SELECTED+ "')");
			TweenMax.to(span, 0.2, {css: {"opacity": "0"}});
		}
	}

	var span = $(tag).find("span");
	$(tag).css("background-image", "url('" +TAGS[$(tag).data("id")].altRes.UNSELECTED+ "')");
	TweenMax.to(span, 0.2, {css: {"opacity": "1"}});
	$(".scoreCircle").css("border-color", TAGS[$(tag).data("id")].color);
	displayContent($(tag).data("id"));
	$("#collapsableContent").collapse("show");

	tag.toggled = !tag.toggled;
	$(".scoreCircle").unbind("click");
	$(".scoreCircle").bind("click", hideTagContents.bind(null, tag));

	displayTagInfo($(tag).data("id"));
}

function hideTagContents(tag) {
	var children = $(tag).parent().children();

	for(var i = 0; i < children.length; i++) {
		if(tag != children[i]) {
			var span = $(children[i]).find("span");
			$(children[i]).css("background-image", "url('" +TAGS[$(children[i]).data("id")].altRes.UNSELECTED+ "')");
			TweenMax.to(span, 0.2, {css: {"opacity": "1"}});
		}
	}

	$(tag).css("background-image", "url('" +TAGS[$(tag).data("id")].altRes.UNSELECTED+ "')");
	$(".scoreCircle").css("border-color", "#2c95d6");

	tag.toggled = !tag.toggled;

	$("#collapsableContent").collapse("hide");
	console.log("just hide")

	displayLivIndex();
}

function displayTagInfo(id) {
	$(".wheelText").empty();

	var $rect = $("<div>", {"class": "tagRectangle"});
	var $header = $("<p>", {"class": "catHeader"});
	var $body = $("<p>", {"class": "catBody"});
	var $lft = $("<p>", {"class": "lookForText"});
	var $ul = $("<ul>", {"class": "rubricList"});
	var $livIndexBtn = $("<a>", {"href": "LivabilityIndex.html", "type": "button", "class": "btn btn-liveScore"});

	$header.append(TAGS[id].name.toUpperCase());
	$body.append(TAGS[id].desc);
	$lft.append("WHAT WE LOOK FOR");
	$livIndexBtn.append("The Livability Index");

	$rect.css("background-color", TAGS[id].color);
	$lft.css("color", TAGS[id].color);

	for(var i = 0; i < TAGS[id].rubrics.length; i++) {
		var $li = $("<li>");
		$li.append(TAGS[id].rubrics[i]);

		$ul.append($li);
	}

	$(".wheelText").append($rect);
	$(".wheelText").append($header);
	$(".wheelText").append($body);
	$(".wheelText").append($lft);
	$(".wheelText").append($ul);
	$(".wheelText").append($livIndexBtn);
}

function displayLivIndex() {
	$(".wheelText").empty();

	var $header = $("<p>", {"id": "catWheelHeader"});
	var $body = $("<p>", {"id": "catWheelText"});
	var $livIndexBtn = $("<a>", {"href": "LivabilityIndex.html", "type": "button", "class": "btn btn-liveScore"});

	$header.append("LIVABILITY SCORE");
	$body.append("Click on different livability categories<br>on the livability wheel to see why we gave<br>them the score they have. You can also learn more about the math behind our scoring system here.");
	$livIndexBtn.append("The Livability Index");

	$(".wheelText").append($header);
	$(".wheelText").append($body);
	$(".wheelText").append($livIndexBtn);
}

function displayContent(tagId) {
	var cp = CITY_PAGE_TILES[cityId][tagId];
	var tiles = cp.TILES;

	$(".tile").each(function(index) {
		$(this).find(".image-tile").attr("src", "res"+tiles[index].res);
		$(this).find(".caption").html(tiles[index].caption);
		$(this).find(".rectangle").css("background-color", TAGS[tagId].color);
	});

	var city = (CITIES[cityId].name.indexOf(" ") >= 0)? "":" City";
	var fullName = CITIES[cityId].name+city;

	$("#contentHeader").text(TAGS[tagId].name+" in "+fullName);
	$("#contentBody").text(cp.DESC);

	var circle = $("#content").find(".fullCircle");
	circle.css("background-color", TAGS[tagId].color);
	circle.css("border-color", TAGS[tagId].color);
	circle.text(CITIES[cityId].getScore(TAGS[tagId].id));
}

function initCompareCity() {
	initCarousel($("#city1").find(".carousel-inner"), cityId);
	initDesc($("#city1Desc"), cityId);
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

function initCarousel(dest, id){
	dest.empty();
	var imgFolder = CITIES[id].mainres + "/Pics_Hero";
	var active = "active";

	for(var i = 0; i < 4; i++) {
		var $div = $("<div>", {"class": "item "+active});
		var imgPath = imgFolder + "/pics-" + i;
		var $img = $("<img>", {"class": "img-responsive carouselImages", "src": imgFolder + "/PicHero0" + (i+1) + ".jpg"});

		$div.append($img);
		dest.append($div);

		active = "";
	}
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

function initDesc(dest, id) {
	var link = dest.find(".linkToCity");
	var name = dest.find(".cityName");
	var desc = dest.find(".cityDesc");
	var score = dest.find(".compareScoreCircle");

	var city = (CITIES[id].name.indexOf(" ") >= 0)? "":" CITY";
	var fullName = CITIES[id].name.toUpperCase()+city;
	var back = (id == cityId)? " BACK":"";

	link.html("<-- GO"+back+" TO "+fullName);
	link.attr("data-id", id);
	name.html(fullName+", <span class = 'bold'>"+CITIES[id].province.toUpperCase()+"</span>");
	desc.html(DESCRIPTIONS[id].MINI_DESC);
	score.html(CITIES[id].overallScore);
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
		var $div = $("<div>", {"class": "wheelTag", "data-id": i});
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
	$("#compareModal").modal();
	initCarousel($("#city2").find(".carousel-inner"), otherCity);
	initDesc($("#city2Desc"), otherCity);

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

		$scoreLine1.css("width", ((score1 - 5)*10)+"%");
		$scoreLine2.css("width", ((score2 - 5)*10)+"%");

		$scoreLine1.append("<div class = 'miniCircle' style = 'background: " +TAGS[i].color+ ";'></div>");
		$scoreLine2.append("<div class = 'miniCircle' style = 'background: " +TAGS[i].color+ ";'></div>");
		$col1.append($scoreVal1);

		$col2.append($tagIcon);
		$col2.append($iconLabel);
		$col2.append($scoreLine1);
		$col2.append($scoreLine2);

		$col3.append($scoreVal2);

		$row.append($col1);
		$row.append($col2);
		$row.append($col3);

		scores.append($row);
	}
}