RaceBook.RaceNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('race');
  }
});
