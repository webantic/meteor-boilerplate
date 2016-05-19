// { "path" : "imports/api/__apiName__/server/security.js" }
import { __modelVarName__ } from './__apiName__.js';

__modelVarName__.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
