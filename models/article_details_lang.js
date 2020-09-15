/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('article_details_lang', {
		article_details_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		article_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		language_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		lang_status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		}
	}, {
		sequelize,
		tableName: 'article_details_lang'
	});
};
