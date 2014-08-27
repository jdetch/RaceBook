RaceBook.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend({
  contentBinding: 'controller.racesAsMarkers',
  itemLayerClass: RaceBook.MarkerLayer,
});


