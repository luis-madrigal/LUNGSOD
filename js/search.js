$(document).ready(function(){

	var names = [];
	
	for(var i in CITIES)
		names.push(CITIES[i]);
	
	$(".tags").autocomplete({
		source: names,
		appendTo: $("#bs-example-navbar-collapse-1"),
		focus: function( event, ui ) {
			$(this).val( ui.item.name );
			return false;
		},
		select: function(event, ui){
			var value = ui.item.name;
			var dataId;

			$(this).val( value );

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
			$(this).val( ui.item.name );
			return false;
		},
		select: function(event, ui){
			console.log(ui)
			var value = ui.item.name;
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
			
			// var dest = window.location.href.split("/");

			// dest[dest.length-1] = "CityPage.html?city=" + dataId;
			// dest = dest.join("/");

			// document.location.href = dest;
			compare(dataId)
			return false;
		}
	});

	$(".tagsMigrate").autocomplete({
		source: names,
		appendTo: $("#bs-example-navbar-collapse-1"),
		focus: function( event, ui ) {
			$(this).val( ui.item.name );
			return false;
		},
		select: function(event, ui){
			$(this).val( ui.item.name );
			var value = ui.item.name;
			var dataId;
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

	$.ui.autocomplete.prototype._renderItem = function(ul, item) {
		return $( "<li></li>" )
		  .data( "item.autocomplete", item )
		  .append( "<div>" + item.name + "</div>" )
		  .appendTo( ul );
	}
});