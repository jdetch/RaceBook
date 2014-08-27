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

  raceYear: function() {
    return this.get('date').getFullYear();
  }.property('date'),
  markerObject: function() {
    return L.marker([this.get('latitude'), this.get('longitude')]);
  }.property('title', 'latitude', 'longitude'),
  leafletMarkerObject: function() {
    return {
      location: L.latLng(this.get('latitude'), this.get('longitude')),
      name: this.get('name')
    };
  }.property('title', 'latitude', 'longitude')
});
