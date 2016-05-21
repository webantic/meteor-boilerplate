// { "path" : "imports/api/__apiName__/server/publications.js" }
import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';

import { __modelVarName__ } from './__apiName__.js';

Meteor.publish('__apiName__', function (_id) {
	var self = this,
		cursorHandle,
		selector = {};

	if (typeof _id === 'string' && _id.length && _id !== 'all') {
		_id = _id.split(',');
		selector._id = { $in: _id };
	}

	var cursor = __modelVarName__.find( selector );

	cursorHandle = cursor.observeChanges({
		added(id, fields) 		{ self.added('__apiName__', id, fields); },
		changed(id, fields) 	{ self.changed('__apiName__', id, fields); },
		removed(id) 					{ self.removed('__apiName__', id); }
	});

	self.ready();

	self.onStop(cursorHandle.stop);
}, {
	url: 'api/__apiName__/:0'
});
