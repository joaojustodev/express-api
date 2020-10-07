import jwtProvider from "../provider/JWT";

export default async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(401).json({ error: "Authenticate token is required" });
    }

    const splitToken = token.split(" ");
    const [type, schema] = splitToken;

    if (!/^Bearer$/.test(type)) {
      return res.status(401).json({ error: "Token mal formated" });
    }

    const verify = await jwtProvider.verifyToken(schema);

    if (!verify) {
      return res.status(401).json({ error: "Token invalid" });
    }

    next();
  } catch (error) {
    if (error) {
      console.log(error);
      res.status(409).json(error);
    }
  }
};
