$(document).ready(function(){

	var names = [];
	
	for(var i in CITIES)
		names.push(CITIES[i]);

	var proximity = [];
	proximity.push("QUEZON CITY, NCR, Luzon");
	
	$(".tags").autocomplete({
		source: names,
		appendTo: $("#bs-example-navbar-collapse-1"),
		focus: function( event, ui ) {
			$(this).val( ui.item.value );
			return false;
		},
		select: function(event, ui){
			var value = ui.item.name;
			var dataId;

			$(this).val( ui.item.value );

			for(var i in CITIES){
				if(value == CITIES[i].name){
					dataId = i;
					break;
				}
			}
			
			var dest = window.location.href.split("/");

			dest[dest.length-1] = "CityPage.html?city=" + dataId;
			dest = dest.join("/");

			document.location.href = dest;
			return false;
		}
	});

	$(".tagsCompare").autocomplete({
		source: names,
		appendTo: $("#bs-example-navbar-collapse-1"),
		focus: function( event, ui ) {
			$(this).val( ui.item.value );
			return false;
		},
		select: function(event, ui){
			var value = ui.item.name;
			var dataId;

			$(this).val( ui.item.value );

			for(var i in CITIES){
				if(value == CITIES[i].name){
					dataId = i;
					break;
				}
			}
			
			compare(dataId)
			return false;
		}
	});

	$(".tagsMigrate").autocomplete({
		source: names,
		appendTo: $("#bs-example-navbar-collapse-1"),
		focus: function( event, ui ) {
			$(this).val( ui.item.value );
			return false;
		},
		select: function(event, ui){
			var value = ui.item.name;
			var dataId;

			$(this).val( ui.item.value );

			for(var i in CITIES){
				if(value == CITIES[i].name){
					dataId = i;
					break;
				}
			}
			
			var dest = window.location.href.split("/");

			dest[dest.length-1] = "MigrationHelp.html?city=" + dataId;
			dest = dest.join("/");

			document.location.href = dest;
			return false;
		}
	});

	$(".tagsProximity").autocomplete({
		source: proximity,
		appendTo: $("#bs-example-navbar-collapse-1"),
		select: function(event, ui){
			var dest = window.location.href.split("/");

			dest[dest.length-1] = "BrowseCityProximity.html?city=" + ui.item.value;
			dest = dest.join("/");

			document.location.href = dest;
			return false;
		}
	});

	$.ui.autocomplete.prototype._renderItem = function(ul, item) {
		return $( "<li></li>" )
		  .data( "item.autocomplete", item )
		  .append( "<div style = 'color:grey;padding-left:2%;padding-top:1%;'>" + item.value + "</div>" )
		  .appendTo( ul );
	}

});