var SORT_ENUMS = {
	ALPHABETICAL: {val: "Alphabetical", fn: sortAlphabetical},
	IG_LUZON: {val: "Island Group: Luzon", fn: filterByIG, args: "Luzon"},
	IG_VISAYAS: {val: "Island Group: Visayas", fn: filterByIG, args: "Visayas"},
	IG_MIND: {val: "Island Group: Mindanao", fn: filterByIG, args: "Mindanao"},
	LS_1: {val: "Livability Score: 5-7", fn: filterByScore, args: [5, 7]},
	LS_2: {val: "Livability Score: 7-8", fn: filterByScore, args: [7, 8]},
	LS_3: {val: "Livability Score: 8-10", fn: filterByScore, args: [8, 10]},
	PROXIMITY: {val: "Proximity", fn: sortAlphabetical}
};

var ALL_CITY_TILES = CITY_TILES_TOP.concat(CITY_TILES_BOTTOM);
var DIV_LISTS = [
	$("#topTilesList"),
	$("#bottomTilesList")
];

var activeFilters = [];
var activeTagFilters = [];
var cityTiles = [];
var boardTiles = ALL_CITY_TILES;
var tl = new TimelineMax();

$(document).ready(function(){

	initTiles();
	activeFilters[2] = SORT_ENUMS.ALPHABETICAL;
	emptyTiles(computeFilters);

	$(".filterItem").on("click", function() {
		var filter = $(this).attr("name");

		if(activeTagFilters.indexOf(TAGS[filter]) < 0)
			activeTagFilters.push(TAGS[filter]);
		else
			activeTagFilters.splice(activeTagFilters.indexOf(TAGS[filter]), 1);

		activeFilters[0] = filterTiles;

		emptyTiles(computeFilters);
	});

	$("#clearFilter").on("click", function() {
		activeTagFilters = [];
		$(".filterItem").removeAttr("checked");

		activeFilters[0] = filterTiles;

		emptyTiles(computeFilters);
	});

	$(".option").on("click", function() {
		$(".selected").first().removeClass("selected");
		$(this).addClass("selected");
		$("#dLabel").text($(this).attr("value"));
		$("#dLabel").append("<span class = 'caret'></span>");

		var type =  SORT_ENUMS[$(this).data("id")];

		activeFilters[1] = type;

		emptyTiles(computeFilters);
	});
});

function computeFilters() {
	var computedTiles = ALL_CITY_TILES;

	if(activeFilters[0]) {
		computedTiles = activeFilters[0].call(this, ALL_CITY_TILES);
	}
	if(activeFilters[1]) {
		computedTiles = activeFilters[1].fn.call(this, computedTiles, activeFilters[1].args);
	}

	changeTiles(computedTiles, DIV_LISTS, 9);
}

function filterTiles(tiles) {
	var filteredTiles = [];
	for(var i = 0; i < tiles.length; i++) {
		if(UTILS.isInArray(tiles[i].tags, activeTagFilters)) {
			filteredTiles.push(tiles[i]);
		}
	}

	return filteredTiles;
}

function sortAlphabetical(tiles) {
	console.log(tiles)
	sortedTiles = tiles;
	tiles = tiles.slice(0);

	sortedTiles.sort(function sortAlphabetical(a, b) {
		var aName = a.city.name.toLowerCase();
		var bName = b.city.name.toLowerCase(); 
		return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	});

	return sortedTiles;
}

function filterByIG(tiles, ig) {
	sortedTiles = [];

	for(var i = 0; i < tiles.length; i++) {
		if(tiles[i].city.islandGroup == ig)
			sortedTiles.push(tiles[i]);
	}

	return sortedTiles;
}

function filterByScore(tiles, range) {
	sortedTiles = [];

	for(var i = 0; i < tiles.length; i++) {
		var score = tiles[i].city.overallScore;
		if(score >= range[0] && score <= range[1])
			sortedTiles.push(tiles[i]);
	}

	return sortedTiles;
}

