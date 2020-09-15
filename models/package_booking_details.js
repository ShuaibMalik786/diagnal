/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_booking_details', {
		booking_id: {
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
		tour: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		best_discount: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		exclusive: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		instant_ticket: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		experience_type: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		attraction: {
			type: 'TINYTEXT',
			allowNull: true
		},
		notify_email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		alternate_email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		inclusions: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		exclusions: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		start_latitude: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		start_longitude: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		start_address1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		start_address2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		start_city_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		start_postal_code: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		start_state: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		start_country_code: {
			type: DataTypes.STRING(3),
			allowNull: true
		},
		end_latitude: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		end_longitude: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		end_address1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		end_address2: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		end_city_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		end_postal_code: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		end_state: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		end_country_code: {
			type: DataTypes.STRING(3),
			allowNull: true
		},
		meeting_point_instruction: {
			type: 'TINYTEXT',
			allowNull: true
		},
		critic_review: {
			type: 'TINYTEXT',
			allowNull: true
		},
		user_review: {
			type: 'TINYTEXT',
			allowNull: true
		},
		min_booking_days: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: 0
		},
		max_booking_days: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: 0
		},
		min_quantity: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: 0
		},
		max_quantity: {
			type: DataTypes.INTEGER(5),
			allowNull: true
		},
		is_cod: {
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
		},
		sequence: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'package_booking_details'
	});
};
