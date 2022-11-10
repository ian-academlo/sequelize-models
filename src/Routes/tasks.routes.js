const { Router } = require("express");
const { getTasksByUserId } = require("../Controllers/tasks.controllers");

const router = Router();

// obtener tareas por user id
router.get("/tasks/:userId", getTasksByUserId);

// crear tarea --> una tarea esta asociada a un usuario --> ua tarea esta asociada --> categorias

// actualizar tarea

// eliminar tarea

module.exports = router;
