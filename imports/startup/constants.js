import { Meteor } from 'meteor/meteor';

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined: see imports/startup/constants.js');
}

Meteor.App = {
  NAME: 'Webantic Meteor Boilerplate',
  DESCRIPTION: 'Customise this title',
	LOGO: '/logo.png',
  VERSION: "0.1.0" // this is automatically updated when the git hook is present
};
