/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('supplier_payment', {
		supplier_payment_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		supplier_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'foreign key in supplier_details table'
		},
		payment_amount_USD: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			comment: 'amount paid to supplier in USD'
		},
		payment_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			comment: 'actual amount paid to supplier'
		},
		currency: {
			type: DataTypes.STRING(4),
			allowNull: true
		},
		payment_date: {
			type: DataTypes.DATE,
			allowNull: true,
			comment: DataTypes.DATE
		},
		payment_terms: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 2,
			comment: '1=Payment in Advance, 2=Post Paid'
		},
		payment_mode: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			comment: '1=Bank Transfer, 2=Credit Card, 4=Other '
		},
		payment_reference_id: {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: 'reference id got when paid to supplier'
		},
		balance_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			comment: 'remaining amount after payment to the supplier'
		},
		payment_status: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		created_by: {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: 'admin id who added payment'
		}
	}, {
		sequelize,
		tableName: 'supplier_payment'
	});
};
