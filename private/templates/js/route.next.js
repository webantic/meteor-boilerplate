// { "path" : "routes/__routeName__Routes.next.js" }
FlowRouter.route('__routePath__', {
  name: "__routeName__",
  action: function() {
    BlazeLayout.render("basicLayout", {content: "__routeName__"});
  }
});
