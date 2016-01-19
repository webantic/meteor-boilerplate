// { "path" : "models/__modelName__/security.js" }

if (Meteor.isServer) {
  __modelVarName__.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
