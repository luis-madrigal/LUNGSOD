var cityId;

$(document).ready(function(){
	var args = window.location.href.split("?")[1];
	var city = args.split("=")[1];
	city = city.replace("#", "");

	cityId = city;

	$("#compareText").text("Compare "+CITIES[cityId].name+" City to:");

	initCarousel();
	initWheel();

	$("#cityCarousel").carousel({
	    interval: false
	}); 

	$(".wheelTag > span").mouseenter(function() {
		if(this.toggled)
			return;

		var img = $(this).next()[0];
		img.src = TAGS[img.dataset.id].altRes.HOVER;
		TweenMax.to($(this), 0.2, {css: {"opacity": "0"}});
	});

	$(".wheelTag > span").mouseleave(function() {
		if(this.toggled)
			return;

		var img = $(this).next()[0];
		img.src = TAGS[img.dataset.id].altRes.UNSELECTED;
		TweenMax.to($(this), 0.2, {css: {"opacity": "1"}});
	});

	$(".wheelTag > span").click(function() {
		var img = $(this).next()[0];
		console.log($(this).next());
		if(this.toggled) {
			img.src = TAGS[img.dataset.id].altRes.UNSELECTED;
			$(this).css("color", TAGS[img.dataset.id].color);
			// this.toggled = false;
		} else {
			img.src = TAGS[img.dataset.id].altRes.SELECTED;
			$(this).css("color", "white");
			TweenMax.to($(this), 0.2, {css: {"opacity": "1"}});
		}
		this.toggled = !this.toggled;
	});
});

function initCarousel(){
	var imgFolder = CITIES[cityId].mainres + "/Pics_Hero";
	var dest = $("#cityImages");
	var active = "active";
	var noFiles = false
	var i = 1;

	// do {
	// 	var $div = $("<div>", {"class": "item "+active});
	// 	var imgPath = imgFolder + "/pics-" + i;
	// 	var file = new File(imgPath);
	// 	console.log(imgPath)

	// 	if(file.exists) {
	// 		var $img = $("<img>", {"src": imgFolder + "/pics-" + i});

	// 		$div.append($img);
	// 		dest.append($div);
	// 	} else {
	// 		noFiles = true;
	// 	}

	// 	active = "";
	// 	i++;
	// } while(!noFiles);

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
		{x: 485, y: -332},
		{x: 283, y: -535},
		{x: 80, y: -332},
		{x: 283, y: -160},
		{x: 140, y: -475},
		{x: 420, y: -200},
		{x: 140, y: -225},
		{x: 425, y: -475}
	];
	var xyOffsetsText = [
		{x: 845, y: -482},
		{x: 520, y: -793},
		{x: 190, y: -482},
		{x: 520, y: -210},
		{x: 285, y: -690},
		{x: 740, y: -280},
		{x: 285, y: -280},
		{x: 746, y: -690}
	];
	var j = 0;

	for(var i in TAGS) {
		var $div = $("<div>", {"class": "wheelTag", "data-toggle": "collapse", "data-target": "#content"});
		var $tag = $("<img>", {"src": TAGS[i].altRes.UNSELECTED, "class": "img-responsive wheelTagImage", "data-id": i});
		// var $div = $("<div>", {"class": "wheelTagText"});
		var $tagScore = $("<span>", {"class": "wheelTagScore"});
		$tagScore.css("color", TAGS[i].color);

		console.log(CITIES[cityId].scores[TAGS[i].id])
		$tagScore.append(CITIES[cityId].scores[TAGS[i].id]);
		$tag.css("-webkit-transform", "translate(" +xyOffsetsImg[j].x+ "%, " +xyOffsetsImg[j].y+ "%)");
		$tagScore.css("-webkit-transform", "translate(" +(xyOffsetsText[j].x)+ "%, " +(xyOffsetsText[j].y)+ "%)");

		// $div.append($tagScore);
		$div.append($tagScore);
		$div.append($tag);

		wheel.append($div);

		j++;
	}
}