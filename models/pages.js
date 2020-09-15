/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pages', {
		page_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		page_title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		page_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		page_content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		redirect_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		meta_content: {
			type: 'TINYTEXT',
			allowNull: false
		},
		meta_keyword: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		meta_title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		meta_description: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		admin_user_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'pages'
	});
};
