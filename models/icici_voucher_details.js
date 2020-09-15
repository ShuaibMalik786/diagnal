/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('icici_voucher_details', {
		vid: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		client_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		voucher_code: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mobileno: {
			type: DataTypes.INTEGER(12),
			allowNull: true
		},
		client_voucher_code: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		voucher_status: {
			type: DataTypes.ENUM('created','assigned'),
			allowNull: true
		},
		voucher_expiry_date: {
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
		tableName: 'icici_voucher_details'
	});
};
