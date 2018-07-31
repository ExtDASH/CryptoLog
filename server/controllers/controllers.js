const request = require("request")
const bodyParser = require('body-parser')
module.exports = {

	getCoins: (req, res, next) => {
		request('https://min-api.cryptocompare.com/data/all/coinlist', function(error, response, data){
			console.log('error: ', error)
			console.log('statusCode:', response && response.statusCode)
			var obj = JSON.parse(data)
			res.send(obj)
			})
		},

	}