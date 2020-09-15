/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('voucher_details', {
		voucher_id: {
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
		status: {
			type: DataTypes.ENUM('created','assigned'),
			allowNull: true
		},
		voucher_price: {
			type: DataTypes.DECIMAL,
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
		tableName: 'voucher_details'
	});
};
