SEO = new FlowRouterSEO();

Meteor.startup(function(){
  SEO.setDefaults({
    title: Meteor.App.NAME,
    description: Meteor.App.DESCRIPTION,
    meta: {
      'property="og:type"': 'website',
      'property="og:site_name"': Meteor.App.NAME,
      'name="twitter:card"': 'summary'
    }
  });
});
