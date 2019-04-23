const users = require('../models/users');

let id = 1;

module.exports = {
	login(req, res) {
		const {username, password} = req.body;
		const {user} = req.session;

		const currentUser = users.filter(user => {
			return (user.username === username && user.password === password)
		});
		
		if (currentUser[0]) {
			user.username = username 
			res.status(200).send(user)
		} else {
			res.sendStatus(500)
		}
		
	},

	register(req, res) {
		const {username, password} = req.body;
		const {user} = req.session;
		users.push({
			username,
			password,
			id: id++
		});
		user.username = username;
		res.status(200).send(user)
	},

	signout(req, res) {
		req.session.destroy();
		res.send(req.session)
	},

	getUser(req, res) {
		res.status(200).send(req.session.user)
	}
}