/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('activity_details', {
		activity_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		merchant_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		neighborhood: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address: {
			type: 'TINYTEXT',
			allowNull: false
		},
		city_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		google_map_link: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		venue_location: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		location_map: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0,
			comment: '0=disabled, 1=enabled, 2=deleted'
		},
		admin_user_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		activity_images: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		activity_videos: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		cashtip: {
			type: DataTypes.INTEGER(1),
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
		video_thumbnail_image_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		activity_highlights: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		what_to_expect_header: {
			type: DataTypes.STRING(255),
			allowNull: true,
			comment: 'header for what to expect'
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
			type: DataTypes.STRING(255),
			allowNull: true
		},
		refund_cancel_policy_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		ticket_date_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ticket_date_type_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		print_show_policy: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		print_show_policy_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		ticket_voucher_rule: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		ticket_voucher_rule_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		transport_option: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		transport_option_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		persons_allowed: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		persons_allowed_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		activity_duration: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		activity_duration_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		available_language: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		available_language_status: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: 0
		},
		how_to_use: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		activity_map_image: {
			type: DataTypes.STRING(255),
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
		rank: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		meet_up_info: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		slug: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		activity_terms: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		activity_faq: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		activity_warning_message: {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: 'warning message for the activity'
		},
		toggle_recommended_tag: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		toggle_offer_percentage: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		average_rating: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: 0
		},
		total_rating_count: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: 0
		},
		activity_sequence: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			comment: 'sequence for city page'
		},
		availablility: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 1
		},
		created_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		updated_by: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'activity_details'
	});
};
