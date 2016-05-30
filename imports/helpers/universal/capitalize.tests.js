/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { chai } from 'meteor/practicalmeteor:chai';
import capitalize from "./capitalize.js";

var should = chai.should();

describe('capitalize', function () {
  it('should return a capitalized string', function(){
  	capitalize("abc").should.equal('Abc');
  });
});