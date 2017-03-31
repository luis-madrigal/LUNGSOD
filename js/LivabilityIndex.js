$(document).ready(function(){

	var names = [];
	
	for(var i in CITIES)
		names.push(CITIES[i].name);
		
	
	$(".tags").autocomplete({
		source: names,
		appendTo: $("#bs-example-navbar-collapse-1"),
		select: function(event, ui){
			var value = $(".tags").val();
			var dataId;
			for(var i in CITIES){
				console.log(i);
				if(value == CITIES[i].name){
					console.log(value);
					dataId = i;
					console.log(dataId);
					break;
				}
			}
			
			var dest = window.location.href.split("/");

			dest[dest.length-1] = "CityPage.html?city=" + dataId;
			/*dest = dest.join("/");

			document.location.href = dest;*/
		}
	});

});