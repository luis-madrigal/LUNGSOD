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
		desc: "In this category, we grade a city for its ability to provide affordable, quality education across all ages of its citizens.",
		rubrics: ["AVAILABILITY - the number of available primary, secondary, and tertiary schools in the city.",
					"QUALITY - good quality education that puts students in a position to better their lives through knowledge.",
					"AFFORDABILITY - the cost of education is appropriate in relation to its quality, and is attainable by the majority."]
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
		desc: "In this category, we grade a city for its ability to provide a large number and variety of quality job opportunities for its citizens. This includes all types of work from blue, to white, to pink-collar work.",
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
		desc: "In this category, we grade a city for its ability to provide adequate healthcare through a variety of services. We also grade the quality and availability of facilities in hopsitals and clinics.",
		rubrics: ["AVAILABILITY - the number of available hospitals, clinics, and other healthcare services.",
					"QUALITY - the quality of healthcare services, staff, and equipment at hospitals or clinics.",
					"ACCESSIBILITY - how accessible medical centers are in terms of location and accommodation of citizens.",
					"AFFORDABILITY - the ratio of the quality of health service to its price and how many people can afford these."]
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
		desc: "In this category, we grade a city for its ability to provide affordable proper housing. This means that there is an adequate number of available homes that are also of good quality.",
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
		desc: "In this category, we grade a city for the availability and quality of necessary infrastructureóbuildings, roads, water, electricity, etc. As well as their maintenance and improvement. ",
		rubrics: ["AVAILABILITY - the availability of the minimum required infrastructure to support life in the city.",
					"QUALITY - the quality of infrastructure in terms of materials, structure, and processes.",
					"MAINTENANCE - constancy and consistency of maintenance on city infrastructure."]
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
		desc: "In this category, we grade a city for how many facilities and areas of interest there are for people to go to for fun. These can be places like parks, tourist spots, hotels, and museums, or events like festivals. ",
		rubrics: ["AVAILABILITY - the number of available points of interest.",
					"QUALITY - mostly applies to facilities and amenities of a place.",
					"VARIETY - how different the types of events and places for leisure are in the city."]
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
		desc: "In this category, we grade a city for the efforts of its local government to make the lives of its citizens better. This includes their planned initiatives and government programs offered to the public.",
		rubrics: ["QUALITY - government services and programs are of good quality and benefit the people.",
					"CONSISTENCY - government efforts are consistently implemented, renewed, and improved over time.",
					"ACCESSIBILITY - government officials, offices, and programs and services are easily accessible."]
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
		desc: "In this category, we grade a city for the quality, accessibility, maintenace, and amount of various transportation methods as needed by its citizens.",
		rubrics: ["AVAILIBILITY - the number of available transportation modes.",
					"QUALITY - the efficiency of using transportation, and the quality of the vehicles themselves.",
					"ACCESSIBILITY - how the convenient it is for citizens to access transportation, as well as the transportation modeís reach within the city."]
	},
};

var CITIES = {
	SANTA_ROSA: new City("Santa Rosa", "Laguna", ISLAND_GROUPS.LUZON, 9.3, "res/Resources by city/Santa Rosa", [9.5, 9.5, 9, 9, 9, 10, 8.5, 10]),
	BACOLOD: new City("Bacolod", "Negros Occidental", ISLAND_GROUPS.VISAYAS, 8.9, "res/Resources by city/Bacolod", [9, 9, 7, 9.5, 9, 9, 9, 10]),
	CAGAYAN_DE_ORO: new City("Cagayan De Oro", "Misamis Oriental", ISLAND_GROUPS.MINDANAO, 9.1, "res/Resources by city/Cagayan de Oro", [9.5, 9.5, 9, 9.5, 9, 9, 8.5, 9]),
	ILIGAN: new City("Iligan", "Lanao Del Norte", ISLAND_GROUPS.MINDANAO, 8.7, "res/Resources by city/Iligan", [8.5, 9, 7.5, 8.5, 9, 9, 9, 9]),
	ILOILO: new City("Iloilo", "Cebu", ISLAND_GROUPS.VISAYAS, 9.4, "res/Resources by city/Iloilo", [9.5, 9.5, 9, 9, 10, 9, 9.5, 10]),
	BUTUAN: new City("Butuan", "Caraga", ISLAND_GROUPS.MINDANAO, 8.4, "res/Resources by city/Butuan", [8.5, 8, 8, 8.5, 9, 8.5, 8, 9]),
	// TARLAC: new City("Tarlac", "Tarlac", ISLAND_GROUPS.LUZON, 8.4, "res/Resources by city/Tarlac", [8, 8.5, 8, 9, 8.5, 8.5, 8, 8.5]),
	LEGAZPI: new City("Legazpi", "Albay", ISLAND_GROUPS.VISAYAS, 8.8, "res/Resources by city/Legazpi", [8, 8.5, 8.5, 9, 9, 10, 8.5, 9]),
	DUMAGUETE: new City("Dumaguete", "Negros Oriental", ISLAND_GROUPS.VISAYAS, 9, "res/Resources by city/Dumaguete", [9, 9.5, 9, 9.5, 8, 8.5, 9, 8.5]),
	// BATANGAS: new City("Batangas", "Batangas", ISLAND_GROUPS.LUZON, 8.3, "res/Resources by city/Batangas", [8, 7.5, 7.5, 8.5, 9, 8, 8.5, 9]),
	// PUERTO_PRINCESA: new City("Puerto Princesa", "Palawan", ISLAND_GROUPS.LUZON, 8, "res/Resources by city/Puerto Princesa", [6, 7, 7, 7.5, 9, 9, 9, 9]),
	// OLONGAPO: new City("Olongapo", "Zambales", ISLAND_GROUPS.LUZON, 9.3, "res/Resources by city/Olongapo", [9, 9, 10, 8.5, 9.5, 9, 9.5, 10]),
	// TACLOBAN: new City("Tacloban", "Leyte", ISLAND_GROUPS.VISAYAS, 8.6, "res/Resources by city/Tacloban", [9, 9, 9, 9, 7, 8.5, 9, 8]),
	ZAMBOANGA: new City("Zamboanga", "Zamboanga", ISLAND_GROUPS.MINDANAO, 8.9, "res/Resources by city/Zamboanga", [9, 8, 8.5, 8.5, 8.5, 9, 9, 9]),
	GENERAL_SANTOS: new City("General Santos", "South Cotabato", ISLAND_GROUPS.MINDANAO, 8.6, "res/Resources by city/General Santos", [8.5, 7, 9, 9.5, 9, 9, 8.5, 8.5])
};

