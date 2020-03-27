const conexao = require('../data/conexao');
module.exports = {
	async get(req, res) {
		const ongID = req.headers.authorization;

		const incidents = await conexao('incidents')
			.where('ongID', ongID)
			.select('*');
		return res.json(incidents);
	},
};
