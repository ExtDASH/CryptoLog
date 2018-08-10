

const coinList = () => {
	$.get('http://localhost:3000/data/coins', function(obj){
		app.data.coins = obj
	})
}

export default {
	coinList
}