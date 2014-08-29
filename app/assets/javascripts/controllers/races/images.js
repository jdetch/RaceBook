RaceBook.RacesImagesController = Ember.ArrayController.extend({
  images: function() {
    var imageArray = new Ember.A();
    this.get('model').map(function(race) {
      if(!Ember.isEmpty(race.get('images'))) {
        Ember.merge(imageArray, race.get('images').mapBy('url'));
      }
    });

    return imageArray;
  }.property('model.@each')
});
