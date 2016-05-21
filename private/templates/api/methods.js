// { "path" : "imports/api/__apiName__/methods.js" }
import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';
import { check } from 'meteor/check';

import { __modelVarName__ } from './__apiName__.js';

Meteor.methods({
	// '__apiName__/create': ( new__modelVarName__ ) => {
	// 	check(new__modelVarName__, Object);
	// 	return __modelVarName__.insert(new__modelVarName__);
	// },
	// '__apiName__/update': ( _id, $set ) => {
	// 	check(_id, String);
	// 	check($set, Object);
	// 	return __modelVarName__.update({_id}, {$set});
	// },
	// '__apiName__/delete': ( _id ) => {
	// 	check(_id, String);
	// 	return __modelVarName__.remove({_id});
	// },

});

// // Methods which will be queued on Cordova when offline
// if (Meteor.isClient) {
// 	Ground.methodResume([
// 		'__apiName__/create',
// 		'__apiName__/update',
// 		'__apiName__/remove',
// 		// add methods from above as required
// 	]);
// }
