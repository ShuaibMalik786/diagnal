/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shopper_address', {
		shopper_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		nickname: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		title: {
			type: DataTypes.STRING(4),
			allowNull: true
		},
		firstname: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		middlename: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		lastname: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		faxno: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		landmark: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		state: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		zipcode: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(500),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		hashEmail: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		image_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		token_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		remember_me: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		affiliate_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		txn_id: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		txn_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		isGuest: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 0
		},
		guest_email: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		uuid: {
			type: DataTypes.STRING(40),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'shopper_address'
	});
};
