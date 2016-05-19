import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';															// jQuery
// import { ReactiveVar } from 'meteor/reactive-var'; 						// uncomment to use ReactiveVars
// import { modelName } from '../../api/modelName/modelName.js'; 	// Alter & uncomment to add model

import './dropdown.html';
import './helpers.js';
import './events.js';

Template.dropdown.onCreated(function () {
	var self = this;

});


Template.dropdown.onRendered(function () {
	var self = this;

	$(self.find(".ui.dropdown")).dropdown();
});


Template.dropdown.onDestroyed(function () {
	var self = this;

});
