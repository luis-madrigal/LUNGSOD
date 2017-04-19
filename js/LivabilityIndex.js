var expanded = {val: false, tag: null};

$(document).ready(function() {
	initCircle($(".circle-container"));
	displayDefault();

	$(".tagCircle").on("click", function() {
		var id = $(this).data("id");
		var changedTag = false;
		var children = $(".circle-container").children();
		if(id != expanded.tag) {
			changedTag = true;
		}

		this.toggled = !this.toggled;
		console.log(this.toggled);
		if(this.toggled) {
			blurOtherTags($(".circle-container"), id);
			displayTagInfo(id);
			expanded.tag = $(this).data("id");

			if(changedTag) {
				for(var i = 0; i < children.length; i++) {
					if(this != children[i]) {
						children[i].toggled = false;						
					}
				}
			}
		} else {
			setOpacity($(".circle-container"), 1);
			displayDefault();
		}
	})
});

function initCircle(dest) {
	var deg = 0;
	for(var i in TAGS) {
		var $a = $("<a>", {"id": "deg"+deg, "data-id": i, "class": "tagCircle"});
		var $img = $("<img>", {"id": "circle"+deg, "src": TAGS[i].altRes.HOVER, "class": "img-responsive"});

		$a.append($img);

		dest.append($a);

		deg += 45;
	}
}

function blurOtherTags(dest, id) {
	var children = dest.children();

	for(var i = 0; i < children.length; i++) {
		var img = $(children[i]).find("img");
		if($(children[i]).data("id") != id) {
			TweenMax.to(img, 0.5, {css: {"opacity": "0.5"}});
		} else
			TweenMax.to(img, 0.2, {css: {"opacity": "1"}});
	}
}

function setOpacity(dest, val) {
	var children = dest.children();

	for(var i = 0; i < children.length; i++) {
		var img = $(children[i]).find("img");
		TweenMax.to(img, 0.5, {css: {"opacity": val}});
	}
}

function displayTagInfo(id) {
	$(".wheelText").empty();

	var $rect = $("<div>", {"class": "tagRectangle"});
	var $header = $("<p>", {"class": "catHeader"});
	var $body = $("<p>", {"class": "catBody"});
	var $lft = $("<p>", {"class": "lookForText"});
	var $ul = $("<ul>", {"class": "rubricList"});

	$header.append(TAGS[id].name.toUpperCase());
	$body.append(TAGS[id].desc);
	$lft.append("WHAT WE LOOK FOR");

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
}

function displayDefault() {
	$(".wheelText").empty();

	var $header = $("<p>", {"class": "section5TextHeader"});
	var $body = $("<p>", {"class": "section5TextBody"});

	$header.append("WHAT'S IN A CATEGORY?");
	$body.append("Click on one of the categories on<br> the left to find out what<br> LUNGSOD’s Livability Index grades<br> within each category.");

	$(".wheelText").append($header);
	$(".wheelText").append($body);
}