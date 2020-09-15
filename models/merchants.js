/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('merchants', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		partner_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		supplier_id: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		password: {
			type: DataTypes.STRING(60),
			allowNull: true,
			unique: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		telephone: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		company_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		tier: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: 1
		},
		company_logo: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		logo: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		site_id: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		},
		admin_user_id: {
			type: DataTypes.STRING(100),
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
		tableName: 'merchants'
	});
};
