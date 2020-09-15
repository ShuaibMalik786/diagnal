/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('payments', {
		payment_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		item_number: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		txn_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		payment_gross: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		currency_code: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		payment_status: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'payments'
	});
};
