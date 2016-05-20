import { Meteor } from 'meteor/meteor';
import { AndroidFullScreen } from 'cordova-plugin-fullscreen';

if (Meteor.isCordova) {
	document.addEventListener("deviceready", onDeviceReady, false);
	function success() {
		console.log("An operation completed successfully", arguments);
	}
	function error() {
		console.error("An operation failed", arguments);
	}
	function onDeviceReady() {
		// Full screen
		if ( AndroidFullScreen && AndroidFullScreen.isSupported() ) {
			AndroidFullScreen.isImmersiveModeSupported(function () {
				Tracker.autorun(function () {
					AndroidFullScreen.immersiveMode(success, error);
				});
			}, function () {
				AndroidFullScreen.leanMode(success, error);
			});
		}

		// StatusBar
		if (StatusBar) {
			StatusBar.hide();
		}

		// Splash screen
		navigator.splashscreen.hide();
	}
}
