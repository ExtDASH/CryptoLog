import api from './helper/api.js'

const main = new Vue({
	el: "#app",
	data: {
		drawer: false,
		fab: false,
		coins: {},
		exchanges: null,
		userFavs: [],
	},
	created: function(){
		$.get('https://min-api.cryptocompare.com/data/all/coinlist',function(obj){
			this.coins = obj.Data
			console.log(this.coins)
		})
	},
})


export default main

