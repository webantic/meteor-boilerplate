FlowRouter.route('/', {
  action: function(){
    BlazeLayout.render("basicLayout", {content: "home"});
  },
  name: "Home"
});
