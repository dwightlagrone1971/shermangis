import { createStore } from 'vuex'


const store = createStore({

	state: () => ({
		currentItems: [],
		items: [
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
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/f909fc649ae743d1bef601b312dbb402_4/explore?location=33.616807%2C-96.619061%2C11.64", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/578a14c48acf4e2180ef9da620bce3de/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Annexations', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/6e78e7f6bd0848e69b25933eb1e00b30_0/explore?location=33.619177%2C-96.633220%2C11.94", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/74ba8fecf1b84bd8b1e620a10e24b5a7/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Building Footprints', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/f93cbef937cf4699b07cc1d1cba8ff2e_1/explore?location=33.563302%2C-96.632317%2C11.28", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5cd58e81f3b8426a9cc73a5a4a8565cd/data' 
			},
			{ 
				type: 'downloads', 
				name: 'City Limits & ETJ', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/366f7cc2fc1643f0b2b95547114f5e52_0/explore?location=33.391420%2C-96.664945%2C9.35", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/081ce62d38384951913b999ee19100e8/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Control Monuments',
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/33f8223fb4164f3699e89e8a249410dc_9/explore?location=0.001696%2C-96.619955%2C0.00", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/3ff037997655469bb544e8e2bf3e3376/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Council Districts', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/2f5e02cf74b04e98b3eff4048663447b_10/explore?location=33.619177%2C-96.633228%2C11.94", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/74da76b159304654a471e8f765713254/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Development Projects', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/557fa5e6ca5b4eebba1e185c3f6e5bef/explore?location=33.622567%2C-96.616768%2C12.11", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/fbbb9af29bf54d799b59799f4407774b/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Future Landuse', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/864ba455145b4db493872497a8d645a7_18/explore?location=33.620037%2C-96.633152%2C11.88", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2ebc81f25d2940bcaf06e0a659ae9fa4/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Parcels', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/9f7b57fe77dd4c8d8b9de4e6917c57d2_19/explore?location=0.001695%2C-96.633224%2C0.00", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e8cdaa8990e64289873bbe4dadee3007/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Parks & Recreation', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/0d896e8dd1bf49ff9e6f2b94ef34c1d6_24/explore?location=33.643646%2C-96.621673%2C13.15", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c1c6bd0ffcef4c0f9dd1ec011b98f8aa/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Planned Developments', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/f702eafd15d444bc856bddb7c51221e0_19/explore?location=33.619679%2C-96.631264%2C11.50", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/6be18d2c4a814d0583ff249ce2982e48/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Roads Centerlines', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/3ef48cf3f2384dbb9938c2ea34cc519d_2/explore?location=33.547992%2C-96.573677%2C10.92", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/58c5c062a33c4bf8bf8f27ffe675077b/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Thoroughfares', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/aaff07c9524445ea958ec57b0431ac96_69/explore?location=33.609510%2C-96.633352%2C11.82", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/b34f574a643e43048a7b53809e938b2b/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Traffic Counts', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/bc592fd6fadf4dbaa12c21c0a983deb0_0/explore?location=33.629473%2C-96.612578%2C12.42", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/aa909e100e814fd9bc5d5fe1c2c391d7/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Zip Codes', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/5cc8e7043e6e49af80808385c2f27dbd_43/explore?location=30.382542%2C-100.127720%2C6.00", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/20762c5c64d64324bad877ef92c436c1/data' 
			},
			{ 
				type: 'downloads', 
				name: 'Zoning Districts', 
				url: "https://sherman-open-data-cityofsherman.hub.arcgis.com/datasets/410884a5a05249c3894290e57bf9562f_2/explore?location=0.001695%2C-96.633228%2C0.00", 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7cbf38b7ed244639b0d0a28bdad76eb9/data' 
			},
            /* External Page */
			{ 
				type: 'external', 
				name: 'All-In-One', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/cb19b06c606f4ce1bd9e96b8817d4e07',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cc892bfe9583420084f8c027135d343f/data'
			},
			{ 
				type: 'external', 
				name: 'Annexations', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/2848ecc1229d454fa962392967548752',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e50942cc436b413cbbc94dc52300f6fb/data'
			},
			{ 
				type: 'external', 
				name: 'CIP Projects', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/818c88c6c1264590810cb91a0db2c24a',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c42c56982bf344a38405c3cfc48d8c9e/data'
			},
			{ 
				type: 'external', 
				name: 'Council Districts', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/cd464982fa70480189bae064a5901916',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/eb9618ce75314413ad4819f8d3f1b202/data'
			},
			{ 
				type: 'external', 
				name: 'Development Projects', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/5628948f1c1a464da61cc0bf966badf0',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/16158630feed43a69128a160bc0131c4/data' 
			},
			{ 
				type: 'external', 
				name: 'Emergency Sirens', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/a3685004829d4465abd34e067f30c5fb',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/eb30a431e23446ed943f0c93bcd93ef7/data'
			},
			{ 
				type: 'external', 
				name: 'Flood Zones', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/6a2aedbb87a64b459e5eb2bdac3f4503',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7c1e45f0c48e4c2f83389664b5e992d6/data'
			},
			{ 
				type: 'external', 
				name: 'Future Landuse', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/f408802be3f04be2a2c699a033a878b3',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/531ff0b1479c4374881df228ed83e7dc/data' 
			},
			{ 
				type: 'external', 
				name: 'Garbage Collection', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=000839d23a014bd791bb19d4667f177c',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cfa6684c762648a3b93fcf69d032eb99/data'
			},			
			{ 
				type: 'external', 
				name: 'Grayson Appraisal District', 
				url: 'https://gis.bisclient.com/graysoncad/',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/269784b4af714265948976b6cbedf570/data' 
			},
			{
		
				type: 'external', 
				name: 'Parks & Recreation', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/af44c4110ca24cc28ead1a6feac24a54',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/179f8f73da83415d8a3cebe636476972/data' 
			},
			{ 
				type: 'external', 
				name: 'Planning & Zoning', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/da82c92929e34750a26d95d5f8738cc6',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/ac7639fa550d45df9b796b389a7751f2/data'
			},
			{ 
				type: 'external', 
				name: 'Project Site', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/7ef89fd885e04d8e82d4ff2195a94b94',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c42c56982bf344a38405c3cfc48d8c9e/data'
			},
			{ 
				type: 'external', 
				name: 'Sex Offender Restricted Areas', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/7797ab097a38493da51128f124d91370',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/f80338cd1cee44e2b559282d62047286/data' 
			},
			{ 
				type: 'external', 
				name: 'Sherman Schools (SISD)', 
				url: 'https://portal.metrostudygis.com/arcgis/apps/webappviewer/index.html?id=f7265613b8f64149bbce677ed9c7befd',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5d9f689b640a4cac92a8972433a0b544/data' 
			},
			{ 
				type: 'external', 
				name: 'Thoroughfares', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/3b28c17a8cac472ab8ff18b0576cacfe',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/f77f25745f94400e82177fad3d5ac5fc/data' 
			},
			{ 
				type: 'external', 
				name: 'Zoning Districts', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/1e77f1f404ae4ff58043b6c88cdf1fd1',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/790f3a30644d4b659bedfcf315df8fd2/data'
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
				name: 'At Risk Population', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/e0c48bed80c34c78bbb240d02d36f072/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/00c1786cbf47479784287b241970b3e0/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Childhood & Female Equity', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/e0c48bed80c34c78bbb240d02d36f072/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7ae275a27e874646b6660c8ba2e913db/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Community Change Snapshot', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/63a1abdc2c92481ca7f15e69651f6b3a/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/82e75eedd1464ebfb7290d59430bdfd3/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Community Profile', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/f7d1e808f4884e53bbdb066fccd2e0f0/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/3085b197a2fa4df39b36440742de8f8f/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Commute Profile', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/f7d1e808f4884e53bbdb066fccd2e0f0/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/69a2a1b1201a494b988a85fc8a50fde7/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Demography Summary', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/7bcb90c26f6646e0bc582972c7ced355/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/31326c735f244dcdb4a5257fbcf26a45/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Employment Overview', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/03a3ef5669a8432c9e6b9d5250c1e072/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/22a84af73e524aa286b58afd136ac94c/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Healthcare Statistics', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/89eba46f3e6d4e9bb6f82239029b8b4e/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/48fc3d03ab974b6dac5f1bced4a57b3a/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Key Facts', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/53c27765695d458aa3f316053e730391/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a1aada4022ec4e3aaffb8e3f2335b554/data' 
			},
			{ 
				type: 'infographics', 
				name: 'Population Trends', 
				url: 'https://sherman-open-data-cityofsherman.hub.arcgis.com/documents/4bc7fe0d4bf24dbe80a7aca1b5b77eb4/explore', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8a54bee160e94c709947404e1ea75e2f/data' 
			},
			/* Internal Page */
			// { 
			// 	type: 'internal', 
			// 	name: 'Code Incidents (2024)', 
			// 	url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=83d4528b6352402d9ce262c45a07e11a', 
			// 	src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/6b6acbc0d6ea4ab0aed0c1904b63ca13/data' 
			// },
			// { 
			// 	type: 'internal', 
			// 	name: 'Code Incidents (All)', 
			// 	url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=2e9d062f4c6e4cac9ec10024ebc8eb7b', 
			// 	src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/ce806504650d479ea357396b70e8e1b2/data' 
			// },
			// { 
			// 	type: 'internal', 
			// 	name: 'Code Simple Map', 
			// 	url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=97013d9eff694c059406229d9df88b37', 
			// 	src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/1b98e0e38dda4d448b29a669a2a7f614/data' 
			// },
			{ 
				type: 'internal', 
				name: 'Address Map', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/f575843e8b1140e0ac69149ca266dc5f', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5ad2c7752fe24741970ea42a860814ae/data', 
			},
			{ 
				type: 'internal', 
				name: 'Ambulance Calls', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/9a005e56e03e46aca282179adac59671', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/1b98e0e38dda4d448b29a669a2a7f614/data'  
			},
			// { 
			// 	type: 'internal', 
			// 	name: 'Flushing Locations', 
			// 	url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=cd171035c62b4db98271bafaf78f5758', 
			// 	src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5ad2c7752fe24741970ea42a860814ae/data' 
			// },
			{ 
				type: 'internal', 
				name: 'Hydrant Maintenance', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/0156ab1a620d49a0b052814da3be563a', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/18e187b03d1e4e97a2f9566318a89c8c/data' 
			},
			// { 
			// 	type: 'internal', 
			// 	name: 'Mowing Map', 
			// 	url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/df7265d42f0f442797d421dc7816ae97', 
			// 	src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e4cd5a78b1934aa1b386dbccbac66344/data'
			// },
			{ 
				type: 'internal', 
				name: 'Storm Water Fees', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/dashboards/789607a5260b4fe5a0d4fe2ecef8c24b', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8f1c813391004107a02eb625241c99c0/data',
			},
			{ 
				type: 'internal', 
				name: 'Water, Sewer & Drainage Map', 
				url: 'https://cityofsherman.maps.arcgis.com/apps/instant/sidebar/index.html?appid=42207f3341864351a12bdf0d886196ae',
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/99d6540bb1274654956af567686abc35/data' 
				
				
			},
			{ 
				// type: 'internal', 
				// name: 'UB Accounts', 
				// url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=6ff28e8cc3fa4cd69d80b9077eec3f1c', 
				// src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8f1c813391004107a02eb625241c99c0/data'
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
				to: '/downloads',
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
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c748392cb0124cf98222a26f95daf8b0/data' 
			},
			{ 
				type: 'pdfMaps', 
				name: 'Control Monuments', 
				url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/878a50934b3b4adc85218e46af40f77d/data', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/0ecc757b3f5f4cbf9d26d264a24443ae/data'  
			},
			{ 
				type: 'pdfMaps', 
				name: 'Future Landuse', 
				url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/a432bc22115d4bb48893ab4e65a1cf2b/data', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/257717d2eba9424aa3df820dc57615f0/data'  
			},
			{ 
				type: 'pdfMaps', 
				name: 'Hike & Bike Trails', 
				url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/c580d8564c324c3982e3cd91be7056a3/data', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/1ee7bb659d0f4e4ea1a3837a715390ab/data'  
			},
			{ 
				type: 'pdfMaps', 
				name: 'E.T.J.', 
				url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/48e428e63b6f451b9b58e1a8c14efe23/data', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/b1c890f763aa43ceb2e682fcc44f2283/data'  
			},
			{ 
				type: 'pdfMaps', 
				name: 'Planned Developments', 
				url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/cf38bef2ed614d07bd278e806b84ab39/data', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/6831194a3fea4f91b03702b9cbc136e7/data'  
			},
			//{ 
			//	type: 'pdfMaps', 
			//	name: 'Sherman Schools', 
			//	url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/098b94114bec4031a3638978be32874e/data', 
			//	src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/60aeaf41c1714393b6fbab4aee3ebd72/data'  
			//},
			{ 
				type: 'pdfMaps', 
				name: 'Thoroughfares Map', 
				url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2378452606ac4c0f940ec6c4e20e82ec/data', 
				src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/31711687dc6c4aedade6e761797da3e6/data'  
			},
			{ 
				type: 'pdfMaps',
				 name: 'Zoning Districts', 
				 url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/84a02175a8fc495ca1314ecaac4394ea/data', 
				 src: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/322de32646e24375954bc88f88db2096/data'  
				},
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
