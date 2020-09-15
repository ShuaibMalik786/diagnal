/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('affiliate_master', {
		affiliate_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		domain: {
			type: 'LONGTEXT',
			allowNull: true
		},
		name: {
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
		}
	}, {
		sequelize,
		tableName: 'affiliate_master'
	});
};
