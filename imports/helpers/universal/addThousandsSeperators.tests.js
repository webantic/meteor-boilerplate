/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import { chai } from 'meteor/practicalmeteor:chai';
import addsThousandsSeperators from "./addThousandsSeperators.js";

describe('addThousandsSeperators', function () {
  it('should return a string with comma in when string length is more than 3', function(){
  	chai.expect(addsThousandsSeperators(100)).to.not.contain(",");
  	chai.expect(addsThousandsSeperators(1000)).to.contain(",");
  	chai.expect(addsThousandsSeperators("100")).to.not.contain(",");
  	chai.expect(addsThousandsSeperators("1000")).to.contain(",");
  });
});