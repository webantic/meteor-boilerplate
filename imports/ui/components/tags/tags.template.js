import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var'; 						// uncomment to use ReactiveVars
// import { modelName } from '../../api/modelName/modelName.js'; 	// Alter & uncomment to add model
// import { $ } from 'meteor/jquery';															// jQuery

import './tags.html';
import './helpers.js';
import './events.js';

Template.tags.onCreated(function () {
	var self = this;

});


Template.tags.onRendered(function () {
	var self = this;
	
	$(self.find(".ui.dropdown")).dropdown({
		allowAdditions: self.data.allowAdditions == "true"
	});
});


Template.tags.onDestroyed(function () {
	var self = this;

});
