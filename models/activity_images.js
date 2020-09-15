/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('activity_images', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		activity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		upload_type: {
			type: DataTypes.ENUM('image','video'),
			allowNull: true
		},
		content_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		description: {
			type: 'TINYTEXT',
			allowNull: true
		},
		filename: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mime_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		file_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		video_filename: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		alt_image_description: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'activity_images'
	});
};
