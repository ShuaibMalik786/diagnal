/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cities_lang', {
		cities_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		city_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'foriegn key in cities table'
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
		displayname: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		first_block_text: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		second_block_text: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		slug: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		lang_status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		}
	}, {
		sequelize,
		tableName: 'cities_lang'
	});
};
