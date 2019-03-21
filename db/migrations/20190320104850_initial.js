
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('favorites', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('artist_name');
      table.string('genre');
      table.integer('rating');

      table.timestamps(true, true);
    }
  ])
}

exports.down = function(knex, Promise) {
  knex.schema.dropTable('favorites')
}
