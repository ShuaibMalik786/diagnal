/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mt_routes_master', {
		route_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		start_city: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		dest_city: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		},
		created_by: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		updated_by: {
			type: DataTypes.STRING(100),
			allowNull: true
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
		tableName: 'mt_routes_master'
	});
};
