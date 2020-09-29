const activity_details = require("../models/activity_details");
const categoriesModel = require("../models/categories");
const package_details = require("../models/package_details");
const package_group_price_details = require("../models/package_group_price_details");

module.exports.getCityCategories = async (city_id) => {
  try {
    let categoriesIds = await activity_details.findAll({
      where: {
        city_id: city_id,
        status: 1,
      },
      include: {
        attributes: [],
        model: package_details,
        where: {
          status: 1,
        },
        include: {
          model: package_group_price_details,
          where: {
            status: 1,
          },
        },
      },
      attributes: ["package_details.categoryL1"],
      group: ["package_details.categoryL1"],
      raw: true,
    });

    let cg_id_arr = [];
    categoriesIds.forEach((element) => {
      cg_id_arr.push(element.categoryL1);
    });
    cg_id_arr;

    let category = await categoriesModel.findAll({
      where: {
        cg_id: cg_id_arr,
        status: 1,
      },
      attributes: [
        ["cg_id", "id"],
        ["cg_name", "name"],
      ],
    });

    return category;
  } catch (err) {
    return err;
  }
};
