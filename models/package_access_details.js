/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_access_details', {
		access_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		package_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			unique: true
		},
		identification_card: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		identification_val: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		allowed_member: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		height_feet: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		height_inchaes: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		age_restriction: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		min_age: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		max_age: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		allowed_age_group: {
			type: DataTypes.INTEGER(1),
			allowNull: true
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
		tableName: 'package_access_details'
	});
};
