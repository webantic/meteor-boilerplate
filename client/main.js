/*
	Module Dependencies
 */
import { Meteor } from 'meteor/meteor';


/*
	Map collection helpers to collection methods (ergonomics ftw)	
 */
Mongo.Collection.prototype.methods = Mongo.Collection.prototype.helpers;


/*
	Register Templates
 */
import '/imports/ui/views/home/home.js';


/*
	Register Layouts
 */
import '/imports/ui/layouts/basicLayout/basicLayout.js';


/*
	Register Partials
*/
// import '/imports/ui/partials/myPartial/myPartial.js';


/*
	Init Routes
 */
import '/imports/config/routes.config.js';
