RaceBook.SignupRoute = Ember.Route.extend({
  activate: function() {
    if(!Ember.isEmpty(this.controllerFor('application').get('user'))) {
      this.transitionTo('races');
    }
  },
  model: function() {
    return this.store.createRecord('user');
  },
  actions: {
    save: function(user){
    var self = this;
    user.save().then(function(result){
      RaceBook.setData('token', result.get('token'));
      self.controllerFor('application').set('user', user);
      self.transitionTo('races');
    });
    }
  }
});
