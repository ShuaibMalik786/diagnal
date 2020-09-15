/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mt_bus_master', {
		bus_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		bus_number: {
			type: DataTypes.STRING(14),
			allowNull: false
		},
		merchant_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		contact_person: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		contact_number: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		is_ac: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		},
		is_sleeper: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		},
		created_by: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		updated_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		sequelize,
		tableName: 'mt_bus_master'
	});
};
