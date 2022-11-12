const { Router } = require("express");
const {
  getTasksByUserId,
  createTask,
  completeTask,
} = require("../Controllers/tasks.controllers");
const authVerification = require("../middlewares/auth.middleware");

const router = Router();

// obtener tareas por user id
router.get("/tasks/:userId", authVerification, getTasksByUserId);

// crear tarea --> una tarea esta asociada a un usuario --> ua tarea esta asociada --> categorias
router.post("/tasks", authVerification, createTask);

// actualizar tarea
router.patch("/tasks/:id", authVerification, completeTask);

// eliminar tarea

module.exports = router;

// el uso de las contraseñas
// un paso previo va a ser encriptar las contraseñas
// para que ni nosotros ni el sistema tenga ese dato
// bcrypt --> "lñdkfladsfj" -> 98475kjrbt23498ydhvc2348 // no hay manera de decodificarlo
// // comparar una contraseña con la contraseña encriptada
// que no se expone la contraseña en ni un momento

// instalar bcrypr
// vamos a beforeCreate --> Antes de que creemos al usuario vamos a encriptar la contraseña
// y luego guardarla en la base de datos
