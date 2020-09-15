/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('currency_exchange_rate', {
		currency_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		currency: {
			type: DataTypes.CHAR(4),
			allowNull: true,
			defaultValue: "AED"
		},
		currency_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		rate: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		admin_user_id: {
			type: DataTypes.STRING(100),
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
		tableName: 'currency_exchange_rate'
	});
};
