/**
 *  @file HTTP Header Security
 *  @module server/lib/HSTS.js
 *  @summary enforce HTTP Strict Transport Security (HSTS) to prevent ManInTheMiddle-attacks
    on supported browsers (all but IE) http://www.html5rocks.com/en/tutorials/security/transport-layer-security
 *  @author Webantic (Calvin Evans)
 *  @version 1.0
 */

var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

// attach connect-style middleware for response header injection
Meteor.startup(function() {
  connectHandler.use(function(req, res, next) {
    res.setHeader('Strict-Transport-Security', 'max-age=2592000; includeSubDomains'); // 2592000s / 30 days
    return next();
  });
});
