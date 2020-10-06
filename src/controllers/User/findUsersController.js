import userRepository from "../../repositories/User";



async function findUsersController(req,res) {
  try {
      const user = await userRepository.findUsers();

      if(user) {
        res.status(200).json(user);
      }

      throw new Error("Users not found");
  } catch (error) {
    if(error) {
      res.status(409).json({error})
    }
  }
}

export default findUsersController;