var ISLAND_GROUPS = {
	LUZON: "Luzon",
	VISAYAS: "Visayas",
	MINDANAO: "Mindanao"
};

var TAGS = {
	EDUCATION: {
		id: 0,
		name: "Education",
		res: "res/Icons/Education.png",
		resWithLabel: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-35.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-30.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-35.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-35.png"
		},
		color: "#45CBCB",
		desc: "In this category, we grade a city for its<br>ability to provide affordable, quality<br>education across all ages of its citizens.",
		rubrics: ["AVAILABILITY - the number of available primary,<br>secondary, and tertiary schools in the city.",
					"QUALITY - good quality education that puts<br>students in a position to better their lives<br>through knowledge.",
					"AFFORDABILITY - the cost of education is<br>appropriate in relation to its quality, and is<br>attainable by the majority."]
	},
	EMPLOYMENT: {
		id: 1,
		name: "Employment",
		res: "res/Icons/Employment.png",
		resWithLabel: "res/Resources_IconWheel/Icons_Hover/Icons_Hover_Artboard 61 copy.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected_Artboard 61.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected_Artboard 61 copy.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover_Artboard 61 copy.png"
		},
		color: "#73C86F",
		desc: "In this category, we grade a city for its<br>ability to provide a large number and<br>variety of quality job opportunities for its<br>citizens. This includes all types of work<br>from blue, to white, to pink-collar work.",
		rubrics: ["AVAILABILITY - the number of available job opportunities for local talent to apply to.",
					"QUALITY - work that provides proper benefits, room for growth, and proper pay.",
					"VARIETY - how different the types of work are in the city, from labor, social, office work, or more."]
	},
	HEALTH: {
		id: 2,
		name: "Health",
		res: "res/Icons/Health.png",
		resWithLabel: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-36.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-29.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-36.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-36.png"
		},
		color: "#FF8146",
		desc: "In this category, we grade a city for its<br>ability to provide adequate healthcare<br>through a variety of services. We also grade<br>the quality and availability of facilities in<br>hopsitals and clinics.",
		rubrics: ["AVAILABILITY - the number of available<br>hospitals, clinics, and other healthcare services.",
					"QUALITY - the quality of healthcare services,<br>staff, and equipment at hospitals or clinics.",
					"ACCESSIBILITY - how accessible medical<br>centers are in terms of location and<br>accommodation of citizens.",
					"AFFORDABILITY - the ratio of the quality of<br>health service to its price and how many<br>people can afford these."]
	},
	HOUSING: {
		id: 3,
		name: "Housing",
		res: "res/Icons/Housing.png",
		resWithLabel: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-34.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-31.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-34.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-34.png"
		},
		color: "#F6C358",
		desc: "In this category, we grade a city for its<br>ability to provide affordable proper housing.<br>This means that there is an adequate<br>number of available homes that are also of<br>good quality.",
		rubrics: ["AVAILABILITY - there is an adequate amount of available property for rent or sale.",
					"QUALITY - applies to the quality of the construction and amenities needed in a home.",
					"AFFORDABILITY - the general price range of homes are affordable to the majority."]
	},
	INFRASTRUCTURE: {
		id: 4,
		name: "Infrastructure",
		res: "res/Icons/Infrastructure.png",
		resWithLabel: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-39.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-27.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-39.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-39.png"
		},
		color: "#E95352",
		desc: "In this category, we grade a city for the<br>availability and quality of necessary<br>infrastructure-buildings, roads, water,<br>electricity, etc. As well as their<br>maintenance and improvement.",
		rubrics: ["AVAILABILITY - the availability of the minimum<br>required infrastructure to support life in the city.",
					"QUALITY - the quality of infrastructure in terms<br>of materials, structure, and processes.",
					"MAINTENANCE - constancy and consistency of<br>maintenance on city infrastructure."]
	},
	LEISURE: {
		id: 5,
		name: "Recreation",
		res: "res/Icons/Leisure.png",
		resWithLabel: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-40.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-28.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-40.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-40.png"
		},
		color: "#FF6985",
		desc: "In this category, we grade a city for how<br>many facilities and areas of interest there<br>are for people to go to for fun. These can<br>be places like parks, tourist spots, hotels,<br>and museums, or events like festivals. ",
		rubrics: ["AVAILABILITY - the number of available points<br>of interest.",
					"QUALITY - mostly applies to facilities and<br>amenities of a place.",
					"VARIETY - how different the types of events<br>and places for leisure are in the city."]
	},
	LOCALGOV: {
		id: 6,
		name: "Local Government",
		res: "res/Icons/Local Gov.png",
		resWithLabel: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-37.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-25.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-37.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-37.png"
		},
		color: "#324B65",
		desc: "In this category, we grade a city for the<br>efforts of its local government to make the<br>ives of its citizens better. This includes<br>their planned initiatives and government<br>programs offered to the public.",
		rubrics: ["QUALITY - government services and programs<br>are of good quality and benefit the people.",
					"CONSISTENCY - government efforts are<br>consistently implemented, renewed, and<br>improved over time.",
					"ACCESSIBILITY - government officials, offices,<br>and programs and services are easily accessible."]
	},
	TRANSPORTATION: {
		id: 7,
		name: "Transportation",
		res: "res/Icons/Transportation.png",
		resWithLabel: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-38.png",
		altRes: {
			UNSELECTED: "res/Resources_IconWheel/Icons_Unselected/Icon_Unselected-26.png",
			SELECTED: "res/Resources_IconWheel/Icons_Selected/Icons_Selected-38.png",
			HOVER: "res/Resources_IconWheel/Icons_Hover/Icons_Hover-38.png"
		},
		color: "#634481",
		desc: "In this category, we grade a city for the<br>quality, accessibility, maintenace, and<br>amount of various transportation methods<br>as needed by its citizens.",
		rubrics: ["AVAILIBILITY - the number of available<br>transportation modes.",
					"QUALITY - the efficiency of using transportation,<br>and the quality of the vehicles themselves.",
					"ACCESSIBILITY - how the convenient it is for<br>citizens to access transportation, as well as the<br>transportation modeís reach within the city."]
	},
};

var CITIES = {
	SANTA_ROSA: new City("Santa Rosa", "Laguna", ISLAND_GROUPS.LUZON, 9.4, "res/Resources by city/Santa Rosa", [9.5, 9.5, 9, 9, 9, 10, 9.5, 10]),
	BACOLOD: new City("Bacolod", "Negros Occidental", ISLAND_GROUPS.VISAYAS, 8.7, "res/Resources by city/Bacolod", [9, 8, 7, 9, 9, 9, 9, 10]),
	CAGAYAN_DE_ORO: new City("Cagayan De Oro", "Misamis Oriental", ISLAND_GROUPS.MINDANAO, 9.1, "res/Resources by city/Cagayan de Oro", [9.5, 9, 9, 9.5, 9, 9, 8.5, 9]),
	ILIGAN: new City("Iligan", "Lanao Del Norte", ISLAND_GROUPS.MINDANAO, 8.4, "res/Resources by city/Iligan", [9, 8, 7.5, 8.5, 8.5, 8.5, 8, 9]),
	ILOILO: new City("Iloilo", "Cebu", ISLAND_GROUPS.VISAYAS, 9.4, "res/Resources by city/Iloilo", [9.5, 9.5, 9, 9, 10, 9, 9.5, 10]),
	BUTUAN: new City("Butuan", "Caraga", ISLAND_GROUPS.MINDANAO, 8.4, "res/Resources by city/Butuan", [8.5, 8, 8, 9, 8.5, 8.5, 8, 9]),
	// TARLAC: new City("Tarlac", "Tarlac", ISLAND_GROUPS.LUZON, 8.4, "res/Resources by city/Tarlac", [8, 8.5, 8, 9, 8.5, 8.5, 8, 8.5]),
	LEGAZPI: new City("Legazpi", "Albay", ISLAND_GROUPS.VISAYAS, 8.8, "res/Resources by city/Legazpi", [8, 8.5, 8.5, 9, 9, 10, 8.5, 9]),
	DUMAGUETE: new City("Dumaguete", "Negros Oriental", ISLAND_GROUPS.VISAYAS, 8.8, "res/Resources by city/Dumaguete", [9, 9, 9, 9.5, 8, 8.5, 9, 8.5]),
	// BATANGAS: new City("Batangas", "Batangas", ISLAND_GROUPS.LUZON, 8.3, "res/Resources by city/Batangas", [8, 7.5, 7.5, 8.5, 9, 8, 8.5, 9]),
	// PUERTO_PRINCESA: new City("Puerto Princesa", "Palawan", ISLAND_GROUPS.LUZON, 8, "res/Resources by city/Puerto Princesa", [6, 7, 7, 7.5, 9, 9, 9, 9]),
	// OLONGAPO: new City("Olongapo", "Zambales", ISLAND_GROUPS.LUZON, 9.3, "res/Resources by city/Olongapo", [9, 9, 10, 8.5, 9.5, 9, 9.5, 10]),
	// TACLOBAN: new City("Tacloban", "Leyte", ISLAND_GROUPS.VISAYAS, 8.6, "res/Resources by city/Tacloban", [9, 9, 9, 9, 7, 8.5, 9, 8]),
	ZAMBOANGA: new City("Zamboanga", "Zamboanga", ISLAND_GROUPS.MINDANAO, 8.8, "res/Resources by city/Zamboanga", [8.5, 8.5, 8.5, 8.5, 9, 9, 9, 9]),
	GENERAL_SANTOS: new City("General Santos", "South Cotabato", ISLAND_GROUPS.MINDANAO, 8.4, "res/Resources by city/General Santos", [8.5, 7, 8.5, 9, 9, 8, 8.5, 9])
};

