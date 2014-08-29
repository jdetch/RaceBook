RaceBook.GoogleMapComponent = Ember.Component.extend({
  insertMap: function() {
    var container = this.$('.map-canvas');

    var options = {
      center: new google.maps.LatLng(40.71356,-74.00632),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    this.set('map', new google.maps.Map(container[0], options));
    this.set('markerCache', []);

    this.setMarkers();
  }.on('didInsertElement'),

  coordinatesChanged: function() {
    var map = this.get('map');

    if (map) map.setCenter(new google.maps.LatLng(this.get('latitude'), this.get('longitude')));
  }.observes('latitude', 'longitude'),

  setMarkers: function() {
    var map = this.get('map'),
        markers = this.get('markers'),
        markerCache = this.get('markerCache'),
        bounds = new google.maps.LatLngBounds();

    markerCache.forEach(function(marker) { marker.setMap(null); }); // Remove all existing markers
    markers.forEach(function(marker){
      var gMapsMarker = new google.maps.Marker({
        position: new google.maps.LatLng(marker.get('latitude'), marker.get('longitude')),
        map: map,
        title: marker.get('name')
      });

      bounds.extend(gMapsMarker.position);
      markerCache.pushObject(gMapsMarker); // Add this marker to our cache
    }, this);

    map.fitBounds(bounds);
  }.observes('markers.@each.latitude', 'markers.@each.longitude')
});
