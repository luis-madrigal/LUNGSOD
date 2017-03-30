var UTILS = (function() {
	return {
		isInArray: function(haystack, arr) {
			return arr.every(function (v) {
		        return haystack.indexOf(v) >= 0;
		    });
		},
		resetTimeline: function(tl) {
			tl.clear();
		}
	}
})();