var DESCRIPTIONS = {
	BACOLOD: {
		ABOUT_HEADER: "THE CITY OF SMILES",
		ABOUT_BODY: [
			"Bacolod City is located in the Negros<br>Occidental province of Visayas, known for<br>being one of the most friendly cities in the<br>country, as well as being one of the better<br>places to live in the Philippines due to the<br>clean and green environment and people.",
			"Bacolod has also recently been declared a<br>center of excellence by the Department of<br>Science and Technology for having quality<br>operations in the IT-BPO industry that is<br>spurring the city's economy."
		],
		MINI_DESC: "The friendly city of Bacolod is quickly growing into one of the best places to live in the Philippines with its clean environment and thriving economy."		
	},
	BUTUAN: {
		ABOUT_HEADER: "CARAGA'S ECONOMIC HUB",
		ABOUT_BODY: [
			"Butuan City is the regional center of the<br>Caraga province in Mindanao, known as one<br>of the oldest settlements in the country.<br>It continues to preserve its cultural heritage<br>and plenty of this can be seen in the city’s<br>architecture or practiced by the people.",
			"However, the city is quickly growing into a<br>cosmopolitan city with plenty of businesses<br>setting up shop in Butuan, earning it the<br>reputation of being Caraga's commercial,<br>industrial, and administrative center."
		],
		MINI_DESC: "Butuan City is a city that finds a good balance between the traditions of the past, and the innovations of the future and modern technology."		
	},
	CAGAYAN_DE_ORO: {
		ABOUT_HEADER: "THE HEART OF NORTHERN MINDANAO",
		ABOUT_BODY: [
			"Cagayan de Oro is the capital of the Misamis<br>Oriental Province, known today as the<br>regional center and business hub of the<br>region due to the rise of business investors<br>both local and foreign. IT and BPO<br>companies in parituclar, have taken an<br><br>interest, further stimulating an already<br>diverse and thriving economy.",
			"Besides its success in business, Cagayan de<br>Oro also boasts quality in the real estate<br>landscape, education, and its environment."
		],
		MINI_DESC: "Cagayan de Oro is also known as 'The Gate to the Land of Promise' due to the multitude and variety of opportunities it offers to the citizens living in Mindanao."		
	},
	DUMAGUETE: {
		ABOUT_HEADER: "THE UNIVERSITY TOWN OF THE VISAYAS",
		ABOUT_BODY: [
			"Dumaguete City is the capital of the Negros<br>Oriental province. Dubbed, \"University<br>Town\", the outstanding feature about<br>Dumaguete is its four universities where a<br>majority of students around Visayas and<br>Mindanao come to enroll for college.",
			"Dumaguete is also becoming one of the<br>preferred places for BPO and IT companies<br>to establish themselves. This has resulted in<br>a number of business parks and a spurred<br>economy promising a number of new jobs."
		],
		MINI_DESC: "Dumaguete City was long known for its strength in education and for preserving its cultural heritage, but in recent years it is also becoming one of the ideal destinations for businesses to establish themselves."		
	},
	GENERAL_SANTOS: {
		ABOUT_HEADER: "THE TUNA CAPITAL OF THE PHILIPPINES",
		ABOUT_BODY: [
			"Home of boxer Manny Pacquiao, General<br>Santos City is the center for commerce and<br>industry in the Socsargen region.",
			"General Santos is a city in touch with the<br>nature around it. Locals and tourists alike<br><br>can enjoy camping, hiking and other outdoor<br>activities in the landscape around them.<br>The city itself has a stable economy that<br>revolves primarily around its tuna industry,<br>earning itself the reputation of having the<br>most delicious tuna in the country."
		],
		MINI_DESC: "General Santos City is a city in tune with nature: this city's growing economy thrives on the tuna in its oceans and the successful eco-tourism held in their beautiful landscapes."		
	},
	ILIGAN: {
		ABOUT_HEADER: "THE INDUSTRIAL CENTER OF THE SOUTH",
		ABOUT_BODY: [
			"Iligan City is located in the province of<br>Lanao del Norte, known for having many<br>waterfalls that are popular among tourists.",
			"The city is also the industrial center of the<br>south due to its recent economic revival<br><br>spurred by the reopening of the National<br>Steel Corporation.",
			"Along with its neighbor, Cagayan de Oro,<br>Iligan is one of the fastest developing<br>centers in Northern Mindanao."
		],
		MINI_DESC: "Iligan City, praised for its majestic waterfalls, has also become one of the many up and coming cities with fast growing economies that make it one of the ideal places to live in Mindanao."		
	},
	ILOILO: {
		ABOUT_HEADER: "THE QUEEN'S CITY OF THE SOUTH",
		ABOUT_BODY: [
			"Iloilo City is the capital city of the Iloilo<br>province in Visayas, and is among the few<br>cities in our country that has preserved its<br>rich historical past and cultural heritage.<br>This history and its beautiful environments<br>have made it one of the best tourist<br><br>destinations in the country. However, Iloilo<br>is also the hub for trade, commerce,<br>finance, technology, education, and real<br>estate in the Western Visayas region,<br>making it a well rounded city that offers a<br>high quality of life."
		],
		MINI_DESC: "Iloilo City is not only a beautiful tourist destination or historical site, but is today one of the strongest in terms of livability, offering high quality housing, education, and plenty of work."		
	},
	LEGAZPI: {
		ABOUT_HEADER: "THE CITY OF FUN AND ADVENTURE",
		ABOUT_BODY: [
			"Legazpi City is the capital of the Albay<br>province in the Bicol Region, known as one<br>of the centers for education, healthcare,<br>commerce, transportation, and most<br>popularly, its adventure tourism in and<br>around Mount Mayon.",
			"In the recent years, this beautiful tourist<br>destination has slowly built itself up to<br>become more.  In 2014, Legazpi was ranked<br>second among the top three most livable<br>cities in the country."
		],
		MINI_DESC: "Legazpi City is not just a tourist destination these days. This beautiful city has progressed to be one of the most livable cities in Visayas."		
	},
	SANTA_ROSA: {
		ABOUT_HEADER: "MAKATI OF THE SOUTH",
		ABOUT_BODY: [
			"Santa Rosa is located in the Laguna<br>province of Luzon.",
			"Its thriving economy and growing economic<br>landscape have earned it the name \"Makati<br>of the South\", making it yet another one of<br>the most livable cities in the country.",
			"Many companies have taken an interest in<br>Santa Rosa due to the affordability of its<br>land and real estate, providing the city with<br>plenty of employment opportunities. Santa<br>Rosa is also home to one of the most<br>prominent schools in the country: De la<br>Salle University."
		],
		MINI_DESC: "With the combination of work opportunities, proper city management, education, and more, Santa Rosa has become an all around ideal place to live, and will soon match the likes of Metro Manila."		
	},
	ZAMBOANGA: {
		ABOUT_HEADER: "THE SARDINES CAPITAL OF THE PHILIPPINES",
		ABOUT_BODY: [
			"Zamboanga City is the commercial and<br>industrial center of the Zamboanga<br>Peninsula Region in Mindanao, known for its<br>rich Hispanic-rooted history.",
			"Zamboanga is also known for its strong<br>sardine industry, being the location of nine<br><br>out of twelve sardine companies in the<br>entire country.",
			"Zamboanga is also one of the centers for<br>education and healthcare in the region,<br>overall providing quality modern life to<br>its citizens."
		],
		MINI_DESC: "Zamboanga is a city with a rich history rooted in Hispanic culture and a thriving economy largely based on its sardine industry. It is also however, one of the centers for education and healthcare in the region."		
	},
	
};

