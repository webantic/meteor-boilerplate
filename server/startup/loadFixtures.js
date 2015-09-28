function loadFixture(fixtures, collection) {
  var i,
      len = fixtures.length;

  collection.remove({ });
  for (i = 0; i < len; i+= 1) {
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  // loadFixture(Fixtures.settings, Settings);
});
