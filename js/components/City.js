var City = function(name, province, islandGroup, overallScore, mainres, scores, hasCity) {
	this.name = name;
	this.province = province;
	this.islandGroup = islandGroup;
	this.overallScore = overallScore;
	this.mainres = mainres;
	this.scores = scores;
	// this.label = name;
	var city = (hasCity)? " CITY":"";
	this.value = name.toUpperCase() +city +", "+ province +", "+islandGroup;
	this.hasCity = hasCity;
}

City.prototype = Object.create(null);

City.prototype.getScore = function(tagId) {
	return this.scores[tagId];
}