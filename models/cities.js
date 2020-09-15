/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "cities",
    {
      city_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      country_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        comment: "foriegn key in countries table",
      },
      citycode: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      displayname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      image_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      largeimageurl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      alt_image_description: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      timezoneoffset: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      ispopular: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 0,
        comment: "0=not popular, 1=popular",
      },
      phonenumber: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      smsnumber: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      rank: {
        type: DataTypes.INTEGER(5),
        allowNull: true,
      },
      first_block_text: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      second_block_text: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn("current_timestamp"),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 1,
        comment: "0=disabled, 1=enabled, 2=deleted",
      },
      created_by: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.STRING(100),
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
      tableName: "cities",
      // timestamps: false,
    }
  );
};
