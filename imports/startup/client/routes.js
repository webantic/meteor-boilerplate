import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './templates.js'; // Static reference to a file with dynamic contents

FlowRouter.route('/', {
  action: function(){
    BlazeLayout.render("basicLayout", {header: 'header', main: 'home', footer: 'footer'});
  },
  name: "Home"
});
