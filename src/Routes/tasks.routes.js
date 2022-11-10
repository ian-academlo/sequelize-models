const { Router } = require("express");
const {
  getTasksByUserId,
  createTask,
  completeTask,
} = require("../Controllers/tasks.controllers");

const router = Router();

// obtener tareas por user id
router.get("/tasks/:userId", getTasksByUserId);

// crear tarea --> una tarea esta asociada a un usuario --> ua tarea esta asociada --> categorias
router.post("/tasks", createTask);

// actualizar tarea
router.patch("/tasks/:id", completeTask);

// eliminar tarea

module.exports = router;

// crear una ruta para que un usuario pueda crear un tarea
// idUser, categories, title, description,
// body petición información para el POST
/* 
  {
    task: {idUser, title, description}, 
    categories: [1, 4]
  }
*/
