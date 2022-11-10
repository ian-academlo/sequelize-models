const TasksServices = require("../Services/tasks.services");

const getTasksByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await TasksServices.getByUserId(userId);
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "no se pudieron obtener las tareas",
      status: 400,
      errorContent: error,
    });
  }
};

/* 
  {
    task: {idUser, title, description}, 
    categories: [1, 4]
  }
*/

const createTask = async (req, res, next) => {
  try {
    const { task, categories } = req.body;
    const result = await TasksServices.create(task, categories);
    res.status(201).json({ message: "La tarea ha sido creada" });
  } catch (error) {
    next({
      message: "Algo salio mal al crear la tarea",
      status: 400,
      errorContent: error,
    });
  }
};

module.exports = {
  getTasksByUserId,
  createTask,
};
