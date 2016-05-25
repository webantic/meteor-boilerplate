export default function(str, len) {
	if (!str) {
		return undefined;
	}
	if (str.length > len) {
		var newStr = str.substr(0, len + 1);

		while (newStr.length) {
			var ch = newStr.substr(-1);
			newStr = newStr.substr(0, -1);

			if (ch === ' ') {
				break;
			}
		}

		if (newStr === '') {
			newStr = str.substr(0, len);
		}

		return newStr + '...';
	}
	return str;
};