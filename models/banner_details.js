/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('banner_details', {
		banner_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		type: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			comment: '1 => Main Banner, 2=> Travel Inspiration , 3 => Above Top Destinition'
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		subtitle: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		heading: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		image_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		alt_image_description: {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: 'in case of travel inspiration banner'
		},
		short_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		redirectlink: {
			type: DataTypes.STRING(300),
			allowNull: true,
			comment: 'in case of travel inspiration banner'
		},
		buttontext: {
			type: 'LONGTEXT',
			allowNull: true
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false
		},
		created_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		updated_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		main_banner: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		},
		travel_inspiration: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
		},
		above_top_destination: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 0
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
		tableName: 'banner_details'
	});
};
