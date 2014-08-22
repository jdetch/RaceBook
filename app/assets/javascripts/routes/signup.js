RaceBook.SignupRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  }
});
