RaceBook.GraphsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('race');
  }
});
