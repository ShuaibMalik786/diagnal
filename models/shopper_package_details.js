/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shopper_package_details', {
		package_group_price_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		package_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		group_price_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		shopper_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		quantity: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		transaction_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		booking_activity_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		booking_activity_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		ticket_numbers: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ProductCode: {
			type: DataTypes.STRING(132),
			allowNull: true
		},
		product_id: {
			type: DataTypes.INTEGER(11),
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
			comment: 'currency in which purchase has been made'
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
		tableName: 'shopper_package_details'
	});
};
