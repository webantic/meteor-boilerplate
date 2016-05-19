// { "path" : "imports/api/__apiName__/helpers.js" }
import { __modelVarName__ } from './__apiName__.js';

__modelVarName__.helpers({
	getId() {
		if (this instanceof Array) {
			return this.map( item => item._id );
		} else {
			return this._id;
		}
	},

});