function emptyTiles(callback) {
	UTILS.resetTimeline(tl);

	tl.to($("#topTilesList"), 0.3, {css: {"opacity": "0"}}, "disappear");
	tl.to($("#bottomTilesList"), 0.3, {css: {"opacity": "0"}}, "disappear");
	tl.call(function() {
		$("#topTilesList").empty();
		$("#bottomTilesList").empty();

		$("#topTilesList").css("opacity", 1);
		$("#bottomTilesList").css("opacity", 1);
		callback();
	});
	
}

function changeTiles(tiles, lists, maxTiles) {
	UTILS.resetTimeline(tl);
	for(var i = 0; i < tiles.length; i++) {
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

		var $livLabel = $("<span>", {"class": "livLabel"});
		$livLabel.append("LIVABILITY SCORE:");

		var $livScore = $("<span>", {"class": "scoreCircle"});
		$livScore.append(tiles[i].city.overallScore);

		var $tagDiv = $("<div>", {"class": "cityTags"});
		$tagDiv.css("transform", "scale(-1, 1)");

		for(var j = 0; j < tiles[i].tags.length; j++) {
			var $tag = $("<img>", {"src": tiles[i].tags[j].res, "class": "cityTagIcon"});
			$tag.attr("width", "11.6%");
			$tagDiv.append($tag);
		}

		if(i % 3 != 0) {
			$tile.css("margin-left", "1%");
		}
		if(i % (maxTiles-1) < 6) {
			$tile.css("margin-bottom", "2%");
		}

		$tile.css("opacity", 0);
		tl.to($tile, 0.3, {css: {"opacity": "1"}}, "appear");

		$tile.append($image);
		$tile.append($city);
		$tile.append($province);
		$tile.append($livLabel);
		$tile.append($livScore);
		$tile.append($tagDiv);

		$row.append($tile);
		lists[Math.floor(i / maxTiles)].append($row);

		// cityTiles.push(tiles[i]);
	}
	refreshListeners();
}

function initTiles() {
	// var tiles = CITY_TILES_TOP.concat(CITY_TILES_BOTTOM);

	changeTiles(ALL_CITY_TILES, DIV_LISTS, 9);

	// ALL_CITY_TILES = cityTiles.slice(0);
}

function fadeOutTiles(tiles) {
	for(var i = 0; i < tiles.length; i++) {
		tl.to(tiles[i].html, 0.3, {css: {"opacity": "0"}}, "disappear");
	}
}

function fadeInTiles(tiles) {
	// var listDivs = [
	// 	$("#topTilesList"),
	// 	$("#bottomTilesList")
	// ];

	for(var i = 0; i < tiles.length; i++) {
		tl.to(tiles[i].html, 0.3, {css: {"opacity": "1"}}, "appear");
	}

	// if(i < 9)
	// 	$("#bottomTilesList").removeAttr("in");

	// refreshListeners();
}

function refreshListeners() {
	$(".cityTile").on("mouseenter", function() {
		TweenMax.to($(this), 0.3, {
			onUpdate: function(tl){
				var tlp = 100 + (tl.progress()*100) / 2;
				TweenMax.set(tl.target[0].children[0], {css: {"-webkit-filter": "brightness(" +tlp+ "%"}});
			},
			onUpdateParams: ["{self}"]
		});
	});

	$(".cityTile").on("mouseleave", function() {
		TweenMax.to($(this), 0.3, {
			onUpdate: function(tl){
				var tlp = 150 - (tl.progress()*100) / 2;
				TweenMax.set(tl.target[0].children[0], {css: {"-webkit-filter": "brightness(" +tlp+ "%"}});
			},
			onUpdateParams: ["{self}"]
		});
	});

	$(".cityTile").on("click", function() {
		var dataId = $(this).attr("data-id");
		var dest = window.location.href.split("/");

		dest[dest.length-1] = "CityPage.html?city=" + dataId;
		dest = dest.join("/");

		document.location.href = dest;
	});
}