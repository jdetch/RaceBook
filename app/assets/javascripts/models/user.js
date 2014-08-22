RaceBook.UserController = Ember.ObjectController.extend({
  username: DS.attr(),
  email: DS.attr(),
  password_hash: DS.attr(),
  password_salt: DS.attr(),
  token: DS.attr(),
  races: DS.hasMany('race')
});
