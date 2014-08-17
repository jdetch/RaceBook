RaceBook.RaceEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('race', params);
  }
});
