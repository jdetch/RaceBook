RaceBook.LoginRoute = Ember.Route.extend({
  activate: function() {
    if(!Ember.isEmpty(this.controllerFor('application').get('user'))) {
      this.transitionTo('races');
    }
  }
});
