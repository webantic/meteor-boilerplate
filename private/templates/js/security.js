// { "path" : "models/__modelName__/security.js" }

if (Meteor.isServer) {
  // Any client may insert, update, or remove a post without restriction
  __modelVarName__.permit(['insert', 'update', 'remove']).apply();
}
