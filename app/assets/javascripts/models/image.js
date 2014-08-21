RaceBook.Image = DS.Model.extend({
  race_image_file_name: DS.attr(),
  race: DS.belongsTo('race'),

  url: function() {
    return 'http://d1jb7iycz4uj0c.cloudfront.net/images/'+this.get('id')+'/thumb/'+this.get('race_image_file_name');
  }.property('race_image_file_name')
});
