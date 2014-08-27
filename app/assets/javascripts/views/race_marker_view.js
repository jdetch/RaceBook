RaceBook.RaceMarkerView = EmberLeaflet.MapView.extend({
  childLayers: [
    EmberLeaflet.DefaultTileLayer,
    RaceBook.MarkerCollectionLayer
  ],
  layerChanged: function() {
    var group = new L.featureGroup(this.get('controller.raceMarkersObjects'));

    this._layer.fitBounds(group.getBounds());
  }.observes('layer')
});
