RaceBook.RaceNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('race', {date: new Date()});
  },
  actions: {
    redirectToHome: function(){
      this.transitionTo('races');
    }
  }
});
