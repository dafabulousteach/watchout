var body = d3.select('body');
var score = 0;

setInterval(function() {
	score++;
	body.select('.current')
	.select('span')
	.text(score)
}, 1000);


body.selectAll('.scoreboard')
	.data(['grey'])
	.style('background-color', 
		function(d){
			return d;
		})

var svg = body.append("svg")
	.attr('width', 800)
	.attr('height', 400)
	.attr('class', 'board');

var g = svg.append('g');
var width = d3.select('svg').style('width');
var height = d3.select('svg').style('height')

var catPosition = [];
for(var i = 1; i < 52; i++){
	catPosition.push(i);
}

var makeCats = function(){
	g.append("svg:image")
    .attr("xlink:href", "cat.gif")
    .attr("class", "cat")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", Math.random() * 1000)
    .attr("y", Math.random() * 1000)
    .on('mouseover', function(){
  		collisionDetect(function(){
  			score = 0;

  		});
    });	
}


var moveCats = function(){
	d3.selectAll('.cat')
	.data(catPosition)
	.transition()
		.attr("y", function(d){return d * Math.random() * 100})
		.attr("x", function(d){return d * Math.random() * 100})
		.duration(1500)
};

var drag = d3.behavior.drag()  
    .on('drag', function() { d3.select('.player')
    	.attr('x', d3.event.x)
    	.attr('y', d3.event.y); })

var collisionDetect = function(callback){
	callback();
};

var player = function(){
	g.append('svg:image')
	.attr("xlink:href", "player.gif")
    .attr("class", "player")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", 50)
    .attr("y", 50)
    .call(drag);
}

var money = function(){
	g.append('svg:image')
	.attr("xlink:href", ".gif")
    .attr("class", "player")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", 50)
    .attr("y", 50)
}

for(var i=0;i<=50;i++){
	makeCats();	
}
player();
setInterval(moveCats, 2000);
