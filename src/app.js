const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");
const userRoutes = require("./Routes/users.routes");
const tasksRoutes = require("./Routes/tasks.routes");
const authRoutes = require("./Routes/auth.routes");
const morgan = require("morgan");
const handleError = require("./middlewares/error");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT || 8000; // undefined

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res, next) => {
  res.status(200).json({ messge: "ok" });
  next();
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", tasksRoutes);
app.use("/api/v1", authRoutes);

app.use(handleError);

app.listen(PORT, () => console.log("Servidor corriendo en el puerto" + PORT));

// si quieres crear un middleware que atienda a todas las rutas
// debemos hacer un app.use al inicio

// nuevo@gmail.com --> no me veré
// nuevo1@gmail.com --> no me veré
