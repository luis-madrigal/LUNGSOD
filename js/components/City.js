var City = function(name, province, islandGroup, overallScore, mainres, scores) {
	this.name = name;
	this.province = province;
	this.islandGroup = islandGroup;
	this.overallScore = overallScore;
	this.mainres = mainres;
	this.scores = scores;
}

City.prototype = Object.create(null);

City.prototype.getScore = function(tagId) {
	return this.scores[tagId];
}