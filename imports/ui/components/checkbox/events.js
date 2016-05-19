import { Template } from 'meteor/templating';
import { updateBoolean } from '/imports/startup/client/utility.js';

Template.checkbox.events({
	'change input[type="checkbox"]': updateBoolean
});
