RaceBook.MapView = EmberLeaflet.MapView.extend({
  childLayers: [
    App.GoogleMapLayer,
    App.MarkerCollectionLayer
  ]
});
