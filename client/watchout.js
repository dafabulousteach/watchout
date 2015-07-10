var body = d3.select('body');

body.selectAll('.scoreboard').data(['grey']).style('background-color', function(d){
	return d;
})
// .exit();
// body.selectAll('div').data(['grey', 'teal', 'blue']).style('background-color', function(d){
// 	return d;
// })
// .exit();
