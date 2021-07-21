import { createStore } from 'vuex'


const store = createStore({

	state: () => ({
		currentItems: [],
		items: [
			{ type: 'about', name: 'What is GIS?', to: '/whatisgis' },
			{ type: 'about', name: 'What is GPS?', to: '/whatisgps' },
			{ type: 'about', name: 'Contact US', to: '/contact' },
			{ type: 'contacts', name:'Dwight LaGrone', title:"GIS Manager", employer:'City of Sherman', address:'220 W Mulberry St', city:'Sherman, Tx 75090', phone:'(903) 892-7310', email:'dwightl@cityofsherman.com' },
			{ type: 'contacts', name:'Jerry Pace', title:"GIS Technician - Engineering", employer:'City of Sherman', address:'220 W Mulberry St', city:'Sherman', state:'Tx', zip:'75090', phone:'(903) 892-7621', email:'jerryp@cityofsherman.com' },
			{ type: 'external', name: 'Council Districts', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=8d6315e42fc24d1aa12e2c7477f7d0d0' },
			{ type: 'external', name: 'Emergency Sirens', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=a36f3d5aa21349d6a152822fe36f79fb' },
			{ type: 'external', name: 'Parks & recreation', url: 'https://cityofsherman.maps.arcgis.com/apps/Shortlist/index.html?appid=6202d49de88b4fc4b94e9878648584ae' },
			{ type: 'external', name: 'Sex Offender Restricted Areas', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=fad3e825333c4405836de6723978d9b6' },
			{ type: 'external', name: 'Sherman School', url: 'https://cityofsherman.maps.arcgis.com/apps/Viewer/index.html?appid=3f4cce8e33e347cfb0393803600a65db' },
			{ type: 'external', name: 'Zoning Map', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=c76e6bd8840e4adc9235cfe24b919c49' },
			{ type: 'featured', name: 'ALL-IN-ONE', url: 'https://cityofsherman.maps.arcgis.com/apps/PublicInformation/index.html?appid=b9b1bfd6bec643aeaa4d6c5ad17a0388' },
			{ type: 'featured', name: 'Residential Dashboard', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626' },
			{ type: 'footer', name: " City of sherman", url: "https://www.ci.sherman.tx.us/", alt:"City of Sherman" },
			{ type: 'footer', name: "Grayson County", url: "https://www.co.grayson.tx.us/", alt:"Grayson County" },
			{ type: 'footer', name: "G-CAD", url: "https://www.graysonappraisal.org/", alt:"Grayson County" },
			{ type: 'footer', name: "TCOG", url: "https://www.tcog.com/", alt:"TCOG" },
			{ type: 'footer', name: "ESRI", url: "https://www.tcog.com/", alt:"ESRI" },
			{ type: 'gisdownloads', name: "Points", url: "https://data-cityofsherman.opendata.arcgis.com/search?categories=base%20layers%2Cpoints", text:"Address Points, Control Points, Parks & Recreation, Points of Interest, Sherman Schools & Traffic Counts" },
			{ type: 'gisdownloads', name: "Lines", url: "https://data-cityofsherman.opendata.arcgis.com/search?categories=base%20layers%2Clines", text: "Road Centerlines & Pavement Edge" },
			{ type: 'gisdownloads', name: "Polygons", url: "https://data-cityofsherman.opendata.arcgis.com/search?categories=base%20layers%2Careas", text: "Building Footprints, City Limits, Parcels, Council Districts, E.T.J. & Future Landuse"},
			{ type: 'gisdownloads', name: "Contact Us", url: "mailto:dwightl@cityofsherman.com", text: "Can't find what you are looking for?"},
			{ type: 'infographics', name: 'At Risk', url: 'https://experience.arcgis.com/experience/068d1053b9cb499b9d1f1047930c4686/' },
			{ type: 'infographics', name: 'Community', url: 'https://experience.arcgis.com/experience/ab26267db2d348c98718a01213a414b0/?draft=true' },
			{ type: 'infographics', name: 'Coronavirus', url: 'https://experience.arcgis.com/experience/449926e4cf1f4df8b42995a1a5ea3e51/' },
			{ type: 'infographics', name: 'Demographic', url: 'https://experience.arcgis.com/experience/875fc49140eb457caadda7306d7105ec/e' },
			{ type: 'infographics', name: 'Employment', url: 'https://experience.arcgis.com/experience/585123d5273844c7a2a961d492a8f6b0/' },
			{ type: 'infographics', name: 'Health Care', url: 'https://experience.arcgis.com/experience/dff2ef170bdb4b3aa4444438036631b8/' },
			{ type: 'infographics', name: 'Key Facts', url: 'https://experience.arcgis.com/experience/90fe3dd8d86c4045a9cac14c85e53524/' },
			{ type: 'infographics', name: 'Population', url: 'https://experience.arcgis.com/experience/0db2b23b4f374ff7994175333130743d/e' },
			{ type: 'infographics', name: 'Tapestery', url: 'https://experience.arcgis.com/experience/fe9979cd4e594836ac8c4debd19a8733/e' },
			{ type: 'internal', name: 'Code Incidents (2021)', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=83d4528b6352402d9ce262c45a07e11a'},
			{ type: 'internal', name: 'Code Incidents (All)', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=2e9d062f4c6e4cac9ec10024ebc8eb7b'},
			{ type: 'internal', name: 'Code Simple Map', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=193d2f120fa947aeb6fe65989faef9a9'},
			{ type: 'internal', name: 'Detailed Parks Map', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=78f0ba56e43a4edeb9e2166ebf7c7337'},
			{ type: 'internal', name: 'Mowing Map', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=1e4c344342414fbba77d9805a67a61a4'},
			{ type: 'internal', name: 'Storm Water Fees', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=6ff28e8cc3fa4cd69d80b9077eec3f1c'},
		  { type: 'menuItems', name: 'About', to: '/about' },
			// { type: 'menuItems', name: 'Address Request Form', to: '/addressrequest'},
			{ type: 'menuItems', name: 'Featured', to: '/' },
			{ type: 'menuItems', name: 'GIS Downloads', to: '/gisdownload' },
			{ type: 'menuItems', name: 'Infographics', to: '/infographics' },
			{ type: 'menuItems', name: 'Internal Web Maps', to: '/internal' },
			{ type: 'menuItems', name: 'PDF Maps', to: '/pdfmaps' },
			{ type: 'pdfMaps', name: 'City Limits Map (Large)', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7b05f3ab5b514ae99a9f665380721ada/data' },
			{ type: 'pdfMaps', name: 'City Limits Map (Small)', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4009aba74faa4c40b57d3337f4f11706/data' },
			{ type: 'pdfMaps', name: 'Control Monuments', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/878a50934b3b4adc85218e46af40f77d/data' },
			{ type: 'pdfMaps', name: 'Council District Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/6891bd3aedfb41d59e25eed86d7fb0c3/data' },
			{ type: 'pdfMaps', name: 'E.T.J Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2097361b3fec4b289763d414df040b27/data' },
			{ type: 'pdfMaps', name: 'Sherman Schools', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/098b94114bec4031a3638978be32874e/data' },
			{ type: 'pdfMaps', name: 'Zoning Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e1e4313e1d1248228d6bb29b31163ac4/data' },
		],
	}),


	mutations: {},
	actions: {},
	modules: {},
	getters: {
		getItems: (state) => (type) => {
    	return state.items.filter(item => item.type === type )
  	}
	}
})

export default store
