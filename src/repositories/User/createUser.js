import { db } from "../../database/connection"



async function createUser({name,email,password}) {
  try {
   await db("users").insert({
     name,
     email,
     password
   })  

  } catch (error) {
    if(error) {
       throw new Error(error)
    }
  }
}

export default createUser;