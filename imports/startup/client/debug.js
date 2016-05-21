import { Meteor } from 'meteor/meteor';
import { noop } from '../utility.js';

var info = noop,
	warn = noop,
	error = noop;

if (typeof console !== 'undefined'){
	info = message => {
		if ( Meteor.settings.public.debug ) {
			console.info(message);
		}
	};

	warn = message => {
		if ( Meteor.settings.public.debug ) {
			console.warn(message);
		}
	};

	error = message => {
		if ( Meteor.settings.public.debug ) {
			console.error(message);
		}
	};

	// Overrides the console -- only shows output when Meteor.settings.public.debug === true
	console._log = console.log;
	console.log = (() => {
	  if (Meteor.settings.public.debug === true || Meteor.isDevelopment) {
			return Function.prototype.bind.call(console._log, console);
	  } else {
			return noop;
		}
	})();
}

export default info;
export default warn;
export default error;
