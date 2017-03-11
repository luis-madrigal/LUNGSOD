$(document).ready(function(){

	initTiles(CITY_TILES_TOP, $("#topTilesList"));
	initTiles(CITY_TILES_BOTTOM, $("#bottomTilesList"));

});

function initTiles(tiles, list) {
	for(var i = 0; i < tiles.length; i++) {
		var $tile = $("<div>", {"class": "col-lg-4 cityTile", "style": "background-image: url('" +tiles[i].res+ "');"});

		if(i % 3 != 0) {
			$tile.css("margin-left", "18px");
		}
		if(i < 6) {
			$tile.css("margin-bottom", "26px");
		}

		var $city = $("<span>", {"class": "cityName"});
		var city = (tiles[i].city.indexOf(" ") >= 0)? "":" CITY";
		$city.append(tiles[i].city.toUpperCase() + city);

		var $province = $("<span>", {"class": "cityProvince"});
		$province.append("\n"+tiles[i].province.toUpperCase());

		var $tagDiv = $("<div>", {"class": "cityTag"});

		for(var j = 0; j < tiles[i].tags.length; j++) {
			var $tag = $("<img>", {"style": "cityTagIcon", "src": tiles[i].tags[j].res});
			$tag.attr("width", "33%");
			// $tag.attr("height", "33%");
			$tagDiv.append($tag);
		}

		$tile.append($city);
		$tile.append($province);
		$tile.append($tagDiv);

		list.append($tile);
	}
}