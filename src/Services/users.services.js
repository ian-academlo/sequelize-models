// importar el modelo donde estaremos haciendo las consultas
const Address = require("../models/addresses.models");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/tasksCategories.models");
const Tasks = require("../models/tasks.models");
const Users = require("../models/users.models");

class UserServices {
  static async getAll() {
    // select id, username, email from users;
    try {
      const result = await Users.findAll({
        attributes: ["id", "username", "email"],
      }); // select * from users;
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: ["id", "username", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinAddres(id) {
    try {
      const result = await Users.findOne({
        where: { id }, // {id: id}
        attributes: ["id", "username"], // incluyo columnas
        include: {
          model: Address,
          as: "home",
          attributes: {
            exclude: ["id", "user_id", "userId"], // excluyo columnas
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinTasks(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username"],
        include: {
          model: Tasks,
          as: "todos",
          attributes: ["title", "description", "is_complete"],
          include: {
            model: TaskCategories,
            as: "categories",
            attributes: ["category_id"],
            include: {
              model: Categories,
              as: "category",
              attributes: ["name"],
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async add(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updateData, id) {
    try {
      const result = await Users.update(updateData, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
