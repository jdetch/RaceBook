RaceBook.Store = DS.Store.extend({

});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
RaceBook.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  namespace: 'api'
});

// http://stackoverflow.com/questions/21533828/ember-app-wont-load-data-from-has-many-relationships-using-activemodeladapter
RaceBook.RaceSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        images: {embedded: 'always'}
    }
});
