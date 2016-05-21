// TODO: ensure app is fullscreen on iOS

import { Meteor } from 'meteor/meteor';
import { AndroidFullScreen } from 'cordova-plugin-fullscreen';

if (Meteor.isCordova) {
	document.addEventListener("deviceready", onDeviceReady, false);
	var success = () => {
			console.log("An operation completed successfully", arguments);
		},
		error = () => {
			console.error("An operation failed", arguments);
		},
		onDeviceReady = () => {
			// Full screen
			if ( AndroidFullScreen && AndroidFullScreen.isSupported() ) {
				AndroidFullScreen.isImmersiveModeSupported( () => {
					Tracker.autorun( () => {
						AndroidFullScreen.immersiveMode(success, error);
					});
				}, () => {
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
