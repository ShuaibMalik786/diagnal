/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('merchant_invoice_details', {
		invoice_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		merchant_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		invoice_no: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		merchant_invoice_no: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		transaction_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		invoice_amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		package_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		invoice_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		voucher_code: {
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
		}
	}, {
		sequelize,
		tableName: 'merchant_invoice_details'
	});
};
