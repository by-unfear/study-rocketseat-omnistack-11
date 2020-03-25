const conexao = require('../data/conexao');
module.exports = {
	async lst(req, res) {
		const incidents = await conexao('incidents').select('*');
		return res.json(incidents);
	},
	async get(req, res) {
		return res.json(['get']);
	},
	async add(req, res) {
		const { titulo, descricao, valor } = req.body;
		const ongID = req.headers.authorization;
		const [incidentID] = await conexao('incidents').insert({
			incidentTitulo: titulo,
			incidentDescricao: descricao,
			incidentValor: valor,
			ongID: ongID
		});
		return res.json({ incidentID });
	},
	async upt(req, res) {
		return res.json(['upt']);
	},
	async del(req, res) {
		const { id } = req.params;
		const ongID = req.headers.authorization;
		const incident = await conexao('incidents')
			.where('incidentID', id)
			.select('ongID')
			.first();

		if (incident.ongID !== ongID) {
			return res.status(401).json({error: 'Não autorizado!'});
		}

		await conexao('incidents').where('incidentID', id).delete();

		return res.status(204).send();
	}
};
