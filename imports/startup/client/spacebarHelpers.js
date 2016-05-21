import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { capitalize, humanize, underscore } from '../utility.js';


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

Template.registerHelper('constant', what => Meteor.App[what.toUpperCase()]);

Template.registerHelper('inArray', (value, array) => value && array && array.indexOf(value) > -1);

Template.registerHelper('underscore', underscore);

Template.registerHelper('isActive', (compare, to) => compare === to ? "active" : "");

Template.registerHelper('humanize', humanize);

Template.registerHelper('appName', () => Meteor.App.NAME);

Template.registerHelper('getLogoSrc', () => Meteor.App.LOGO);
