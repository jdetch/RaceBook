RaceBook.Image = DS.Model.extend({
  filename: DS.attr(),
  race: DS.belongsTo('race')
});
