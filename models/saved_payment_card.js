/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saved_payment_card', {
		saved_payment_card_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true
		},
		card_number: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		token_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		expiry_date: {
			type: DataTypes.STRING(4),
			allowNull: true
		},
		card_holder_name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		payment_option: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		shopper_id: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'saved_payment_card'
	});
};
