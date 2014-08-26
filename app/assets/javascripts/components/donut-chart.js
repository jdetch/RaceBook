RaceBook.DonutChartComponent = Ember.Component.extend({
  data: null,
  tagName: 'svg',
  attributeBindings: 'width height'.w(),

  transform: function(){
    return 'translate(' + this.get('width')/2 + ',' + this.get('height')/2 + ')';
  }.property('width', 'height'),

  draw: function() {
    var data = this.get('data'),
        width = this.get('width'),
        height = this.get('height'),
        radius = Math.min(width, height) / 2;

    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(radius- 70);

    var color = d3.scale.category20();

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.totalRaces; });

    var svg = d3.select('#'+this.get('elementId')).select('g');

    var g = svg.selectAll('.arc')
       .data(pie(data)).enter()
       .append('g')
       .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .style("fill", function(d) { return color(d.data.year); });

    //year text
    g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.year; });
  },

  didInsertElement: function() {
    this.draw();
  },

  dataChanged: function() {
    var svg = d3.select('#'+this.get('elementId'));
    svg.selectAll(".arc").remove();

    this.draw();
  }.observes('data'),
});





