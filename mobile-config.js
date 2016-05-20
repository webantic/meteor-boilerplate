/**
* GENERAL APP INFO
*/
App.info({
	id					: 'com.webantic.meteorboilerplate',
	name				: 'Webantic Meteor Boilerplate',
	description	: 'Mobile app boilerplate',
	author			: 'Webantic',
	email				: 'admin@example.com',
	website			: 'http://www.webantic.co.uk/',
	version			: '0.1.0'
});


/**
* APP ICONS
*/
App.icons({
	// iOS
	iphone_2x					: 'resources/icon/icon-120.png',
	iphone_3x					: 'resources/icon/icon-180.png',

	ipad							: 'resources/icon/icon-76.png',
	ipad_2x						: 'resources/icon/icon-152.png',
	ipad_pro					: 'resources/icon/icon-167.png',

	ios_settings			: 'resources/icon/icon-29.png',
	ios_settings_2x		: 'resources/icon/icon-58.png',
	ios_settings_3x		: 'resources/icon/icon-87.png',
	ios_spotlight			: 'resources/icon/icon-40.png',
	ios_spotlight_2x	: 'resources/icon/icon-80.png',

	// Android
	android_mdpi			: 'resources/icon/icon-48.png',
	android_hdpi			: 'resources/icon/icon-72.png',
	android_xhdpi			: 'resources/icon/icon-96.png',
	android_xxhdpi		: 'resources/icon/icon-144.png',
	android_xxxhdpi		: 'resources/icon/icon-192.png'
});


/**
* APP SPLASH SCREENS
* TODO: add portrait splashscreens
*/
App.launchScreens({
	// iOS
	iphone_2x									: 'resources/splashscreen/splash-960x640.png',
	iphone5										: 'resources/splashscreen/splash-1136x640.png',
	iphone6										: 'resources/splashscreen/splash-1334x750.png',
	iphone6p_landscape				: 'resources/splashscreen/splash-2208x1242.png',

	ipad_landscape						: 'resources/splashscreen/splash-1024x768.png',
	ipad_landscape_2x					: 'resources/splashscreen/splash-2048x1536.png',

	// Android
	android_mdpi_landscape		: 'resources/splashscreen/splash-470x320.png',
	android_hdpi_landscape		: 'resources/splashscreen/splash-640x480.png',
	android_xhdpi_landscape		: 'resources/splashscreen/splash-960x720.png',
	android_xxhdpi_landscape	: 'resources/splashscreen/splash-1440x1080.png'
});


/**
* EXTRA SETTINGS
*/
App.accessRule('*://localhost/*', true);
App.accessRule('*://localhost:*', true);
// App.accessRule('*', true); // SECURITY ISSUE! ONLY ENABLE IF STRICTLY NECESSARY
App.accessRule('blob:*');

// default bg colour is black
App.setPreference('BackgroundColor', '0xff000000');

// force app to landscape & fullscreen
App.setPreference('Orientation', 'landscape');
App.setPreference('Fullscreen', true);

App.setPreference('AutoHideSplashScreen' , true);
App.setPreference('SplashMaintainAspectRatio' , true);
App.setPreference('SplashScreenBackgroundColor' , '0xffff0000');

// hide status bar
App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarStyle', 'lightcontent');

// set up keyboard
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('KeyboardDisplayRequiresUserAction', false);

// set storage location
App.setPreference('BackupWebStorage', 'local');
