RaceBook.LoginController = Ember.Controller.extend({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.user'),

  email: '',
  password: '',
  actions: {
    login: function(){
      var self = this;

      return $.ajax({
        url: "/api/sessions",
        data: {email: this.get('email'), password: this.get('password')},
        type: 'POST'
      }).done(function(response) {
        var newUser = self.store.createRecord('user', response.user);
        RaceBook.setData('token', response.user.token);
        self.set('user', newUser);
        self.transitionToRoute('races');
      }).fail(function(response) {
        alertify.error('Bad login! Please enter correct email and password');
      });
    }
  }
});
