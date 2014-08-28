Ember.Handlebars.helper('date', function(date){
    return moment(date).format('MMMM Do YYYY');
});
