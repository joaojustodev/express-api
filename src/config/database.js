const prod = process.env.NODE_ENV === "production";

let dbConfig;

if(!prod) {
  dbconfig = {
    client: 'sqlite3',
    connection: {
      filename: './database.sqlite'
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true
  }

} else {
  dbConfig = {
    client: 'postgres',
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    },
    migrations: {
      directory: "./migrations",
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true
  } 
}

export { dbConfig };

