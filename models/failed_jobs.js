/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('failed_jobs', {
		id: {
			autoIncrement: true,
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		connection: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		queue: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		payload: {
			type: 'LONGTEXT',
			allowNull: false
		},
		exception: {
			type: 'LONGTEXT',
			allowNull: false
		},
		failed_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		}
	}, {
		sequelize,
		tableName: 'failed_jobs'
	});
};
