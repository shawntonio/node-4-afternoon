const swag = require('../models/swag');

module.exports = {
	add(req, res) {
		const {id} = req.params
		const {user} = req.session

		const inCart = user.cart.find(item => {
			return item.id === +id
		})
		if(inCart) res.status(200).send(user)
		else {
			const item = swag.find(item => item.id === +id)
			user.cart.push(item)
			user.total += item.price
			res.status(200).send(user)
		}
	},
	delete(req, res) {
		const {id} = req.params
		const {user} = req.session
		const index = user.cart.findIndex(item => item.id === +id)
		user.total -= user.cart[index].price
		user.cart.splice(index, 1)
		res.status(200).send(user)
	},
	checkout(req, res) {
		const {user} = req.session
		user.cart = []
		user.total = 0
		res.status(200).send(user)
	}
}