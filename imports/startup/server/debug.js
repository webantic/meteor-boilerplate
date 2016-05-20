import { Meteor } from 'meteor/meteor';

export const info = message => {
	if ( Meteor.settings.debug ) {
		console.error('INFO! ---- ' + message);
	}
};

export const warn = message => {
	if ( Meteor.settings.debug ) {
		console.error('WARN! ---- ' + message);
	}
};

export const error = message => {
	if ( Meteor.settings.debug ) {
		console.error('ERROR! ---- ' + message);
	}
};
