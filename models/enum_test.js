/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('enum_test', {
		enum_fld: {
			type: DataTypes.ENUM('Yes','No'),
			allowNull: true,
			defaultValue: "No"
		}
	}, {
		sequelize,
		tableName: 'enum_test'
	});
};
