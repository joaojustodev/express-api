import userRepository from "../../repositories/User";
import hashProvider from "../../provider/HashPassword";
import jwtProvider from "../../provider/JWT";

async function loginSessionController (req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(401).json({ error: "All fields is required", fields: "email and password" });
    }

    const [user] = await userRepository.findUser("email", email);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!await hashProvider.compare(password, user.password)) {
      return res.status(401).json({ error: "Password incorrect" });
    }

    const token = await jwtProvider.generateToken({ id: user.id, name: user.name, email: user.email });

    res.status(200).json({ token: token });
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(409).json(error);
    }
  }
}

export default loginSessionController;
