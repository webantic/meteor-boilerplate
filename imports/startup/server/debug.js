export const info = function (message) {
	if ( Meteor.settings.debug ) {
		console.error('INFO! ---- ' + message);
	}
};

export const warn = function (message) {
	if ( Meteor.settings.debug ) {
		console.error('WARN! ---- ' + message);
	}
};

export const error = function (message) {
	if ( Meteor.settings.debug ) {
		console.error('ERROR! ---- ' + message);
	}
};

// Overrides the console -- redirects log output to stdErr when Meteor.settings.public.debug === true
console.log = function (/* arguments */) {
	if (Meteor.settings.public.debug === true) {
		console.error.apply(this, arguments);
	}
};
