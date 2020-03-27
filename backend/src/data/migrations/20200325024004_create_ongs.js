
exports.up = function (knex) {
	return knex.schema.createTable('ongs', function(table){
		table.string('ongID').primary();
		table.string('ongNome').notNullable();
		table.string('ongEmail').notNullable();
		table.string('ongWhatsapp').notNullable();
		table.string('ongCidade').notNullable();
		table.string('ongUf', 2).notNullable();

	})
};

exports.down = function (knex) {
	return knex.schema.dropTable('ongs');
};
