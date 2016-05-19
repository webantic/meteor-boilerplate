// { "path" : "imports/api/__apiName__/__apiName__.js" }
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

__modelVarName__ = new Mongo.Collection('__apiName__');

var __apiName__Schema = new SimpleSchema({
	title: {
		type: String
	},
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
	}
});

__modelVarName__.attachSchema(__apiName__Schema);

export const __modelVarName__;
