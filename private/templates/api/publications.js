// { "path" : "imports/api/__apiName__/server/publications.js" }
import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';

import { __modelVarName__ } from './__apiName__.js';

Meteor.publish('__apiName__', function () {
	var self = this,
		cursorHandle,
		cursor = __modelVarName__.find();

	cursorHandle = cursor.observeChanges({
		added		: (id, fields) 	=> self.added('__apiName__', id, fields),
		changed	: (id, fields) 	=> self.changed('__apiName__', id, fields),
		removed	: (id) 					=> self.removed('__apiName__', id)
	});

	self.ready();

	self.onStop(cursorHandle.stop);
});
