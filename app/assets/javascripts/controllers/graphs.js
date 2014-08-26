RaceBook.GraphsController = Ember.ArrayController.extend({
  raceTypesOverTime: function(){
    //"3.5 Miles", "4k", "5k", "5 Miles", "10k", "10 Miles", "Half Marathon", "Marathon", "Other"
    var race3_5m = 0;
    var race4k = 0;
    var race5k = 0;
    var race5m = 0;
    var race10k = 0;
    var race10m = 0;
    var racehalf_marathon = 0;
    var racemarathon = 0;
    var raceother = 0;

    this.get('model').forEach(function(race) {
      if(race.get('race_type') == '3.5 Miles') {
        race3_5m += 1;
      } else if(race.get('race_type') == '4k') {
        race4k += 1;
      } else if(race.get('race_type') == '5k') {
        race5k += 1;
      } else if(race.get('race_type') == '5 Miles') {
        race5m += 1;
      } else if(race.get('race_type') == '10k') {
        race10k += 1;
      } else if(race.get('race_type') == '10 Miles') {
        race10m += 1;
      } else if(race.get('race_type') == 'Half Marathon') {
        racehalf_marathon += 1;
      } else if(race.get('race_type') == 'Marathon') {
        racemarathon += 1;
      } else if(race.get('race_type') == 'Other') {
        raceother += 1;
      }
    });

    return [
      { 'xValue': '3.5 Miles',    'yValue': race3_5m },
      { 'xValue': '4k',           'yValue': race4k },
      { 'xValue': '5k',           'yValue': race5k },
      { 'xValue': '5 Miles',      'yValue': race5m },
      { 'xValue': '10k',          'yValue': race10k },
      { 'xValue': '10 Miles',     'yValue': race10m },
      { 'xValue': 'Half Marathon','yValue': racehalf_marathon },
      { 'xValue': 'Marathon',     'yValue': racemarathon },
    ];
  }.property('model.@each.race_type'),

  racesPerYear: function(){
    var self = this,
      dataArray = [];

    var uniqueYears = this.get('model').mapBy('raceYear').uniq();

    uniqueYears.forEach(function(year) {
     dataArray.push({ 'year': year, 'totalRaces': self.get('model').filterBy('raceYear', year).length });
    });

    return  dataArray;
  }.property('model.@each.date'),

  zoom: 4,
  center: L.latLng(40.714, -74.000),
  content: [
    { location: L.latLng(40.714, -74.000) },
    { location: L.latLng(45.714, -73.000) },
    { location: L.latLng(43.714, -72.000) }
  ]
});


