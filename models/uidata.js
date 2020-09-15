/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('uidata', {
		uidata_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		key: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		value: {
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
		}
	}, {
		sequelize,
		tableName: 'uidata'
	});
};
