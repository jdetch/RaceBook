RaceBook.RaceEditorComponent = Ember.Component.extend({
  raceTypes: ["5k", "10k", "Half Marathon", "Marathon", "Other"],

  setup: function (){

  }.on('init'),
  actions: {
    save: function(race){
      var self = this;
      race.save().then(function(){
        self.sendAction('redirectToHome');
      });
    },
    delete: function(race){
      race.destroyRecord();
    }
  }
});
