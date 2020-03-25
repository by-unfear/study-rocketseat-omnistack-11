// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      // filename: './src/data/db.sqllite3',
      database: 'omni11',
      user:     'root',
      password: 'teste'
    },
    migrations :{
      directory: './src/data/migrations'
    },
    // useNullAsDefault : true //sqllite3
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
  }

};
