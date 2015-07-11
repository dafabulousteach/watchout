var body = d3.select('body');
var score = 0;
var highScore = 0;
var collisions = 0;
var width = 1850;
var height = 900;


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

var catPosition = [];

var shuffleCats = function(){
  for(var i = 0; i < 51; i++){
	catPosition[i] = ([Math.floor(Math.random() * (width - 1) + 1), Math.floor(Math.random() * (height - 1) + 1)]);
  }
};
var setHighScore = function(val){
	if(val > highScore){
		highScore = score;
		body.select('.high')
		.select('span')
		.text(highScore);
	}
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
  			setHighScore(score);
  			score = 0
  			collisions++;
  			body.select('.collisions')
  			.select('span')
  			.text(collisions);
  		});
    });	
}

var moveCats = function(){
	d3.selectAll('.cat')
	.data(catPosition)
	.transition()
		.attr("y", function(d){
			return d[1]})
		.attr("x", function(d){
			return d[0]})
		.duration(2500)
};

var moveMoney = function(){
	d3.selectAll('.money')
	.transition()
		.attr("y", Math.floor(Math.random() * (height - 1) + 1))
		.attr("x", Math.floor(Math.random() * (width - 1) + 1))
		.duration(4000)
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
	.attr("xlink:href", "money.gif")
    .attr("class", "money")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", Math.floor(Math.random() * (width - 1) + 1))
    .attr("y", Math.floor(Math.random() * (height - 1) + 1))
    .on('mouseover', function(){
  		collisionDetect(function(){
  			score += 10;
  			body.select('.money').remove()
  		});
    });

}

for(var i=0;i<=50;i++){
	makeCats();	
}

shuffleCats();
player();
setInterval(function(){
	if(d3.select('.money')[0][0] === null){
		money();
	}
}, 3000);

setInterval(function() {
	moveMoney();
}, 4000);

setInterval(function(){
	shuffleCats();
	moveCats();
}, 3500);


