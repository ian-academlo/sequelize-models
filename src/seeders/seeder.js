const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/users.models");
const Address = require("../models/addresses.models");
const Tasks = require("../models/tasks.models");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/tasksCategories.models");

// arreglos con la información que se va a plantar
initModels();

const users = [
  { username: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
  { username: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234" },
  { username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234" },
];

const addresses = [
  { street: "Buena Vista", number: 157, userId: 1 },
  { street: "benito Juarez", number: 57, userId: 2 },
  { street: "Madero", number: 157, userId: 3 },
];

const tasks = [
  {
    title: "Crear seeders",
    description: "Terminar el archivo para los seeders",
    userId: 1,
  },
  {
    title: "Pasear al perro",
    description: "Darle la vuelta por todo el barrio a firulais",
    userId: 2,
  },
  {
    title: "Tomar dos litros de agua",
    userId: 3,
  },
];

const categories = [
  { name: "personal" }, // 1 . 1, 4, 5
  { name: "escuela" }, // 2
  { name: "salud" }, // 3
  { name: "trabajo" }, // 4
  { name: "hogar" }, // 5
  { name: "deporte" }, // 6
  { name: "ocio" }, // 7
  { name: "financiero" }, // 8
];

const tc = [
  { taskId: 1, categoryId: 1 },
  { taskId: 1, categoryId: 2 },
  { taskId: 1, categoryId: 4 },
  { taskId: 2, categoryId: 1 },
  { taskId: 2, categoryId: 3 },
  { taskId: 2, categoryId: 6 },
  { taskId: 2, categoryId: 7 },
  { taskId: 3, categoryId: 1 },
  { taskId: 3, categoryId: 3 },
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    addresses.forEach((address) => Address.create(address));
  }, 100);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 200);
  setTimeout(() => {
    tasks.forEach((task) => Tasks.create(task));
  }, 300);
  setTimeout(() => {
    tc.forEach((t) => TaskCategories.create(t));
  }, 400);
});
