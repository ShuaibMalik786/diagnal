/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('affiliate_access_details', {
		aff_access_id: {
			autoIncrement: true,
			type: DataTypes.DOUBLE,
			allowNull: false,
			primaryKey: true
		},
		activity_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		package_id: {
			type: 'LONGTEXT',
			allowNull: true
		},
		remote_ip: {
			type: 'LONGTEXT',
			allowNull: true
		},
		server_details: {
			type: 'LONGTEXT',
			allowNull: true
		},
		cookie_details: {
			type: 'LONGTEXT',
			allowNull: true
		},
		create_datetime: {
			type: 'LONGTEXT',
			allowNull: true
		},
		update_datetime: {
			type: 'LONGTEXT',
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'affiliate_access_details'
	});
};
