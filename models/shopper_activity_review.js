/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shopper_activity_review', {
		shopper_activity_review_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		activity_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		shopper_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		rating: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		review: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		is_approved: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 0,
			comment: '0=pending, 1=Approved, 2=rejected'
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'shopper_activity_review'
	});
};
