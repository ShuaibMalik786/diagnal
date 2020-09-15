/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('static_label_lang', {
		static_label_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		static_label_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: {
					tableName: 'static_label',
				},
				key: 'static_label_id'
			}
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
		label_text: {
			type: DataTypes.STRING(500),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'static_label_lang',
		hasTrigger: true
	});
};
