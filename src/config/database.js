import path from "path";

const prod = process.env.NODE_ENV === "production";

let dbConfig;

if (!prod) {
  dbConfig = {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "..", "database", "database.sqlite")
    },
    migrations: {
      directory: path.resolve(__dirname, "..", "database", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "..", "database", "seeds")
    },
    useNullAsDefault: true
  };
} else {
  dbConfig = {
    client: "postgres",
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS
    },
    migrations: {
      directory: path.resolve(__dirname, "..", "database", "migrations"),
      tableName: "knex_migrations"
    },
    seeds: {
      directory: path.resolve(__dirname, "..", "database", "seeds")
    },
    useNullAsDefault: true
  };
}

export { dbConfig };
