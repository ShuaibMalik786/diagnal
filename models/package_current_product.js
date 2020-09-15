/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_current_product', {
		package_current_product_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true
		},
		group_price_id: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		package_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		partner_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		supplier_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		product_code: {
			type: DataTypes.STRING(132),
			allowNull: true
		},
		isActive: {
			type: DataTypes.INTEGER(1),
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
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		sequelize,
		tableName: 'package_current_product'
	});
};
