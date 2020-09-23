const activity_details = require("../models/activity_details");
const package_details = require("../models/package_details");
const package_group_price_details = require("../models/package_group_price_details");
const package_price_details = require("../models/package_price_details");

associations = () => {
  activity_details.hasMany(package_details, {
    foreignKey: "activity_id",
  });
  package_details.hasOne(package_group_price_details, {
    foreignKey: "package_id",
  });
  package_group_price_details.belongsTo(package_details, {
    foreignKey: "package_id",
  });
  package_details.hasOne(package_price_details, {
    foreignKey: "package_id",
  });
  package_price_details.belongsTo(package_details, {
    foreignKey: "package_id",
  });
};

module.exports = associations;
