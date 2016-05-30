/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { chai } from 'meteor/practicalmeteor:chai';
import underscore from "./underscore.js";

var should = chai.should();

describe('underscore', function () {
  it('should replace spaces with underscores', function(){
  	underscore("Dogs are cute").should.equal("dogs_are_cute");
  });
});