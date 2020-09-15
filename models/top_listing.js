/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('top_listing', {
		top_listing_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		type: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		category: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'top_listing'
	});
};
