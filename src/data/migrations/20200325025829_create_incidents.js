
exports.up = function (knex) {
	return knex.schema.createTable('incidents', function (table) {
		table.increments('incidentID');
		table.string('incidentTitulo').notNullable();
		table.string('incidentDescricao').notNullable();
		table.decimal('incidentValor').notNullable();
		table.string('ongID').notNullable();
		table.foreign('ongID').references('ongID').inTable('ongs');
	})

};

exports.down = function (knex) {
	return knex.schema.dropTable('incidents');


};
