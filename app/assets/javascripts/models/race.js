RaceBook.Race = DS.Model.extend({
  name: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  date: DS.attr(),
  race_type: DS.attr(),
  time: DS.attr(),
  place_agegroup: DS.attr(),
  place_gender: DS.attr(),
  place_overall: DS.attr(),
  note: DS.attr(),
  images: DS.hasMany('image')
});
