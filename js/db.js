var ISLAND_GROUPS = {
	LUZON: "Luzon",
	VISAYAS: "Visayas",
	MINDANAO: "Mindanao"
};

var TAGS = {
	EDUCATION: {
		id: 0,
		name: "Education",
		res: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-35.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-30.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-35.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-35.png"
		},
		color: "#45CBCB"
	},
	EMPLOYMENT: {
		id: 1,
		name: "Employment",
		res: "res/Resources_IconWheel/Icons_Hover/Icons_Hover_Artboard 61 copy.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected_Artboard 61.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected_Artboard 61 copy.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover_Artboard 61 copy.png"
		},
		color: "#73C86F"
	},
	HEALTH: {
		id: 2,
		name: "Health",
		res: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-36.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-29.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-36.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-36.png"
		},
		color: "#FF8146"
	},
	HOUSING: {
		id: 3,
		name: "Housing",
		res: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-34.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-31.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-34.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-34.png"
		},
		color: "#F6C358"
	},
	INFRASTRUCTURE: {
		id: 4,
		name: "Infrastructure",
		res: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-39.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-27.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-39.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-39.png"
		},
		color: "#E95352"
	},
	LEISURE: {
		id: 5,
		name: "Leisure",
		res: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-40.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-28.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-40.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-40.png"
		},
		color: "#FF6985"
	},
	LOCALGOV: {
		id: 6,
		name: "Local Gov",
		res: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-37.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-25.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-37.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-37.png"
		},
		color: "#324B65"
	},
	TRANSPORTATION: {
		id: 7,
		name: "Transportation",
		res: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-38.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-26.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-38.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-38.png"
		},
		color: "#634481"
	},
};

var CITIES = {
	SANTA_ROSA: new City("Santa Rosa", "Laguna", ISLAND_GROUPS.LUZON, 9.3, "res/Resources by city/Santa Rosa", [9.5, 9.5, 9, 9, 9, 10, 8.5, 10]),
	BACOLOD: new City("Bacolod", "Negros Occidental", ISLAND_GROUPS.VISAYAS, 8.9, "res/Resources by city/Bacolod", [9, 9, 7, 9.5, 9, 9, 9, 10]),
	CAGAYAN_DE_ORO: new City("Cagayan De Oro", "Misamis Oriental", ISLAND_GROUPS.MINDANAO, 9.1, "res/Resources by city/Cagayan de Oro", [9.5, 9.5, 9, 9.5, 9, 9, 8.5, 9]),
	ILIGAN: new City("Iligan", "Lanao Del Norte", ISLAND_GROUPS.MINDANAO, 8.7, "res/Resources by city/Iligan", [8.5, 9, 7.5, 8.5, 9, 9, 9, 9]),
	ILOILO: new City("Iloilo", "Cebu", ISLAND_GROUPS.VISAYAS, 9.4, "res/Resources by city/Iloilo", [9.5, 9.5, 9, 9, 10, 9, 9.5, 10]),
	BUTUAN: new City("Butuan", "Caraga", ISLAND_GROUPS.MINDANAO, 8.4, "res/Resources by city/Butuan", [8.5, 8, 8, 8.5, 9, 8.5, 8, 9]),
	TARLAC: new City("Tarlac", "Tarlac", ISLAND_GROUPS.LUZON, 8.4, "res/Resources by city/Tarlac", [8, 8.5, 8, 9, 8.5, 8.5, 8, 8.5]),
	LEGAZPI: new City("Legazpi", "Albay", ISLAND_GROUPS.VISAYAS, 8.8, "res/Resources by city/Legazpi", [8, 8.5, 8.5, 9, 9, 10, 8.5, 9]),
	DUMAGUETE: new City("Dumaguete", "Negros Oriental", ISLAND_GROUPS.VISAYAS, 9, "res/Resources by city/Dumaguete", [9, 9.5, 9, 9.5, 8, 8.5, 9, 8.5]),
	BATANGAS: new City("Batangas", "Batangas", ISLAND_GROUPS.LUZON, 8.3, "res/Resources by city/Batangas", [8, 7.5, 7.5, 8.5, 9, 8, 8.5, 9]),
	PUERTO_PRINCESA: new City("Puerto Princesa", ISLAND_GROUPS.LUZON, "Palawan", 8, "res/Resources by city/Puerto Princesa", [6, 7, 7, 7.5, 9, 9, 9, 9]),
	OLONGAPO: new City("Olongapo", "Zambales", 9.3, ISLAND_GROUPS.LUZON, "res/Resources by city/Olongapo", [9, 9, 10, 8.5, 9.5, 9, 9.5, 10]),
	TACLOBAN: new City("Tacloban", "Leyte", ISLAND_GROUPS.VISAYAS, 8.6, "res/Resources by city/Tacloban", [9, 9, 9, 9, 7, 8.5, 9, 8]),
	ZAMBOANGA: new City("Zamboanga", "Zamboanga", ISLAND_GROUPS.MINDANAO, 8.9, "res/Resources by city/Zamboanga", [9, 8, 8.5, 8.5, 8.5, 9, 9, 9]),
	GENERAL_SANTOS: new City("General Santos", "South Cotabato", ISLAND_GROUPS.MINDANAO, 8.6, "res/Resources by city/General Santos", [8.5, 7, 9, 9.5, 9, 9, 8.5, 8.5])
}

