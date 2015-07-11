var body = d3.select('body');

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
    .attr("y", Math.random() * 1000);	
}

for(var i=0;i<=50;i++){
	makeCats();	
}

var moveCats = function(){
	d3.selectAll('.cat')
	.data(catPosition)
	.transition()
	.attr("y", function(d){return d * Math.random() * 100})
	.attr("x", function(d){return d * Math.random()  * 100})
	.duration(1500)
};

var collision = function(){
	// select a cat
	// if the position of one cat is within range
		// increase the collision count
};

// var movePlayer = function(){
//   window.addEventListener("keydown", function (event) {
//      if (event.defaultPrevented) {
//     return; // Should do nothing if the key event was already consumed.
//   }
//   if(event.key === "ArrowUp"){
// 		console.log('Up');
// 	}
  
//   	if(event.key === "ArrowDown"){
//   		console.log('Down');
//   	}
   
//     if(event.key === "ArrowLeft"){
//     	console.log('Left');
//     }
    
//     if(event.key === "ArrowRight"){
//     	console.log('Right');
//     }
//     event.preventDefault();
// 	}, true);
// // };

console.log(height, width);

var player = function(){
	g.append('svg:image')
	.attr("xlink:href", "player.gif")
    .attr("class", "player")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", 50)
    .attr("y", 50)
}
player();
setInterval(moveCats, 2000);
