RaceBook.ApplicationController = Ember.Controller.extend({
  user: null,

  setup: function() {
    if(RaceBook.get('token')) {
      this.set('user', true);
    }
  }.on('init')
});
