RaceBook.ImageUploaderComponent = Ember.Component.extend({
  race: null,
  // When this component is instantiated AND FULLY RENDERED, it is going to run this function
  didInsertElement: function (){
    var self = this;
    $('#image-upload').fileupload({
      url: '/api/races/'+this.get('race.id')+'/images',
      sequentialUploads: true,
      dataType: 'json',
      add: function (e, data) {
        data.submit();
        alertify.log("Image uploading");
      },
      done: function (e, data) {
        self.get('race').reload();
        alertify.success("Image successfully uploaded!");
      }
    });
  }
});

// https://github.com/blueimp/jQuery-File-Upload/wiki/API
