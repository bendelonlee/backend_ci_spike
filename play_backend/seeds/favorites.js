
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        knex('table_name').insert({ "id": 1, "name": "We Will Rock You", "artist_name": "Queen", "genre": "Rock", "rating": 88 })
      ]);
    });
};
