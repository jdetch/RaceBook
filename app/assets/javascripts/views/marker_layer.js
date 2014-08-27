RaceBook.MarkerLayer = EmberLeaflet.MarkerLayer.extend(
    EmberLeaflet.DraggableMixin,
    EmberLeaflet.PopupMixin, {
    popupContentBinding: 'content.name',
});
