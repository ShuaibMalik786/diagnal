/* jshint indent: 1 */
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

let categories = sequelize.define(
  "categories",
  {
    cg_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    cg_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cg_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    thumb_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cg_imageurl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    admin_user_id: {
      type: DataTypes.STRING(100),
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
    site_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: 0,
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
    tableName: "categories",
  }
);

module.exports = categories;
