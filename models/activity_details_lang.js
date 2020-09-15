/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('activity_details_lang', {
		activity_details_lang_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		activity_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'foriegn key in activity_details table'
		},
		language_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'foriegn key in language table',
			references: {
				model: {
					tableName: 'language',
				},
				key: 'language_id'
			}
		},
		name: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		neighborhood: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		address: {
			type: 'TINYTEXT',
			allowNull: true
		},
		venue_location: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		confirmation: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		insider_tips: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		calltoaction: {
			type: 'TINYTEXT',
			allowNull: true
		},
		reviews: {
			type: 'TINYTEXT',
			allowNull: true
		},
		venue_direction: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		activity_highlights: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		whatToExpect: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		activity_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		activity_additional_info: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		activity_more_description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		refund_cancel_policy: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		ticket_date_type: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		print_show_policy: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		ticket_voucher_rule: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		transport_option: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		persons_allowed: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		available_language: {
			type: DataTypes.STRING(350),
			allowNull: true
		},
		how_to_use: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		meet_up_info: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		activity_terms: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		activity_faq: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		lang_status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1,
			comment: '1=active,0=inactive'
		},
		slug: {
			type: DataTypes.STRING(250),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'activity_details_lang'
	});
};
