import CRUDService from "../services/CRUDService.js";

// Home page
const getHomePage = (req, res) => {
  return res.render("index", { title: "Home Page 🚀" });
};

// Form thêm mới user
const getCRUD = (req, res) => {
  return res.render("crud", { title: "Create User" });
};

// Xử lý thêm mới user
const postCRUD = async (req, res) => {
  try {
    await CRUDService.createNewUser(req.body);
    return res.redirect("/get-crud");
  } catch (error) {
    console.error("❌ Error creating user:", error);
    return res.status(500).send("Something went wrong!");
  }
};

// Hiển thị danh sách user
const displayGetCRUD = async (req, res) => {
  try {
    const data = await CRUDService.getAllUser();
    return res.render("users/findAllUser", { dataTable: data });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return res.status(500).send("Something went wrong!");
  }
};

// Trang edit user
const getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (!userId) return res.redirect("/get-crud");

  try {
    const userData = await CRUDService.getUserInfoById(userId);
    console.log("👉 User fetched:", userData); // debug log
    if (userData) {
      return res.render("users/updateUser", { user: userData });
    } else {
      return res.status(404).send("User not found ❌");
    }
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    return res.status(500).send("Something went wrong!");
  }
};

// Update user
const putCRUD = async (req, res) => {
  try {
    await CRUDService.updateUserData(req.body);
    return res.redirect("/get-crud");
  } catch (error) {
    console.error("❌ Error updating user:", error);
    return res.status(500).send("Something went wrong!");
  }
};

// Delete user
const deleteCRUD = async (req, res) => {
  const id = req.query.id;
  try {
    if (id) {
      await CRUDService.deleteUserById(id);
    }
    return res.redirect("/get-crud");
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    return res.status(500).send("Something went wrong!");
  }
};

export default {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
