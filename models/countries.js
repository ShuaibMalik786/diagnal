/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('countries', {
		country_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		code: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		region_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ispopular: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		country_code: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		default_applied_vat: {
			type: DataTypes.STRING(30),
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
		created_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		updated_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'countries'
	});
};
