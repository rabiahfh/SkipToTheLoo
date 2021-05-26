
d3.json('data.geojson').then(function (bb) {
    let width = 200, height = 200;
    let projection = d3.geoEqualEarth();
    projection.fitSize([width, height], bb);
    let geoGenerator = d3.geoPath()
        .projection(projection);

    let svg = d3.select("body").append('svg')
        .style("width", width).style("height", height);

    svg.append('g').selectAll('path')
        .data(bb.features)
        .join('path')
        .attr('d', geoGenerator)
        .attr('fill', '#088')
        .attr('stroke', '#000');
});