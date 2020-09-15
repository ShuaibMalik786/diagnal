/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('top_listing_details', {
		top_listing_details_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		top_listing_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		reference_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		sequence: {
			type: DataTypes.INTEGER(4),
			allowNull: true
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
		tableName: 'top_listing_details'
	});
};
