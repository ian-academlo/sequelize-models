const Tasks = require("../models/tasks.models");

class TasksServices {
  static async getByUserId(userId) {
    try {
      const result = await Tasks.findOne({
        where: { userId },
        attributes: ["id", "title", "description", "isComplete"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TasksServices;
