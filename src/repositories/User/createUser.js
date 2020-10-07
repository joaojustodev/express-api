import { db } from "../../database/connection"



async function createUser({name,email,password}) {
  await db("users").insert({
    name,
    email,
    password
  })  
}

export default createUser;