import { db } from "../../database/connection"


async function findUser(where, data) {
    const user = await db("users").where(where, data);
    return user 
}

export default findUser;