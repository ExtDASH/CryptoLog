import api from './helper/api.js'

const app = new Vue({
	el: "#app",
	data: {
		drawer: false,
		fab: false,
		coins: [],
		fsyms: [],
		largeData: [],
		exchanges: null,
		userFavs: [],
		userSel: [],
		coinData: [],
	},
	watch: {
		userSel: function(){
			this.getCoinData()
		}
	},
	created: function(){
		$.get('https://min-api.cryptocompare.com/data/all/coinlist', function(obj){
			for (var item in obj.Data){
				app.coins.push(obj.Data[item].CoinName)
				app.fsyms.push(obj.Data[item].Symbol)
				app.largeData.push(obj.Data[item])
				console.log(app.fsyms)
				if(app.coins.length >= 5)
					break
			}
		})

	},
	methods: {
		selection: function(item){
			this.userSel.push(item)
		},

		getCoinData: function(){
			$.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.userSel[0]}&tsyms=USD,EUR,JPY,BTC,XRP`, function(obj){
				console.log(obj)
			})
		}
	},
})


export default app

