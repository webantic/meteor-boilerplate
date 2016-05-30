import underscore from "./underscore.js";
import extname from "./extname.js";
import capitalize from "./capitalize.js";

export default function(string) {
	string = string || '';
	string = string.toString(); // might be a number
	string = string.trim();
	string = string.replace(extname(string), '');
	string = underscore(string);
	string = string.replace(/[\W_]+/g, ' ');

	return capitalize(string);
};