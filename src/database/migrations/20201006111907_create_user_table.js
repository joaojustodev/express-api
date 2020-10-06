const uuid = require("uuidv4")
const prod = process.env.NODE_ENV === "production"


exports.up = function(knex) {
  knex.raw('create extension if not exists "uuid-ossp"')
  return knex.schema.createTable("users",  table => {
    table.uuid("id").primary().notNullable().unique().defaultTo(prod ? knex.raw('uuid_generate_v4()') : uuid.uuid());
    table.string("name", 60).notNullable();
    table.string("email", 32).notNullable().unique();
    table.string("password", 32).notNullable();
  })
  
};

exports.down = function(knex) {
  knex.raw('drop extension if exists "uuid-ossp"')
  return knex.schema.dropTable("users")
};
