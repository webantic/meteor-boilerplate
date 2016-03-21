Meteor.users.attachSchema(
  new SimpleSchema({
    services: {
        type: Object,
        blackbox: true
    }
  })
);
