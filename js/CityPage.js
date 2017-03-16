var cityId;

$(document).ready(function(){
	var args = window.location.href.split("?")[1];
	var city = args.split("=")[1];
	city = city.replace("#", "");

	cityId = city;

	$("#cityCarousel").carousel({
	    interval: false
	}); 

	initCarousel();
	initWheel();
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
	var xyOffsets = [
		{x: 480, y: -352},
		{x: 283, y: -557},
		{x: 80, y: -352},
		{x: 283, y: -160},
		{x: 140, y: -500},
		{x: 420, y: -210},
		{x: 140, y: -210},
		{x: 420, y: -500}
	];
	var j = 0;

	for(var i in TAGS) {
		var $tag = $("<img>", {"src": TAGS[i].res, "class": "img-responsive wheelTag"});
		// var $div = $("<div>", {"class": "wheelTagText"});
		var $tagScore = $("<span>", {"class": "wheelTagScore"});

		console.log(CITIES[cityId].scores[TAGS[i].id])
		$tagScore.append(CITIES[cityId].scores[TAGS[i].id]);
		$tag.css("-webkit-transform", "translate(" +xyOffsets[j].x+ "%, " +xyOffsets[j].y+ "%)");
		$tagScore.css("-webkit-transform", "translate(" +(xyOffsets[j].x*1.9 + 50)+ "%, " +(xyOffsets[j].y*1.55)+ "%)");

		// $div.append($tagScore);
		wheel.append($tagScore);
		wheel.append($tag);

		j++;
	}
}