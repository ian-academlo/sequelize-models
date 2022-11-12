// importamos UserServices
const UserServices = require("../Services/users.services");

// controlador para obtener a todos los usuarios
const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserWithAddres = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinAddres(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserWithTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinTasks(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const result = await UserServices.add(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    const result = await UserServices.update(dataUpdate, id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserWithAddres,
  getUserWithTasks,
  createUser,
  updateUser,
};
