/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('supplier_payment_transaction', {
		supplier_payment_transaction_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		supplier_payment_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'foreign key in supplier_payment table'
		},
		transaction_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'foreign key in transactions table'
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0,
			comment: 'flag to check if the transaction has been considered for billing'
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'supplier_payment_transaction'
	});
};
