import dotenv from "dotenv"
dotenv.config();
import jwt from "jsonwebtoken";


async function generateToken(payload) {
  const token = await jwt.sign(payload, process.env.SECRET, {algorithm: process.env.ALGORITHM, expiresIn: 86400})
  return token;
}

export default generateToken;