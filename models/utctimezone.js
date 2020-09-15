/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('utctimezone', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		timeZone: {
			type: 'LONGTEXT',
			allowNull: true
		},
		utcOffset: {
			type: 'LONGTEXT',
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'utctimezone'
	});
};
