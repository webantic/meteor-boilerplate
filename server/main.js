/*
	Module Dependencies
 */
import { Meteor } from 'meteor/meteor';


/*
	Map collection helpers to collection methods (ergonomics ftw)	
 */
Mongo.Collection.prototype.methods = Mongo.Collection.prototype.helpers;


/*
	Set up Models
 */
import '/imports/models/users';


/*
	Set up API
 */
import '/imports/api/users';