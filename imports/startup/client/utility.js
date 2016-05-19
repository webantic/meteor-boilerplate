export const humanize = function(string){
  string = string || '';
  string = string.toString(); // might be a number
  string = string.trim();
  string = string.replace(extname(string), '');
  string = underscore(string);
  string = string.replace(/[\W_]+/g, ' ');

  return capitalize(string);
};

export const capitalize = function(string){
  string = string || '';
  string = string.trim();

  if (string[0]) {
    string = string[0].toUpperCase() + string.substr(1).toLowerCase();
  }

  return string;
};

export const underscore = function(string){
  string = string || '';
  string = string.toString(); // might be a number
  string = string.trim();
  string = string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2');
  string = string.replace(/[-\s]+/g, '_').toLowerCase();

  return string;
}

export const extname = function(string){
  var index = string.lastIndexOf('.');
  var ext = string.substring(index, string.length);

  return (index === -1) ? '' : ext;
}

export const updateBoolean = function(e){

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
}

export const updateFromValue = function(e){

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
}

export const updateFromValueArray = function(e){

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

}
