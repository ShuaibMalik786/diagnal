/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('transactions', {
		transaction_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		order_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		shopper_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		package_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		activity_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		merchant_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		web_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		list_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		cost_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		currency: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		adult: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		children: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		total_participants: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		booking_activity_date: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: "1970-01-02 00:00:00"
		},
		booking_activity_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		adult_activity_count: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		children_activity_count: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		transaction_state: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		transaction_reverse: {
			type: DataTypes.STRING(1),
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		product_code: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		product_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		ticketNumber: {
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
		supplier_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		partner_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		supplierOrders_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		booking_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		supplier_purchase_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		eventId: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		eventName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		eventStart: {
			type: DataTypes.DATE,
			allowNull: true
		},
		eventEnd: {
			type: DataTypes.DATE,
			allowNull: true
		},
		hasManagedCapacity: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		pdf_filename: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		supplier_booking_id: {
			type: DataTypes.STRING(255),
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
		sale_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: 'amount including vat paid by customer (USD)'
		},
		vat_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: 'vat amount paid by customer (USD)'
		},
		purchase_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: 'amount paid to supplier (USD)'
		},
		purchase_vat_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: 'Vat amount applied on purchase amount (in USD))'
		},
		actual_purchase_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: 'actual amount paid to supplier'
		},
		actual_purchase_vat_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: 'actual vat amount appied on purchase'
		},
		actual_purchase_currency: {
			type: DataTypes.STRING(6),
			allowNull: true,
			comment: 'currency in which purchase has been made from supplier'
		},
		paid_to_supplier_status: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: true,
			defaultValue: "N",
			comment: 'Y=paid, N=not paid'
		},
		supplier_order_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 2,
			comment: '0=open/not ordered, 1=order in progress, 2=order completed, 3=canceled or refunded'
		},
		ticket_view_count: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: 0
		},
		ticket_download_count: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: 0
		},
		admin_id: {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: 'admin who is ordering or ordered manual booking'
		},
		booking_response: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'transactions'
	});
};
