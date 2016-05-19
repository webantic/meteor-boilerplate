import { Template } from 'meteor/templating';
import { updateFromValue } from '/imports/startup/client/utility.js';

Template.dropdown.events({
	'change select': updateFromValue
});
