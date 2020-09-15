/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('orders', {
		order_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		shopper_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		order_total: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		currency: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		user_currency: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		order_approval_state: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		order_payment_status: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		order_state: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		approval_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		booking_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		booking_status: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		supplierOrders_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		ticketNumber: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		booking_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		pay_token: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		pay_remarks: {
			type: 'TINYTEXT',
			allowNull: true
		},
		VAT_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		shopper_country_code: {
			type: DataTypes.STRING(3),
			allowNull: true
		},
		shopper_access_ip: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		cancel_reason: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		canceled_by: {
			type: DataTypes.STRING(60),
			allowNull: true,
			comment: 'reflects admin id if cancelled by the admin'
		},
		coupon_code: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		coupon_discount_amount: {
			type: DataTypes.DECIMAL,
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
		},
		is_live: {
			type: DataTypes.ENUM('1','0'),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		sequelize,
		tableName: 'orders'
	});
};
