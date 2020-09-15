/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shopper_cart', {
		shopper_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		package_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false
		},
		web_price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		cost_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		list_price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING(5),
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		adult: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		children: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		total_participants: {
			type: DataTypes.INTEGER(2),
			allowNull: true
		},
		discount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		offer_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		cart_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		tracking_url: {
			type: DataTypes.STRING(255),
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
		booking_activity_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		booking_activity_time: {
			type: DataTypes.TIME,
			allowNull: true
		},
		adult_activity_count: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		children_activity_count: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		booking_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		product_code: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		product_id: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		supplier_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		transfer_type: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 0,
			comment: '0 => Without transfer, 1=> Share transfer, 2 => Private transfer'
		},
		partner_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		txn_id: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		affiliate_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		shopper_cart_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		booking_activity_time_full_format: {
			type: 'TINYTEXT',
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'shopper_cart'
	});
};
