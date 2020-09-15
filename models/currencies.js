/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('currencies', {
		currency_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		currency_name: {
			type: 'LONGTEXT',
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		currency_code: {
			type: 'LONGTEXT',
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
		tableName: 'currencies'
	});
};
