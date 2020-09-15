/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('supplier_payout', {
		supplier_payout_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		invoice_no: {
			type: DataTypes.STRING(75),
			allowNull: true
		},
		invoice_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		supplier_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		product_code: {
			type: DataTypes.STRING(75),
			allowNull: true
		},
		order_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		transaction_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		qty: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		payment_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: 0
		},
		payment_date: {
			type: DataTypes.DATE,
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
		tableName: 'supplier_payout'
	});
};
