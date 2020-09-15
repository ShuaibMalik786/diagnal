/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('config', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		config_name: {
			type: DataTypes.STRING(50),
			allowNull: true,
			unique: true
		},
		description: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		value: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			comment: '(static_label: 1=sync require,0=sync not require)'
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		sequelize,
		tableName: 'config'
	});
};
