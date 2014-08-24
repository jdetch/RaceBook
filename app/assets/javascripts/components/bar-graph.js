RaceBook.BarGraphComponent = Ember.Component.extend({
  data: null,
  tagName: 'svg',
  attributeBindings: 'width height'.w(),
  margin: {top: 100, right: 20, bottom: 150, left: 40},

  w: function(){
    return this.get('width') - this.get('margin.left') - this.get('margin.right');
  }.property('width'),

  h: function(){
    return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
  }.property('height'),

  transformG: function(){
    return "translate(" + this.get('margin.left') + "," + this.get('margin.top') + ")";
  }.property(),

  transformX: function(){
    return "translate(0,"+ this.get('h') +")";
  }.property('h'),

  draw: function(){
    var margin = this.get('margin');
    var width = this.get('w');
    var height = this.get('h');
    var data = this.get('data');
    var svg = d3.select('#'+this.get('elementId'));
    var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);
    var y = d3.scale.linear().range([height, 0]);
    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left").tickFormat(d3.format("d"));

    x.domain(data.map(function(d) { return d.xValue; }));
    y.domain([0, d3.max(data, function(d) { return d.yValue; })]);

    svg.select(".axis.y").call(yAxis);

    svg.select(".axis.x").call(xAxis)
        .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
              return "rotate(-65)";
            });

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text("Number of Races by Race Type");

    svg.select(".rects").selectAll("rect")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.xValue); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.yValue); })
      .attr("height", function(d) { return height - y(d.yValue); });
  },

  didInsertElement: function() {
    this.draw();
  },

  dataChanged: function() {
    var svg = d3.select('#'+this.get('elementId'));
    svg.select(".rects").selectAll("rect").remove();

    this.draw();
  }.observes('data')
});
