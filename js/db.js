var TAGS = {
	EDUCATION: {
		id: 0,
		name: "Education",
		res: "res/ICONS/Education.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-28.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-28.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-28.png"
		},
		color: "#45CBCB"
	},
	EMPLOYMENT: {
		id: 1,
		name: "Employment",
		res: "res/ICONS/Employment.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-26.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-26.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-26.png"
		},
		color: "#73C86F"
	},
	HEALTH: {
		id: 2,
		name: "Health",
		res: "res/ICONS/Health.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-29.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-29.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-29.png"
		},
		color: "#FF8146"
	},
	HOUSING: {
		id: 3,
		name: "Housing",
		res: "res/ICONS/Housing.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-31.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-31.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-31.png"
		},
		color: "#F6C358"
	},
	INFRASTRUCTURE: {
		id: 4,
		name: "Infrastructure",
		res: "res/ICONS/Infrastructure.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-25.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-25.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-25.png"
		},
		color: "#E95352"
	},
	LEISURE: {
		id: 5,
		name: "Leisure",
		res: "res/ICONS/Leisure.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-32.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-32.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-32.png"
		},
		color: "#FF6985"
	},
	LOCALGOV: {
		id: 6,
		name: "Local Gov",
		res: "res/ICONS/Local Gov.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-30.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-30.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-30.png"
		},
		color: "#324B65"
	},
	TRANSPORTATION: {
		id: 7,
		name: "Transportation",
		res: "res/ICONS/Transportation.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-27.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-27.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-27.png"
		},
		color: "#634481"
	},
}

var CITIES = {
	SANTA_ROSA: new City("Santa Rosa", "Laguna", 7.5, "res/Resources by city/Santa Rosa", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	BACOLOD: new City("Bacolod", "Negros Occidental", 7.5, "res/Resources by city/Bacolod", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	CAGAYAN_DE_ORO: new City("Cagayan De Oro", "Misamis Oriental", 7.5, "res/Resources by city/Cagayan de Oro", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	ILIGAN: new City("Iligan", "Lanao Del Norte", 7.5, "res/Resources by city/Iligan", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	ILOILO: new City("Iloilo", "Cebu", 7.5, "res/Resources by city/Iloilo", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	BUTUAN: new City("Butuan", "Caraga", 7.5, "res/Resources by city/Butuan", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	TARLAC: new City("Tarlac", "Tarlac", 7.5, "res/Resources by city/Tarlac", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	LEGAZPI: new City("Legazpi", "Albay", 7.5, "res/Resources by city/Legazpi", [8, 7, 9, 7, 7, 8, 9, 8]),
	DUMAGUETE: new City("Dumaguete", "Negros Oriental", 7.5, "res/Resources by city/Dumaguete", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	BATANGAS: new City("Batangas", "Batangas", 7.5, "res/Resources by city/Batangas", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	PUERTO_PRINCESA: new City("Puerto Princesa", "Palawan", 7.5, "res/Resources by city/Puerto Princesa", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	OLONGAPO: new City("Olongapo", "Zambales", 7.5, "res/Resources by city/Olongapo", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	TACLOBAN: new City("Tacloban", "Leyte", 7.5, "res/Resources by city/Tacloban", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	ZAMBOANGA: new City("Zamboanga", "Zamboanga", 7.5, "res/Resources by city/Zamboanga", [8, 7, 9, 7.5, 7, 8, 9, 8.5]),
	GENSAN: new City("General Santos", "South Cotabato", 7.5, "res/Resources by city/General Santos", [8, 7, 9, 7.5, 7, 8, 9, 8.5])
}

var CITY_TILES_TOP = [
	{
		city: CITIES.SANTA_ROSA,
		res: "res/City Tiles (15-15)/CityTile_SANTAROSA.jpg",
		tags: [TAGS.HOUSING, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.BACOLOD,
		res: "res/City Tiles (15-15)/CityTile_BACOLOD.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.LOCALGOV]
	},
	{
		city: CITIES.CAGAYAN_DE_ORO,
		res: "res/City Tiles (15-15)/CityTile_CDO.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.ILIGAN,
		res: "res/City Tiles (15-15)/CityTile_ILIGAN.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.ILOILO,
		res: "res/City Tiles (15-15)/CityTile_ILOILO.jpg",
		tags: [TAGS.TRANSPORTATION, TAGS.HOUSING]
	},
	{
		city: CITIES.BUTUAN,
		res: "res/City Tiles (15-15)/CityTile_BUTUAN.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.HOUSING, TAGS.HEALTH]
	},
	{
		city: CITIES.TARLAC,
		res: "res/City Tiles (15-15)/CityTile_TARLAC.jpg",
		tags: [TAGS.HOUSING, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.LEGAZPI,
		res: "res/City Tiles (15-15)/CityTile_LEGAZPI.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.DUMAGUETE,
		res: "res/City Tiles (15-15)/CityTile_DUMAGUETE.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.EDUCATION]
	}
];

var CITY_TILES_BOTTOM = [
	{
		city: CITIES.BATANGAS,
		res: "res/City Tiles (15-15)/CityTile_Batangas.jpg",
		tags: [TAGS.HOUSING, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.PUERTO_PRINCESA,
		res: "res/City Tiles (15-15)/CityTile_PuertoPrincesa.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.LOCALGOV]
	},
	{
		city: CITIES.OLONGAPO,
		res: "res/City Tiles (15-15)/CityTile_Olongapo.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.TACLOBAN,
		res: "res/City Tiles (15-15)/CityTile_Tacloban.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.ZAMBOANGA,
		res: "res/City Tiles (15-15)/CityTile_Zamboanga.jpg",
		tags: [TAGS.TRANSPORTATION, TAGS.HOUSING]
	},
	{
		city: CITIES.GENSAN,
		res: "res/City Tiles (15-15)/CityTile_GeneralSantos.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.HOUSING, TAGS.HEALTH]
	}
];