export const noop = function () {};

export const humanize = function (string) {
  string = string || '';
  string = string.toString(); // might be a number
  string = string.trim();
  string = string.replace(extname(string), '');
  string = underscore(string);
  string = string.replace(/[\W_]+/g, ' ');

  return capitalize(string);
};

export const capitalize = function (string) {
  string = string || '';
  string = string.trim();

  if (string[0]) {
    string = string[0].toUpperCase() + string.substr(1).toLowerCase();
  }

  return string;
};

export const underscore = function (string) {
  string = string || '';
  string = string.toString(); // might be a number
  string = string.trim();
  string = string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2');
  string = string.replace(/[-\s]+/g, '_').toLowerCase();

  return string;
}

export const extname = function (string) {
  var index = string.lastIndexOf('.');
  var ext = string.substring(index, string.length);

  return (index === -1) ? '' : ext;
}

export const truncate = function ( str, len ) {
	if ( !str ) {
		return undefined;
	}
	if ( str.length > len ) {
		var newStr = str.substr( 0, len + 1 );

		while ( newStr.length ) {
			var ch = newStr.substr( -1 );
			newStr = newStr.substr( 0, -1 );

			if ( ch === ' ' ) {
				break;
			}
		}

		if ( newStr === '' ) {
			newStr = str.substr( 0, len );
		}

		return typeof Handlebars !== 'undefined' ? new Handlebars.SafeString( newStr + '...' ) : newStr + '...';
	}
	return str;
};
