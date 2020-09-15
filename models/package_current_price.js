/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_current_price', {
		package_current_price_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		group_price_id: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		package_id: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		discounted_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		original_price: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: 0.00
		},
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			defaultValue: 0.00
		},
		discount_type: {
			type: DataTypes.ENUM('fixed','percentage'),
			allowNull: true,
			defaultValue: "fixed"
		},
		effective_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false
		},
		status: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: "1"
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		sequelize,
		tableName: 'package_current_price'
	});
};
