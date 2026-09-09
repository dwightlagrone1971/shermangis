// Static reference content for the site: dashboard/download links, staff
// contacts, footer links, and nav menu items, all tagged with a `type`.
// This never changes at runtime, so it's a plain module instead of a
// reactive store -- see getItems() below for how views read from it.
export const items = [
	/* About Page */
	{ 
		type: 'about', 
		name: 'What is GIS?', 
		to: '/whatisgis' 
	},
	{ 
		type: 'about', 
		name: 'What is GPS?', 
		to: '/whatisgps' 
	},
	{ 
		type: 'about', 
		name: 'Contact US', 
		to: '/contacts' 
	},
            /* Contacts Page*/
	{ 
		type: 'contacts', 
		name:'Dwight LaGrone', 
		title:"GIS Manager", 
		employer:'City of Sherman', 
		address:'405 N Rusk St', 
		city:'Sherman', state: '75090', 
		phone:'(903) 892-7310', 
		email:'mailto:dwightl@cityofsherman.com' 
	},
	{ 
		type: 'contacts', 
		name:'Jerry Pace', 
		title:"GIS Technician - Engineering", 
		employer:'City of Sherman', 
		address:'220 W Mulberry St', 
		city:'Sherman', state:'Tx', 
		zip:'75090', phone:'(903) 892-7621', 
		email:'mailto:jerryp@cityofsherman.com' 
	},
	{ 
		type: 'contacts', 
		name:'Cody Franks', 
		title:"GIS Technician - Public Works", 
		employer:'City of Sherman', address:'100 S Rusk St', 
		city:'Sherman', state:'Tx', zip:'75090', 
		phone:'(903) 892-7195', 
		email:'mailto:codyf@cityofsherman.com' 
	},
	/* Downloads */
	{ 
		type: 'downloads', 
		name: 'Addresses', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/3ed717bdd281426e9994b9d4ff1d8e1d_4/explore?location=33.617307%2C-96.619061%2C11", 
		src: '/images/datasets/addresses.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Annexations', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/6e78e7f6bd0848e69b25933eb1e00b30_0/explore?location=33.619177%2C-96.633220%2C11.94", 
		src: '/images/datasets/annexations.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Building Footprints', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/161dcd10f9864c6a88a4c09bbf38f1dc_0/explore?location=33.563740%2C-96.632260%2C11", 
		src: '/images/datasets/building.png' 
	},
	{ 
		type: 'downloads', 
		name: 'City Limits & ETJ', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/d02333cf02bc4cf98728f92a8899f0b1_0/explore?location=33.678870%2C-96.662752%2C10", 
		src: '/images/datasets/citylimits.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Control Monuments',
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/33f8223fb4164f3699e89e8a249410dc_9/explore?location=0.001696%2C-96.619955%2C0.00", 
		src: '/images/datasets/control.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Council Districts', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/2f5e02cf74b04e98b3eff4048663447b_10/explore?location=33.619177%2C-96.633228%2C11.94", 
		src: '/images/datasets/council.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Development Projects', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/bc6309414e124f2a87979db886ff78e4_0/explore?location=33.622729%2C-96.616768%2C12", 
		src: '/images/datasets/development.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Future Landuse', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/864ba455145b4db493872497a8d645a7_18/explore?location=33.620037%2C-96.633152%2C11.88", 
		src: '/images/datasets/future.png'  
	},
	{ 
		type: 'downloads', 
		name: 'Parcels', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/9f7b57fe77dd4c8d8b9de4e6917c57d2_19/explore?location=0.001695%2C-96.633224%2C0.00", 
		src: '/images/datasets/parcels.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Parks & Recreation', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/0d896e8dd1bf49ff9e6f2b94ef34c1d6_24/explore?location=33.643646%2C-96.621673%2C13.15", 
		src: '/images/datasets/parks.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Roads Centerlines', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/79ce8982b5804e069d9df2a49a0ea162_0/explore?location=33.613517%2C-96.625559%2C11", 
		src: '/images/datasets/roads.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Thoroughfares', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/aaff07c9524445ea958ec57b0431ac96_69/explore?location=33.609510%2C-96.633352%2C11.82", 
		src: '/images/datasets/thoroughfare.png'  
	},
	{ 
		type: 'downloads', 
		name: 'Traffic Counts', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/bc592fd6fadf4dbaa12c21c0a983deb0_0/explore?location=33.629473%2C-96.612578%2C12.42", 
		src: '/images/datasets/traffic.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Zip Codes', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/5cc8e7043e6e49af80808385c2f27dbd_43/explore?location=30.382542%2C-100.127720%2C6.00", 
		src: '/images/datasets/zip.png' 
	},
	{ 
		type: 'downloads', 
		name: 'Zoning Districts', 
		url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/809f7d59844a434a9cefadb29d89cf3a_2/explore", 
		src: '/images/datasets/zoning.png' 
	},
            /* External Page */
	{ 
		type: 'external', 
		name: 'All-In-One', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/cb19b06c606f4ce1bd9e96b8817d4e07',
		src: '/images/external/all-In-one.png' 
	},
	{ 
		type: 'external', 
		name: 'Annexations', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/2848ecc1229d454fa962392967548752',
		src: '/images/external/annexations.png' 
	},
	{ 
		type: 'external', 
		name: 'CIP Projects', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/818c88c6c1264590810cb91a0db2c24a',
		src: '/images/external/cip-projects.png'
	},
	{ 
		type: 'external', 
		name: 'Council Districts', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/cd464982fa70480189bae064a5901916',
		src: '/images/external/council-districts.png'
	},
	{ 
		type: 'external', 
		name: 'Development Projects', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/5628948f1c1a464da61cc0bf966badf0',
		src: '/images/external/development-projects.png' 
	},
	{ 
		type: 'external', 
		name: 'Emergency Sirens', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/a3685004829d4465abd34e067f30c5fb',
		src: '/images/external/emergency-sirens.png'
	},
	{ 
		type: 'external', 
		name: 'FEMA Flood Zones', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/6a2aedbb87a64b459e5eb2bdac3f4503',
		src: '/images/external/fema-flood-zones.png'
	},
	{ 
		type: 'external', 
		name: 'Future Landuse', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/f408802be3f04be2a2c699a033a878b3',
		src: '/images/external/future-landuse.png' 
	},
	{ 
		type: 'external', 
		name: 'Garbage Collection', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=000839d23a014bd791bb19d4667f177c',
		src: '/images/external/garbage-collection.png' 
	},			
	{ 
		type: 'external', 
		name: 'Grayson Appraisal District', 
		url: 'https://gis.bisclient.com/graysoncad/',
		src: '/images/external/grayson-appraisal-district.png' 
	},
	{

		type: 'external', 
		name: 'Parks & Recreation', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/af44c4110ca24cc28ead1a6feac24a54',
		src: '/images/external/parks-recreation.png' 
	},
	{ 
		type: 'external', 
		name: 'Planning & Zoning', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/da82c92929e34750a26d95d5f8738cc6',
		src: '/images/external/planning-zoning.png'
	},
	{ 
		type: 'external', 
		name: 'Project Site', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/7ef89fd885e04d8e82d4ff2195a94b94',
		src: '/images/external/project-site.png'
	},
	{ 
		type: 'external', 
		name: 'Sex Offender Restricted Areas', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/7797ab097a38493da51128f124d91370',
		src: '/images/external/sex-offender.png' 
	},
	{ 
		type: 'external', 
		name: 'Sherman Schools (SISD)', 
		url: 'https://portal.metrostudygis.com/arcgis/apps/webappviewer/index.html?id=f7265613b8f64149bbce677ed9c7befd',
		src: '/images/external/sherman-schools.png' 
	},
	{ 
		type: 'external', 
		name: 'Thoroughfares', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/3b28c17a8cac472ab8ff18b0576cacfe',
		src: '/images/external/thoroughfares.png' 
	},
	{ 
		type: 'external', 
		name: 'Zoning Districts', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/1e77f1f404ae4ff58043b6c88cdf1fd1',
		src: '/images/external/zoning-districts.png'
	},			
	/* Featured Page */
	{ 
		type: 'featured', 
		name: 'ALL-IN-ONE', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/cb19b06c606f4ce1bd9e96b8817d4e07',
		src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cc892bfe9583420084f8c027135d343f/data'  
	},
	{ 
		type: 'featured', 
		name: 'City Projects Site', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/7ef89fd885e04d8e82d4ff2195a94b94',
		src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c42c56982bf344a38405c3cfc48d8c9e/data'   
	},
	{ 
		type: 'featured', 
		name: 'Planned Developments', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/65fcbad2b4cb41cd94c5e33caca3232d',
		src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/96cfedf7c4984ee4acbfb497f05cf86a/data' 
	},
	{ 
		type: 'featured', 
		name: 'Residential Dashboard', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626',
		src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/d9cecb6527824cb697e02160d68caf4e/data'   
	},
	/* Footer Page */
	{ 
		type: 'footer', 
		name: "Sherman", 
		url: "https://www.ci.sherman.tx.us/", 
		alt:"City of Sherman" 
	},
	{ 
		type: 'footer', 
		name: "Grayson", 
		url: "https://www.co.grayson.tx.us/", 
		alt:"Grayson County" 
	},
	{ 
		type: 'footer', 
		name: "G-CAD", 
		url: "https://www.graysonappraisal.org/", 
		alt:"Grayson County" 
	},
	{ 
		type: 'footer', 
		name: "TCOG", 
		url: "https://www.tcog.com/", 
		alt:"TCOG" 
	},
	{ 
		type: 'footer', 
		name: "ESRI", 
		url: "https://www.esri.com/en-us/home", 
		alt:"ESRI" 
	},
	/* Infographics Page */
	{ 
		type: 'infographics', 
		name: '2020 Census Summary', 
		to: '/census2020' 
	},
	{ 
		type: 'infographics', 
		name: 'At Risk Population', 
		to: '/atriskpopulation' 
	},                                                               
	{ 
		type: 'infographics', 
		name: 'Community Change Snapshot', 
		to: '/communitychangesnapshot'
	},
	{ 
		type: 'infographics', 
		name: 'Community Profile', 
		to: '/communityprofile'  
	},
	{ 
		type: 'infographics', 
		name: 'Commute Profile', 
		to: '/commuteprofile'     
	},
	{ 
		type: 'infographics', 
		name: 'Dominant Tapestry Profile', 
		to: '/dominanttapestryprofile'
	},
	{ 
		type: 'infographics', 
		name: 'Economic Development Profile', 
		to: '/economicdevelopmentprofile' 
	},
	{ 
		type: 'infographics', 
		name: 'Emergency Information', 
		to: '/emergencyinformation' 
	},
	{ 
		type: 'infographics', 
		name: 'Employment Overview', 
		to: '/employmentoverview'  
	},
	{ 
		type: 'infographics', 
		name: 'Executive Summary', 
		to: '/executivesummary' 
	},
	{ 
		type: 'infographics', 
		name: 'Fire District Profile', 
		to: '/firedistrictprofile'  
	},
	{ 
		type: 'infographics', 
		name: 'Healthcare And Insurance Statistics', 
		to: '/healthcareandinsurancestatistics'
	},
	{ 
		type: 'infographics', 
		name: 'Housing Market Characteristics', 
		to: '/housingmarketcharacteristics' 
	},
	{ 
		type: 'infographics', 
		name: 'Housing Market Summary', 
		to: '/housingmarketsummary'
	},
	{ 
		type: 'infographics', 
		name: 'K-12 Education Overview', 
		to: '/k12educationoverview' 
	},
	{ 
		type: 'infographics', 
		name: 'Key Facts', 
		to: '/keyfacts'
	},
	{ 
		type: 'infographics', 
		name: 'Nonprofit Charitable Profile', 
		to: '/nonprofitcharitableprofile' 
	},
	{ 
		type: 'infographics', 
		name: 'Population Overview', 
		to: '/populationoverview' 
	},
	{ 
		type: 'infographics', 
		name: 'Population Trends', 
		to: '/populationtrends'
	},
	{ 
		type: 'infographics', 
		name: 'Property Details', 
		to: '/propertydetails'  
	},
	{ 
		type: 'infographics', 
		name: 'Retail Demand by Industry', 
		to: '/retaildemandbyindustry' 
	},
	{ 
		type: 'infographics', 
		name: 'Shopping and Spending', 
		to: '/shoppingandspending'
	},
	{ 
		type: 'infographics', 
		name: 'Spending Behavior', 
		to: '/spendingbehavior'
	},
	{ 
		type: 'infographics', 
		name: 'Tapestry profile', 
		to: '/tapestryprofile'
	},
	/* Internal Page */
	{ 
		type: 'internal', 
		name: 'Address Map', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/f575843e8b1140e0ac69149ca266dc5f', 
		src: '/images/internal/Address-Map.png' 
	},
	{ 
		type: 'internal', 
		name: 'Ambulance Calls', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/9a005e56e03e46aca282179adac59671', 
		src: '/images/internal/Ambulance-Calls.png'  
	},
	{ 
		type: 'internal', 
		name: 'Hydrant Maintenance', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/0156ab1a620d49a0b052814da3be563a',
		src: '/images/internal/Hydrant-Maintenance.png'
	},

	{ 
		type: 'internal', 
		name: 'Storm Water Fees', 
		url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/789607a5260b4fe5a0d4fe2ecef8c24b', 
		src: '/images/internal/Storm-Water-Fees.png',
	},
	{ 
		type: 'internal', 
		name: 'Water, Sewer & Drainage Map', 
		url: 'https://www.arcgis.com/apps/dashboards/489c3c21fef747feb65d9e0aab54acc1#',
		src: '/images/internal/Utility-Map.png' 
	},
	/* Menu Page */
	{ 
		type: 'menuItems', 
		name: 'Home', 
		to: '/',
		icon: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cf806844422640c1887a9df6c1863007/data'
	},
	{
		type: 'menuItems', 
		name: 'Downloads', 
		to: '/datasets',
		icon: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/b49983147c0d43a891faac9317c7a1c9/data'
	},
	{ 
		type: 'menuItems', 
		name: 'Public Maps', 
		to: '/externals',
		icon: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/51f24d655b0845eea71d9e116afdba26/data'
	},
	{ 
		type: 'menuItems', 
		name: 'Infographics', 
		to: '/infographics',
		icon: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/480933bbc9124c1485e04b650071d880/data'
	},
	{ 
		type: 'menuItems', 
		name: 'Internal Maps', 
		to: '/internal',
		icon: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/acbd7370b8fe4b57b069519360161f4f/data'
	},
	{ 
		type: 'menuItems', 
		name: 'PDF Maps', 
		to: '/pdfmaps',
		icon: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/389b4dd8447c4d3fa911907f593a2f33/data'
	},
	{ 
		type: 'menuItems', 
		name: 'About Page', 
		to: '/about',
		icon: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/d03725b6652f40fc9c18a46160369f1f/data'
	},			
	/* PDF Maps Page */
	{ 
		type: 'pdfMaps', 
		name: 'City Limits', 
		url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2dab9848f87b489abb3bb1f5fb39616b/data', 
		src: '/images/pdf/City-Limits.png'
	},
	{ 
		type: 'pdfMaps', 
		name: 'Control Monuments', 
		url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/878a50934b3b4adc85218e46af40f77d/data', 
		src: '/images/pdf/Control-Monuments.png'
	},
	{ 
		type: 'pdfMaps', 
		name: 'Future Landuse', 
		url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a432bc22115d4bb48893ab4e65a1cf2b/data', 
		src: '/images/pdf/Future-Landuse.png'  
	},
	{ 
		type: 'pdfMaps', 
		name: 'Hike & Bike Trails', 
		url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c580d8564c324c3982e3cd91be7056a3/data', 
		src: '/images/pdf/Hike-Bike-Trails.png'  
	},
	{ 
		type: 'pdfMaps', 
		name: 'E.T.J.', 
		url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/48e428e63b6f451b9b58e1a8c14efe23/data', 
		src: '/images/pdf/ETJ.png' 
	},
	{ 
		type: 'pdfMaps', 
		name: 'Planned Developments', 
		url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cf38bef2ed614d07bd278e806b84ab39/data', 
		src: '/images/pdf/Planned-Developments.png'
	},
	{ 
		type: 'pdfMaps', 
		name: 'Thoroughfares Map', 
		url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2378452606ac4c0f940ec6c4e20e82ec/data', 
		src: '/images/pdf/Thoroughfares.png'  
	},
	{ 
		type: 'pdfMaps',
		 name: 'Zoning Districts', 
		 url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/84a02175a8fc495ca1314ecaac4394ea/data', 
		 src: '/images/pdf/Zoning-Districts.png'   
		},
]

export function getItems(type) {
  return items.filter((item) => item.type === type)
}
