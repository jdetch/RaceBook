// For more information see: http://emberjs.com/guides/routing/

RaceBook.Router.map(function() {
  this.route('races');
  this.route('races.images', { path: '/races/images' });
  this.route('race.new', { path: '/race/new' });
  this.resource('race', { path: '/race/:race_id' }, function() {
    this.route('edit');
    this.route('delete');
    this.route('images');
    });
  }
);
