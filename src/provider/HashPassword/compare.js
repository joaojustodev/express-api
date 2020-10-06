import { compare } from "bcrypt";


async function comparePassword(data,encrypted) {
      try {

      const pass = await compare(data, encrypted);

      if(pass) {
        return pass;
      }

      throw new Error("Password invalid");
      
        
      } catch (error) {
        if(error) {
          throw new Error(error);
        }
      }
}

export default comparePassword;

