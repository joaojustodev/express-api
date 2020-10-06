import { hash } from "bcrypt";


async function hashPassword(password) {
      const pass = await hash(password, 10);

      return pass;
}

export default hashPassword;

