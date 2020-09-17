/* jshint indent: 1 */
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

let package_price_details = sequelize.define(
  "package_price_details",
  {
    price_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    package_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true,
    },
    currency: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    vat_required: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    bast_cashback: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    best_cashback_type: {
      type: DataTypes.ENUM("fixed", "percentage"),
      allowNull: true,
    },
    group_discount_type: {
      type: DataTypes.ENUM("fixed", "percentage"),
      allowNull: true,
    },
    group_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    free_allowed: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    default_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.0,
    },
    default_group_price_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: "package_price_details",
  }
);

module.exports = package_price_details;
