RaceBook.RaceRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('race', params.race_id);
  },
  actions: {
    redirectToHome: function(){
      this.transitionTo('races');
    }
  }
});
