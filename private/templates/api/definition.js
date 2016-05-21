// { "path" : "imports/api/__apiName__/__apiName__.js" }
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

__modelVarName__ = new Mongo.Collection('__apiName__');

// // Uncomment for offline db access
// if (Meteor.isCordova) {
// 	Ground.Collection(__modelVarName__);
// 	// On Cordova, we need to subscribe to any data we _might_
// 	// need while using the app, in case we lose our internet
// 	// connectivity. If we're not on Cordova, template-level
// 	// subscriptions are used instead which just grab the relevent data.
// 	// (see - http://rafaelquintanilha.com/offline-app-with-meteor-and-cordova/)
// 	Meteor.subscribe('__apiName__');
// }

var __apiName__Schema = new SimpleSchema({
	title: {
		type: String
	},
	createdAt: {
		type: Date,
		label: 'Created Date',
		denyUpdate: true,
		autoValue() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {
					$setOnInsert: new Date()
				};
			}
		}
	},
	updatedAt: {
		type: Date,
		label: 'Updated Date',
		autoValue() {
			return new Date();
		}
	}
});

__modelVarName__.attachSchema(__apiName__Schema);

export const __modelVarName__;
