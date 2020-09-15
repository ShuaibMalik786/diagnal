/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('warning', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		warning: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Bitcoin_Address: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Email: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'warning'
	});
};