var DESCRIPTIONS = {
	BACOLOD: {
		ABOUT_HEADER: "THE CITY OF SMILES",
		ABOUT_BODY: [
			"Bacolod City is located in the Negros Occidental province of Visayas, known for being one of the most friendly cities in the country, as well as being one of the better places to live in the Philippines due to the clean and green environment and people.",
			"Bacolod has also recently been declared a center of excellence by the Department of Science and Technology for having quality operations in the IT-BPO industry that is spurring the city's economy."
		],
		MINI_DESC: "The friendly city of Bacolod is quickly growing into one of the best places to live in the Philippines with its clean environment and thriving economy."		
	},
	BUTUAN: {
		ABOUT_HEADER: "CARAGA'S ECONOMIC HUB",
		ABOUT_BODY: [
			"Butuan City is the regional center of the Caraga province in Mindanao, known as one of the oldest settlements in the country. It continues to preserve its cultural heritage and plenty of this can be seen in the city’s architecture or practiced by the people.",
			"However, the city is quickly growing into a cosmopolitan city with plenty of businesses setting up shop in Butuan, earning it the reputation of being Caraga's commercial, industrial, and administrative center."
		],
		MINI_DESC: "Butuan City is a city that finds a good balance between the traditions of the past, and the innovations of the future and modern technology."		
	},
	CAGAYAN_DE_ORO: {
		ABOUT_HEADER: "THE HEART OF NORTHERN MINDANAO",
		ABOUT_BODY: [
			"Cagayan de Oro is the capital of the Misamis Oriental Province, known today as the regional center and business hub of the region due to the rise of business investors both local and foreign. IT and BPO companies in parituclar, have taken an interest, further stimulating an already diverse and thriving economy.",
			"Besides its success in business, Cagayan de Oro also boasts quality in the real estate landscape, education, and its environment."
		],
		MINI_DESC: "Cagayan de Oro is also known as 'The Gate to the Land of Promise' due to the multitude and variety of opportunities it offers to the citizens living in Mindanao."		
	},
	DUMAGUETE: {
		ABOUT_HEADER: "THE UNIVERSITY TOWN OF THE VISAYAS",
		ABOUT_BODY: [
			"Dumaguete City is the capital of the Negros Oriental province. Dubbed, 'University Town', the outstanding feature about Dumaguete is its four universities where a majority of students around Visayas  and Mindanao come to enroll for college.",
			"Dumaguete is also becoming one of the preferred places for BPO and IT companies to establish themselves. This has resulted in a number of business parks and a spurred economy promising a number of new jobs."
		],
		MINI_DESC: "Dumaguete City was long known for its strength in education and for preserving its cultural heritage, but in recent years it is also becoming one of the ideal destinations for businesses to establish themselves."		
	},

	GENERAL_SANTOS: {
		ABOUT_HEADER: "THE TUNA CAPITAL OF THE PHILIPPINES",
		ABOUT_BODY: [
			"Home of boxer Manny Pacquiao, General Santos City is the center for commerce and industry in the Socsargen region.",
			"General Santos is a city in touch with the nature around it.",
			"Locals and tourists alike can enjoy camping, hiking and other outdoor activities in the landscape around them. The city itself has a stable economy that revolves primarily around its tuna industry, earning itself the reputation of having the most delicious tuna in the country."
		],
		MINI_DESC: "General Santos City is a city in tune with nature: this city's growing economy thrives on the tuna in its oceans and the successful eco-tourism held in their beautiful landscapes."		
	},
	ILIGAN: {
		ABOUT_HEADER: "THE INDUSTRIAL CENTER OF THE SOUTH",
		ABOUT_BODY: [
			"Iligan City is located in the province of Lanao del Norte, known for having many waterfalls that are popular among tourists.",
			"The city is also the industrial center of the south due to its recent economic revival spurred by the reopening of the National Steel Corporation.",
			"Along with its neighbor, Cagayan de Oro, Iligan is one of the fastest developing centers in Northern Mindanao."
		],
		MINI_DESC: "Iligan City, praised for its majestic waterfalls, has also become one of the many up and coming cities with fast growing economies that make it one of the ideal places to live in Mindanao."		
	},
	ILOILO: {
		ABOUT_HEADER: "THE QUEEN'S CITY OF THE SOUTH",
		ABOUT_BODY: [
			"Iloilo City is the capital city of the Iloilo province in Visayas, and is among the few cities in our country that has preserved its rich historical past and cultural heritage.",
			"This history and its beautiful environments have made it one of the best tourist destinations in the country. However, Iloilo is also the hub for trade, commerce, finance, technology, education, and real estate in the Western Visayas region, making it a well rounded city that offers a high quality of life."
		],
		MINI_DESC: "Iloilo City is not only a beautiful tourist destination or historical site, but is today one of the strongest in terms of livability, offering high quality housing, education, and plenty of work."		
	},
	LEGAZPI: {
		ABOUT_HEADER: "THE CITY OF FUN AND ADVENTURE",
		ABOUT_BODY: [
			"Legazpi City is the capital of the Albay province in the Bicol Region, known as one of the centers for education, healthcare, commerce, transportation, and most popularly, its adventure tourism in and around Mount Mayon.",
			"In the recent years, this beautiful tourist destination has slowly built itself up to become more.  In 2014, Legazpi was ranked second among the top three most livable cities in the country."
		],
		MINI_DESC: "Legazpi City is not just a tourist destination these days. This beautiful city has progressed to be one of the most livable cities in Visayas."		
	},
	SANTA_ROSA: {
		ABOUT_HEADER: "MAKATI OF THE SOUTH",
		ABOUT_BODY: [
			"Santa Rosa is located in the Laguna province of Luzon.",
			"Its thriving economy and growing economic landscape have earned it the name \"Makati of the South\", making it yet another one of the most livable cities in the country.",
			"Many companies have taken an interest in Santa Rosa due to the affordability of its land and real estate, providing the city with plenty of employment opportunities. Santa Rosa is also home to one of the most prominent schools in the country: De la Salle University."
		],
		MINI_DESC: "With the combination of work opportunities, proper city management, education, and more, Santa Rosa has become an all around ideal place to live, and will soon match the likes of Metro Manila."		
	},
	ZAMBOANGA: {
		ABOUT_HEADER: "THE SARDINES CAPITAL OF THE PHILIPPINES",
		ABOUT_BODY: [
			"Zamboanga City is the commercial and industrial center of the Zamboanga Peninsula Region in Mindanao, known for its rich Hispanic-rooted history.  ",
			"Zamboanga is also known for its strong sardine industry, being the location of nine out of twelve sardine companies in the entire country.",
			"Zamboanga is also one of the centers for education and healthcare in the region, overall providing quality modern life to its citizens."
		],
		MINI_DESC: "Zamboanga is a city with a rich history rooted in Hispanic culture and a thriving economy largely based on its sardine industry. It is also however, one of the centers for education and healthcare in the region."		
	},
	
};

