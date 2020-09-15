/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('desc_details', {
		desc_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		foreign_key_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		table_name: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		sequelize,
		tableName: 'desc_details'
	});
};
