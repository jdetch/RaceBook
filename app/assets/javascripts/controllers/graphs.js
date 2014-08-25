RaceBook.GraphsController = Ember.ArrayController.extend({
//   raceTypesOverTime: function(){
//     //"3.5 Miles", "4k", "5k", "5 Miles", "10k", "10 Miles", "Half Marathon", "Marathon", "Other"
//     var race3_5m = 0;
//     var race4k = 0;
//     var race5k = 0;
//     var race5m = 0;
//     var race10k = 0;
//     var race10m = 0;
//     var racehalf_marathon = 0;
//     var racemarathon = 0;
//     var raceother = 0;

//     this.get('model').forEach(function(race) {
//       if(race.get('race_type') == '3.5 Miles') {
//         race3_5m += 1;
//       } else if(race.get('race_type') == '4k') {
//         race4k += 1;
//       } else if(race.get('race_type') == '5k') {
//         race5k += 1;
//       } else if(race.get('race_type') == '5 Miles') {
//         race5m += 1;
//       } else if(race.get('race_type') == '10k') {
//         race10k += 1;
//       } else if(race.get('race_type') == '10 Miles') {
//         race10m += 1;
//       } else if(race.get('race_type') == 'Half Marathon') {
//         racehalf_marathon += 1;
//       } else if(race.get('race_type') == 'Marathon') {
//         racemarathon += 1;
//       } else if(race.get('race_type') == 'Other') {
//         raceother += 1;
//       }
//     });

//     return [
//       { 'xValue': '3.5 Miles',    'yValue': race3_5m },
//       { 'xValue': '4k',           'yValue': race4k },
//       { 'xValue': '5k',           'yValue': race5k },
//       { 'xValue': '5 Miles',      'yValue': race5m },
//       { 'xValue': '10k',          'yValue': race10k },
//       { 'xValue': '10 Miles',     'yValue': race10m },
//       { 'xValue': 'Half Marathon','yValue': racehalf_marathon },
//       { 'xValue': 'Marathon',     'yValue': racemarathon },
//     ];
//   }.property('model.@each.race_type')
// }),

  racesPerYear: function(){
    var races2008 = 0;
    var races2009 = 0;
    var races2010 = 0;
    var races2011 = 0;
    var races2012 = 0;
    var races2013 = 0;
    var races2014 = 0;

    this.get('model').forEach(function(race) {
      if(race.get('date') >= '2008-01-01' && race.get('date') <= '2008-12-31') {
        races2008 += 1;
      }
    });

    return [
      {'network': '2008', 'pageviews': races2008}

    ];
  }.property('model.@each.date')
});
