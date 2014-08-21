RaceBook.ImageUploaderComponent = Ember.Component.extend({
  race: null,
  // When this component is instantiated AND FULLY RENDERED, it is going to run this function
  didInsertElement: function (){
    $('#image-upload').fileupload({
      url: '/api/races/'+this.get('race.id')+'/images',
      sequentialUploads: true,
      dataType: 'json',
      add: function (e, data) {
        // console.log('added!');
        data.submit();
      },
      done: function (e, data) {
        // console.log('done');
      }
    });
  }
});

// https://github.com/blueimp/jQuery-File-Upload/wiki/API
