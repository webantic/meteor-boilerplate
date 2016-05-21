import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';

Meteor.publish('users', function (_id) {
	var self = this,
		cursorHandle,
		selector = {};

	if (typeof _id === 'string' && _id.length && _id !== 'all') {
		_id = _id.split(',');
		selector._id = { $in: _id };
	}
	
	var cursor = Meteor.users.find( selector );

	cursorHandle = cursor.observeChanges({
		added(id, fields)			{ self.added('users', id, fields) },
		changed(id, fields)		{ self.changed('users', id, fields) },
		removed(id)						{ self.removed('users', id) }
	});

	self.ready();

	self.onStop(cursorHandle.stop);
}, {
	url: 'api/users/:0'
});
