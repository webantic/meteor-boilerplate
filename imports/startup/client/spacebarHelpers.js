import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { capitalize, humanize, underscore } from './utility.js';


Template.registerHelper('debug', function (optionalValue) {
  if (typeof console !== "undefined" || typeof console.log !== "undefined") {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }

    return '';
  }

  // For IE8
  alert(this);

  if (optionalValue) {
    alert(optionalValue);
  }

  return '';
});

Template.registerHelper('capitalize', capitalize);

Template.registerHelper('constant', function (what) {
  return Meteor.App[what.toUpperCase()];
});

Template.registerHelper('inArray', function(value, array){
  return value && array && array.indexOf(value) > -1;
});

Template.registerHelper('underscore', underscore);

Template.registerHelper('isActive', function (compare, to) {
  return compare === to ? "active" : "";
});

Template.registerHelper('humanize', humanize);

Template.registerHelper('appName', function () {
	return Meteor.App.NAME;
});

Template.registerHelper('getLogoSrc', function () {
	return Meteor.App.LOGO;
});
