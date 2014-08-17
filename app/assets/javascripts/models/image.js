RaceBook.Image = DS.Model.extend({
  id: DS.attr(),
  filename: DS.attr(),
  race: DS.belongsTo('race')
});
