import { Template } from 'meteor/templating';
import { updateFromValueArray } from '/imports/startup/client/utility.js';

Template.tags.events({
	'change select': updateFromValueArray
});
