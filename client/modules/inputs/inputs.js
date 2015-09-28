Template.input_text.helpers({
});

Template.input_text.events({
  'blur input': updateFromValue
});

Template.textarea.events({
  'blur textarea': updateFromValue
});

Template.dropdown.onRendered(function(){
  $(this.find(".ui.dropdown")).dropdown();
});

Template.dropdown.events({
  'change select': updateFromValue
});

Template.checkbox.events({
  'change input[type="checkbox"]': updateBoolean
});

Template.tags.onRendered(function(){
  $(this.find(".ui.dropdown")).dropdown({
    allowAdditions: this.data.allowAdditions == "true"
  });
});

Template.tags.events({
  'change select': updateFromValueArray
});

function updateBoolean(e){

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

function updateFromValue(e){

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

function updateFromValueArray(e){

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
