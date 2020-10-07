import { db } from "../../database/connection"


async function findUsers() {
  const user = await db("users")
  return user;
}

export default findUsers;