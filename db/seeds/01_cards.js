
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {mana: 10, attack: 10, health: 10, description: 'lkjaslfjl'},
        {mana: 20, attack: 20, health: 20, description: 'lkjadsfdfslfjl'},
        {mana: 30, attack: 30, health: 00, description: 'lkjasdfdflfjl'},
      ]);
    });
};



==========================

module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "travel",
        host: "localhost"

      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
