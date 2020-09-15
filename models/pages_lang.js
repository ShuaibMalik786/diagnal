/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pages_lang', {
		pages_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		page_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		language_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: {
					tableName: 'language',
				},
				key: 'language_id'
			}
		},
		page_content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		lang_status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		}
	}, {
		sequelize,
		tableName: 'pages_lang'
	});
};
