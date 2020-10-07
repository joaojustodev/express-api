import { compare } from "bcrypt";

async function comparePassword (data, encrypted) {
  const pass = await compare(data, encrypted);
  return pass;
}

export default comparePassword;
