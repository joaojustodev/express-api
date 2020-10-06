import knex from "knex";
import { dbConfig } from "../config/database";


const db = knex(dbConfig);


export { db };