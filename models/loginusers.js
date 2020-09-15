/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('loginusers', {
		login_userid: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		password: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(500),
			allowNull: true,
			unique: true
		},
		hashEmail: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		userby: {
			type: DataTypes.ENUM('subscribe','login'),
			allowNull: true,
			defaultValue: "login"
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'loginusers'
	});
};
