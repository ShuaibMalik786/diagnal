/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_group_price_details', {
		group_price_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		package_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		partner_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		supplier_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		age_group_name: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0,
			comment: '0=disabled, 1=enabled, 2=deleted'
		},
		start_age: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		end_age: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		start_height: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		end_height: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		original_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		discount_type: {
			type: DataTypes.ENUM('fixed','percentage'),
			allowNull: true
		},
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		discounted_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		product_code: {
			type: DataTypes.STRING(132),
			allowNull: true
		},
		product_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		transfer_type: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 0,
			comment: '0 => Without transfer, 1=> Share transfer, 2 => Private transfer'
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		more_description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		is_required_for_booking: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		hasManagedCapacity: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		sequence: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		min_quantity: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: 0
		},
		max_quantity: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: 0
		},
		default_quantity: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: 0
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
		tableName: 'package_group_price_details'
	});
};
