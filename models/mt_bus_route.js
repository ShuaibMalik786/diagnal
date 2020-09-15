/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mt_bus_route', {
		bus_route_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		bus_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		route_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		time: {
			type: DataTypes.TIME,
			allowNull: false
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
		tableName: 'mt_bus_route'
	});
};
