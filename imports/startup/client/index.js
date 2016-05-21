import './debug.js';								// adjusts environment for debug mode

import '../constants.js'; 					// global app constants

import './utility.js'; 							// utility functions

import './routes.js'; 							// client routes

import './spacebarHelpers.js'; 			// global spacebar helper functions

if (Meteor.isCordova) {
	require('./cordova-pluginConfig.js');		// cordova plugin configuration
	require('./cordova-deviceReady.js');		// cordova device ready callbacks
}
