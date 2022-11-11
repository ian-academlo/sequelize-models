const AuthService = require("../Services/auth.services");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await AuthService.login(email, password);
    // email, username, id
    const userData = {
      email: data.result.email,
      username: data.result.username,
      id: data.result.id,
    };
    const token = jwt.sign(userData, "todoemelo", { algorithm: "HS512" });
    userData.token = token;
    res.json(userData);
  } catch (error) {
    next({
      message: "Algo salio mal con la autenticación",
      status: 401,
      errorContent: error,
    });
  }
};

module.exports = {
  userLogin,
};
