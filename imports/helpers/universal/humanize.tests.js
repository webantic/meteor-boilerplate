/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { chai } from 'meteor/practicalmeteor:chai';
import humanize from "./humanize.js";

var should = chai.should();

describe('humanize', function () {
  it('should return a properly formatted string', function(){
  	humanize("someRandom_String").should.equal('Some random string');
  });
});