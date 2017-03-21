var TAGS = {
	EDUCATION: {
		id: 0,
		name: "Education",
		res: "res/ICONS/Education.png",
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
		res: "res/ICONS/Employment.png",
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
		res: "res/ICONS/Health.png",
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
		res: "res/ICONS/Housing.png",
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
		res: "res/ICONS/Infrastructure.png",
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
		res: "res/ICONS/Leisure.png",
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
		res: "res/ICONS/Local Gov.png",
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
		res: "res/ICONS/Transportation.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-26.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-38.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-38.png"
		},
		color: "#634481"
	},
}

var CITIES = {
	SANTA_ROSA: new City("Santa Rosa", "Laguna", 9.3, "res/Resources by city/Santa Rosa", [9.5, 9.5, 9, 9, 9, 10, 8.5, 10]),
	BACOLOD: new City("Bacolod", "Negros Occidental", 8.9, "res/Resources by city/Bacolod", [9, 9, 7, 9.5, 9, 9, 9, 10]),
	CAGAYAN_DE_ORO: new City("Cagayan De Oro", "Misamis Oriental", 9.1, "res/Resources by city/Cagayan de Oro", [9.5, 9.5, 9, 9.5, 9, 9, 8.5, 9]),
	ILIGAN: new City("Iligan", "Lanao Del Norte", 8.7, "res/Resources by city/Iligan", [8.5, 9, 7.5, 8.5, 9, 9, 9, 9]),
	ILOILO: new City("Iloilo", "Cebu", 9.4, "res/Resources by city/Iloilo", [9.5, 9.5, 9, 9, 10, 9, 9.5, 10]),
	BUTUAN: new City("Butuan", "Caraga", 8.4, "res/Resources by city/Butuan", [8.5, 8, 8, 8.5, 9, 8.5, 8, 9]),
	TARLAC: new City("Tarlac", "Tarlac", 8.4, "res/Resources by city/Tarlac", [8, 8.5, 8, 9, 8.5, 8.5, 8, 8.5]),
	LEGAZPI: new City("Legazpi", "Albay", 8.8, "res/Resources by city/Legazpi", [8, 8.5, 8.5, 9, 9, 10, 8.5, 9]),
	DUMAGUETE: new City("Dumaguete", "Negros Oriental", 9, "res/Resources by city/Dumaguete", [9, 9.5, 9, 9.5, 8, 8.5, 9, 8.5]),
	BATANGAS: new City("Batangas", "Batangas", 8.3, "res/Resources by city/Batangas", [8, 7.5, 7.5, 8.5, 9, 8, 8.5, 9]),
	PUERTO_PRINCESA: new City("Puerto Princesa", "Palawan", 8, "res/Resources by city/Puerto Princesa", [6, 7, 7, 7.5, 9, 9, 9, 9]),
	OLONGAPO: new City("Olongapo", "Zambales", 9.3, "res/Resources by city/Olongapo", [9, 9, 10, 8.5, 9.5, 9, 9.5, 10]),
	TACLOBAN: new City("Tacloban", "Leyte", 8.6, "res/Resources by city/Tacloban", [9, 9, 9, 9, 7, 8.5, 9, 8]),
	ZAMBOANGA: new City("Zamboanga", "Zamboanga", 8.9, "res/Resources by city/Zamboanga", [9, 8, 8.5, 8.5, 8.5, 9, 9, 9]),
	GENSAN: new City("General Santos", "South Cotabato", 8.6, "res/Resources by city/General Santos", [8.5, 7, 9, 9.5, 9, 9, 8.5, 8.5])
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