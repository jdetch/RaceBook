RaceBook.RaceEditorComponent = Ember.Component.extend({
  race: null,
  raceTypes: ["3.5 Miles", "4k", "5k", "5 Miles", "10k", "10 Miles", "Half Marathon", "Marathon", "Other"],

  setup: function (){
    // console.log(this.get('race'));
  }.on('init'),
  actions: {
    save: function(race){
      var self = this;
      race.save().then(function(){
        self.sendAction('redirectToHome');
        alertify.success("Success!");
      });
    },
    delete: function(race){
      var self = this;
      race.destroyRecord().then(function(){
        self.sendAction('redirectToHome');
        alertify.success("Race successfully deleted!");
      });
    }
  }
});
