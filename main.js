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
	
	$('#send').on({
		
		'mouseenter': function () {
			$(this).attr('title', 'You will not be charged when clicking this button');
		},
		
		'click': function () {
			let name = $("input[name='name']").val();
			let amount = $("input[name='amount']").val();
			let msg = $("textarea[name='message']").val();
			
			$('#history').append('$' + amount + " --> " + name + '<br>' + msg);
			
			console.log(name, amount, msg);
		}
		
		
	});
	
});