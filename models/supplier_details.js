/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('supplier_details', {
		supplier_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		partner_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		supplier_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		code: {
			type: DataTypes.STRING(64),
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
		tier: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		groups: {
			type: DataTypes.ENUM('standard','priority'),
			allowNull: true,
			defaultValue: "standard"
		},
		booking_notification_email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ""
		},
		daily_summary_email: {
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
		notification_per_booking: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		required_daily_summary: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		require_b2b_booking: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		supplier_portal_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		unique_key: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		to_check_availabiliy: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		supplier_payment_terms: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 2,
			comment: '1=Payment in Advance, 2=Post Paid,'
		},
		is_vat_applied: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0,
			comment: 'is vat applicable for the supplier products'
		},
		vat_percent: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			comment: 'vat percent for the products'
		}
	}, {
		sequelize,
		tableName: 'supplier_details'
	});
};
