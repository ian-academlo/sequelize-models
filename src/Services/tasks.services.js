const Categories = require("../models/categories.models");
const Tasks = require("../models/tasks.models");
const TaskCategories = require("../models/tasksCategories.models");

class TasksServices {
  static async getByUserId(userId) {
    try {
      const result = await Tasks.findAll({
        where: { userId },
        attributes: ["id", "title", "description", "isComplete"],
        include: {
          model: TaskCategories,
          as: "categories",
          attributes: ["categoryId"],
          include: {
            model: Categories,
            as: "category",
            attributes: ["name"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(task, categories) {
    try {
      const taskResult = await Tasks.create(task);
      // devuelve es un objeto con la tarea creada {id, title, description, isComplete, creat, uptade}
      const { id } = taskResult;
      categories.forEach(
        async (category) =>
          await TaskCategories.create({ categoryId: category, taskId: id })
      );
      return taskResult;
    } catch (error) {
      throw error;
    }
  }

  static async updateStatus(id) {
    try {
      const result = await Tasks.update(
        { isComplete: true },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TasksServices;
