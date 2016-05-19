// { "path" : "imports/ui/components/__componentName__/__componentName__.template.js" }
import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var'; 						// uncomment to use ReactiveVars
// import { modelName } from '../../api/modelName/modelName.js'; 	// Alter & uncomment to add model
// import { $ } from 'meteor/jquery';															// jQuery

import './__componentName__.html';
import './helpers.js';
import './events.js';

Template.__componentName__.onCreated(function () {
	var self = this;

});


Template.__componentName__.onRendered(function () {
	var self = this;

});


Template.__componentName__.onDestroyed(function () {
	var self = this;

});
