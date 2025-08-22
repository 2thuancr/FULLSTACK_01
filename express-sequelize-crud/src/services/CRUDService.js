// Import models (sequelize-cli sinh ra models/index.js dạng CommonJS)
// Khi import vào ESM thì phải truy cập qua db.default
import * as db from "../../models/index.cjs";

const User = db.default.User;

const createNewUser = async (data) => {
  return await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    address: data.address,
    gender: data.gender === "1" || data.gender === true
  });
};

const getAllUser = async () => {
  return await User.findAll({ raw: true });
};

const getUserInfoById = async (id) => {
  return await User.findOne({ where: { id }, raw: true });
};

const updateUserData = async (data) => {
  await User.update(
    {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
      gender: data.gender === "1" || data.gender === true
    },
    { where: { id: data.id } }
  );
};

const deleteUserById = async (id) => {
  await User.destroy({ where: { id } });
};

export default {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUserData,
  deleteUserById
};
