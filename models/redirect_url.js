/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('redirect_url', {
		redirect_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		old_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		new_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		slug: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		reference_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'redirect_url'
	});
};
