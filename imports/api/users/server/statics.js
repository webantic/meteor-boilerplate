import { Meteor } from 'meteor/meteor';

Meteor.methods({
	"myMethod": function(){
		console.log("working");
		return "working";
	}
});



