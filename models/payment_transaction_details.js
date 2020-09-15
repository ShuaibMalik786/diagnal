/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('payment_transaction_details', {
		gtdid: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		gid: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		orderid: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		merchanttxnrefid: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		account_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		token_id: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		cardtype: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		cardbin: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		card_expiry: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		currency: {
			type: DataTypes.STRING(5),
			allowNull: true
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		gamount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		requesttxntime: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		gresponsetxntime: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		gresponsecode: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		gresponsemsg: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		gresponseerrormsg: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		gtransactionid: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		grefundid: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		gauthcode: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		transactiondate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		responsedate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		remarks: {
			type: 'TINYTEXT',
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		status: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		is_live: {
			type: DataTypes.ENUM('0','1'),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		sequelize,
		tableName: 'payment_transaction_details'
	});
};
