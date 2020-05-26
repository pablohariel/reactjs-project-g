
exports.up = function(knex) {
    return knex.schema.createTable('games', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('developer').notNullable();
        table.string('release_date').notNullable();
        table.string('link_steam').notNullable();
        table.string('link_torrent').notNullable();
        table.string('img_url').notNullable();
        table.string('genre').notNullable();
        table.string('infos');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('games');
};
