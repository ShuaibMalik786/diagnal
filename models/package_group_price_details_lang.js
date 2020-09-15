/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('package_group_price_details_lang', {
		group_price_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		group_price_id: {
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
		age_group_name: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		more_description: {
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
		tableName: 'package_group_price_details_lang'
	});
};
