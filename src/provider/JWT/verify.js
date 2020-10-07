import dotenv from "dotenv";
import { verify } from "jsonwebtoken";
dotenv.config();

async function verifyToken (token) {
  return await verify(token, process.env.SECRET, (err) => {
    if (err) {
      return false;
    }

    return true;
  });
}

export default verifyToken;
