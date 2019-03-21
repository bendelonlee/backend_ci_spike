
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('favorites', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('artist_name');
      table.string('genre');
      table.integer('rating');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('favorites_playlists', function(table){
      table.increments('id').primary();
      table.integer('favorite_id').references('favorites.id');
      table.integer('playlist_id').references('playlists.id');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('playlists', function(table){
      table.increments('id').primary();
      table.string('title');

      table.timestamps(true, true);
    })
  ]);
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('favorites_playlists'),
    knex.schema.dropTable('playlists')
  ]);
}
