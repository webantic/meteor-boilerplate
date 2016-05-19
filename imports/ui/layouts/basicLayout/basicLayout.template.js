import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var'; 						// uncomment to use ReactiveVars
// import { modelName } from '../../api/modelName/modelName.js'; 	// Alter & uncomment to add model
// import { $ } from 'meteor/jquery';															// jQuery

import './basicLayout.html';


Template.basicLayout.onCreated(function () {
	var self = this;

});


Template.basicLayout.onRendered(function () {
	var self = this;

});


Template.basicLayout.onDestroyed(function () {
	var self = this;

});


Template.basicLayout.helpers({
	now() {
		return new Date().toString();
	},

});


Template.basicLayout.events({

});
