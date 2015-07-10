var body = d3.select('body');

body.selectAll('.scoreboard').data(['grey']).style('background-color', function(d){
	return d;
})


var svg = body.append("svg")
	.attr('width', 800)
	.attr('height', 400)
	.attr('class', 'board');

var g = svg.append('g');

var img = [];
var makeRocks = function(){
img.push(g.append("svg:image")
    .attr("xlink:href", "cat.gif")
    .attr("width", 200)
    .attr("height", 200)
    .attr("x", Math.random() * 1000)
    .attr("y", Math.random() * 1000));	
}

setInterval(makeRocks, 2000);

console.log(img);
