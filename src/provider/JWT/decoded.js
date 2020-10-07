import dotenv from "dotenv";
import { verify } from "jsonwebtoken";
dotenv.config();

async function decodedToken (token) {
  return await verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return err;
    }

    return decoded;
  });
}

export default decodedToken;
