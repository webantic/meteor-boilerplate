export const addThousandsSeparators = function ( x ) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const imageToDataURI = function (file, callback){
  var reader = new FileReader();
  reader.onload = function (e) {
    callback(e.target.result);
  }
  reader.readAsDataURL(file);
};

export const dataURItoBlob = function (dataURI) {
  // Convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = unescape(dataURI.split(',')[1]);
	}

  // Separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // Write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type:mimeString});
};

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

		return new Handlebars.SafeString( newStr + '...' );
	}
	return str;
};

export const updateBoolean = function (e) {

  var checked = e.target.checked,
      update = {
        lastUpdated: new Date()
      };
  update[this.field] = checked;

  if (!window[this.collection]) return;

  window[this.collection].update(
    {_id: this.id},
    {$set: update }
  );
};

export const updateFromValue = function (e) {

  var val = e.target.value,
      update = {
        lastUpdated: new Date()
      };
  update[this.field] = val;

  if (!window[this.collection]) return;

  window[this.collection].update(
    {_id: this.id},
    {$set: update }
  );
};

export const updateFromValueArray = function (e) {

  if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  var val = $(e.target).val(),
      update = {
        lastUpdated: new Date()
      };

  if ( !Array.isArray(val) ) val = [val];

  update[this.field] = val;

  if (!window[this.collection]) return;

  window[this.collection].update(
    {_id: this.id},
    {$set: update }
  );

};
