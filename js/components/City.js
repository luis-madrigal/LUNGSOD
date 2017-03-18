var City = function(name, province, overallScore, mainres, scores) {
	this.name = name;
	this.province = province;
	this.overallScore = overallScore;
	this.mainres = mainres;
	this.scores = scores;
}

City.prototype = Object.create(null);

City.prototype.display = function() {
	
}