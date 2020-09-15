/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('categories', {
		cg_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		cg_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		cg_desc: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		thumb_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cg_imageurl: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		admin_user_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		site_id: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		}
	}, {
		sequelize,
		tableName: 'categories'
	});
};
