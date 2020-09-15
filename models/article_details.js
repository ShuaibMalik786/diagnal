/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('article_details', {
		article_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		city_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		slug: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		thumb_image: {
			type: 'LONGTEXT',
			allowNull: true
		},
		large_image: {
			type: 'LONGTEXT',
			allowNull: true
		},
		title: {
			type: 'LONGTEXT',
			allowNull: true
		},
		description: {
			type: 'LONGTEXT',
			allowNull: true
		},
		status: {
			type: 'LONGTEXT',
			allowNull: true
		},
		article_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		admin_user_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'article_details'
	});
};
