/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('supplier_products', {
		product_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		supplier_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		code: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		product_url: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		status: {
			type: DataTypes.ENUM('pending','submitted','approved','rejected'),
			allowNull: true,
			defaultValue: "pending"
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		long_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ticket_class: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING(3),
			allowNull: true
		},
		tax: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		hasManagedCapacity: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		start_date: {
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
		},
		booking_method: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		notify_by_email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		is_voucher_attached: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		is_barcode_required: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		is_supplier_orderid_attached: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		qrbarcode: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		api_response: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		prcode_response: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'supplier_products'
	});
};
