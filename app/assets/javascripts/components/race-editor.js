RaceBook.RaceEditorComponent = Ember.Component.extend({
  race: null,
  raceTypes: ["5k", "10k", "Half Marathon", "Marathon", "Other"],

  setup: function (){
    // console.log(this.get('race'));
  }.on('init'),
  actions: {
    save: function(race){
      var self = this;
      race.save().then(function(){
        self.sendAction('redirectToHome');
        alertify.success("Race sucessfully created!");
      });
    },
    delete: function(race){
      var self = this;
      race.destroyRecord().then(function(){
        self.sendAction('redirectToHome');
        alertify.success("Race sucessfully deleted!");
      });
    }
  }
});
