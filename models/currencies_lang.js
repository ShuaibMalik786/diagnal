/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('currencies_lang', {
		currencies_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		currency_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		language_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		currency_name: {
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
		tableName: 'currencies_lang'
	});
};
