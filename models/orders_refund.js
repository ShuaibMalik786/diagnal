/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('orders_refund', {
		order_refund_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		order_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		transaction_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: true
		},
		booking_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		refund_type: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		token_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		response_code: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		response_message: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		remarks: {
			type: 'TINYTEXT',
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
		affiliate_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		txn_id: {
			type: DataTypes.STRING(32),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'orders_refund'
	});
};
