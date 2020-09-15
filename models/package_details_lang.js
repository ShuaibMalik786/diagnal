/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_details_lang', {
		package_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		package_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
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
		package_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		package_details: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		package_description: {
			type: 'TINYTEXT',
			allowNull: true
		},
		package_terms_conditions: {
			type: 'TINYTEXT',
			allowNull: true
		},
		package_more_details: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		highlights: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		saet_chart_details: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		lang_status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		}
	}, {
		sequelize,
		tableName: 'package_details_lang'
	});
};
