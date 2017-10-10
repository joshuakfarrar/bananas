const bcrypt = require('bcrypt');

exports.seed = async (knex, Promise) => {
  let hash = await bcrypt.hash('password', 10);

  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'joshua@sent1nel.me', password: hash, name: 'Joshua'}
      ]);
    });
};
