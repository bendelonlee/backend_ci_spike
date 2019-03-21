// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/play_backend',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://obyieuwmhdgsrh:253ab3b3a1861f889ca89b4d26637b790199b0b9d784c49aee04b45ba8d03e9b@ec2-184-73-216-48.compute-1.amazonaws.com:5432/d96poj97d1vg7q',
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    }
  }
};
