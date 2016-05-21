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

console._log = console.log;
console.log = (() => {
	if (Meteor.settings.public.debug === true || Meteor.isDevelopment) {
		return Function.prototype.bind.call(console._log, console);
	} else {
		return noop;
	}
})();
