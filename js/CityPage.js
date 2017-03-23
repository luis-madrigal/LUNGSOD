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
		}
		this.toggled = !this.toggled;
	});

	$("#compareModal").on("show.bs.modal", function() {
		$("body").css("overflow-y", "hidden");
	})

	$("#compareModal").on("hide.bs.modal", function() {
		$("body").css("overflow-y", "visible");
	})
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