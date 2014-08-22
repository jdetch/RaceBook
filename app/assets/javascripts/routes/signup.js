RaceBook.SignupRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },
  actions: {
    save: function(user){
      alert('save is working!');
      //user.save();
    }
  }
});
