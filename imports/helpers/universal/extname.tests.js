/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { chai } from 'meteor/practicalmeteor:chai';
import extname from "./extname.js";

var should = chai.should();

describe('extname', function () {
  it('should return a file extension or undefined', function(){
  	extname("lolcat.jpg").should.equal('.jpg');
  	extname("noFileExtension").should.not.be.ok;
  });
});