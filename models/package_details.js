/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_details', {
		package_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		activity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		merchant_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		partner_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		supplier_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		transfer_type_available: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 0,
			comment: '1 => Without transfer, 2=> Share transfer, 3 => Private transfer (bitwise operation) '
		},
		package_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		package_details: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		package_description: {
			type: 'TINYTEXT',
			allowNull: true
		},
		package_terms_conditions: {
			type: 'TINYTEXT',
			allowNull: true
		},
		package_more_details: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		tag_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0,
			comment: '0=disabled, 1=enabled, 2=deleted'
		},
		admin_user_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		is_affiliate: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		affiliate_url: {
			type: 'TINYTEXT',
			allowNull: true
		},
		popular_category: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		categoryL1: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		categoryL2: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		categorySVG: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		seat_info: {
			type: 'TINYTEXT',
			allowNull: true
		},
		saet_chart_details: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		highlights: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		product_code: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		sequence: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: 10
		},
		created_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		updated_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'package_details'
	});
};
