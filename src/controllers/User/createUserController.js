import hashProvider from "../../provider/HashPassword";
import userRepository from "../../repositories/User";


async function createUserController(req,res) {
  const {name,email,password} = req.body;
  try {
   if(!name || !email || !password) {
     return res.status(404).json({error: "All fields is required", fields: "name, email and password"})
   }

   const checkIfUserAlreadyExist = await userRepository.findUser("email", email);

   if(checkIfUserAlreadyExist.length) {
      return res.status(403).json({error: "User already exist"})
   }
   
   const passwordHash = await  hashProvider.hash(password)

   const newUser =  {
     name,
     email,
     password: passwordHash
   }


   await userRepository.createUser(newUser);

   

   res.status(201).send();

  } catch (error) {
    if(error) {
       res.status(409).send(error)
    }
  }
}

export default createUserController;