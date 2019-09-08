$(document).ready(function () {
	
	console.log('Happy Birthday Loser!');
	
	$('#smile').click(function () {
		alert("IT'S MY BIRTHDAYYYYY!!!");
		console.log('Just kidding, loooovvveee yyyoooouu');
	});
	
	
	//add functionality for submit button
	//add to the tracker total when money is added
	//add to history as well
	
	$('#btn').click(function () {
		//alert('btn works');
		$('#form').toggleClass('hidden');
	});
	
});