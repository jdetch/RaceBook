RaceBook.RaceNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('race');
  },
  actions: {
    redirectToHome: function(){
      this.transitionTo('races');
    }
  }
});
