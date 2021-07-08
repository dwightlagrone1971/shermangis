import { createStore } from 'vuex'


const store = createStore({

	state: () => ({
		menuItems: [
				{ name: 'About', to: '/about' },
				{ name: 'Address Request Form', to: '/addressrequest'},
				{ name: 'Featured', to: '/' },
				{ name: 'GIS Downloads', to: '/gisdownload' },
				{ name: 'Internal Web Maps', to: '/internal' },
				{ name: 'PDF Maps', to: '/pdfmaps' },
		],
		items: [
			{ id: 1, component: 'featured', name: 'ALL-IN-ONE', url: 'https://cityofsherman.maps.arcgis.com/apps/PublicInformation/index.html?appid=b9b1bfd6bec643aeaa4d6c5ad17a0388' },
			{ id: 2, component: 'featured', name: 'Residential Dashboard', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626' }
		],
	}),


	mutations: {},
	actions: {},
	modules: {},
	getters: {}
})

export default store
