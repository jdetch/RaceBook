RaceBook.User = DS.Model.extend({
  username: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  token: DS.attr()
});
