/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('categories_lang', {
		categories_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		cg_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'foriegn key in categories table'
		},
		language_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'foriegn key in language table',
			references: {
				model: {
					tableName: 'language',
				},
				key: 'language_id'
			}
		},
		cg_name: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		lang_status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		}
	}, {
		sequelize,
		tableName: 'categories_lang'
	});
};
