var UTILS = (function() {
	return {
		isInArray: function(haystack, arr) {
			return arr.every(function (v) {
		        return haystack.indexOf(v) >= 0;
		    });
		},
		resetTimeline: function(tl) {
			tl.clear();
		},
		swap: function(ele1, ele2) {
			ele2.each(function () {
			    if (!$(this).text().match(/^\s*$/)) {
			        $(this).insertBefore($(this).prev(ele1));
			    }
			});
		}
	}
})();