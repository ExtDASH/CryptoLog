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
		coinData: {},
		userCoin: [],
		PRICES: [],
	},
	watch: {
		userSel: function(){
			this.getCoinData()
		}
	},
	created: function(){
		$.get('https://min-api.cryptocompare.com/data/all/coinlist', function(obj){
			// console.log(obj.Data)
			// console.log(obj.Data)
			for (var item in obj.Data){
				// console.log(obj.Data[item])
				switch (item){
					case "LTC":
						console.log("found");
						app.coins.push(obj.Data[item].CoinName)
						app.fsyms.push(obj.Data[item].Symbol)
						app.largeData.push(obj.Data[item])
						break;
					case "BTC":
						console.log("found");
						app.coins.push(obj.Data[item].CoinName)
						app.fsyms.push(obj.Data[item].Symbol)
						app.largeData.push(obj.Data[item])
						break;
					case "XRP":
						console.log("found");
						app.coins.push(obj.Data[item].CoinName)
						app.fsyms.push(obj.Data[item].Symbol)
						app.largeData.push(obj.Data[item])
						break;
					case "XMR":
						console.log("found");
						app.coins.push(obj.Data[item].CoinName)
						app.fsyms.push(obj.Data[item].Symbol)
						app.largeData.push(obj.Data[item])
						break;
					case "DASH":
						console.log("found");
						app.coins.push(obj.Data[item].CoinName)
						app.fsyms.push(obj.Data[item].Symbol)
						app.largeData.push(obj.Data[item])
						break;
					case "DOGE":
						console.log("found");
						app.coins.push(obj.Data[item].CoinName)
						app.fsyms.push(obj.Data[item].Symbol)
						app.largeData.push(obj.Data[item])
						break;
					case "XLM":
						console.log("found");
						app.coins.push(obj.Data[item].CoinName)
						app.fsyms.push(obj.Data[item].Symbol)
						app.largeData.push(obj.Data[item])
						break;
				}
				 // || "BTC" || "ETH" || "XRP" || "XMR" || "DASH" || "DOGE" || "XLM"
				// if (item === "LTC"){
					// app.coins.push(obj.Data[item].CoinName)
					// app.fsyms.push(obj.Data[item].Symbol)
					// app.largeData.push(obj.Data[item])
					// console.log("found")
				// }
				// if(app.coins.length >= 5)
				// 	break
			}
		})
	
},
	methods: {
		selection: function(item){
			this.userSel = []
			this.userSel.push(item)
			
		},

		getCoinData: function(){
			$.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.userSel[0]}&tsyms=USD,EUR,JPY,BTC,XRP`, function(obj){
				// I think i'm going to have to put all of this data into an array or something to get it to display...
				
				app.coinData = {}
				app.coinData = obj.DISPLAY[Object.keys(obj.DISPLAY)[0]]
				console.log(app.coinData.USD[Object.keys(app.coinData.USD)[3]])

//Initializing

				app.PRICES = []

//Adding

				app.PRICES.push(app.coinData.USD.PRICE)
				app.PRICES.push(app.coinData.EUR.PRICE)
				app.PRICES.push(app.coinData.JPY.PRICE)
				app.PRICES.push(app.coinData.BTC.PRICE)
				app.PRICES.push(app.coinData.XRP.PRICE)


			})
		},
	},
})


export default app

