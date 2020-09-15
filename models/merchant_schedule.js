/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('merchant_schedule', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		logo: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		opening_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		closing_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		monday: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		tuesday: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		wednesday: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		thursday: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		friday: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		satusday: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		sunday: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
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
		tableName: 'merchant_schedule'
	});
};
