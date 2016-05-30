/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { chai } from 'meteor/practicalmeteor:chai';
import truncate from "./truncate.js";

var should = chai.should();

describe('truncate', function () {
  it('should return a truncated string when length greater than limit', function(){
  	truncate("I'm waaaaaaaaaaaaaaay too long truncate me! ", 15).should.have.length(18);
  });
  it('should not truncate string when less than limit', function(){
  	truncate("Nice and short", 25).should.equal("Nice and short");
  });
});