var CITY_TILES_TOP = [
	{
		city: CITIES.SANTA_ROSA,
		res: "res/City Tiles (15-15)/CityTile_SANTAROSA.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.HOUSING, TAGS.HEALTH, TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.LEISURE]
	},
	{
		city: CITIES.BACOLOD,
		res: "res/City Tiles (15-15)/CityTile_BACOLOD.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.HOUSING, TAGS.EDUCATION, TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.LOCALGOV, TAGS.LEISURE]
	},
	{
		city: CITIES.CAGAYAN_DE_ORO,
		res: "res/City Tiles (15-15)/CityTile_CDO.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.ILIGAN,
		res: "res/City Tiles (15-15)/CityTile_ILIGAN.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.LOCALGOV, TAGS.LEISURE]
	},
	{
		city: CITIES.ILOILO,
		res: "res/City Tiles (15-15)/CityTile_ILOILO.jpg",
		tags: [TAGS.EDUCATION, TAGS.EMPLOYMENT, TAGS.HEALTH, TAGS.HOUSING, TAGS.INFRASTRUCTURE, TAGS.LEISURE, TAGS.LOCALGOV, TAGS.TRANSPORTATION]
	},
	{
		city: CITIES.BUTUAN,
		res: "res/City Tiles (15-15)/CityTile_BUTUAN.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION]
	},
	{
		city: CITIES.TARLAC,
		res: "res/City Tiles (15-15)/CityTile_TARLAC.jpg",
		tags: [TAGS.HOUSING]
	},
	{
		city: CITIES.LEGAZPI,
		res: "res/City Tiles (15-15)/CityTile_LEGAZPI.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.EMPLOYMENT]
	},
	{
		city: CITIES.DUMAGUETE,
		res: "res/City Tiles (15-15)/CityTile_DUMAGUETE.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.HOUSING, TAGS.HEALTH, TAGS.EDUCATION, TAGS.LOCALGOV]
	}
];

var CITY_TILES_BOTTOM = [
	{
		city: CITIES.BATANGAS,
		res: "res/City Tiles (15-15)/CityTile_Batangas.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION]
	},
	{
		city: CITIES.PUERTO_PRINCESA,
		res: "res/City Tiles (15-15)/CityTile_PuertoPrincesa.jpg",
		tags: [TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.LOCALGOV, TAGS.LEISURE]
	},
	{
		city: CITIES.OLONGAPO,
		res: "res/City Tiles (15-15)/CityTile_Olongapo.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.HEALTH, TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION, TAGS.LOCALGOV, TAGS.LEISURE]
	},
	{
		city: CITIES.TACLOBAN,
		res: "res/City Tiles (15-15)/CityTile_Tacloban.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.HOUSING, TAGS.HEALTH, TAGS.EDUCATION, TAGS.LOCALGOV]
	},
	{
		city: CITIES.ZAMBOANGA,
		res: "res/City Tiles (15-15)/CityTile_Zamboanga.jpg",
		tags: [TAGS.TRANSPORTATION, TAGS.HOUSING]
	},
	{
		city: CITIES.GENERAL_SANTOS,
		res: "res/City Tiles (15-15)/CityTile_GeneralSantos.jpg",
		tags: [TAGS.HOUSING, TAGS.HEALTH, TAGS.INFRASTRUCTURE, TAGS.LEISURE]
	}
];