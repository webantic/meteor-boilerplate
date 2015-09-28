// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined: see universal/lib/constants.js');
}

Meteor.App = {
  NAME: 'Webantic Meteor Boilerplate',
  DESCRIPTION: 'Customise this title',
  VERSION: "0.1.0"
};
