import { Meteor } from 'meteor/meteor';

Meteor.users.helpers({
	getId() {
		if (this instanceof Array) {
			return this.map( item => item._id );
		} else {
			return this._id;
		}
	},

});
