RaceBook.Race = DS.Model.extend({
  name: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  date: DS.attr('date'),
  race_type: DS.attr(),
  time: DS.attr(),
  place_agegroup: DS.attr(),
  place_gender: DS.attr(),
  place_overall: DS.attr(),
  note: DS.attr(),
  images: DS.hasMany('image'),
  user: DS.belongsTo('user'),
  latitude: DS.attr(),
  longitude: DS.attr(),

  timeFormatted: function () {
    var sec_num = parseInt(this.get('time'), 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
  }.property('time'),
  raceYear: function() {
    return this.get('date').getFullYear();
  }.property('date'),
  markerObject: function() {
    return Ember.Object.create({
      name: this.get('name'),
      latitude: this.get('latitude'),
      longitude: this.get('longitude')
    });
  }.property('title', 'latitude', 'longitude'),
});
