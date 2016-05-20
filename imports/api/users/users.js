import { SimpleSchema } from 'meteor/aldeed:simple-schema';

var usersSchema = new SimpleSchema({
	createdAt: {
		type: Date,
		label: 'Created Date',
		denyUpdate: true,
		autoValue: function () {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {
					$setOnInsert: new Date()
				};
			}
		}
	},
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	status: {
		type: Object,
		optional: true,
		blackbox: true
	},
	profile: {
		type: Object,
		optional: true,
		blackbox: true
	},
	emails: {
		type: Object,
		optional: true,
		blackbox: true
	},
	username: {
		type: String,
		optional: true
	},
	roles: {
    type: Object,
    optional: true,
    blackbox: true
	}
});

Meteor.users.attachSchema(usersSchema);
