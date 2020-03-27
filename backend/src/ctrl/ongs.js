const crypto = require('crypto');
const conexao = require('../data/conexao');

module.exports = {
	async lst(req, res) {
		const ongs = await conexao('ongs').select('*');
		return res.json(ongs);
	},
	async get(req, res) {
		return res.json(['get']);
	},
	async add(req, res) {
		const { nome, email, whatsapp, cidade, uf } = req.body;
		const id = crypto.randomBytes(4).toString('HEX');
		await conexao('ongs').insert({
			ongID: id,
			ongNome: nome,
			ongEmail: email,
			ongWhatsapp: whatsapp,
			ongCidade: cidade,
			ongUf: uf
		});
		return res.json({ id });
	},
	async upt(req, res) {
		return res.json(['upt']);
	},
	async del(req, res) {
		return res.json(['del']);
	}
};

