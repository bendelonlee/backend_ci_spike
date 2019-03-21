exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('favorites').insert({ "id": 1, "name": "We Will Rock You", "artist_name": "Queen", "genre": "Rock", "rating": 88 }),
        knex('favorites').insert({ "id": 2, "name": "Bohemian Rhapsody", "artist_name": "Queen", "genre": "Rock", "rating": 66 })
      ]);
    });
};
