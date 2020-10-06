import { db } from "../../database/connection"


async function findUsers() {
  try {
    const user = await db("users")

    return user;
    
  } catch (error) {
    if(error) {
       throw new Error(error)
    }
  }
}

export default findUsers;