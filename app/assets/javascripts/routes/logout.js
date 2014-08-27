RaceBook.LogoutRoute = Ember.Route.extend({
  activate: function(){
    this.controllerFor('application').set('user', null);
    RaceBook.setData('token', null);
    localStorage.clear();
  }
});
