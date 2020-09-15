/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('banner_details_lang', {
		banner_details_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		banner_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		language_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		subtitle: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		buttontext: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		lang_status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		}
	}, {
		sequelize,
		tableName: 'banner_details_lang'
	});
};
