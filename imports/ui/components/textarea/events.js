import { Template } from 'meteor/templating';
import { updateFromValue } from '/imports/startup/client/utility.js';

Template.textarea.events({
	'blur textarea': updateFromValue
});
