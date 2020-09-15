/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('supplier_reconcilation', {
		reconcilation_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		supplier_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'supplier_id '
		},
		credit_value: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			comment: 'credit value for the day'
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0,
			comment: '0= reconciled 1= confirmed , 2= rejected'
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		sequelize,
		tableName: 'supplier_reconcilation'
	});
};
