/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('partner_details', {
		partner_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		partner_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		contact_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		agent_code: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		whatsapp: {
			type: DataTypes.INTEGER(13),
			allowNull: true
		},
		skype_id: {
			type: DataTypes.STRING(60),
			allowNull: true
		},
		mobile: {
			type: DataTypes.INTEGER(13),
			allowNull: true
		},
		number_ext: {
			type: DataTypes.INTEGER(13),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		role: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		additional_info: {
			type: DataTypes.TEXT,
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
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		groups: {
			type: DataTypes.ENUM('standard','priority'),
			allowNull: true,
			defaultValue: "standard"
		}
	}, {
		sequelize,
		tableName: 'partner_details'
	});
};
