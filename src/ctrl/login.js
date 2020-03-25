const conexao = require('../data/conexao');

module.exports = {
	async create(req, res) {
		const { id } = req.body;

		const ong = await conexao('ongs').where('ongID', id).select('ongNome').first();

		if (!ong) {
			return res.status(401).json({ error: 'Ong não existe!' });
		}
		return res.json(ong);
	},
};

