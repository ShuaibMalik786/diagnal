/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('api_booking_log', {
		transaction_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		order_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		booking_request: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		booking_response: {
			type: DataTypes.TEXT,
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
		tableName: 'api_booking_log'
	});
};
