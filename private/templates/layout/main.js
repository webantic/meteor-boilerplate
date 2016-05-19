// { "path" : "imports/ui/layouts/__layoutName__/__layoutName__.template.js" }
import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var'; 						// uncomment to use ReactiveVars
// import { modelName } from '../../api/modelName/modelName.js'; 	// Alter & uncomment to add model
// import { $ } from 'meteor/jquery';															// jQuery

import './__layoutName__.html';


Template.__layoutName__.onCreated(function () {
	var self = this;

});


Template.__layoutName__.onRendered(function () {
	var self = this;

});


Template.__layoutName__.onDestroyed(function () {
	var self = this;

});


Template.__layoutName__.helpers({
	now() {
		return new Date().toString();
	},

});


Template.__layoutName__.events({

});
