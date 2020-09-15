/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('static_label', {
		static_label_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		section_master_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		label_code: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		label_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'static_label'
	});
};
