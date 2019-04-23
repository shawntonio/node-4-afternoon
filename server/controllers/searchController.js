const swag = require('../models/swag');

module.exports = {
	search(req, res) {
		const {category} = req.query
		const filteredSwag = swag.filter(item => item.category === category)
		filteredSwag[0] ? res.status(200).send(filteredSwag)
		: res.status(200).send(swag)
	}
}