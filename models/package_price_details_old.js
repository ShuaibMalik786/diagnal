/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_price_details_old', {
		price_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: 0
		},
		package_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		currency: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		list_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		web_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		cost_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		child_list_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		child_web_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		child_cost_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		vat_required: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		bast_cashback: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		best_cashback_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		free_allowed: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		age_category: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		age_value_type: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		minimum_age: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		maximum_age: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		age: {
			type: DataTypes.INTEGER(3),
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
		tableName: 'package_price_details_old'
	});
};
