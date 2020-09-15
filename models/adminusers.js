/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('adminusers', {
		user_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		firstname: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		lastname: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		username: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		accesspermission: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		admin_status: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		is_deleted: {
			type: DataTypes.ENUM('1','0'),
			allowNull: true,
			defaultValue: "0"
		},
		adminuser_code: {
			type: DataTypes.STRING(60),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'adminusers'
	});
};
