RaceBook.RacesImagesController = Ember.ArrayController.extend({
  images: function() {
    var total = 0;
    var imageArray = new Ember.A();
    this.get('model').map(function(race) {
      imageArray.addObjects(race.get('images'));
    });

    return imageArray.uniq();
  }.property('model.@each.images.length')
});
