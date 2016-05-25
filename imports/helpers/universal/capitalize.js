export default function(string) {
	string = string || '';
	string = string.trim();

	if (string[0]) {
		string = string[0].toUpperCase() + string.substr(1).toLowerCase();
	}

	return string;
};