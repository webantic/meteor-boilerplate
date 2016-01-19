// { "path" : "models/__modelName__/definition.js" }
__modelVarName__ = new Mongo.Collection('__modelName__');

__modelVarName__.attachSchema(
    new SimpleSchema({
    title: {
      type: String
    },
    createdAt: {
  		type: Date,
  		label: 'Created Date',
      denyUpdate: true,
  		autoValue: function () {
  			if (this.isInsert) {
  				return new Date();
  			} else if (this.isUpsert) {
  				return {
  					$setOnInsert: new Date()
  				};
  			}
  		}
  	}
  })
);
