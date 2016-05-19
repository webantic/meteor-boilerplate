import { Template } from 'meteor/templating';
import { updateFromValue } from '/imports/startup/client/utility.js';

Template.input_text.events({
  'blur input': updateFromValue
});
