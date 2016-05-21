import { Meteor } from 'meteor/meteor';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';
import { WebApp } from 'meteor/webapp';
try {
	BrowserPolicy = require('meteor/browser-policy');
} catch (e) {}

// Get a list of all accounts methods by running `Meteor.server.method_handlers` in meteor shell
const AUTH_METHODS = [
  'login',
  'logout',
  'logoutOtherClients',
  'getNewToken',
  'removeOtherTokens',
  'configureLoginService',
  'changePassword',
  'forgotPassword',
  'resetPassword',
  'verifyEmail',
  'createUser',
  'ATRemoveService',
  'ATCreateUserServer',
  'ATResendVerificationEmail',
];

// Only allow 2 login attempts per connection per 5 seconds
DDPRateLimiter.addRule({
  name(name) {
    return _.contains(AUTH_METHODS, name);
  },

  // Rate limit per connection ID
  connectionId() { return true; },
}, 2, 5000);

// HSTS
WebApp.connectHandlers.use( (req, res, next) => {
	res.setHeader('Strict-Transport-Security', 'max-age=2592000; includeSubDomains'); // 2592000s / 30 days
	return next();
});


if (typeof BrowserPolicy !== 'undefined' && !Meteor.isDevelopment) {
	BrowserPolicy.content.allowOriginForAll("*.googleapis.com");
	BrowserPolicy.content.allowOriginForAll("*.gstatic.com");
	BrowserPolicy.content.allowOriginForAll("*.bootstrapcdn.com");

	// BrowserPolicy.content.allowEval(); // SECURITY ISSUE! ONLY ENABLE IF YOU NEED TO
	BrowserPolicy.content.allowFontDataUrl();
	BrowserPolicy.content.allowInlineStyles();

	// Allow placeholder images
	BrowserPolicy.content.allowImageOrigin("placehold.it");
	BrowserPolicy.content.allowImageOrigin("placeholdit.imgix.net");

	BrowserPolicy.content.allowFrameOrigin("data:*");
	// e.g. BrowserPolicy.content.allowFrameOrigin("*.youtube.com");
}
