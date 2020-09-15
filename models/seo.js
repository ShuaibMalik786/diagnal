/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('seo', {
		seo_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		profile_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		profile_name: {
			type: DataTypes.STRING(100),
			allowNull: true
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
		anchor_key1: {
			type: 'LONGTEXT',
			allowNull: true
		},
		anchor_key2: {
			type: 'LONGTEXT',
			allowNull: true
		},
		meta_content: {
			type: 'LONGTEXT',
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		created_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		updated_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'seo'
	});
};
