const jwt = require("jsonwebtoken");

const authVerification = (req, res, next) => {
  try {
    const { userId } = req.params;
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    const isValid = jwt.verify(token, "todoemelo", { algorithm: "HS512" });
    const { id } = isValid;
    if (isValid) {
      next();
    }
  } catch (error) {
    next({
      message: "No se pudo verificar el token",
      status: 400,
      errorContent: error,
    });
  }
};

module.exports = authVerification;
