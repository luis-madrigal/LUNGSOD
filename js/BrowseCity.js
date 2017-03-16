var SORT_ENUMS = {
	ALPHABETICAL: "alphabetical",
	PROXIMITY: "proximity"
}

$(document).ready(function(){

	initTiles(CITY_TILES_TOP, $("#topTilesList"));
	initTiles(CITY_TILES_BOTTOM, $("#bottomTilesList"));

	$(".cityTile").mouseenter(function() {
		TweenMax.to($(this), 0.3, {
			onUpdate: function(tl){
				var tlp = 100 + (tl.progress()*100) / 2;
				TweenMax.set(tl.target[0].children[0], {css: {"-webkit-filter": "brightness(" +tlp+ "%"}});
			},
			onUpdateParams: ["{self}"]
		});
	});

	$(".cityTile").mouseleave(function() {
		TweenMax.to($(this), 0.3, {
			onUpdate: function(tl){
				var tlp = 150 - (tl.progress()*100) / 2;
				TweenMax.set(tl.target[0].children[0], {css: {"-webkit-filter": "brightness(" +tlp+ "%"}});
			},
			onUpdateParams: ["{self}"]
		});
	});

	$(".cityTile").click(function() {
		var dataId = $(this).attr("data-id");
		var dest = window.location.href.split("/");

		dest[dest.length-1] = "CityPage.html?city=" + dataId;
		dest = dest.join("/");

		document.location.href = dest;
	});
});

function initTiles(tiles, list) {
	for(var i = 0; i < tiles.length; i++) {
		// var $tile = $("<div>", {"class": "col-lg-4 cityTile", "style": "background-image: url('" +tiles[i].res+ "');"});
		if(i % 3 == 0) {
			var $row = $("<div>", {"class": "row no-gutter cityTileRow"});
		}

		var dataId = tiles[i].city.name.replace(/ /g, "_").toUpperCase();

		var $tile = $("<div>", {"class": "col-lg-4 cityTile", "data-id": dataId});
		var $image = $("<img>", {"src": tiles[i].res, "alt": "", "class": "cityTileImg"});
		var $city = $("<span>", {"class": "cityName"});
		var city = (tiles[i].city.name.indexOf(" ") >= 0)? "":" CITY";
		$city.append(tiles[i].city.name.toUpperCase() + city);

		var $province = $("<span>", {"class": "cityProvince"});
		$province.append("\n"+tiles[i].city.province.toUpperCase());

		var $tagDiv = $("<div>", {"class": "cityTags"});

		var wp = 215;
		for(var j = 0; j < tiles[i].tags.length; j++) {
			var $tag = $("<img>", {"style": "cityTagIcon", "src": tiles[i].tags[j].res});
			$tag.attr("width", "33%");
			// $tag.attr("height", "33%");
			$tagDiv.append($tag);
			$tagDiv.css("-webkit-transform", "translate(" +wp+ "%, -60%)");
			wp -= 35;
		}

		if(i % 3 != 0) {
			$tile.css("margin-left", "1%");
		}
		if(i < 6) {
			$tile.css("margin-bottom", "2%");
		}

		$tile.append($image);
		$tile.append($city);
		$tile.append($province);
		$tile.append($tagDiv);

		$row.append($tile);
		list.append($row);
	}
}