/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('traveler', {
		traveler_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		firstname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		lastname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mobile_no: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		country_code: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		country_dial_code: {
			type: DataTypes.STRING(6),
			allowNull: true
		},
		pickup_address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		special_request: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		order_id: {
			type: DataTypes.INTEGER(10),
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
		shopper_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'traveler'
	});
};
