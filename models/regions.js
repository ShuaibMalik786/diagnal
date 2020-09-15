/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('regions', {
		region_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		create_datetime: {
			type: 'LONGTEXT',
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		update_datetime: {
			type: 'LONGTEXT',
			allowNull: true
		},
		sequence: {
			type: DataTypes.INTEGER(11),
			allowNull: true
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
		tableName: 'regions'
	});
};
