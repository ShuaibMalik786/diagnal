/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('merchant_voucher_details', {
		vid: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		package_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		merchant_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		booking_id: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		shopper_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		transaction_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		voucher_code: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		ttd_voucher_code: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		voucher_status: {
			type: DataTypes.ENUM('a','c','r'),
			allowNull: true
		},
		voucher_redemption_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		voucher_assigned_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		voucher_created_date: {
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
		tableName: 'merchant_voucher_details'
	});
};
