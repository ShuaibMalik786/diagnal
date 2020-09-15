/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('city_mapping', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		map_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		map_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		city_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		citycode: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city_name: {
			type: DataTypes.STRING(255),
			allowNull: false
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
		tableName: 'city_mapping'
	});
};
