RaceBook.GoogleMapLayer = EmberLeaflet.Layer.extend({
  _newLayer: function() {
    return new L.Google('ROADMAP');
  }
});
