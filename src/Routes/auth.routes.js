const { Router } = require("express");
const { userLogin } = require("../Controllers/auth.controllers");

const router = Router();

router.post("/auth/login", userLogin);

module.exports = router;
