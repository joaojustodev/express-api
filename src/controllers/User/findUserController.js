import userRepository from "../../repositories/User";



async function findUserController(req,res) {
  const { id } = req.params;
  try {
      const user = await userRepository.findUser("id", id);

      if(user) {
        res.status(200).json(user);
      }

      throw new Error("User not find");
  } catch (error) {
    if(error) {
      res.status(409).json({error})
    }
  }
}

export default findUserController;