/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('supplier_qrbarcodes', {
		qrbarcode_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		supplier_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		codetype: {
			type: DataTypes.ENUM('qrcode','barcode'),
			allowNull: true
		},
		barcode: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		barcode_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		barcode_image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.ENUM('created','assigned','expired','refunded','returned','error'),
			allowNull: true,
			defaultValue: "created"
		},
		admin_user_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		expiry_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		issue_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		threshold: {
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
		tableName: 'supplier_qrbarcodes'
	});
};
