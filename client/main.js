import api from './helper/api.js'

const app = new Vue({
	el: "#app",
	data: {
		drawer: false,
		fab: false,
		coins: [],
		exchanges: null,
		userFavs: [],
	},
	created: function(){
		$.get('https://min-api.cryptocompare.com/data/all/coinlist', function(obj){
			for (var item in obj.Data){
				app.coins.push(obj.Data[item].FullName)
				if(app.coins.length >= 5)
					break
			}
		})

	},
})


export default app

