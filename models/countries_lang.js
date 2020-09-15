/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('countries_lang', {
		countries_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		country_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		language_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		lang_status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		}
	}, {
		sequelize,
		tableName: 'countries_lang'
	});
};
