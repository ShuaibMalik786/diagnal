const categoriesModel = require("../models/categories");

module.exports.getCityCategories = async () => {
  try {
    let categories = categoriesModel.findAll();
    return categories;
  } catch (err) {
    return null;
  }
};
