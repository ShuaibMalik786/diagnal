/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_schedule_details', {
		schedule_id: {
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
		activity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		activity_startdate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		activity_enddate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		activity_type: {
			type: DataTypes.ENUM('open','close'),
			allowNull: true
		},
		activity_on_M: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		activity_on_T: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		activity_on_W: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		activity_on_TH: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		activity_on_F: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		activity_on_S: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		activity_on_SU: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		start_day: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		start_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		end_day: {
			type: DataTypes.STRING(2),
			allowNull: true
		},
		endtime: {
			type: DataTypes.TIME,
			allowNull: true
		},
		duration: {
			type: DataTypes.TIME,
			allowNull: true
		},
		meals: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		dinner: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		lunch: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		pickup: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		pickup_location: {
			type: 'TINYTEXT',
			allowNull: true
		},
		dropoff: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		dropoff_location: {
			type: 'TINYTEXT',
			allowNull: true
		},
		time_slots: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		events: {
			type: 'MEDIUMTEXT',
			allowNull: true
		},
		confirmation: {
			type: 'TINYTEXT',
			allowNull: true
		},
		availability_type: {
			type: DataTypes.STRING(50),
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
		availability_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'package_schedule_details'
	});
};
