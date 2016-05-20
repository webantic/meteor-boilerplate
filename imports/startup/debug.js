import { Meteor } from 'meteor/meteor';
import { noop } from './utility.js';

var info = noop,
	warn = noop,
	error = noop;

if (typeof console !== 'undefined'){
	info = function (message) {
		if ( Meteor.settings.public.debug ) {
			console.info(message);
		}
	};

	warn = function (message) {
		if ( Meteor.settings.public.debug ) {
			console.warn(message);
		}
	};

	error = function (message) {
		if ( Meteor.settings.public.debug ) {
			console.error(message);
		}
	};

	// Overrides the console -- only shows output when Meteor.settings.public.debug === true
	console._log = console.log;
	console.log = function (/* arguments */) {
	  if (Meteor.settings.public.debug === true) {
	    console._log.apply(this, arguments);
	  }
	};
}

export default info;
export default warn;
export default error;
