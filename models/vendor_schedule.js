/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vendor_schedule', {
		m_schedule_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		merchant_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		startdate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		enddate: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		open_on_M: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		open_on_T: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		open_on_W: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		open_on_TH: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		open_on_F: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		open_on_S: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		open_on_SU: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		closing_time_for_M: {
			type: DataTypes.TIME,
			allowNull: true
		},
		opening_time_for_M: {
			type: DataTypes.TIME,
			allowNull: true
		},
		opening_time_for_T: {
			type: DataTypes.TIME,
			allowNull: true
		},
		closing_time_for_T: {
			type: DataTypes.TIME,
			allowNull: true
		},
		opening_time_for_W: {
			type: DataTypes.TIME,
			allowNull: true
		},
		closing_time_for_W: {
			type: DataTypes.TIME,
			allowNull: true
		},
		opening_time_for_TH: {
			type: DataTypes.TIME,
			allowNull: true
		},
		closing_time_for_TH: {
			type: DataTypes.TIME,
			allowNull: true
		},
		opening_time_for_F: {
			type: DataTypes.TIME,
			allowNull: true
		},
		closing_time_for_F: {
			type: DataTypes.TIME,
			allowNull: true
		},
		opening_time_for_S: {
			type: DataTypes.TIME,
			allowNull: true
		},
		closing_time_for_S: {
			type: DataTypes.TIME,
			allowNull: true
		},
		opening_time_for_SU: {
			type: DataTypes.TIME,
			allowNull: true
		},
		closing_time_for_SU: {
			type: DataTypes.TIME,
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
		tableName: 'vendor_schedule'
	});
};
