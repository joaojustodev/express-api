// Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/database.sqlite'
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault: true
  },
  production: {
    client: 'postgres',
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault: true
  }

};
