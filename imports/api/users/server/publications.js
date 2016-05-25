import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';

Meteor.publish('users', function() {
	var self = this,
		cursorHandle,
		cursor = Meteor.users.find();

	cursorHandle = cursor.observeChanges({
		added(id, fields) {
			self.added('users', id, fields);
		},
		changed(id, fields) {
			self.changed('users', id, fields);
		},
		removed(id) {
			self.removed('users', id);
		},
	});

	self.ready();

	self.onStop(() => {
		cursorHandle && cursorHandle.stop();
	});
});