export default function(string) {
	string = string || '';
	string = string.toString(); // might be a number
	string = string.trim();
	string = string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2');
	string = string.replace(/[-\s]+/g, '_').toLowerCase();

	return string;
}