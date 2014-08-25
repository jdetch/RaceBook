var data = [
  {network: 'fb', pageviews: 270},
  {network: 'tw', pageviews: 449},
  {network: 'gp', pageviews: 215},
  {network: 'pi', pageviews: 385},
  {network: 'li', pageviews: 141}
];

RaceBook.DonutChartComponent = Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: 'width height'.w(),
  content: Em.A(data),

  transform: function(){
    return 'translate(' + this.get('width')/2 + ',' + this.get('height')/2 + ')';
  }.property('width', 'height'),

  draw: function() {
    var content = this.get('content'),
        width = this.get('width'),
        height = this.get('height'),
        radius = Math.min(width, height) / 2;

    var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(radius-15);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.pageviews; });

    var svg = d3.select('#'+this.get('elementId')).select('g');

    var g = svg.selectAll('.arc')
       .data(pie(content)).enter()
      .append('g')
       .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .attr('class', function(d, i) { return d.data.network; });
  }.on('didInsertElement')
});





