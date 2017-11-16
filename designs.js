// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Write the function to draw the grip. This function should be passed
//two parameters: height and width. Loop function.

//Add event listener to Input field to scratch the value of weight 
//and width that user input.

function drawGrid(height, width){
	let grid;
	
	for(let i = 0; i < height; i ++){
		grid += '<tr>';
		for(let j = 0; j< width; j ++){
			grid += '<td></td>';
		}
		grid += '</tr>';
	}
	$('#pixel_canvas').html(grid);

};

$(document).ready(function(){
	$('#submit-button').on('click', function(event){
		let height = $('#input_height').val();
		let width = $('#input_width').val();
		event.preventDefault();
		drawGrid(height,width);
	});

	$('#pixel_canvas').on('click', function(event){
		//take the color that user choose
		//Click a cell in the grid to fill that cell with the chosen color
		let color = $('#colorPicker').val();
		$(event.target).css('background-color', color);
	});
});