var CITY_PAGE_TILES = {
	
	BACOLOD: {
		EMPLOYMENT: {
			DESC: "Bacolod City has long been known for its agriculture and sugar cane industry. In recent years however, several IT-BPO companies have established themselves in the city due to the potential work force and available space. Their presence has stimulated Bacolod’s economy, creating new jobs, earning it the title “Third fastest growing economy in the IT-BPO industry.",
			TILES: [
				 {caption: "PAG-IBIG Office, Bacolod", res: "/Resources by city/Bacolod/Pics_Employment/CityBacolod_EmploymentTile01.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/Resources by city/Bacolod/Pics_Employment/CityBacolod_EmploymentTile02.jpg"},
				 {caption: "Penalosa Farm", res: "/Resources by city/Bacolod/Pics_Employment/CityBacolod_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Bacolod City’s residential market is quite varied, offering many kinds of places to call home from a simple studio for rent, a house in a subdivision, or a condiminium. According to real estate reviews, the cost of living in Bacolod City is about 25% cheaper than in Metro Manila.",
			TILES: [
				 {caption: "Akina Residences", res: "/Resources by city/Bacolod/Pics_Housing/CityBacolod_HousingTile01.jpg"},
				 {caption: "Camella Bacolod", res: "/Resources by city/Bacolod/Pics_Housing/CityBacolod_HousingTile02.jpg"},
				 {caption: "Hi Residences Condominium", res: "/Resources by city/Bacolod/Pics_Housing/CityBacolod_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Bacolod City has all the necessary healthcare and facilities for basic and emergency needs, and the majority of these are in quality condition. However, Bacolod still has a ways to go in terms of having medical services catering to high-profile conditions, luxury care, and mental health.",
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/Resources by city/Bacolod/Pics_Health/CityBacolod_HealthTile01.jpg"},
				 {caption: "Bacolod Adventist Medical Center", res: "/Resources by city/Bacolod/Pics_Health/CityBacolod_HealthTile02.jpg"},
				 {caption: "Riverside Hospital", res: "/Resources by city/Bacolod/Pics_Health/CityBacolod_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Bacolod City is the center for higher education in Negros Occidental, having three of the region’s best universities: University of Negros Occidental, West Negros University, and University of St. La Salle. Bacolod also has a number of quality primary and secondary schools for younger children.",
			TILES: [
				 {caption: "University of Negros Occidental", res: "/Resources by city/Bacolod/Pics_Education/CityBacolod_EducationTile01.jpg"},
				 {caption: "West Negros University", res: "/Resources by city/Bacolod/Pics_Education/CityBacolod_EducationTile02.jpg"},
				 {caption: "University of Saint La Salle", res: "/Resources by city/Bacolod/Pics_Education/CityBacolod_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Bacolod has a multitude of quailty infrastructure throughout the city. It has a variety of malls, hotels, restaurants, and residential buildings. Bacolod also has a variety of water, electricity, internet, and cable TV services that are also available in the bigger cities of Luzon. What Bacolod seems to value most of all is having a number of sports-related infrastructure for fun and education.",
			TILES: [
				 {caption: "Robinson's Bacolod", res: "/Resources by city/Bacolod/Pics_Infrastructure/CityBacolod_InfraTile01.jpg"},
				 {caption: "Embarcadero Mall Complex", res: "/Resources by city/Bacolod/Pics_Infrastructure/CityBacolod_InfraTile02.jpg"},
				 {caption: "Panaad Sports Complex", res: "/Resources by city/Bacolod/Pics_Infrastructure/CityBacolod_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Bacolod City has all the standard and traditional modes for public transportation, such as tricycles and jeepneys. It has its local airport and seaport for both its citizens and businesses, all of which are in good shape. One would not find it very different from life in Metro Manila. The best part: significantly less traffic.",
			TILES: [
				 {caption: "Tricycle driver in Bacolod", res: "/Resources by city/Bacolod/Pics_Transpo/CityBacolod_Transpo01.jpg"},
				 {caption: "Ceres Buslines Terminal", res: "/Resources by city/Bacolod/Pics_Transpo/CityBacolod_Transpo02.jpg"},
				 {caption: "New Bacolod Silay International Airport", res: "/Resources by city/Bacolod/Pics_Transpo/CityBacolod_Transpo03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Legazpi City does well in maintaining and managing the state of the city. With sugar production being the largest earning power of its economy, Bacolod’s government emphasizes taking steps to improve farmer living and worker conditions, as well as improving infrastructure to ease farmer to market transport of produce.",
			TILES: [
				 {caption: "Gov’t gives farmers equipment", res: "/Resources by city/Bacolod/Pics_LocalGovt/CityBacolod_LGU01.jpg"},
				 {caption: "City Hall, Bacolod", res: "/Resources by city/Bacolod/Pics_LocalGovt/CityBacolod_LGU02.jpg"},
				 {caption: "Medical and Dental outreach by PHO", res: "/Resources by city/Bacolod/Pics_LocalGovt/CityBacolod_LGU03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Bacolod City has a number of places for its citizens to indulge in some recreation time. Bacolod is known to love their sports, especially football, and a bit of golf. The city also has a lot of cultural recreation to indulge in, from the renowned MassKara festival, to the beautifully preserved ruins in Bacolod’s lands.",
			TILES: [
				 {caption: "MassKara Festival", res: "/Resources by city/Bacolod/Pics_Recreation/CityBacolod_Rec01.jpg"},
				 {caption: "Talisay Ruins", res: "/Resources by city/Bacolod/Pics_Recreation/CityBacolod_Rec02.jpg"},
				 {caption: "Ceres Football Team of Bacolod", res: "/Resources by city/Bacolod/Pics_Recreation/CityBacolod_Rec03.jpg"},
			]
		},
	},
	BUTUAN: {
		EMPLOYMENT: {
			DESC: "The rise of business establishments and financial institutions in the city have raised Butuan's economy to being one of the strongest in the country, earning it the reputation of being the commercial, industrial, and administrative center of the Caraga region. Besides these, Butuan also has plenty of employment opportunities in the agriculture, retail, and construction.",
			TILES: [
				 {caption: "", res: "/Resources by city/Butuan/Pics_Employment/CityButuan_EmploymentTile01.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Employment/CityButuan_EmploymentTile02.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Employment/CityButuan_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Housing in Butuan is relatively cheap, with rent prices being half as cheap as those in Quezon City and similar cities. There is also a variety in the kinds of accommodations you can secure for yourself and your family. Butuan also has a useful resource for looking through real estate offers at: http://butuanproperty.com/",
			TILES: [
				 {caption: "", res: "/Resources by city/Butuan/Pics_Housing/CityButuan_HousingTile01.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Housing/CityButuan_HousingTile02.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Housing/CityButuan_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Butuan's healthcare is focused on addressing malnutrition in the city by maintaining quality nutrition activities, food assistance, nutrition education, and livelihiood assistance. In terms of quality medical care, Butuan still lacks staff and facilities to be able to match up to cities in Metro Manila.",
			TILES: [
				 {caption: "", res: "/Resources by city/Butuan/Pics_Health/CityButuan_HealthTile01.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Health/CityButuan_HealthTile02.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Health/CityButuan_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Butuan is known for its teachers. In schools like Butuan Central Elementary School, they are greatly experienced in specialization techniques and often participate in seminars and workshops to better their teaching skills. The city also has two universities: Father Saturnino Urios University and Caraga State University.",
			TILES: [
				 {caption: "", res: "/Resources by city/Butuan/Pics_Education/CityButuan_EducationTile01.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Education/CityButuan_EducationTile02.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Education/CityButuan_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Butuan City has many of the utilities normally available to a highly urbanized city, though it may lack the number and variety of options that other cities do when it comes to luxuries like internet and cable TV. The city is currently undergoing several improvements to its infrastructure under the new mayor.",
			TILES: [
				 {caption: "", res: "/Resources by city/Butuan/Pics_Infrastructure/CityButuan_InfraTile01.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Infrastructure/CityButuan_InfraTile02.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Infrastructure/CityButuan_InfraTile0.jpg"}
			]
		},
		TRANSPORTATION: {
			DESC: "Butuan has all the typical modes of transportation that a city needs for both public and private commuting. These are taxicabs, tricycles, buses, vans, and jeepneys. Unique to the city are its orange tricycles which can fit 6-7 passengers. Butuan also has its own seaport and airport as other modes of transportation.",
			TILES: [
				 {caption: "", res: "/Resources by city/Butuan/Pics_Transpo/CityButuan_TranspoTile01.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Transpo/CityButuan_TranspoTile02.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Transpo/CityButuan_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government in Butuan City recently elected new officials in July of 2016, and the new mayor Ronnie Vicente Conde Lagnada is already planning ten new projects to improve the condition of the city. These projects are primarily focused on improving good governance, city cleanliness,  and city security.",
			TILES: [
				 {caption: "", res: "/Resources by city/Butuan/Pics_LocalGovt/CityButuan_LGUTile01.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_LocalGovt/CityButuan_LGUTile02.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_LocalGovt/CityButuan_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Butuan City has all the usual recreational areas a city has: malls, restaurants, hotels, parks, and plazas. There are several heritage landmarks and museums within the city for those who are looking to experience culture and history. The city also holds six festivals throughout the year.",
			TILES: [
				 {caption: "", res: "/Resources by city/Butuan/Pics_Recreation/CityButuan_RecTile01.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Recreation/CityButuan_RecTile02.jpg"},
				 {caption: "", res: "/Resources by city/Butuan/Pics_Recreation/CityButuan_RecTile03.jpg"},
			]
		},
	},
	CAGAYAN_DE_ORO: {
		EMPLOYMENT: {
			DESC: "Cagayan de Oro has been experiencing rapid growth in its economy due to investments both local and foreign as well as many IT-BPO companies taking interest in the city. Cagayan de Oro is also home to multinational companies like Nestle and Del Monte. Add to that a vibrant tourism industry, and Cagayan de Oro has plenty of employment opportunities of different kinds.",
			TILES: [
				 {caption: "Nestle Offices", res: "/Resources by city/Cagayan de Oro/Pics_Employment/CityCDO_EmploymentTile01.jpg"},
				 {caption: "Business District at Cagayan de Oro", res: "/Resources by city/Cagayan de Oro/Pics_Employment/CityCDO_EmploymentTile02.jpg"},
				 {caption: "DPWH Engineering Office", res: "/Resources by city/Cagayan de Oro/Pics_Employment/CityCDO_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Cagayan de Oro has a very healthy residential market as many companies have taken an interest in constructing mid-rise and high-rise condominiums, hotels, houses, and studios. A couple of real estate developers have even implemented construction for socialized housing projects for those in need.",
			TILES: [
				 {caption: "Primavera Residences", res: "/Resources by city/Cagayan de Oro/Pics_Housing/CityCDO_HousingTile01.jpg"},
				 {caption: "Tuscania Towers", res: "/Resources by city/Cagayan de Oro/Pics_Housing/CityCDO_HousingTile02.jpg"},
				 {caption: "Lumina Homes, Socialized Housing", res: "/Resources by city/Cagayan de Oro/Pics_Housing/CityCDO_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Cagayan de Oro has many hospitals that are well staffed and equipped with the proper facilities to provide the necessary range of healthcare to its citizens, and more. The growing city has resulted in a growth in all areas of livability, including health, which means more medical centers and better healthcare.",
			TILES: [
				 {caption: "Capitol University Medical City", res: "/Resources by city/Cagayan de Oro/Pics_Health/CityCDO_HealthTile01.jpg"},
				 {caption: "Northern Mindanao Medical Center", res: "/Resources by city/Cagayan de Oro/Pics_Health/CityCDO_HealthTile02.jpg"},
				 {caption: "Maria Reyna–Xavier University Hospital", res: "/Resources by city/Cagayan de Oro/Pics_Health/CityCDO_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Cagayan de Oro is one of the major players in the realm of education within the region due to it being the home of nine universities, such as Ateneo de Cagayan, and dozens of quality primary and secondary schools.",
			TILES: [
				 {caption: "Mindanao University of Science and Technology", res: "/Resources by city/Cagayan de Oro/Pics_Education/CityCDO_EducationTile01.jpg"},
				 {caption: "Xavier University – Ateneo de Cagayan", res: "/Resources by city/Cagayan de Oro/Pics_Education/CityCDO_EducationTile02.jpg"},
				 {caption: "Capitol University", res: "/Resources by city/Cagayan de Oro/Pics_Education/CityCDO_EducationTile03.jpg"}
			]
		},
		INFRASTRUCTURE: {
			DESC: "Cagayan de Oro is equipped with nearly all the variety and quality of utilities that Metro Manila has.  This covers good water supply, plumbing, electricity, waste management, internet, cellular networks, building construction, and road networks. Notably, Cagayan de Oro is the regional base of the Philippine air force, army, and national police in Northern Mindanao.",
			TILES: [
				 {caption: "CEPALCO Solar Energy", res: "/Resources by city/Cagayan de Oro/Pics_Infrastructure/CityCDO_InfraTile01.jpg"},
				 {caption: "Divine Mercy Shrine", res: "/Resources by city/Cagayan de Oro/Pics_Infrastructure/CityCDO_InfraTile02.jpg"},
				 {caption: "San Agustin Cathedral", res: "/Resources by city/Cagayan de Oro/Pics_Infrastructure/CityCDO_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Cagayan de Oro has various means for transportation. It has the usual tricycles, jeepneys, taxis, and buses found in most cities. Cagayan de Oro also has motorelas within the city and river taxis for water travel. The city has its own seaport and airport for out of town travel as well.",
			TILES: [
				 {caption: "Westbound Integrated Bus Terminal", res: "/Resources by city/Cagayan de Oro/Pics_Transpo/CityCDO_TranspoTile01.jpg"},
				 {caption: "Laguindingan International Airport", res: "/Resources by city/Cagayan de Oro/Pics_Transpo/CityCDO_TranspoTile02.jpg"},
				 {caption: "Motorela during Christmas", res: "/Resources by city/Cagayan de Oro/Pics_Transpo/CityCDO_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Cagayan de Oro has made significant strides in raising the city’s status and economy as a metropolis.  These efforts have resulted in Cagayan de Oro being awarded an “e-Readiness” award for leading in IT related endeavors, as well as being named one of the top cities for livability and business establishments.",
			TILES: [
				 {caption: "City Hall, Cagayan de Oro", res: "/Resources by city/Cagayan de Oro/Pics_LocalGovt/CityCDO_LGUTile01.jpg"},
				 {caption: "Outreach Program for Barangay Besigan", res: "/Resources by city/Cagayan de Oro/Pics_LocalGovt/CityCDO_LGUTile02.jpg"},
				 {caption: "E-Readiness Award for IT proficiency", res: "/Resources by city/Cagayan de Oro/Pics_LocalGovt/CityCDO_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "The recreational facilities and locations found in Cagayan de Oro can measure up to the quality and variety of those found in Metro Manila. There is a large number of hotels, restaurants, malls, museums, heritage landmarks, sports complexes, nature and adventure activities, and cultural festivals.",
			TILES: [
				 {caption: "Pelaez Memorial Sports Center", res: "/Resources by city/Cagayan de Oro/Pics_Recreation/CityCDO_RecTile01.jpg"},
				 {caption: "Higalaay Festival", res: "/Resources by city/Cagayan de Oro/Pics_Recreation/CityCDO_RecTile02.jpg"},
				 {caption: "Performance at RODELSA Hall", res: "/Resources by city/Cagayan de Oro/Pics_Recreation/CityCDO_RecTile03.jpg"},
			]
		},
	},
	DUMAGUETE: {
		EMPLOYMENT: {
			DESC: "The employment landscape in Dumaguete city has been booming in recent years with the establishment of severl business and IT parks and plazas. Several retail businesses and BPO companies have also decided to settle in Dumaguete. Tourism is yet another avenue of employment that earns quite a bit of money for the city.",
			TILES: [
				 {caption: "TeleTech, Dumaguete (BPO)", res: "/Resources by city/Dumaguete/Pics_Employment/CityDumaguete_EmploymentTile01.jpg"},
				 {caption: "Dumaguete Business Park and IT Plaza", res: "/Resources by city/Dumaguete/Pics_Employment/CityDumaguete_EmploymentTile02.jpg"},
				 {caption: "Cang’s Inc., (Retail)", res: "/Resources by city/Dumaguete/Pics_Employment/CityDumaguete_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Dumaguete has many residential places of high quality, complete with all the necessary facilities a home should have, and at nearly half the cost of living compared to Metro Manila. Statistics show that P18,000 - P20,000 a month is enough for the average person to afford a home in the more expensive part of the city.",
			TILES: [
				 {caption: "MarPas Apartments", res: "/Resources by city/Dumaguete/Pics_Housing/CityDumaguete_HousingTile01.jpg"},
				 {caption: "Vida Homes Condo Resort", res: "/Resources by city/Dumaguete/Pics_Housing/CityDumaguete_HousingTile02.jpg"},
				 {caption: "Mitual Homes, affordable housing", res: "/Resources by city/Dumaguete/Pics_Housing/CityDumaguete_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Dumaguete’s health and medical care facilities are all up to date and able to conduct major and minor operations. There are three major tertiary hospitals in the city, what you would call the “best of the best” in healthcare. These are Holy Child Hospital, Negros Oriental Provincial Hospital, and Silliman Medical Center.",
			TILES: [
				 {caption: "Holy Child Hospital", res: "/Resources by city/Dumaguete/Pics_Health/CityDumaguete_HealthTile01.jpg"},
				 {caption: "Negros Oriental Provincial Hospital", res: "/Resources by city/Dumaguete/Pics_Health/CityDumaguete_HealthTile02.jpg"},
				 {caption: "Silliman University Medical Center", res: "/Resources by city/Dumaguete/Pics_Health/CityDumaguete_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Dumaguete is known as “University City” for a reason. It offers some of the best education in the region, graduates of which have made their mark on the world even internationally. Most notable is Silliman University, and there are over fourteen others that are excellent schools.",
			TILES: [
				 {caption: "Foundation University", res: "/Resources by city/Dumaguete/Pics_Education/CityDumaguete_EducationTile01.jpg"},
				 {caption: "Silliman University", res: "/Resources by city/Dumaguete/Pics_Education/CityDumaguete_EducationTile02.jpg"},
				 {caption: "St. Paul University", res: "/Resources by city/Dumaguete/Pics_Education/CityDumaguete_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Dumaguete has maintained a few of its heritage landmarks and buildings, dotting the city with marks of history.  Dumaguete also has good quality electricity, water, internet, TV cable, and cellular services, though the variety of brands may be lacking when compared to Metro Manila brands. There are however, plenty of well-built facilities such as schools, hospitals, and malls.",
			TILES: [
				 {caption: "La Residencia Almar Hotel", res: "/Resources by city/Dumaguete/Pics_Infrastructure/CityDumaguete_InfraTile01.jpg"},
				 {caption: "Rizal Boulevard", res: "/Resources by city/Dumaguete/Pics_Infrastructure/CityDumaguete_InfraTile02.jpg"},
				 {caption: "Dumaguete Belfry Landmark", res: "/Resources by city/Dumaguete/Pics_Infrastructure/CityDumaguete_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "",
			TILES: [
				 {caption: "Dumaguete City Port", res: "/Resources by city/Dumaguete/Pics_Transpo/CityDumaguete_TranspoTile01.jpg"},
				 {caption: "Sibulan Airport", res: "/Resources by city/Dumaguete/Pics_Transpo/CityDumaguete_TranspoTile02.jpg"},
				 {caption: "Tricycle in Dumaguete", res: "/Resources by city/Dumaguete/Pics_Transpo/CityDumaguete_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Dumaguete works hard to maintain and raise the quality of what has been most succesful in their city: education. Several programs are geared towards fostering learning, and the city has also worked on increasing business and employment opportunities within the city by attracting investors with all the talent available from Dumaguete’s schools.",
			TILES: [
				 {caption: "Gift Program for less fortunate", res: "/Resources by city/Dumaguete/Pics_LocalGovt/CityDumaguete_LGUTile01.jpg"},
				 {caption: "Firefighters of Dumaguete", res: "/Resources by city/Dumaguete/Pics_LocalGovt/CityDumaguete_LGUTile02.jpg"},
				 {caption: "Dumaguete Medical Mission Outreach", res: "/Resources by city/Dumaguete/Pics_LocalGovt/CityDumaguete_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Recreation in Dumaguete can be found in the usual malls or restaurants, but the city also has plenty of beautiful spaces, such as its boulevards by the beach, parks, and plazas. The city also has several sports centers and programs for a more upbeat form of fun.",
			TILES: [
				 {caption: "Macias Memorial Coliseum", res: "/Resources by city/Dumaguete/Pics_Recreation/CityDumaguete_RecTile01.jpg"},
				 {caption: "Snorkeling in Dauin, Dumaguete", res: "/Resources by city/Dumaguete/Pics_Recreation/CityDumaguete_RecTile02.jpg"},
				 {caption: "Swimming in Tierra Alta Resort", res: "/Resources by city/Dumaguete/Pics_Recreation/CityDumaguete_RecTile03.jpg"},
			]
		},
	},
	GENERAL_SANTOS: {
		EMPLOYMENT: {
			DESC: "General Santos is the largest producer of sashimi-grade tuna in the Philippines. Most employment and economic gain revolves around their tuna trade and the agro-industry. That said, the city is slowly progressing and expanding to include more kinds of modern jobs as businesses also begin to take notice of the city.",
			TILES: [
				 {caption: "GenSan fishing industry", res: "/Resources by city/General Santos/Pics_Employment/CityGensan_Employment01.jpg"},
				 {caption: "Agriculture industry", res: "/Resources by city/General Santos/Pics_Employment/CityGensan_Employment02.jpg"},
				 {caption: "San Miguel Corporation", res: "/Resources by city/General Santos/Pics_Employment/CityGensan_Employment03.jpg"},
			]
		},
		HOUSING: {
			DESC: "The cost of living in General Santos city is significantly lower than that in bigger cities, and yet you can afford to have nearly the same kind lifestyle in terms of high-quality utilities and construction of the home.",
			TILES: [
				 {caption: "Lumina homes, socialized housing", res: "/Resources by city/General Santos/Pics_Housing/CityGensan_Housing01.jpg"},
				 {caption: "Bloomfields, GenSan", res: "/Resources by city/General Santos/Pics_Housing/CityGensan_Housing02.jpg"},
				 {caption: "Antonio Apartelle for rent", res: "/Resources by city/General Santos/Pics_Housing/CityGensan_Housing03.jpg"},
			]
		},
		HEALTH: {
			DESC: "General Santos has a few public hospitals that take care of the usual medical concerns as well as general checkups and the like. The city has one tertiary hospital that is in top, up-to-date condition. The city hopes to invest more in healthcare in the following years by adding hospitals and improving current ones.",
			TILES: [
				 {caption: "Santos General Hospital", res: "/Resources by city/General Santos/Pics_Health/CityGensan_Health01.jpg"},
				 {caption: "Mindanao Medical Center", res: "/Resources by city/General Santos/Pics_Health/CityGensan_Health02.jpg"},
				 {caption: "Socsargen County Hospital", res: "/Resources by city/General Santos/Pics_Health/CityGensan_Health03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "General Santos is home to three universities: the Notre Dame of Dadiangas University, Mindanao State University, and New Era University. The city also has over 50 private schools and 100 public schools.  The University of Santo Tomas has also begun planning the opening of a campus in General Santos.",
			TILES: [
				 {caption: "Notre Dame of Dadiangas University", res: "/Resources by city/General Santos/Pics_Education/CityGensan_Education01.jpg"},
				 {caption: "Mindanao State University, GenSan", res: "/Resources by city/General Santos/Pics_Education/CityGensan_Education02.jpg"},
				 {caption: "New Era University", res: "/Resources by city/General Santos/Pics_Education/CityGensan_Education03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "The infrastructure of General Santos, which includes the state of buildings, roads, and the provision of utilities like water, electricity, and internet, are all of high-quality just like the first-class cities in Luzon. Unique to the city is the high standard and presence of Task Force GenSan of the Philippine Army which keeps the city secure.",
			TILES: [
				 {caption: "Plaza General Santos", res: "/Resources by city/General Santos/Pics_Infrastructure/CityGensan_Infra01.jpg"},
				 {caption: "Overview of city streets", res: "/Resources by city/General Santos/Pics_Infrastructure/CityGensan_Infra02.jpg"},
				 {caption: "General Santos City Water District", res: "/Resources by city/General Santos/Pics_Infrastructure/CityGensan_Infra03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "General Santos has the usual modes of transportation Filipinos are used to: tricycles, jeepneys, taxicabs, and buses. The city also has its own international airport, the largest in Mindanao, and seaport, deemed as one of the finest in the country.",
			TILES: [
				 {caption: "Makar Wharf, GenSan seaport", res: "/Resources by city/General Santos/Pics_Transpo/CityGensan_Transpo01.jpg"},
				 {caption: "GenSan motorela", res: "/Resources by city/General Santos/Pics_Transpo/CityGensan_Transpo02.jpg"},
				 {caption: "General Santos International Airport", res: "/Resources by city/General Santos/Pics_Transpo/CityGensan_Transpo03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The local government in General Santos has been pushing several initiatives to better the state of the city and the well-being of its people. They maintain the quality of their main source of income being the tuna trade and the seaports they use to ship them. The local government is also pushing to improve the state of healthcare and business in the city.",
			TILES: [
				 {caption: "Task Force GenSan", res: "/Resources by city/General Santos/Pics_LocalGovt/CityGensan_LGu01.jpg"},
				 {caption: "Farmer’s training program", res: "/Resources by city/General Santos/Pics_LocalGovt/CityGensan_LGu02.jpg"},
				 {caption: "Free medical in Barangay Bawing", res: "/Resources by city/General Santos/Pics_LocalGovt/CityGensan_LGu03.jpg"},
			]
		},
		LEISURE: {
			DESC: "General Santos has all the usual avenues for recreation that cities do, paritcularly malls as it is known as the shopping capital of the region. However, there are not as many of these places are there are in other cities like Metro Manila or Iloilo, and the city still lacks a bit on having other types of recreation besides those.",
			TILES: [
				 {caption: "Robinsons Place GenSan", res: "/Resources by city/General Santos/Pics_Recreation/CityGensan_Rec01.jpg"},
				 {caption: "Paulino Santos Memorial Plaza", res: "/Resources by city/General Santos/Pics_Recreation/CityGensan_Rec02.jpg"},
				 {caption: "The Green Leaf Hotel", res: "/Resources by city/General Santos/Pics_Recreation/CityGensan_Rec03.jpg"},
			]
		},
	},
	ILIGAN: {
		EMPLOYMENT: {
			DESC: "Iligan City is one of the fastest developing areas in Northern Mindanao, with its economy experiencing a revival due to the new employment opportunities brought in by the influx of investments and business establishments in the recent years. Other promising avenues for employment can be found in its heavy industries like the National Power Corporation and the Global Steelworks Infrastructures, Inc.",
			TILES: [
				 {caption: "Mariwasa Ceramics Inc.", res: "/Resources by city/Iligan/Pics_Employment/CityIligan_EmploymentTile01.jpg"},
				 {caption: "Steel Industry", res: "/Resources by city/Iligan/Pics_Employment/CityIligan_EmploymentTile02.jpg"},
				 {caption: "Hydroelectric Industry", res: "/Resources by city/Iligan/Pics_Employment/CityIligan_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "The cost of living in Iligan City is about 20% cheaper than Quezon City and the rest of Metro Manila. The residential market has some quality finds, and Iligan has offers from the cheap to the extravagant, though the number of available homes is not always capable of meeting the demand.",
			TILES: [
				 {caption: "Caprice Residences", res: "/Resources by city/Iligan/Pics_Housing/CityIligan_HousingTile01.jpg"},
				 {caption: "Mitual Homes, Iligan", res: "/Resources by city/Iligan/Pics_Housing/CityIligan_HousingTile02.jpg"},
				 {caption: "Rose Garden Apartelle for rent", res: "/Resources by city/Iligan/Pics_Housing/CityIligan_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Iligan City has several hospitals available to its citizens that are equipped with facilities that are enough to address the usual needs of people. However, most of these hospitals still have a ways to go in terms of quality facilities before they can match the medical care provided in the country’s richest cities.",
			TILES: [
				 {caption: "Adventist Medical Center – Iligan", res: "/Resources by city/Iligan/Pics_Health/CityIligan_HealthTile01.jpg"},
				 {caption: "Mercy Community Hospital", res: "/Resources by city/Iligan/Pics_Health/CityIligan_HealthTile02.jpg"},
				 {caption: "Gregorio T. Lluch Memorial Hospital", res: "/Resources by city/Iligan/Pics_Health/CityIligan_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Iligan City has eight universities, and a total of 181 schools covering public, private, and vocational and technical schools. Though the coverage of courses offered in tertiary schools may be limited compared to those in other cities, the quality of those offered such as engineering, IT, and business, is considered excellent.",
			TILES: [
				 {caption: "La Salle Academy, High School", res: "/Resources by city/Iligan/Pics_Education/CityIligan_EducationTile01.jpg"},
				 {caption: "Iligan Capitol College", res: "/Resources by city/Iligan/Pics_Education/CityIligan_EducationTile02.jpg"},
				 {caption: "Mindanao State University, Iligan", res: "/Resources by city/Iligan/Pics_Education/CityIligan_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Iligan City’s infrastructure is sufficient enough to properly address the needs of its citizens: adequate water supply, waste management, electricity, and many telecommunication services are available to the city.  However, the quality of these can be raised to a higher standard which is currently being addressed by Iligan’s city government.",
			TILES: [
				 {caption: "St. Michael's Cathedral", res: "/Resources by city/Iligan/Pics_Infrastructure/CityIligan_InfraTile01.jpg"},
				 {caption: "Don Gregorio T. Lluch Avenue", res: "/Resources by city/Iligan/Pics_Infrastructure/CityIligan_InfraTile02.jpg"},
				 {caption: "Anahaw Ampitheater", res: "/Resources by city/Iligan/Pics_Infrastructure/CityIligan_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Iligan has all the necessary modes of transportation within the city such as taxicabs, tricycles, jeepneys and buses. Tartanillas or kalesas are also used to get around the city. Iligan also has two main bus terminals that cater to out of city transportation, as well as an airport and seaport of its own.",
			TILES: [
				 {caption: "Integrated Bus and Jeepney Terminal", res: "/Resources by city/Iligan/Pics_Transpo/CityIligan_TranspoTile01.jpg"},
				 {caption: "Tartanillas", res: "/Resources by city/Iligan/Pics_Transpo/CityIligan_TranspoTile02.jpg"},
				 {caption: "Port of Iligan", res: "/Resources by city/Iligan/Pics_Transpo/CityIligan_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Iligan City continues to emphasize focus on improving city roadways to better farm to market transportation, and improvements to city wellfare through better waste management processes and expanding the water supply system beneath Iligan.",
			TILES: [
				 {caption: "Road renovation", res: "/Resources by city/Iligan/Pics_LocalGovt/CityIligan_LGUTile01.jpg"},
				 {caption: "HUGS Foundation outreach at schools", res: "/Resources by city/Iligan/Pics_LocalGovt/CityIligan_LGUTile02.jpg"},
				 {caption: "Well construction for cleaner water", res: "/Resources by city/Iligan/Pics_LocalGovt/CityIligan_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Iligan is also known as the 'City of Majestic Waterfalls' for having 24 beautiful waterfalls, most notably the Maria Cristina Falls. The city also has its cultural festivals every September. Iligan also enjoys the usual modern recreational activities like movies, malls, shopping, and restaurants.",
			TILES: [
				 {caption: "Maria Cristina Waterfalls", res: "/Resources by city/Iligan/Pics_Recreation/CityIligan_RecTile01.jpg"},
				 {caption: "Sinulog Festival", res: "/Resources by city/Iligan/Pics_Recreation/CityIligan_RecTile02.jpg"},
				 {caption: "Gaisano Iligan Mall", res: "/Resources by city/Iligan/Pics_Recreation/CityIligan_RecTile03.jpg"},
			]
		},
	},
	ILOILO: {
		EMPLOYMENT: {
			DESC: "Being the hub for trade, commerce, finance, technology, medical tourism, hospitality, real estate, tourism, education, and industry in Western Visayas, Iloilo without a doubt has plenty of jobs to choose from. A number of BPOs, businesses, offices have also settled into the city, creating even more job opportunities.",
			TILES: [
				 {caption: "Iloilo Business Park", res: "/Resources by city/Iloilo/Pics_Employment/CityIloilo_Employment01.jpg"},
				 {caption: "Startek Office, Iloilo", res: "/Resources by city/Iloilo/Pics_Employment/CityIloilo_Employment02.jpg"},
				 {caption: "TeleTech Office, Iloilo", res: "/Resources by city/Iloilo/Pics_Employment/CityIloilo_Employment03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Housing in Iloilo is similar to what you’ll find in Metro Manila in terms of quality and affordability, although prices in Iloilo are a few thousand pesos cheaper on average. Iloilo offers plenty of various residential locations from the simple to the grand.",
			TILES: [
				 {caption: "Lumina Homes, Socialized Housing", res: "/Resources by city/Iloilo/Pics_Housing/CityIloilo_Housing01.jpg"},
				 {caption: "Camella Homes, Iloilo", res: "/Resources by city/Iloilo/Pics_Housing/CityIloilo_Housing02.jpg"},
				 {caption: "Lafayette Park Square Condo", res: "/Resources by city/Iloilo/Pics_Housing/CityIloilo_Housing03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Iloilo city has high quality medical facilities and services that have made it known to provide excellent health and medical care to its citizens. There are a couple of first-class hospitals located within the city such as The Medical City Iloilo and QualiMed Hospital.",
			TILES: [
				 {caption: "Iloilo Mission Hospital", res: "/Resources by city/Iloilo/Pics_Health/CityIloilo_Health01.jpg"},
				 {caption: "Savior Hospital, Iloilo", res: "/Resources by city/Iloilo/Pics_Health/CityIloilo_Health02.jpg"},
				 {caption: "Iloilo Doctor's Hospital", res: "/Resources by city/Iloilo/Pics_Health/CityIloilo_Health03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Iloilo City is known as the educational center of the Western Visayas region, having ten universities, 88 private schools, and 52 public schools.  The city is also known for its high literacy rate of approximately 95%, and its high talent availability among the city’s fresh graduates. ",
			TILES: [
				 {caption: "West Visayas State University", res: "/Resources by city/Iloilo/Pics_Education/CityIloilo_Education01.jpg"},
				 {caption: "University of the Philippines, Visayas", res: "/Resources by city/Iloilo/Pics_Education/CityIloilo_Education02.jpg"},
				 {caption: "Central Philippine University", res: "/Resources by city/Iloilo/Pics_Education/CityIloilo_Education03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Iloilo has some of the strongest, high quality infrastructure in the Philippines. Most of the quality and variety of utilities like electricity, water, cellular networks, internet providers, are offered in Iloilo City. The city also has several luxury locations like business districts, concert halls, and sport complexes, constructed for the community to engage in work or recreation.",
			TILES: [
				 {caption: "Iloilo Convention Center", res: "/Resources by city/Iloilo/Pics_Infrastructure/CityIloilo_Infra01.jpg"},
				 {caption: "Iloilo Sports Complex", res: "/Resources by city/Iloilo/Pics_Infrastructure/CityIloilo_Infra02.jpg"},
				 {caption: "Richmonde Hotel", res: "/Resources by city/Iloilo/Pics_Infrastructure/CityIloilo_Infra03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Iloilo has a wide range of transportation modes available to its citizens. It has the usual tricycles, jeepneys, taxis and buses. Unique to the city is the passad jeepney which has fixed routes only within the city. Iloilo also has international and domestic branches of airports and seaports.",
			TILES: [
				 {caption: "Port of Iloilo", res: "/Resources by city/Iloilo/Pics_Transpo/CityIloilo_Transpo01.jpg"},
				 {caption: "Passad Jeepney", res: "/Resources by city/Iloilo/Pics_Transpo/CityIloilo_Transpo02.jpg"},
				 {caption: "Iloilo International Airport", res: "/Resources by city/Iloilo/Pics_Transpo/CityIloilo_Transpo03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government in Iloilo City has worked hard to raise the city's condition, especially its economy, often promoting businesses to invest in the city by providing incentives like free issuance of permits and licences. The local government also makes efforts to maintain the well-being of its people through programs and maintenance of city property and services.",
			TILES: [
				 {caption: "City Hall", res: "/Resources by city/Iloilo/Pics_LocalGovt/CityIloilo_LGU01.jpg"},
				 {caption: "Providing farmers with equipment", res: "/Resources by city/Iloilo/Pics_LocalGovt/CityIloilo_LGU02.jpg"},
				 {caption: "Medical outreach", res: "/Resources by city/Iloilo/Pics_LocalGovt/CityIloilo_LGU03.jpg"},
			]
		},
		LEISURE: {
			DESC: "The beautiful city of Iloilo has plenty of places you can enjoy. There are several parks and plazas with scenic views and places to shop. There are also the many tourist spots around the city that are just as enjoyable for locals. If you’re the intellectual type, there are lots of heritage destinations that offer tours.",
			TILES: [
				 {caption: "Waterworld Iloilo", res: "/Resources by city/Iloilo/Pics_Recreation/CityIloilo_Rec01.jpg"},
				 {caption: "Plaza Libertad", res: "/Resources by city/Iloilo/Pics_Recreation/CityIloilo_Rec02.jpg"},
				 {caption: "Museo Iloilo", res: "/Resources by city/Iloilo/Pics_Recreation/CityIloilo_Rec03.jpg"},
			]
		},
	},
	LEGAZPI: {
		EMPLOYMENT: {
			DESC: "With the construction of several business districts, Legazpi City was recognized as one of the up and coming IT-BPO centers in the Philippines, adding a number of opportunities to the already plentiful job landscape of the city. A variety of other employment opportunities are present in the form of agriculture and adventure tourism around Mount Mayon.",
			TILES: [
				 {caption: "Embarcadero IT Park", res: "/Resources by city/Legazpi/Pics_Employment/CityLegazpi_EmploymentTile01.jpg"},
				 {caption: "Adventure Tourism at Mt. Mayon", res: "/Resources by city/Legazpi/Pics_Employment/CityLegazpi_EmploymentTile02.jpg"},
				 {caption: "Bicol Regional Agro-Industrial Center", res: "/Resources by city/Legazpi/Pics_Employment/CityLegazpi_EmploymentTile03.jpg"},
			]
		},
		HOUSING: {
			DESC: "Legazpi’s real estate landscape is quite diverse. The city has over 140 residential subdivisions and housing sites, as well as multiple places for rent. The city has also begun their planning and implementation of the construction of several condominium units, courtesy of Taft Property Ventures Development Corp.",
			TILES: [
				 {caption: "Deca Homes", res: "/Resources by city/Legazpi/Pics_Housing/CityLegazpi_HousingTile01.jpg"},
				 {caption: "Vista Land, Camella Legazpi", res: "/Resources by city/Legazpi/Pics_Housing/CityLegazpi_HousingTile02.jpg"},
				 {caption: "Eco Homes Bayshores Condo", res: "/Resources by city/Legazpi/Pics_Housing/CityLegazpi_HousingTile03.jpg"},
			]
		},
		HEALTH: {
			DESC: "Legazpi City has accessible healthcare, having about ten major medical centers and clinics, with a couple more under construction. With the presence of two first-class hospitals, Ago Genreal Hospital and Aquinas University Hospital, Legazpi City can provide its citizens with basic medical care and more.",
			TILES: [
				 {caption: "Aquinas University Hospital", res: "/Resources by city/Legazpi/Pics_Health/CityLegazpi_HealthTile01.jpg"},
				 {caption: "Legazpi City Hospital", res: "/Resources by city/Legazpi/Pics_Health/CityLegazpi_HealthTile02.jpg"},
				 {caption: "Ago General Hospital", res: "/Resources by city/Legazpi/Pics_Health/CityLegazpi_HealthTile03.jpg"},
			]
		},
		EDUCATION: {
			DESC: "Legazpi isn’t nicknamed the “City of Fun and Adventure” for nothing. There are the many festivals, malls, parks, and restaurants to enjoy, but the main attraction are the various adventures, tours, and scenic routes, you can indulge in around Mount Mayon.",
			TILES: [
				 {caption: "Bicol University", res: "/Resources by city/Legazpi/Pics_Education/CityLegazpi_EducationTile01.jpg"},
				 {caption: "Aquinas University of Legazpi", res: "/Resources by city/Legazpi/Pics_Education/CityLegazpi_EducationTile02.jpg"},
				 {caption: "St. Agnes Academy (K-12)", res: "/Resources by city/Legazpi/Pics_Education/CityLegazpi_EducationTile03.jpg"},
			]
		},
		INFRASTRUCTURE: {
			DESC: "Like many provincial cities, Legazpi has managed to maintain many of its heritage buildings from colonial times. However, the city has also managed to keep up to date with the necessities: roads, transportation, utilities, and more. Legazpi City is especially commended for its waste management system and flood control.",
			TILES: [
				 {caption: "St. Gregory the Great Cathedral", res: "/Resources by city/Legazpi/Pics_Infrastructure/CityLegazpi_InfraTile01.jpg"},
				 {caption: "Embarcadero Mall Complex", res: "/Resources by city/Legazpi/Pics_Infrastructure/CityLegazpi_InfraTile02.jpg"},
				 {caption: "Plaza Rizal", res: "/Resources by city/Legazpi/Pics_Infrastructure/CityLegazpi_InfraTile03.jpg"},
			]
		},
		TRANSPORTATION: {
			DESC: "Legazpi City has the usual modes of transportation most Filipinos are accustomed to: tricycles, jeepneys, and taxicabs, all of which can get you anywhere in the city. Legazpi City also boasts an airport, a seaport, and most notably its award-winning integrated bus and PUV terminal: Legazpi Grand Central Terminal.",
			TILES: [
				 {caption: "Legazpi Grand Central Terminal", res: "/Resources by city/Legazpi/Pics_Transpo/CityLegazpi_TranspoTile01.jpg"},
				 {caption: "Legazpi Airport", res: "/Resources by city/Legazpi/Pics_Transpo/CityLegazpi_TranspoTile02.jpg"},
				 {caption: "Port of Legazpi", res: "/Resources by city/Legazpi/Pics_Transpo/CityLegazpi_TranspoTile03.jpg"},
			]
		},
		LOCALGOV: {
			DESC: "The government of Legazpi City does well in maintaining and managing the city’s well-being by continuously making efforts to promote its economy through business partnerships and Mount Mayon’s tourism, sustainability through livelihood programs, and citizen well-being through planned additions to health clinics and better waste management systems.",
			TILES: [
				 {caption: "City Hall", res: "/Resources by city/Legazpi/Pics_LocalGovt/CityLegazpi_LGUTile01.jpg"},
				 {caption: "Kabuhayan Livelihood Program, 2015", res: "/Resources by city/Legazpi/Pics_LocalGovt/CityLegazpi_LGUTile02.jpg"},
				 {caption: "Green Initiative: tree planting", res: "/Resources by city/Legazpi/Pics_LocalGovt/CityLegazpi_LGUTile03.jpg"},
			]
		},
		LEISURE: {
			DESC: "Legazpi isn’t nicknamed the “City of Fun and Adventure” for nothing. While you can enjoy the usual recreational activities of a city, like parks, museums, malls, and festivals, the adventurous activities you can take part in at Mount Mayon is what makes Legazpi City unique.",
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
				 {caption: "PAG-IBIG Office, Bacolod", res: "/migration_help/Bacolod/Pics_Employment/employment1.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/migration_help/Bacolod/Pics_Employment/employment2.jpg"},
				 {caption: "Penalosa Farm", res: "/migration_help/Bacolod/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {caption: "Akina Residences", res: "/migration_help/Bacolod/Pics_Housing/housing1.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Bacolod/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/migration_help/Santa Rosa/Pics_LocalGovt/lgu1.jpg"}
			]
		}
	},
	BUTUAN: {
		EMPLOYMENT: {
			TILES: [
				 {caption: "PAG-IBIG Office, Bacolod", res: "/migration_help/Butuan/Pics_Employment/employment1.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/migration_help/Butuan/Pics_Employment/employment2.jpg"},
				 {caption: "Penalosa Farm", res: "/migration_help/Butuan/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {caption: "Akina Residences", res: "/migration_help/Butuan/Pics_Housing/housing1.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Butuan/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/migration_help/Butuan/Pics_LocalGovt/lgu1.jpg"},
				 {caption: "The Doctors' Hospital", res: "/migration_help/Butuan/Pics_LocalGovt/lgu2.jpg"},
			]
		}
	},
	CAGAYAN_DE_ORO: {
		EMPLOYMENT: {
			TILES: [
				 {caption: "PAG-IBIG Office, Bacolod", res: "/migration_help/Cagayan de Oro/Pics_Employment/employment1.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/migration_help/Cagayan de Oro/Pics_Employment/employment2.jpg"},
				 {caption: "Penalosa Farm", res: "/migration_help/Cagayan de Oro/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {caption: "Akina Residences", res: "/migration_help/Cagayan de Oro/Pics_Housing/housing1.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Cagayan de Oro/Pics_Housing/housing2.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Cagayan de Oro/Pics_Housing/housing3.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/migration_help/Cagayan de Oro/Pics_LocalGovt/lgu1.jpg"}
			]
		}
	},
	ILIGAN: {
		EMPLOYMENT: {
			TILES: [
				 {caption: "PAG-IBIG Office, Bacolod", res: "/migration_help/Iligan/Pics_Employment/employment1.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/migration_help/Iligan/Pics_Employment/employment2.jpg"},
				 {caption: "Penalosa Farm", res: "/migration_help/Iligan/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {caption: "Akina Residences", res: "/migration_help/Iligan/Pics_Housing/housing1.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Iligan/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/migration_help/Iligan/Pics_LocalGovt/lgu1.jpg"},
				 {caption: "The Doctors' Hospital", res: "/migration_help/Iligan/Pics_LocalGovt/lgu2.jpg"},
				 {caption: "The Doctors' Hospital", res: "/migration_help/Iligan/Pics_LocalGovt/lgu3.jpg"}
			]
		}
	},
	ILOILO: {
		EMPLOYMENT: {
			TILES: [
				 {caption: "PAG-IBIG Office, Bacolod", res: "/migration_help/Iloilo/Pics_Employment/employment1.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/migration_help/Iloilo/Pics_Employment/employment2.jpg"},
				 {caption: "Penalosa Farm", res: "/migration_help/Iloilo/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {caption: "Akina Residences", res: "/migration_help/Iloilo/Pics_Housing/housing1.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Iloilo/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/migration_help/Iloilo/Pics_LocalGovt/lgu1.jpg"},
				 {caption: "The Doctors' Hospital", res: "/migration_help/Iloilo/Pics_LocalGovt/lgu2.jpg"}
			]
		}
	},
	SANTA_ROSA: {
		EMPLOYMENT: {
			TILES: [
				 {caption: "PAG-IBIG Office, Bacolod", res: "/migration_help/Santa Rosa/Pics_Employment/employment1.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/migration_help/Santa Rosa/Pics_Employment/employment2.jpg"},
				 {caption: "Penalosa Farm", res: "/migration_help/Santa Rosa/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {caption: "Akina Residences", res: "/migration_help/Santa Rosa/Pics_Housing/housing1.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Santa Rosa/Pics_Housing/housing2.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Santa Rosa/Pics_Housing/housing3.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/migration_help/Santa Rosa/Pics_LocalGovt/lgu1.jpg"},
				 {caption: "The Doctors' Hospital", res: "/migration_help/Santa Rosa/Pics_LocalGovt/lgu2and3.jpg"},
				 {caption: "The Doctors' Hospital", res: "/migration_help/Santa Rosa/Pics_LocalGovt/lgu2and3.jpg"}
			]
		}
	},
	ZAMBOANGA: {
		EMPLOYMENT: {
			TILES: [
				 {caption: "PAG-IBIG Office, Bacolod", res: "/migration_help/Zamboanga/Pics_Employment/employment1.jpg"},
				 {caption: "Development Bank of the Philippines", res: "/migration_help/Zamboanga/Pics_Employment/employment2.jpg"},
				 {caption: "Penalosa Farm", res: "/migration_help/Zamboanga/Pics_Employment/employment3.jpg"},
			]
		},
		HOUSING: {
			TILES: [
				 {caption: "Akina Residences", res: "/migration_help/Zamboanga/Pics_Housing/housing1.jpg"},
				 {caption: "Camella Bacolod", res: "/migration_help/Zamboanga/Pics_Housing/housing2.jpg"}
			]
		},
		LOCALGOV: {
			TILES: [
				 {caption: "The Doctors' Hospital", res: "/migration_help/Zamboanga/Pics_LocalGovt/lgu1.jpg"},
				 {caption: "The Doctors' Hospital", res: "/migration_help/Zamboanga/Pics_LocalGovt/lgu2.jpg"},
				 {caption: "The Doctors' Hospital", res: "/migration_help/Zamboanga/Pics_LocalGovt/lgu3.jpg"}
			]
		}
	},
}