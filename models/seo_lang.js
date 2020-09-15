/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('seo_lang', {
		seo_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		seo_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		language_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		page_title: {
			type: 'LONGTEXT',
			allowNull: true
		},
		page_Heading: {
			type: 'LONGTEXT',
			allowNull: true
		},
		page_sub_Heading: {
			type: 'LONGTEXT',
			allowNull: true
		},
		meta_description: {
			type: 'LONGTEXT',
			allowNull: true
		},
		meta_keyword: {
			type: 'LONGTEXT',
			allowNull: true
		},
		image_alt_text: {
			type: 'LONGTEXT',
			allowNull: true
		},
		meta_content: {
			type: 'LONGTEXT',
			allowNull: true
		},
		lang_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: 1
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		sequelize,
		tableName: 'seo_lang'
	});
};
