/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('section_master', {
		section_master_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		section_code: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		section_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'section_master'
	});
};
