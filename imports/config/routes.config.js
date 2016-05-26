import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  action: () => {
    BlazeLayout.render("basicLayout", {header: 'header', main: 'home', footer: 'footer'});
  },
  name: "Home"
});