var CITY_PAGE_TILES = {
	
	BACOLOD: {
		EMPLOYMENT: {
			DESC: "Bacolod City has long been known for its agriculture and sugar<br>cane industry. In recent years however, several IT-BPO<br>companies have established themselves in the city due to the<br>potential work force and available space. Their presence has<br>stimulated Bacolod’s economy, creating new jobs, earning it the<br>title “Third fastest growing economy in the IT-BPO industry.“",
			TILES: [
				 {caption: "PAG-IBIG Office, Bacolod", res: "/Resources by city/Bacolod/Pics_Employment/CityBacolod_EmploymentTile01.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/Resources by city/Bacolod/Pics_Employment/CityBacolod_EmploymentTile02.jpg"},
				 {caption: "Penalosa Farm", res: "/Resources by city/Bacolod/Pics_Employment/CityBacolod_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Bacolod City’s residential market is quite varied, offering many<br>kinds of places to call home from a simple studio for rent, a<br>house in a subdivision, or a condiminium. According to real<br>estate reviews, the cost of living in Bacolod City is about 25%<br>cheaper than in Metro Manila.",
			TILES: [
				 {caption: "Akina Residences", res: "/Resources by city/Bacolod/Pics_Housing/CityBacolod_HousingTile01.jpg"},
				 {caption: "Camella Bacolod", res: "/Resources by city/Bacolod/Pics_Housing/CityBacolod_HousingTile02.jpg"},
				 {caption: "Hi Residences Condominium", res: "/Resources by city/Bacolod/Pics_Housing/CityBacolod_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Bacolod City has all the necessary healthcare and facilities for<br>basic and emergency needs, and the majority of these are in<br>quality condition. However, Bacolod still has a ways to go in<br>terms of having medical services catering to high-profile<br>conditions, luxury care, and mental health.",
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/Resources by city/Bacolod/Pics_Health/CityBacolod_HealthTile01.jpg"},
				 {caption: "Bacolod Adventist Medical Center", res: "/Resources by city/Bacolod/Pics_Health/CityBacolod_HealthTile02.jpg"},
				 {caption: "Riverside Hospital", res: "/Resources by city/Bacolod/Pics_Health/CityBacolod_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Bacolod City is the center for higher education in Negros<br>Occidental, having three of the region’s best universities:<br>University of Negros Occidental, West Negros University, and<br>University of St. La Salle. Bacolod also has a number of quality<br>primary and secondary schools for younger children.",
			TILES: [
				 {caption: "University of Negros Occidental", res: "/Resources by city/Bacolod/Pics_Education/CityBacolod_EducationTile01.jpg"},
				 {caption: "West Negros University", res: "/Resources by city/Bacolod/Pics_Education/CityBacolod_EducationTile02.jpg"},
				 {caption: "University of Saint La Salle", res: "/Resources by city/Bacolod/Pics_Education/CityBacolod_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Bacolod has a multitude of quality infrastructure throughout the<br>city. It has a variety of malls, hotels, restaurants, and residential<br>buildings. Bacolod also has a variety of water, electricity, internet,<br>and cable TV services that are also available in the bigger cities<br>of Luzon. What Bacolod seems to value most of all is having a<br>number of sports-related infrastructure for fun and education.",
			TILES: [
				 {caption: "Robinson's Bacolod", res: "/Resources by city/Bacolod/Pics_Infrastructure/CityBacolod_InfraTile01.jpg"},
				 {caption: "Embarcadero Mall Complex", res: "/Resources by city/Bacolod/Pics_Infrastructure/CityBacolod_InfraTile02.jpg"},
				 {caption: "Panaad Sports Complex", res: "/Resources by city/Bacolod/Pics_Infrastructure/CityBacolod_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Bacolod City has all the standard and traditional modes for<br>public transportation, such as tricycles and jeepneys. It has its<br>local airport and seaport for both its citizens and businesses, all<br>of which are in good shape. One would not find it very different<br>from life in Metro Manila. The best part: significantly less traffic.",
			TILES: [
				 {caption: "Tricycle driver in Bacolod", res: "/Resources by city/Bacolod/Pics_Transpo/CityBacolod_Transpo01.jpg"},
				 {caption: "Ceres Buslines Terminal", res: "/Resources by city/Bacolod/Pics_Transpo/CityBacolod_Transpo02.jpg"},
				 {caption: "New Bacolod Silay International Airport", res: "/Resources by city/Bacolod/Pics_Transpo/CityBacolod_Transpo03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Legazpi City does well in maintaining and<br>managing the state of the city. With sugar production being the<br>largest earning power of its economy, Bacolod’s government<br>emphasizes taking steps to improve farmer living and worker<br>conditions, as well as improving infrastructure to ease farmer to<br>market transport of produce.",
			TILES: [
				 {caption: "Gov’t gives farmers equipment", res: "/Resources by city/Bacolod/Pics_LocalGovt/CityBacolod_LGU01.jpg"},
				 {caption: "City Hall, Bacolod", res: "/Resources by city/Bacolod/Pics_LocalGovt/CityBacolod_LGU02.jpg"},
				 {caption: "Medical and Dental outreach by PHO", res: "/Resources by city/Bacolod/Pics_LocalGovt/CityBacolod_LGU03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Bacolod City has a number of places for its citizens to indulge in<br>some recreation time. Bacolod is known to love their sports,<br>especially football, and a bit of golf. The city also has a lot of<br>cultural recreation to indulge in, from the renowned MassKara<br>festival, to the beautifully preserved ruins in Bacolod’s lands.",
			TILES: [
				 {caption: "MassKara Festival", res: "/Resources by city/Bacolod/Pics_Recreation/CityBacolod_Rec01.jpg"},
				 {caption: "Talisay Ruins", res: "/Resources by city/Bacolod/Pics_Recreation/CityBacolod_Rec02.jpg"},
				 {caption: "Ceres Football Team of Bacolod", res: "/Resources by city/Bacolod/Pics_Recreation/CityBacolod_Rec03.jpg"},
			]
		},
	},
	BUTUAN: {
		EMPLOYMENT: {
			DESC: "The rise of business establishments and financial institutions in<br>the city have raised Butuan's economy to being one of the<br>strongest in the country, earning it the reputation of being the<br>commercial, industrial, and administrative center of the Caraga<br>region. Besides these, Butuan also has plenty of employment<br>opportunities in the agriculture, retail, and construction.",
			TILES: [
				 {caption: "Development Bank of the Philippines", res: "/Resources by city/Butuan/Pics_Employment/CityButuan_EmploymentTile01.jpg"},
				 {caption: "Retail business, Robinsons", res: "/Resources by city/Butuan/Pics_Employment/CityButuan_EmploymentTile02.jpg"},
				 {caption: "Agriculture Industry", res: "/Resources by city/Butuan/Pics_Employment/CityButuan_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Housing in Butuan is relatively cheap, with rent prices being half<br>as cheap as those in Quezon City and similar cities. There is also<br>a variety in the kinds of accommodations you can secure for<br>yourself and your family. Butuan also has a useful resource for<br>looking through real estate offers at: http://butuanproperty.com/",
			TILES: [
				 {caption: "Golden Ribbon Apartments", res: "/Resources by city/Butuan/Pics_Housing/CityButuan_HousingTile01.jpg"},
				 {caption: "Camella Homes, Butuan", res: "/Resources by city/Butuan/Pics_Housing/CityButuan_HousingTile02.jpg"},
				 {caption: "West Highland Residential", res: "/Resources by city/Butuan/Pics_Housing/CityButuan_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Butuan's healthcare is focused on addressing malnutrition in the<br>city by maintaining quality nutrition activities, food assistance,<br>nutrition education, and livelihiood assistance. In terms of quality<br>medical care, Butuan still lacks staff and facilities to be able to<br>match up to cities in Metro Manila.",
			TILES: [
				 {caption: "Butuan Medical Center", res: "/Resources by city/Butuan/Pics_Health/CityButuan_HealthTile01.jpg"},
				 {caption: "Manuel J. Santos Hospital", res: "/Resources by city/Butuan/Pics_Health/CityButuan_HealthTile02.jpg"},
				 {caption: "Butuan Doctors Hospital", res: "/Resources by city/Butuan/Pics_Health/CityButuan_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Butuan is known for its teachers. In schools like Butuan Central<br>Elementary School, they are greatly experienced in specialization<br>techniques and often participate in seminars and workshops to<br>better their teaching skills. The city also has two universities:<br>Father Saturnino Urios University and Caraga State University.",
			TILES: [
				 {caption: "Caraga State University", res: "/Resources by city/Butuan/Pics_Education/CityButuan_EducationTile01.jpg"},
				 {caption: "Father Saturnino Urios University", res: "/Resources by city/Butuan/Pics_Education/CityButuan_EducationTile02.jpg"},
				 {caption: "Butuan Central Elementary School", res: "/Resources by city/Butuan/Pics_Education/CityButuan_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Butuan City has many of the utilities normally available to a<br>highly urbanized city, though it may lack the number and variety<br>of options that other cities do when it comes to luxuries like<br>internet and cable TV. The city is currently undergoing several<br>improvements to its infrastructure under the new mayor.",
			TILES: [
				 {caption: "Urios Gym", res: "/Resources by city/Butuan/Pics_Infrastructure/CityButuan_InfraTile01.jpg"},
				 {caption: "Banza Church Ruins", res: "/Resources by city/Butuan/Pics_Infrastructure/CityButuan_InfraTile02.jpg"},
				 {caption: "Ramon Magsaysay Bridge", res: "/Resources by city/Butuan/Pics_Infrastructure/CityButuan_InfraTile0.jpg"}
			]
		},
		TRANSPORTATION: {
			DESC: "Butuan has all the typical modes of transportation that a city<br>needs for both public and private commuting. These are taxicabs,<br>tricycles, buses, vans, and jeepneys. Unique to the city are its<br>orange tricycles which can fit 6-7 passengers. Butuan also has its<br>own seaport and airport as other modes of transportation.",
			TILES: [
				 {caption: "New Integrated Van Terminal", res: "/Resources by city/Butuan/Pics_Transpo/CityButuan_TranspoTile01.jpg"},
				 {caption: "Butuan orange tricycle", res: "/Resources by city/Butuan/Pics_Transpo/CityButuan_TranspoTile02.jpg"},
				 {caption: "Butuan National Airport", res: "/Resources by city/Butuan/Pics_Transpo/CityButuan_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government in Butuan City recently elected new officials in<br>July of 2016, and the new mayor Ronnie Vicente Conde Lagnada<br>is already planning ten new projects to improve the condition of<br>the city. These projects are primarily focused on improving good<br>governance, city cleanliness,  and city security.",
			TILES: [
				 {caption: "Government performance review", res: "/Resources by city/Butuan/Pics_LocalGovt/CityButuan_LGUTile01.jpg"},
				 {caption: "Skills development training", res: "/Resources by city/Butuan/Pics_LocalGovt/CityButuan_LGUTile02.jpg"},
				 {caption: "Tree planting in Butuan", res: "/Resources by city/Butuan/Pics_LocalGovt/CityButuan_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Butuan City has all the usual recreational areas a city has: malls,<br>restaurants, hotels, parks, and plazas. There are several heritage<br>landmarks and museums within the city for those who are<br>looking to experience culture and history. The city also holds six<br>festivals throughout the year.",
			TILES: [
				 {caption: "Bood Promontory Eco-Park", res: "/Resources by city/Butuan/Pics_Recreation/CityButuan_RecTile01.jpg"},
				 {caption: "Balangay Festival", res: "/Resources by city/Butuan/Pics_Recreation/CityButuan_RecTile02.jpg"},
				 {caption: "Butuan National Museum", res: "/Resources by city/Butuan/Pics_Recreation/CityButuan_RecTile03.jpg"},
			]
		},
	},
	CAGAYAN_DE_ORO: {
		EMPLOYMENT: {
			DESC: "Cagayan de Oro has been experiencing rapid growth in its<br>economy due to investments both local and foreign as well as<br>many IT-BPO companies taking interest in the city. Cagayan de<br>Oro is also home to multinational companies like Nestle and Del<br>Monte. Add to that a vibrant tourism industry, and Cagayan de<br>Oro has plenty of employment opportunities of different kinds.",
			TILES: [
				 {caption: "Nestle Offices", res: "/Resources by city/Cagayan de Oro/Pics_Employment/CityCDO_EmploymentTile01.jpg"},
				 {caption: "Business District at Cagayan de Oro", res: "/Resources by city/Cagayan de Oro/Pics_Employment/CityCDO_EmploymentTile02.jpg"},
				 {caption: "DPWH Engineering Office", res: "/Resources by city/Cagayan de Oro/Pics_Employment/CityCDO_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Cagayan de Oro has a very healthy residential market as many<br>companies have taken an interest in constructing mid-rise and<br>high-rise condominiums, hotels, houses, and studios. A couple of<br>real estate developers have even implemented construction for<br>socialized housing projects for those in need.",
			TILES: [
				 {caption: "Primavera Residences", res: "/Resources by city/Cagayan de Oro/Pics_Housing/CityCDO_HousingTile01.jpg"},
				 {caption: "Tuscania Towers", res: "/Resources by city/Cagayan de Oro/Pics_Housing/CityCDO_HousingTile02.jpg"},
				 {caption: "Lumina Homes, Socialized Housing", res: "/Resources by city/Cagayan de Oro/Pics_Housing/CityCDO_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Cagayan de Oro has many hospitals that are well staffed and<br>equipped with the proper facilities to provide the necessary<br>range of healthcare to its citizens, and more. The growing city<br>has resulted in a growth in all areas of livability, including health,<br>which means more medical centers and better healthcare.",
			TILES: [
				 {caption: "Capitol University Medical City", res: "/Resources by city/Cagayan de Oro/Pics_Health/CityCDO_HealthTile01.jpg"},
				 {caption: "Northern Mindanao Medical Center", res: "/Resources by city/Cagayan de Oro/Pics_Health/CityCDO_HealthTile02.jpg"},
				 {caption: "Maria Reyna–Xavier University Hospital", res: "/Resources by city/Cagayan de Oro/Pics_Health/CityCDO_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Cagayan de Oro is one of the major players in the realm of<br>education within the region due to it being the home of nine<br>universities, such as Ateneo de Cagayan, and dozens of quality<br>primary and secondary schools.",
			TILES: [
				 {caption: "Mindanao University of Science and Technology", res: "/Resources by city/Cagayan de Oro/Pics_Education/CityCDO_EducationTile01.jpg"},
				 {caption: "Xavier University – Ateneo de Cagayan", res: "/Resources by city/Cagayan de Oro/Pics_Education/CityCDO_EducationTile02.jpg"},
				 {caption: "Capitol University", res: "/Resources by city/Cagayan de Oro/Pics_Education/CityCDO_EducationTile03.jpg"}
			]
		},
		INFRASTRUCTURE: {
			DESC: "Cagayan de Oro is equipped with nearly all the variety and<br>quality of utilities that Metro Manila has. This covers good water<br>supply, plumbing, electricity, waste management, internet,<br>cellular networks, building construction, and road networks.<br>Notably, Cagayan de Oro is the regional base of the Philippine air<br>force, army, and national police in Northern Mindanao.",
			TILES: [
				 {caption: "CEPALCO Solar Energy", res: "/Resources by city/Cagayan de Oro/Pics_Infrastructure/CityCDO_InfraTile01.jpg"},
				 {caption: "Divine Mercy Shrine", res: "/Resources by city/Cagayan de Oro/Pics_Infrastructure/CityCDO_InfraTile02.jpg"},
				 {caption: "San Agustin Cathedral", res: "/Resources by city/Cagayan de Oro/Pics_Infrastructure/CityCDO_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Cagayan de Oro has various means for transportation. It has the<br>usual tricycles, jeepneys, taxis, and buses found in most cities.<br>Cagayan de Oro also has motorelas within the city and river taxis<br>for water travel. The city has its own seaport and airport for out<br>of town travel as well.",
			TILES: [
				 {caption: "Westbound Integrated Bus Terminal", res: "/Resources by city/Cagayan de Oro/Pics_Transpo/CityCDO_TranspoTile01.jpg"},
				 {caption: "Laguindingan International Airport", res: "/Resources by city/Cagayan de Oro/Pics_Transpo/CityCDO_TranspoTile02.jpg"},
				 {caption: "Motorela during Christmas", res: "/Resources by city/Cagayan de Oro/Pics_Transpo/CityCDO_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Cagayan de Oro has made significant strides<br>in raising the city’s status and economy as a metropolis. These<br>efforts have resulted in Cagayan de Oro being awarded an<br>“e-Readiness” award for leading in IT related endeavors,<br>as well as being named one of the top cities for livability and<br>business establishments.",
			TILES: [
				 {caption: "City Hall, Cagayan de Oro", res: "/Resources by city/Cagayan de Oro/Pics_LocalGovt/CityCDO_LGUTile01.jpg"},
				 {caption: "Outreach Program for Barangay Besigan", res: "/Resources by city/Cagayan de Oro/Pics_LocalGovt/CityCDO_LGUTile02.jpg"},
				 {caption: "E-Readiness Award for IT proficiency", res: "/Resources by city/Cagayan de Oro/Pics_LocalGovt/CityCDO_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "The recreational facilities and locations found in Cagayan de Oro<br>can measure up to the quality and variety of those found in<br>Metro Manila. There is a large number of hotels, restaurants,<br>malls, museums, heritage landmarks, sports complexes, nature<br>and adventure activities, and cultural festivals.",
			TILES: [
				 {caption: "Pelaez Memorial Sports Center", res: "/Resources by city/Cagayan de Oro/Pics_Recreation/CityCDO_RecTile01.jpg"},
				 {caption: "Higalaay Festival", res: "/Resources by city/Cagayan de Oro/Pics_Recreation/CityCDO_RecTile02.jpg"},
				 {caption: "Performance at RODELSA Hall", res: "/Resources by city/Cagayan de Oro/Pics_Recreation/CityCDO_RecTile03.jpg"},
			]
		},
	},
	DUMAGUETE: {
		EMPLOYMENT: {
			DESC: "The employment landscape in Dumaguete city has been<br>booming in recent years with the establishment of several<br>business and IT parks and plazas. Several retail businesses and<br>BPO companies have also decided to settle in Dumaguete.<br>Tourism is yet another avenue of employment that earns quite a<br>bit of money for the city.",
			TILES: [
				 {caption: "TeleTech, Dumaguete (BPO)", res: "/Resources by city/Dumaguete/Pics_Employment/CityDumaguete_EmploymentTile01.jpg"},
				 {caption: "Dumaguete Business Park and IT Plaza", res: "/Resources by city/Dumaguete/Pics_Employment/CityDumaguete_EmploymentTile02.jpg"},
				 {caption: "Cang’s Inc., (Retail)", res: "/Resources by city/Dumaguete/Pics_Employment/CityDumaguete_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Dumaguete has many residential places of high quality, complete<br>with all the necessary facilities a home should have, and at<br>nearly half the cost of living compared to Metro Manila. Statistics<br>show that P18,000 - P20,000 a month is enough for the average<br>person to afford a home in the more expensive part of the city.",
			TILES: [
				 {caption: "MarPas Apartments", res: "/Resources by city/Dumaguete/Pics_Housing/CityDumaguete_HousingTile01.jpg"},
				 {caption: "Vida Homes Condo Resort", res: "/Resources by city/Dumaguete/Pics_Housing/CityDumaguete_HousingTile02.jpg"},
				 {caption: "Mitual Homes, affordable housing", res: "/Resources by city/Dumaguete/Pics_Housing/CityDumaguete_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Dumaguete’s health and medical care facilities are all up to date<br>and able to conduct major and minor operations. There are three<br>major tertiary hospitals in the city, what you would call the “best<br>of the best” in healthcare. These are Holy Child Hospital, Negros<br>Oriental Provincial Hospital, and Silliman Medical Center.",
			TILES: [
				 {caption: "Holy Child Hospital", res: "/Resources by city/Dumaguete/Pics_Health/CityDumaguete_HealthTile01.jpg"},
				 {caption: "Negros Oriental Provincial Hospital", res: "/Resources by city/Dumaguete/Pics_Health/CityDumaguete_HealthTile02.jpg"},
				 {caption: "Silliman University Medical Center", res: "/Resources by city/Dumaguete/Pics_Health/CityDumaguete_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Dumaguete is known as “University City” for a reason. It offers<br>some of the best education in the region, graduates of which<br>have made their mark on the world even internationally. Most<br>notable is Silliman University, and there are over fourteen others<br>that are excellent schools.",
			TILES: [
				 {caption: "Foundation University", res: "/Resources by city/Dumaguete/Pics_Education/CityDumaguete_EducationTile01.jpg"},
				 {caption: "Silliman University", res: "/Resources by city/Dumaguete/Pics_Education/CityDumaguete_EducationTile02.jpg"},
				 {caption: "St. Paul University", res: "/Resources by city/Dumaguete/Pics_Education/CityDumaguete_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Dumaguete has maintained a few of its heritage landmarks and<br>buildings, dotting the city with marks of history. Dumaguete also<br>has good quality electricity, water, internet, TV cable, and cellular<br>services, though the variety of brands may be lacking when<br>compared to Metro Manila brands. There are however, plenty of<br>well-built facilities such as schools, hospitals, and malls.",
			TILES: [
				 {caption: "La Residencia Almar Hotel", res: "/Resources by city/Dumaguete/Pics_Infrastructure/CityDumaguete_InfraTile01.jpg"},
				 {caption: "Rizal Boulevard", res: "/Resources by city/Dumaguete/Pics_Infrastructure/CityDumaguete_InfraTile02.jpg"},
				 {caption: "Dumaguete Belfry Landmark", res: "/Resources by city/Dumaguete/Pics_Infrastructure/CityDumaguete_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Dumaguete City has the usual modes of transportation most<br>Filipinos are accustomed to: tricycles, jeepneys, and taxicabs, all<br>of which can get you anywhere in the city. Dumaguete also has<br>its own airport and seaport. Unique to the city is its larger<br>tricycles that can carry 6-8 people as opposed to the usual 2-3. ",
			TILES: [
				 {caption: "Dumaguete City Port", res: "/Resources by city/Dumaguete/Pics_Transpo/CityDumaguete_TranspoTile01.jpg"},
				 {caption: "Sibulan Airport", res: "/Resources by city/Dumaguete/Pics_Transpo/CityDumaguete_TranspoTile02.jpg"},
				 {caption: "Tricycle in Dumaguete", res: "/Resources by city/Dumaguete/Pics_Transpo/CityDumaguete_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Dumaguete works hard to maintain and raise<br>the quality of what has been most succesful in their city:<br>education. Several programs are geared towards fostering<br>learning, and the city has also worked on increasing business<br>and employment opportunities within the city by attracting<br>investors with all the talent available from Dumaguete’s schools.",
			TILES: [
				 {caption: "Gift Program for less fortunate", res: "/Resources by city/Dumaguete/Pics_LocalGovt/CityDumaguete_LGUTile01.jpg"},
				 {caption: "Firefighters of Dumaguete", res: "/Resources by city/Dumaguete/Pics_LocalGovt/CityDumaguete_LGUTile02.jpg"},
				 {caption: "Dumaguete Medical Mission Outreach", res: "/Resources by city/Dumaguete/Pics_LocalGovt/CityDumaguete_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Recreation in Dumaguete can be found in the usual malls or<br>restaurants, but the city also has plenty of beautiful spaces,<br>such as its boulevards by the beach, parks, and plazas. The city<br>also has several sports centers and programs for a more upbeat<br>form of fun.",
			TILES: [
				 {caption: "Macias Memorial Coliseum", res: "/Resources by city/Dumaguete/Pics_Recreation/CityDumaguete_RecTile01.jpg"},
				 {caption: "Snorkeling in Dauin, Dumaguete", res: "/Resources by city/Dumaguete/Pics_Recreation/CityDumaguete_RecTile02.jpg"},
				 {caption: "Swimming in Tierra Alta Resort", res: "/Resources by city/Dumaguete/Pics_Recreation/CityDumaguete_RecTile03.jpg"},
			]
		},
	},
	GENERAL_SANTOS: {
		EMPLOYMENT: {
			DESC: "General Santos is the largest producer of sashimi-grade tuna in<br>the Philippines. Most employment and economic gain revolves<br>around their tuna trade and the agro-industry. That said, the city<br>is slowly progressing and expanding to include more kinds of<br>modern jobs as businesses also begin to take notice of the city.",
			TILES: [
				 {caption: "GenSan fishing industry", res: "/Resources by city/General Santos/Pics_Employment/CityGensan_Employment01.jpg"},
				 {caption: "Agriculture industry", res: "/Resources by city/General Santos/Pics_Employment/CityGensan_Employment02.jpg"},
				 {caption: "San Miguel Corporation", res: "/Resources by city/General Santos/Pics_Employment/CityGensan_Employment03.jpg"},
			]
		},
		HOUSING: {
			DESC: "The cost of living in General Santos city is significantly lower than<br>that in bigger cities, and yet you can afford to have nearly the<br>same kind lifestyle in terms of high-quality utilities and<br>construction of the home.",
			TILES: [
				 {caption: "Lumina homes, socialized housing", res: "/Resources by city/General Santos/Pics_Housing/CityGensan_Housing01.jpg"},
				 {caption: "Bloomfields, GenSan", res: "/Resources by city/General Santos/Pics_Housing/CityGensan_Housing02.jpg"},
				 {caption: "Antonio Apartelle for rent", res: "/Resources by city/General Santos/Pics_Housing/CityGensan_Housing03.jpg"},
			]
		},
		HEALTH: {
			DESC: "General Santos has a few public hospitals that take care of the<br>usual medical concerns as well as general checkups and the like.<br>The city has one tertiary hospital that is in top, up-to-date<br>condition. The city hopes to invest more in healthcare in the<br>following years by adding hospitals and improving current ones.",
			TILES: [
				 {caption: "Santos General Hospital", res: "/Resources by city/General Santos/Pics_Health/CityGensan_Health01.jpg"},
				 {caption: "Mindanao Medical Center", res: "/Resources by city/General Santos/Pics_Health/CityGensan_Health02.jpg"},
				 {caption: "Socsargen County Hospital", res: "/Resources by city/General Santos/Pics_Health/CityGensan_Health03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "General Santos is home to three universities: the Notre Dame of<br>Dadiangas University, Mindanao State University, and New Era<br>University. The city also has over 50 private schools and 100<br>public schools.  The University of Santo Tomas has also begun<br>planning the opening of a campus in General Santos.",
			TILES: [
				 {caption: "Notre Dame of Dadiangas University", res: "/Resources by city/General Santos/Pics_Education/CityGensan_Education01.jpg"},
				 {caption: "Mindanao State University, GenSan", res: "/Resources by city/General Santos/Pics_Education/CityGensan_Education02.jpg"},
				 {caption: "New Era University", res: "/Resources by city/General Santos/Pics_Education/CityGensan_Education03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "The infrastructure of General Santos, which includes the state of<br>buildings, roads, and the provision of utilities like water,<br>electricity, and internet, are all of high-quality just like the<br>first-class cities in Luzon. Unique to the city is the high standard<br>and presence of Task Force GenSan of the Philippine Army which<br>keeps the city secure.",
			TILES: [
				 {caption: "Plaza General Santos", res: "/Resources by city/General Santos/Pics_Infrastructure/CityGensan_Infra01.jpg"},
				 {caption: "Overview of city streets", res: "/Resources by city/General Santos/Pics_Infrastructure/CityGensan_Infra02.jpg"},
				 {caption: "General Santos City Water District", res: "/Resources by city/General Santos/Pics_Infrastructure/CityGensan_Infra03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "General Santos has the usual modes of transportation Filipinos<br>are used to: tricycles, jeepneys, taxicabs, and buses. The city also<br>has its own international airport, the largest in Mindanao, and<br>seaport, deemed as one of the finest in the country.",
			TILES: [
				 {caption: "Makar Wharf, GenSan seaport", res: "/Resources by city/General Santos/Pics_Transpo/CityGensan_Transpo01.jpg"},
				 {caption: "GenSan motorela", res: "/Resources by city/General Santos/Pics_Transpo/CityGensan_Transpo02.jpg"},
				 {caption: "General Santos International Airport", res: "/Resources by city/General Santos/Pics_Transpo/CityGensan_Transpo03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The local government in General Santos has been pushing<br>several initiatives to better the state of the city and the<br>well-being of its people. They maintain the quality of their main<br>source of income being the tuna trade and the seaports they use<br>to ship them. The local government is also pushing to improve<br>the state of healthcare and business in the city.",
			TILES: [
				 {caption: "Task Force GenSan", res: "/Resources by city/General Santos/Pics_LocalGovt/CityGensan_LGu01.jpg"},
				 {caption: "Farmer’s training program", res: "/Resources by city/General Santos/Pics_LocalGovt/CityGensan_LGu02.jpg"},
				 {caption: "Free medical in Barangay Bawing", res: "/Resources by city/General Santos/Pics_LocalGovt/CityGensan_LGu03.jpg"},
			]
		},
		LEISURE: {
			DESC: "General Santos has all the usual avenues for recreation that<br>cities do, paritcularly malls as it is known as the shopping capital<br>of the region. However, there are not as many of these places are<br>there are in other cities like Metro Manila or Iloilo, and the city<br>still lacks a bit on having other types of recreation besides those.",
			TILES: [
				 {caption: "Robinsons Place GenSan", res: "/Resources by city/General Santos/Pics_Recreation/CityGensan_Rec01.jpg"},
				 {caption: "Paulino Santos Memorial Plaza", res: "/Resources by city/General Santos/Pics_Recreation/CityGensan_Rec02.jpg"},
				 {caption: "The Green Leaf Hotel", res: "/Resources by city/General Santos/Pics_Recreation/CityGensan_Rec03.jpg"},
			]
		},
	},
	ILIGAN: {
		EMPLOYMENT: {
			DESC: "Iligan City is one of the fastest developing areas in Northern Mindanao,<br>with its economy experiencing a revival due to the new employment<br>opportunities brought in by the influx of investments and business<br>establishments in the recent years. Other promising avenues for<br>employment can be found in its heavy industries like the National<br>Power Corporation and the Global Steelworks Infrastructures, Inc.",
			TILES: [
				 {caption: "Mariwasa Ceramics Inc.", res: "/Resources by city/Iligan/Pics_Employment/CityIligan_EmploymentTile01.jpg"},
				 {caption: "Steel Industry", res: "/Resources by city/Iligan/Pics_Employment/CityIligan_EmploymentTile02.jpg"},
				 {caption: "Hydroelectric Industry", res: "/Resources by city/Iligan/Pics_Employment/CityIligan_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "The cost of living in Iligan City is about 20% cheaper than<br>Quezon City and the rest of Metro Manila. The residential market<br>has some quality finds, and Iligan has offers from the cheap to<br>the extravagant, though the number of available homes is not<br>always capable of meeting the demand.",
			TILES: [
				 {caption: "Caprice Residences", res: "/Resources by city/Iligan/Pics_Housing/CityIligan_HousingTile01.jpg"},
				 {caption: "Mitual Homes, Iligan", res: "/Resources by city/Iligan/Pics_Housing/CityIligan_HousingTile02.jpg"},
				 {caption: "Rose Garden Apartelle for rent", res: "/Resources by city/Iligan/Pics_Housing/CityIligan_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Iligan City has several hospitals available to its citizens that are<br>equipped with facilities that are enough to address the usual<br>needs of people. However, most of these hospitals still have a<br>ways to go in terms of quality facilities before they can match<br>the medical care provided in the country’s richest cities.",
			TILES: [
				 {caption: "Adventist Medical Center – Iligan", res: "/Resources by city/Iligan/Pics_Health/CityIligan_HealthTile01.jpg"},
				 {caption: "Mercy Community Hospital", res: "/Resources by city/Iligan/Pics_Health/CityIligan_HealthTile02.jpg"},
				 {caption: "Gregorio T. Lluch Memorial Hospital", res: "/Resources by city/Iligan/Pics_Health/CityIligan_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Iligan City has eight universities, and a total of 181 schools covering<br>public, private, and vocational and technical schools. Though the<br>coverage of courses offered in tertiary schools may be limited<br>compared to those in other cities, the quality of those offered<br>such as engineering, IT, and business, is considered excellent.",
			TILES: [
				 {caption: "La Salle Academy, High School", res: "/Resources by city/Iligan/Pics_Education/CityIligan_EducationTile01.jpg"},
				 {caption: "Iligan Capitol College", res: "/Resources by city/Iligan/Pics_Education/CityIligan_EducationTile02.jpg"},
				 {caption: "Mindanao State University, Iligan", res: "/Resources by city/Iligan/Pics_Education/CityIligan_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Iligan City’s infrastructure is sufficient enough to properly<br>address the needs of its citizens: adequate water supply, waste<br>management, electricity, and many telecommunication services<br>are available to the city.  However, the quality of these can be<br>raised to a higher standard which is currently being addressed by<br>Iligan’s city government.",
			TILES: [
				 {caption: "St. Michael's Cathedral", res: "/Resources by city/Iligan/Pics_Infrastructure/CityIligan_InfraTile01.jpg"},
				 {caption: "Don Gregorio T. Lluch Avenue", res: "/Resources by city/Iligan/Pics_Infrastructure/CityIligan_InfraTile02.jpg"},
				 {caption: "Anahaw Ampitheater", res: "/Resources by city/Iligan/Pics_Infrastructure/CityIligan_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Iligan has all the necessary modes of transportation within the<br>city such as taxicabs, tricycles, jeepneys and buses. Tartanillas or<br>kalesas are also used to get around the city. Iligan also has two<br>main bus terminals that cater to out of city transportation, as<br>well as an airport and seaport of its own.",
			TILES: [
				 {caption: "Integrated Bus and Jeepney Terminal", res: "/Resources by city/Iligan/Pics_Transpo/CityIligan_TranspoTile01.jpg"},
				 {caption: "Tartanillas", res: "/Resources by city/Iligan/Pics_Transpo/CityIligan_TranspoTile02.jpg"},
				 {caption: "Port of Iligan", res: "/Resources by city/Iligan/Pics_Transpo/CityIligan_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Iligan City continues to emphasize focus on<br>improving city roadways to better farm to market transportation,<br>and improvements to city wellfare through better waste<br>management processes and expanding the water supply<br>system beneath Iligan.",
			TILES: [
				 {caption: "Road renovation", res: "/Resources by city/Iligan/Pics_LocalGovt/CityIligan_LGUTile01.jpg"},
				 {caption: "HUGS Foundation outreach at schools", res: "/Resources by city/Iligan/Pics_LocalGovt/CityIligan_LGUTile02.jpg"},
				 {caption: "Well construction for cleaner water", res: "/Resources by city/Iligan/Pics_LocalGovt/CityIligan_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Iligan is also known as the 'City of Majestic Waterfalls' for having<br>24 beautiful waterfalls, most notably the Maria Cristina Falls. The<br>city also has its cultural festivals every September. Iligan also<br>enjoys the usual modern recreational activities like movies,<br>malls, shopping, and restaurants.",
			TILES: [
				 {caption: "Maria Cristina Waterfalls", res: "/Resources by city/Iligan/Pics_Recreation/CityIligan_RecTile01.jpg"},
				 {caption: "Sinulog Festival", res: "/Resources by city/Iligan/Pics_Recreation/CityIligan_RecTile02.jpg"},
				 {caption: "Gaisano Iligan Mall", res: "/Resources by city/Iligan/Pics_Recreation/CityIligan_RecTile03.jpg"},
			]
		},
	},
	ILOILO: {
		EMPLOYMENT: {
			DESC: "Being the hub for trade, commerce, finance, technology, medical<br>tourism, hospitality, real estate, tourism, education, and industry<br>in Western Visayas, Iloilo without a doubt has plenty of jobs to<br>choose from. A number of BPOs, businesses, offices have also<br>settled into the city, creating even more job opportunities.",
			TILES: [
				 {caption: "Iloilo Business Park", res: "/Resources by city/Iloilo/Pics_Employment/CityIloilo_Employment01.jpg"},
				 {caption: "Startek Office, Iloilo", res: "/Resources by city/Iloilo/Pics_Employment/CityIloilo_Employment02.jpg"},
				 {caption: "TeleTech Office, Iloilo", res: "/Resources by city/Iloilo/Pics_Employment/CityIloilo_Employment03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Housing in Iloilo is similar to what you’ll find in Metro Manila in<br>terms of quality and affordability, although prices in Iloilo are a<br>few thousand pesos cheaper on average. Iloilo offers plenty of<br>various residential locations from the simple to the grand.",
			TILES: [
				 {caption: "Lumina Homes, Socialized Housing", res: "/Resources by city/Iloilo/Pics_Housing/CityIloilo_Housing01.jpg"},
				 {caption: "Camella Homes, Iloilo", res: "/Resources by city/Iloilo/Pics_Housing/CityIloilo_Housing02.jpg"},
				 {caption: "Lafayette Park Square Condo", res: "/Resources by city/Iloilo/Pics_Housing/CityIloilo_Housing03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Iloilo city has high quality medical facilities and services that<br>have made it known to provide excellent health and medical<br>care to its citizens. There are a couple of first-class hospitals<br>located within the city such as The Medical City Iloilo and<br>QualiMed Hospital.",
			TILES: [
				 {caption: "Iloilo Mission Hospital", res: "/Resources by city/Iloilo/Pics_Health/CityIloilo_Health01.jpg"},
				 {caption: "Savior Hospital, Iloilo", res: "/Resources by city/Iloilo/Pics_Health/CityIloilo_Health02.jpg"},
				 {caption: "Iloilo Doctor's Hospital", res: "/Resources by city/Iloilo/Pics_Health/CityIloilo_Health03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Iloilo City is known as the educational center of the Western<br>Visayas region, having ten universities, 88 private schools, and 52<br>public schools.  The city is also known for its high literacy rate of<br>approximately 95%, and its high talent availability among the<br>city’s fresh graduates. ",
			TILES: [
				 {caption: "West Visayas State University", res: "/Resources by city/Iloilo/Pics_Education/CityIloilo_Education01.jpg"},
				 {caption: "University of the Philippines, Visayas", res: "/Resources by city/Iloilo/Pics_Education/CityIloilo_Education02.jpg"},
				 {caption: "Central Philippine University", res: "/Resources by city/Iloilo/Pics_Education/CityIloilo_Education03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Iloilo has some of the strongest, high quality infrastructure in the<br>Philippines. Most of the quality and variety of utilities like<br>electricity, water, cellular networks, internet providers, are<br>offered in Iloilo City. The city also has several luxury locations like<br>business districts, concert halls, and sport complexes,<br>constructed for the community to engage in work or recreation.",
			TILES: [
				 {caption: "Iloilo Convention Center", res: "/Resources by city/Iloilo/Pics_Infrastructure/CityIloilo_Infra01.jpg"},
				 {caption: "Iloilo Sports Complex", res: "/Resources by city/Iloilo/Pics_Infrastructure/CityIloilo_Infra02.jpg"},
				 {caption: "Richmonde Hotel", res: "/Resources by city/Iloilo/Pics_Infrastructure/CityIloilo_Infra03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Iloilo has a wide range of transportation modes available to its<br>citizens. It has the usual tricycles, jeepneys, taxis and buses.<br>Unique to the city is the passad jeepney which has fixed routes<br>only within the city. Iloilo also has international and domestic<br>branches of airports and seaports.",
			TILES: [
				 {caption: "Port of Iloilo", res: "/Resources by city/Iloilo/Pics_Transpo/CityIloilo_Transpo01.jpg"},
				 {caption: "Passad Jeepney", res: "/Resources by city/Iloilo/Pics_Transpo/CityIloilo_Transpo02.jpg"},
				 {caption: "Iloilo International Airport", res: "/Resources by city/Iloilo/Pics_Transpo/CityIloilo_Transpo03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government in Iloilo City has worked hard to raise the city's<br>condition, especially its economy, often promoting businesses to<br>invest in the city by providing incentives like free issuance of<br>permits and licences. The local government also makes efforts<br>to maintain the well-being of its people through programs and<br>maintenance of city property and services.",
			TILES: [
				 {caption: "City Hall", res: "/Resources by city/Iloilo/Pics_LocalGovt/CityIloilo_LGU01.jpg"},
				 {caption: "Providing farmers with equipment", res: "/Resources by city/Iloilo/Pics_LocalGovt/CityIloilo_LGU02.jpg"},
				 {caption: "Medical outreach", res: "/Resources by city/Iloilo/Pics_LocalGovt/CityIloilo_LGU03.jpg"},
			]
		},
		LEISURE: {
			DESC: "The beautiful city of Iloilo has plenty of places you can enjoy.<br>There are several parks and plazas with scenic views and places<br>to shop. There are also the many tourist spots around the city<br>that are just as enjoyable for locals. If you’re the intellectual type,<br>there are lots of heritage destinations that offer tours.",
			TILES: [
				 {caption: "Waterworld Iloilo", res: "/Resources by city/Iloilo/Pics_Recreation/CityIloilo_Rec01.jpg"},
				 {caption: "Plaza Libertad", res: "/Resources by city/Iloilo/Pics_Recreation/CityIloilo_Rec02.jpg"},
				 {caption: "Museo Iloilo", res: "/Resources by city/Iloilo/Pics_Recreation/CityIloilo_Rec03.jpg"},
			]
		},
	},
	LEGAZPI: {
		EMPLOYMENT: {
			DESC: "With the construction of several business districts, Legazpi City<br>was recognized as one of the up and coming IT-BPO centers in<br>the Philippines, adding a number of opportunities to the already<br>plentiful job landscape of the city. A variety of other employment<br>opportunities are present in the form of agriculture and<br>adventure tourism around Mount Mayon.",
			TILES: [
				 {caption: "Embarcadero IT Park", res: "/Resources by city/Legazpi/Pics_Employment/CityLegazpi_EmploymentTile01.jpg"},
				 {caption: "Adventure Tourism at Mt. Mayon", res: "/Resources by city/Legazpi/Pics_Employment/CityLegazpi_EmploymentTile02.jpg"},
				 {caption: "Bicol Regional Agro-Industrial Center", res: "/Resources by city/Legazpi/Pics_Employment/CityLegazpi_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Legazpi’s real estate landscape is quite diverse. The city has over<br>140 residential subdivisions and housing sites, as well as multiple<br>places for rent. The city has also begun their planning and<br>implementation of the construction of several condominium<br>units, courtesy of Taft Property Ventures Development Corp.",
			TILES: [
				 {caption: "Deca Homes", res: "/Resources by city/Legazpi/Pics_Housing/CityLegazpi_HousingTile01.jpg"},
				 {caption: "Vista Land, Camella Legazpi", res: "/Resources by city/Legazpi/Pics_Housing/CityLegazpi_HousingTile02.jpg"},
				 {caption: "Eco Homes Bayshores Condo", res: "/Resources by city/Legazpi/Pics_Housing/CityLegazpi_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Legazpi City has accessible healthcare, having about ten major<br>medical centers and clinics, with a couple more under<br>construction. With the presence of two first-class hospitals, Ago<br>Genreal Hospital and Aquinas University Hospital, Legazpi City<br>can provide its citizens with basic medical care and more.",
			TILES: [
				 {caption: "Aquinas University Hospital", res: "/Resources by city/Legazpi/Pics_Health/CityLegazpi_HealthTile01.jpg"},
				 {caption: "Legazpi City Hospital", res: "/Resources by city/Legazpi/Pics_Health/CityLegazpi_HealthTile02.jpg"},
				 {caption: "Ago General Hospital", res: "/Resources by city/Legazpi/Pics_Health/CityLegazpi_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Legazpi City is the center for education within the Bicol region<br>for having two quality universities: Bicol University and Aquinas<br>University of Legazpi. The city also has about sixty (60) primary<br>schools and thirty (30) secondary schools if you are looking for<br>stable education for your children from elementary to college.",
			TILES: [
				 {caption: "Bicol University", res: "/Resources by city/Legazpi/Pics_Education/CityLegazpi_EducationTile01.jpg"},
				 {caption: "Aquinas University of Legazpi", res: "/Resources by city/Legazpi/Pics_Education/CityLegazpi_EducationTile02.jpg"},
				 {caption: "St. Agnes Academy (K-12)", res: "/Resources by city/Legazpi/Pics_Education/CityLegazpi_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Like many provincial cities, Legazpi has managed to maintain<br>many of its heritage buildings from colonial times. However, the<br>city has also managed to keep up to date with the necessities:<br>roads, transportation, utilities, and more. Legazpi City is<br>especially commended for its waste management system and flood control.",
			TILES: [
				 {caption: "St. Gregory the Great Cathedral", res: "/Resources by city/Legazpi/Pics_Infrastructure/CityLegazpi_InfraTile01.jpg"},
				 {caption: "Embarcadero Mall Complex", res: "/Resources by city/Legazpi/Pics_Infrastructure/CityLegazpi_InfraTile02.jpg"},
				 {caption: "Plaza Rizal", res: "/Resources by city/Legazpi/Pics_Infrastructure/CityLegazpi_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Legazpi City has the usual modes of transportation most<br>Filipinos are accustomed to: tricycles, jeepneys, and taxicabs, all<br>of which can get you anywhere in the city. Legazpi City also<br>boasts an airport, a seaport, and most notably its award-winning<br>integrated bus and PUV terminal: Legazpi Grand Central Terminal.",
			TILES: [
				 {caption: "Legazpi Grand Central Terminal", res: "/Resources by city/Legazpi/Pics_Transpo/CityLegazpi_TranspoTile01.jpg"},
				 {caption: "Legazpi Airport", res: "/Resources by city/Legazpi/Pics_Transpo/CityLegazpi_TranspoTile02.jpg"},
				 {caption: "Port of Legazpi", res: "/Resources by city/Legazpi/Pics_Transpo/CityLegazpi_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Legazpi City does well in maintaining and<br>managing the city’s well-being by continuously making efforts to<br>promote its economy through business partnerships and Mount<br>Mayon’s tourism, sustainability through livelihood programs, and<br>citizen well-being through planned additions to health clinics<br>and better waste management systems.",
			TILES: [
				 {caption: "City Hall", res: "/Resources by city/Legazpi/Pics_LocalGovt/CityLegazpi_LGUTile01.jpg"},
				 {caption: "Kabuhayan Livelihood Program, 2015", res: "/Resources by city/Legazpi/Pics_LocalGovt/CityLegazpi_LGUTile02.jpg"},
				 {caption: "Green Initiative: tree planting", res: "/Resources by city/Legazpi/Pics_LocalGovt/CityLegazpi_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Legazpi isn’t nicknamed the “City of Fun and Adventure” for<br>nothing. While you can enjoy the usual recreational activities of a<br>city, like parks, museums, malls, and festivals, the adventurous<br>activities you can take part in at Mount Mayon is what makes<br>Legazpi City unique.",
			TILES: [
				 {caption: "The Magayon Festival", res: "/Resources by city/Legazpi/Pics_Recreation/CityLegazpi_RecTile01.jpg"},
				 {caption: "A fun ATV ride around Mt. Mayon", res: "/Resources by city/Legazpi/Pics_Recreation/CityLegazpi_RecTile02.jpg"},
				 {caption: "The Oriental Hotel", res: "/Resources by city/Legazpi/Pics_Recreation/CityLegazpi_RecTile03.jpg"},
			]
		},
	},
	SANTA_ROSA: {
		EMPLOYMENT: {
			DESC: "If you're looking for a job in business or information technology, Santa Rosa is one of your better bets. The city has several economic zones and industrial parks filled with job opportunities. More and more companies are looking establish branches and offices in Santa Rosa due to its talent availability and space, just like the recent video game publisher, Ubisoft.",
			TILES: [
				 {caption: "Ubisoft Office opening", res: "/Resources by city/Santa Rosa/Pics_Employment/CityStaRosa_EmploymentTile01.jpg"},
				 {caption: "Greenfield Park, business district", res: "/Resources by city/Santa Rosa/Pics_Employment/CityStaRosa_EmploymentTile02.jpg"},
				 {caption: "Convergys, IBM, & One Evotech office", res: "/Resources by city/Santa Rosa/Pics_Employment/CityStaRosa_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "There are several beautiful homes in Santa Rosa's subdivisions and more are under development. Nuvali Residences in particular are a popular choice for its beautiful environment and its many amenities within the community such as sports centers, parks, restaurants, even businesses. ",
			TILES: [
				 {caption: "Laguna Bel Air Residences", res: "/Resources by city/Santa Rosa/Pics_Housing/CityStaRosa_HousingTile01.jpg"},
				 {caption: "Avida Parkway Homes, Nuvali", res: "/Resources by city/Santa Rosa/Pics_Housing/CityStaRosa_HousingTile02.jpg"},
				 {caption: "Araya Park Residences", res: "/Resources by city/Santa Rosa/Pics_Housing/CityStaRosa_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Santa Rosa has a number of hopsitals and medical facilities that cover a wide array of medical procedures to address its citizens health. Aside from general and emergency coverage, Santa Rosa's healthcare facilities include specialized medicine, such as dental.",
			TILES: [
				 {caption: "Southern Luzon Hospital & Med Center", res: "/Resources by city/Santa Rosa/Pics_Health/CityStaRosa_HealthTile01.jpg"},
				 {caption: "New Sinai MDI Hospital", res: "/Resources by city/Santa Rosa/Pics_Health/CityStaRosa_HealthTile02.jpg"},
				 {caption: "Sta. Rosa Hospital and Medical Center", res: "/Resources by city/Santa Rosa/Pics_Health/CityStaRosa_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Santa Rosa is known by companies around the country to be filled with talent from some of the best universities. Santa Rosa has the University of the East and the University of Santo Tomas, and De La Salle University is just in the next city, making the city not just a great place to study, but a great place for future work.",
			TILES: [
				 {caption: "PUP, Laguna campus", res: "/Resources by city/Santa Rosa/Pics_Education/CityStaRosa_EducationTile01.jpg"},
				 {caption: "University of the East, Eton City", res: "/Resources by city/Santa Rosa/Pics_Education/CityStaRosa_EducationTile02.jpg"},
				 {caption: "University of Santo Tomas, in progress", res: "/Resources by city/Santa Rosa/Pics_Education/CityStaRosa_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Santa Rosa is up to date on all its utilities and facilities used by its citizens. Santa Rosa is also currently working on planning and constructing Eton City, which in concept would be similar to how Bonifacio Global City fits within Taguig City, to be filled with residential, office space, commercial/retail, and parks to further stimulate the city's progress.",
			TILES: [
				 {caption: "Sta. Rosa arch", res: "/Resources by city/Santa Rosa/Pics_Infrastructure/CityStaRosa_InfraTile01.jpg"},
				 {caption: "Sta. Rosa de Lima Parish and City Plaza", res: "/Resources by city/Santa Rosa/Pics_Infrastructure/CityStaRosa_InfraTile02.jpg"},
				 {caption: "Nuvali, Santa Rosa", res: "/Resources by city/Santa Rosa/Pics_Infrastructure/CityStaRosa_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Transportation in Santa Rosa is simple but organized. The city has all the usual modes of transportation like jeepneys, buses, tricycles, vans, and taxis. Santa Rosa doesn’t need any air or sea means of travel, leaving the city government to focus on maintaining the order and quality of its land transportation.",
			TILES: [
				 {caption: "Tricycle", res: "/Resources by city/Santa Rosa/Pics_Transpo/CityStaRosa_TranspoTile01.jpg"},
				 {caption: "Jeepney", res: "/Resources by city/Santa Rosa/Pics_Transpo/CityStaRosa_TranspoTile02.jpg"},
				 {caption: "Multicabs (used often in Bel Air Homes)", res: "/Resources by city/Santa Rosa/Pics_Transpo/CityStaRosa_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Santa Rosa has done well so far with developing the city into what it is today. The city government continues to strive for a brighter future for the city through the implementation and planning of several projects to improve infrastructure, job opportunity, recreation facilities, roads, education facilities, and disaster prevention and preparedness.",
			TILES: [
				 {caption: "Sports Day for special needs children", res: "/Resources by city/Santa Rosa/Pics_LocalGovt/CityStaRosa_LGUTile01.jpg"},
				 {caption: "Government supplies medical kits", res: "/Resources by city/Santa Rosa/Pics_LocalGovt/CityStaRosa_LGUTile02.jpg"},
				 {caption: "City Hall, Sta. Rosa", res: "/Resources by city/Santa Rosa/Pics_LocalGovt/CityStaRosa_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Santa Rosa has many of the recreation facilities and locations that big cities have, like a number of malls, hotels, restaurants, parks, plazas, and museums. Unique to the city are its many historical landmarks available for viewing if you feel like touring the city. Santa Rosa is also home to the frequently visited Enchanted Kingdom amusement park.",
			TILES: [
				 {caption: "Nuvali recreational facilities", res: "/Resources by city/Santa Rosa/Pics_Recreation/CityStaRosa_RecTile01.jpg"},
				 {caption: "Enchanted Kingdom", res: "/Resources by city/Santa Rosa/Pics_Recreation/CityStaRosa_RecTile02.jpg"},
				 {caption: "Paseo de Santa Rosa Mall", res: "/Resources by city/Santa Rosa/Pics_Recreation/CityStaRosa_RecTile03.jpg"},
			]
		},
	},
	ZAMBOANGA: {
		EMPLOYMENT: {
			DESC: "Employment in Zamboanga mostly revolves around its sardine industry, with the city housing nine out of twelve of the country's sardine companies, and its seaweed industry. Though not widespread in the city, Zamboanga does still have some business, health, retail, and sales related opportunities, the majority of which are concentrated in the city’s ecozone.",
			TILES: [
				 {caption: "Sardine fishing", res: "/Resources by city/Zamboanga/Pics_Employment/CityZamboanga_EmploymentTile01.jpg"},
				 {caption: "Bangko Sentral ng Pilipinas", res: "/Resources by city/Zamboanga/Pics_Employment/CityZamboanga_EmploymentTile02.jpg"},
				 {caption: "Zamboanga Ecozone", res: "/Resources by city/Zamboanga/Pics_Employment/CityZamboanga_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "The residential market of Zamboanga city has many types of homes-lots, apartments for rent, socialized housing-that adequately meet the needs of a person or family. However, if you're looking for a city with a vast spectrum of options with luxury quality, Zamboanga still has a ways to go.",
			TILES: [
				 {caption: "Woodridge Residences", res: "/Resources by city/Zamboanga/Pics_Housing/CityZamboanga_HousingTile01.jpg"},
				 {caption: "Socialized housing on stilts", res: "/Resources by city/Zamboanga/Pics_Housing/CityZamboanga_HousingTile02.jpg"},
				 {caption: "Villa Teresa Homes", res: "/Resources by city/Zamboanga/Pics_Housing/CityZamboanga_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Zamboanga has a couple of high quality hospitals that are fully equipped to provide general, emergency, and specialized medical care, though the city would benefit from having more in number. The city has given a focus to improving its heathcare system to be more accessible throughout the city, and continues to do so.",
			TILES: [
				 {caption: "Western Mindanao Medical Center", res: "/Resources by city/Zamboanga/Pics_Health/CityZamboanga_HealthTile01.jpg"},
				 {caption: "Zamboanga City Medical Center", res: "/Resources by city/Zamboanga/Pics_Health/CityZamboanga_HealthTile02.jpg"},
				 {caption: "Brent Hospital", res: "/Resources by city/Zamboanga/Pics_Health/CityZamboanga_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Zamboanga’s schools mostly follow the American school system and use English as the main language for teaching. There are several quality schools in the city like Ateneo de Zamboanga and Unibersidad de Zamboanga. There are also a number of foreign schools with a variety of study programs.",
			TILES: [
				 {caption: "Unibersidad de Zamboanga", res: "/Resources by city/Zamboanga/Pics_Education/CityZamboanga_EducationTile01.jpg"},
				 {caption: "Pilar College", res: "/Resources by city/Zamboanga/Pics_Education/CityZamboanga_EducationTile02.jpg"},
				 {caption: "Ateneo de Zamboanga", res: "/Resources by city/Zamboanga/Pics_Education/CityZamboanga_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Zamboanga has kept many of its heritage architecture. The city itself was designed long ago to accommodate horse carriages as the mode of transport. However, the city is slowly transforming into a modern cosmopolitan, with pockets of high quality architecture and facilities.",
			TILES: [
				 {caption: "St. Gregory the Great Cathedral", res: "/Resources by city/Zamboanga/Pics_Infrastructure/CityZamboanga_InfraTile01.jpg"},
				 {caption: "Embarcadero Mall Complex", res: "/Resources by city/Zamboanga/Pics_Infrastructure/CityZamboanga_InfraTile02.jpg"},
				 {caption: "Plaza Rizal", res: "/Resources by city/Zamboanga/Pics_Infrastructure/CityZamboanga_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Zamboanga uses the usual jeepney, tricycle, and bus for public transportation. The motorized tricycle however, is the primary method for transportation around the city, and non-motorized tricycles are still in use in some areas. An airport and about 19 seaports are also available for public and commercial use.",
			TILES: [
				 {caption: "Legazpi Grand Central Terminal", res: "/Resources by city/Zamboanga/Pics_Transpo/CityZamboanga_TranspoTile01.jpg"},
				 {caption: "Legazpi Airport", res: "/Resources by city/Zamboanga/Pics_Transpo/CityZamboanga_TranspoTile02.jpg"},
				 {caption: "Port of Legazpi", res: "/Resources by city/Zamboanga/Pics_Transpo/CityZamboanga_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Zamboanga City focuses its efforts on improving infrastructure and citizen well-being. Recent projects have improved water supply, heatlhcare, and poverty reduction. Zamboanga’s government also prioritizes security and has one  of the largest guard bases in the country.",
			TILES: [
				 {caption: "City Hall", res: "/Resources by city/Zamboanga/Pics_LocalGovt/CityZamboanga_LGUTile01.jpg"},
				 {caption: "Kabuhayan Livelihood Program, 2015", res: "/Resources by city/Zamboanga/Pics_LocalGovt/CityZamboanga_LGUTile02.jpg"},
				 {caption: "Green Initiative: tree planting", res: "/Resources by city/Zamboanga/Pics_LocalGovt/CityZamboanga_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Zamboanga is one of the cities in the country with a vast array of historical landmarks to explore. A must-see is the Fort of Pilar. Zamboanga also has its many scenic tourist spots for relaxation and leisurely walks. The city itself has invested in many sports-related activities usually held at the city convention center.",
			TILES: [
				 {caption: "La Isla de la Santa Cruz beach", res: "/Resources by city/Zamboanga/Pics_Recreation/CityZamboanga_RecTile01.jpg"},
				 {caption: "Jardin Maria Clara Llobregat", res: "/Resources by city/Zamboanga/Pics_Recreation/CityZamboanga_RecTile02.jpg"},
				 {caption: "Zamboanga City Boulevard", res: "/Resources by city/Zamboanga/Pics_Recreation/CityZamboanga_RecTile03.jpg"},
			]
		},
	}

}

var BROWSE_CITIES_TILES = [
	{
		city: CITIES.SANTA_ROSA,
		res: "res/City Tiles (15-15)/CityTile_SANTAROSA.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.EDUCATION, TAGS.LOCALGOV]
	},
	{
		city: CITIES.BACOLOD,
		res: "res/City Tiles (15-15)/CityTile_BACOLOD.jpg",
		tags: [TAGS.EDUCATION, TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION]
	},
	{
		city: CITIES.CAGAYAN_DE_ORO,
		res: "res/City Tiles (15-15)/CityTile_CDO.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.HOUSING, TAGS.EDUCATION]
	},
	{
		city: CITIES.ILIGAN,
		res: "res/City Tiles (15-15)/CityTile_ILIGAN.jpg",
		tags: [TAGS.EDUCATION, TAGS.TRANSPORTATION, TAGS.LEISURE]
	},
	{
		city: CITIES.ILOILO,
		res: "res/City Tiles (15-15)/CityTile_ILOILO.jpg",
		tags: [TAGS.HEALTH, TAGS.INFRASTRUCTURE, TAGS.LOCALGOV]
	},
	{
		city: CITIES.BUTUAN,
		res: "res/City Tiles (15-15)/CityTile_BUTUAN.jpg",
		tags: [TAGS.HOUSING, TAGS.TRANSPORTATION, TAGS.LEISURE]
	},
	{
		city: CITIES.LEGAZPI,
		res: "res/City Tiles (15-15)/CityTile_LEGAZPI.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.HOUSING, TAGS.LEISURE]
	},
	{
		city: CITIES.DUMAGUETE,
		res: "res/City Tiles (15-15)/CityTile_DUMAGUETE.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.HOUSING, TAGS.EDUCATION]
	},
	{
		city: CITIES.ZAMBOANGA,
		res: "res/City Tiles (15-15)/CityTile_Zamboanga.jpg",
		tags: [TAGS.EMPLOYMENT, TAGS.INFRASTRUCTURE, TAGS.LEISURE]
	},
	{
		city: CITIES.GENERAL_SANTOS,
		res: "res/City Tiles (15-15)/CityTile_GeneralSantos.jpg",
		tags: [TAGS.HOUSING, TAGS.INFRASTRUCTURE, TAGS.TRANSPORTATION]
	}
]

var MIGRATION_HELP_TILES = {
	BACOLOD: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "BACOLODJOBS.NET", body: ["Like JobStreet, but just for Bacolod City and province."], link: "https://www.bacolodjobs.net/"}, res: "/migration_help/Bacolod/Pics_Employment/employment1.jpg"},
				 {desc: {header: "LANDBASE HUMAN RESOURCES", body: ["RM 305/307 Dona Manuela Bldg. San Juan Sts. Bacolod City"], contact: "(034) 708 0346 / (+63)915 212 3984", link: "http://www.landbasebacolod.co.nr"}, res: "/migration_help/Bacolod/Pics_Employment/employment2.jpg"},
				 {desc: {header: "BACOLOD PHILIPPINES PEF SELF-RELIANCE CENTER", body: ["TCJCLDS Chapel, Galo st., Bacolod City"], contact: "(+63)934 432 2708"}, res: "/migration_help/Bacolod/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {desc: {header: "BACOLOD AFFORDABLE HOMES", body: ["Suite #4, LD Centre, 7th-Lacson Streets, Bacolod City 6100"], contact: "(034) 468 0314", link: "http://www.bacolodhomes.net"}, res: "/migration_help/Bacolod/Pics_Housing/housing1.jpg"},
				 {desc: {header: "BACOLOD CITY REAL ESTATE", body: ["(034) 476 8646"], contact: "(+63)947 337 1357", link: "http://www.bacolodcityrealestate.com/"}, res: "/migration_help/Bacolod/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["City Health Compound, BBB-Galo Sts., Bacolod City"], contact: "(034) 433-8449; (034) 708-9510 (FAX)"}, res: "/migration_help/Santa Rosa/Pics_LocalGovt/lgu1.jpg"}
			]
		}
	},
	BUTUAN: {
		HOUSING: {
			TILES: [
				 {desc: {header: "BUTUAN PROPERTY", contact: "(+63)927 932 7676", link: "www.butuanproperty.com"}, res: "/migration_help/Butuan/Pics_Housing/housing1.jpg"},
				 {desc: {header: "FILINVEST BUTUAN", body: ["Km. 3 Baan, Butuan City"], contact: "(+63)912 326 7766", link: "www.filinvest.com/projects/filinvest-homes-butuan/"}, res: "/migration_help/Butuan/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["City Hall Buidling, Jose Rosales Avenue, Doogan, Butuan City"], contact: "(085) 815 6102"}, res: "/migration_help/Butuan/Pics_LocalGovt/lgu1.jpg"},
				 {desc: {header: "DOLE CARAGA", body: ["Jose Rosales Ave, Butuan City, Agusan Del Norte"], contact: "(085) 342 9606", link: "www.caraga.dole.gov.ph"}, res: "/migration_help/Butuan/Pics_LocalGovt/lgu2.jpg"},
			]
		}
	},
	CAGAYAN_DE_ORO: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "MyCDOJobs", link: "www.mycdojobs.com"}, res: "/migration_help/Cagayan de Oro/Pics_Employment/employment1.jpg"},
				 {desc: {header: "Jobs for Every Juan", link: "http://jobsforeveryjuan.com/jobs-in-cagayan-de-oro-city/"}, res: "/migration_help/Cagayan de Oro/Pics_Employment/employment2.jpg"}
			]
		},
		HOUSING: {
			TILES: [
				 {desc: {header: "PRIMAVERA RESIDENCES", body: ["1125 Trade Street Pueblo de Oro Business Park, Cagayan de Oro City"], contact: "(+63) 917 792 1080", link: "www.primaveraresidences.com"}, res: "/migration_help/Cagayan de Oro/Pics_Housing/housing1.jpg"},
				 {desc: {header: "A BROWN COMPANY, INC.", body: ["Xavier Estates, Airport Road, Cagayan de Oro City"], contact: "(088) 858 8784", link: "www.abrown.ph"}, res: "/migration_help/Cagayan de Oro/Pics_Housing/housing2.jpg"},
				 {desc: {header: "CDO REAL ESTATE", body: ["Blk 26 Lot 8, Bellevue Subd., Upper Carmen, Cagayan de Oro City"], contact: "(+63) 917 327 6589", link: "www.cdo-realestate.com"}, res: "/migration_help/Cagayan de Oro/Pics_Housing/housing3.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["The City Hall, 2F Administrative Building, Cagayan de Oro City"], contact: "(088) 309 4590"}, res: "/migration_help/Cagayan de Oro/Pics_LocalGovt/lgu1.jpg"}
			]
		}
	},
	DUMAGUETE: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "DUMAGUETE JOB LISTINGS", body: ["Suite C, Aldecoa Drive Rd., Dumaguete City"], contact: "(+63) 935 424 8815", link: "www.dumjobs.com"}, res: "/migration_help/Dumaguete/Pics_Employment/employment1.jpg"},
				 {desc: {header: "BUSINESS PARK AND IT PARK", body: ["Calindagan Rd., Dumaguete City"], contact: "(035) 422 5932 / (+63) 917 624 1479"}, res: "/migration_help/Dumaguete/Pics_Employment/employment2.jpg"}
			]
		},
		HOUSING: {
			TILES: [
				 {desc: {header: "AZUMI RESIDENCES", body: ["2428 South National Road, Calindagan, Dumaguete City"], contact: "(035) 422 2730 / (035) 225 4052", link: "www.philsouth.com/housing-subdivision/azumi-residences"}, res: "/migration_help/Dumaguete/Pics_Housing/housing1.jpg"},
				 {desc: {header: "MARPAS APARTMENTS", body: ["Tejero Road, West Balabag, Valencia"], contact: "(035) 522 0169 / (+63) 927 673 2272", link: "www.dumaguete-apartments.com/"}, res: "/migration_help/Dumaguete/Pics_Housing/housing2.jpg"},
				 {desc: {header: "FILINVEST DUMAGUETE", body: ["Escano Beach, Flores Ave., Brgy. Piapi, Dumaguete City"], contact: "(+63) 917 877 0888", link: "filinvest.com/pr@jects/marina-town/"}, res: "/migration_help/Dumaguete/Pics_Housing/housing3.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["Peso Office, 2/ F Bldg. Il, Public Market Complex, Dumaguete City"], contact: "(035) 226 3530 / (035) 420 9114"}, res: "/migration_help/Dumaguete/Pics_LocalGovt/lgu1.jpg"}
			]
		}
	},
	GENERAL_SANTOS: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "CITY FISH PORT COMPLEX", body: ["Brgy. Tambler, General Santos City"], contact: "(083) 304 9474"}, res: "/migration_help/General Santos/Pics_Employment/employment1.jpg"},
				 {desc: {header: "GENSAN JOB LISTINGS", link: "www.gensanbestjobs.com/#s=l"}, res: "/migration_help/General Santos/Pics_Employment/employment2.jpg"}
			]
		},
		HOUSING: {
			TILES: [
				 {desc: {header: "CAMELLA LESSANDRA HOMES", body: ["Conel Road, Barangay San Isidro, General Santos City"], contact: "(083) 531 5670 / (+63 917 797 5283", link: "www.camellalessandragensan.com"}, res: "/migration_help/General Santos/Pics_Housing/housing1.jpg"},
				 {desc: {header: "BLOOMFIELDS RESIDENCES", body: ["Pan-Philippine Hwy, General Santos City"], contact: "(083) 301 7777"},  res: "/migration_help/General Santos/Pics_Housing/housing2.jpg"},
				 {desc: {header: "TIERRA EUSEBIO HOMES", body: ["Salvani St., City Heights, General Santos City"], contact: "(+63) 949 415 2253"}, res: "/migration_help/General Santos/Pics_Housing/housing3.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["City Hall, General Santos City"], contact: "(083) 553 3479"}, res: "/migration_help/General Santos/Pics_LocalGovt/lgu1.jpg"},
				 {desc: {header: "NATIONAL HOUSING AUTHORITY", body: ["Flaviano Building, 74 Tieza Street, General Santos City"], contact: "(085) 552 2608"}, res: "/migration_help/General Santos/Pics_LocalGovt/lgu2.jpg"}
			]
		}
	},
	ILIGAN: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "STARTING A BUSINESS", body: ["Iligan City Hall, Buhanginan Hills, Palao Iligan City"], contact: "(063) 224 2312 / (+63) 063 221 4326", link: "www.iligan.gov.ph/doing-business/"}, res: "/migration_help/Iligan/Pics_Employment/employment1.jpg"},
				 {desc: {header: "ILIGAN JOBS", link: "www.iliganjobs.com"}, res: "/migration_help/Iligan/Pics_Employment/employment2.jpg"},
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "LIST OF ILIGAN GOVERNMENT SERVICES", body: ["Iligan City Hall, Buhanginan Hills, Palao Iligan City"], contact: "(063) 224 2312 / (+63) 063 221 4326", link: "www.iligan.gov.ph/services"}, res: "/migration_help/Iligan/Pics_LocalGovt/lgu1.jpg"},
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["Integrated Bus & Jeepney Terminal, Tambo Hinaplanon, Iligan City"], contact: "(063) 221 4347"}, res: "/migration_help/Iligan/Pics_LocalGovt/lgu2.jpg"},
				 {desc: {header: "LIVELIHOOD ASSISTANCE", body: ["Iligan City Hall, Buhanginan Hills, Palao Iligan City"], contact: "(063) 224 2312 / (+63) 063 221 4326", link: "www.tinyurl.com/livelihoodassistance"}, res: "/migration_help/Iligan/Pics_LocalGovt/lgu3.jpg"}
			]
		}
	},
	ILOILO: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "THE ILOILO CITY BULLETIN BOARD SERVICE", link: "www.iloilobusiness.ga"}, res: "/migration_help/Iloilo/Pics_Employment/employment1.jpg"},
				 {desc: {header: "ILOILO BUSINESS PARK", body: ["Richmonde Tower Enterprise Road, Iloilo Business Park, Mandurriao, Iloilo City"], contact: "(+63)915 564 5324"}, res: "/migration_help/Iloilo/Pics_Employment/employment2.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {desc: {header: "ERECRE GROUP REALTY", body: ["Door 5, Zerrudo Arcade, E. Lopez Street, Jaro, Iloilo City"], contact: "(+63)932 998 8862", link: "www.erecrerealestategroup.com"}, res: "/migration_help/Iloilo/Pics_Housing/housing1.jpg"},
				 {desc: {header: "ILOILO REAL ESTATE", body: ["(033) 393 2309"], contact: "(+63)917 834 5929", link: "www.iloilocityrealestate.com"}, res: "/migration_help/Iloilo/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["Provincial Capitol, General Luna St., Iloilo City"], contact: "(033) 320 0110"}, res: "/migration_help/Iloilo/Pics_LocalGovt/lgu1.jpg"},
				 {desc: {header: "PROGRAMS AND PROJECTS", body: ["Iloilo Provincial Government, Iloilo Provincial Capitol, Bonifacio Drive, Iloilo City"], link: "http://www.iloilo.gov.ph/node/268"}, res: "/migration_help/Iloilo/Pics_LocalGovt/lgu2.jpg"}
			]
		}
	},
	LEGAZPI: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "LANDCO BUSINESS PARK", body: ["Legazpi Port District, Legazpi City"], contact: "(+63) 905 370 6776", link: "www.landco-ph.com.ph"}, res: "/migration_help/Legazpi/Pics_Employment/employment1.jpg"},
				 {desc: {header: "TOURISM OPPORTUNITIES", body: ["DOT Bldg., Regional Offices Site, Rawis, Legazpi City"], contact: "(052) 482 0715 / (052) 481 5593", link: "www.tourism.gov.ph/pages/default.aspx"}, res: "/migration_help/Legazpi/Pics_Employment/employment2.jpg"},
				 {desc: {header: "STARTING A BUSINESS", body: ["Old Albay District, Legazpi City"], contact: "(052) 820 3400", link: "www.legazpi.gov.ph/business"}, res: "/migration_help/Legazpi/Pics_Employment/employment2.jpg"}
			]
		},
		HOUSING: {
			TILES: [
				 {desc: {header: "CAMELLA HOMES LEGAZPI", body: ["Barangay Puro, Legazpi City"], contact: "(052) 531 5670 / (+63) 917 797 5283", link: "www.camellahomeslegazpi.com "}, res: "/migration_help/Legazpi/Pics_Housing/housing1.jpg"},
				 {desc: {header: "MYPROPERTY.PH", contact: "(+63) 995 534 1497", link: "www.myproperty.ph/properties-for-sale/houses/legazpicity-albay"}, res: "/migration_help/Legazpi/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["2F, Tourism Building, Astrodome Compound, Legazpi City"], contact: "(052) 820 6318"}, res: "/migration_help/Legazpi/Pics_LocalGovt/lgu1.jpg"}
			]
		}
	},
	SANTA_ROSA: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "SANTA ROSA IT PARK", body: ["San Jose, Santa Rosa"], contact: "(032) 841 5825"}, res: "/migration_help/Santa Rosa/Pics_Employment/employment1.jpg"},
				 {desc: {header: "A DIRECTORY OF BUSINESSES", link: "http://tinyurl.com/santarosacompanies"}, res: "/migration_help/Santa Rosa/Pics_Employment/employment2.jpg"},
				 {desc: {header: "UBISOFT PHILIPPINES", body: ["E005/E101 De La Salle University, Science & Technology Complex, Laguna Boulevard, LTI Spine Road Barangays Biñan and Malamig Biñan City, Laguna"], link: "www.ubisoft.com/en-us/studio/philippines.aspx"}, res: "/migration_help/Santa Rosa/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {desc: {header: "NUVALI EVOLIVING", body: ["Tagaytay Rd, Don Jose, Santa Rosa"], link: "www.nuvali.ph/live-and-grow"},  res: "/migration_help/Santa Rosa/Pics_Housing/housing1.jpg"},
				 {desc: {header: "ARAYA PARK RESIDENCES", body: ["The Araya Park Residences, Barangay Tagapo, Santa Rosa"], contact:  "(+63) 917 872 8430 / (+63) 998 849 5570", link: "www.thearayapark.com"}, res: "/migration_help/Santa Rosa/Pics_Housing/housing2.jpg"},
				 {desc: {header: "SOUTH FORBES", body: ["Tagaytay Growth Area, Silang, Santa Rosa"], contact: "(+632) 635-7777", link: "http://www.southforbes.com/"}, res: "/migration_help/Santa Rosa/Pics_Housing/housing3.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "JOB MATCHING", body: ["J.P Rizal BLVD. Brgy. Malusak, Santa Rosa"], contact: "(049) 530 0015", link: "www.santarosacity.gov.ph"}, res: "/migration_help/Santa Rosa/Pics_LocalGovt/lgu1.jpg"},
				 {desc: {header: "EMPLOYMENT AND INVESTMENT", body: ["Calle Barcelona, Santa Rosa"], contact: "(049) 519 4000"}, res: "/migration_help/Santa Rosa/Pics_LocalGovt/lgu2and3.jpg"},
				 {desc: {header: "LIST OF GOVERNMENT SERVICES", body: ["Calle Barcelona, Santa Rosa"], contact: "(049) 519 4000", link: "http://santarosacity.gov.ph/live-in-santa-rosa/permits-and-clearances/#"}, res: "/migration_help/Santa Rosa/Pics_LocalGovt/lgu2and3.jpg"}
			]
		}
	},
	ZAMBOANGA: {
		EMPLOYMENT: {
			TILES: [
				 {desc: {header: "MAJOR INDUSTRIES IN ZAMBOANGA CITY", link: "www.tinyurl.com/zamboangamajorindustries"}, res: "/migration_help/Zamboanga/Pics_Employment/employment1.jpg"},
				 {desc: {header: "ZAMBOANGA FREEPORT AUTHORITY (ZFA)", body: ["Zamboanga City Special Economic Zone Authority, Zamboanga City"], contact: "(63) 992 2012", link: "www.zfa.gov.ph"}, res: "/migration_help/Zamboanga/Pics_Employment/employment2.jpg"},
				 {desc: {header: "HIRED TARGET RECRUITMENT AGENCY", body: ["MCLL Highway, Putik, Zamboanga City"], contact: "(062) 926 0013"}, res: "/migration_help/Zamboanga/Pics_Employment/employment3.jpg"},
			]
		},
		LOCALGOV: {
			TILES: [
				 {desc: {header: "EMPLOYMENT & LIVELIHOOD SERVICES", body: ["Valderoza St., Zamboanga City"], contact: "(62) 991 0719 / (62) 991 3469", link: "www.tinyurl.com/employmentlivelihood"}, res: "/migration_help/Zamboanga/Pics_LocalGovt/lgu1.jpg"},
				 {desc: {header: "SERVICES OFFERED", body: ["Valderoza St., Zamboanga City"], contact: "(62) 991 0719 / (62) 991 3469", link: "www.tinyurl.com/zamboanga-govt-services"}, res: "/migration_help/Zamboanga/Pics_LocalGovt/lgu2.jpg"},
				 {desc: {header: "PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)", body: ["Valderoza St., Zamboanga City"]}, contact: "(062) 991 0719", res: "/migration_help/Zamboanga/Pics_LocalGovt/lgu3.jpg"}
			]
		}
	},
}