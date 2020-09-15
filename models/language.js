/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('language', {
		language_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		language_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		language_code: {
			type: DataTypes.STRING(5),
			allowNull: false,
			unique: true
		},
		flag_image: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		language_direction: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0,
			comment: '0=left, 1=right'
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 1,
			comment: '0=disabled, 1=enable, 2=deleted'
		}
	}, {
		sequelize,
		tableName: 'language'
	});
};
