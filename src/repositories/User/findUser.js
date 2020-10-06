import { db } from "../../database/connection"


async function findUser(where, data) {
  try {
    const user = await db("users").where(where, data);

    if(user) {
      return user;
    }

  } catch (error) {
    if(error) {
       throw new Error(error)
    }
  }
}

export default findUser;