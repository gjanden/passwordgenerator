$(document).ready(function(){

	var randPassArray = [];
	var lowNum = 8;
	var highNum = 128;
	var charNum = [];
	var apostrophe = "'";	
//	var characterSets = {
	var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var special = [' ','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}','|',';',':','"','<',',','>','.','?','/','\\',apostrophe];
	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//	};
	var randArray = [];
	var passLength = $('#passLength');

	var length = document.getElementById("passLength");
		length.addEventListener('change', function(){
  		var quantity= length.options[length.selectedIndex].value;
		},false);

	var genBtn = $('#passGenBtn');


// Pushes values into the charNum array
	while(lowNum < highNum + 1){
	  charNum.push(lowNum++);
	};

// Populates #passLength select element with option values from charNum array
	window.onload = function() {
	    var select = document.getElementById('passLength');
	    var options = charNum;
	    for (var i = 0; i < options.length; i++) {
	        var opt = options[i];
	        var el = document.createElement('option');
	        el.textContent = opt;
	        el.value = opt;
	        select.appendChild(el);
	    }
	};

// Function to push array values into newArray[]	
	$('input:checkbox').change(function(){
		if($(this).is(':checked') && $(this).val() === 'special') {
			randArray.push(special);
		} else if ($(this).is(':checked') && $(this).val() === 'lowercase') {
			randArray.push(lowerCase);
		} else if ($(this).is(':checked') && $(this).val() === 'uppercase') {
			randArray.push(upperCase);
		} else if ($(this).is(':checked') && $(this).val() === 'nums') {
			randArray.push(nums);
		} 
	});

// Function to splice array values from newArray[]	
		$('input:checkbox').change(function(){
		if(!$(this).is(':checked') && $(this).val() === 'special') {
			randArray.splice(randArray.indexOf(special), 1);
		} else if (!$(this).is(':checked') && $(this).val() === 'lowercase') {
			randArray.splice(randArray.indexOf(lowerCase), 1);
		} else if (!$(this).is(':checked') && $(this).val() === 'uppercase') {
			randArray.splice(randArray.indexOf(upperCase), 1);
		} else if (!$(this).is(':checked') && $(this).val() === 'nums') {
			randArray.splice(randArray.indexOf(nums), 1);
		} 
	});	


// Loop that populates #output with random characters from random arrays
	genBtn.on('click', function() {
		if(randArray.length > 0){
				randPassArray.length = 0;
				for(var i = 0; i < passLength.val(); i ++){
					var rand = randArray[Math.floor(Math.random() * randArray.length)];
					var randChar = rand[Math.floor(Math.random() * rand.length)];
					randPassArray.push(randChar);
					var myPass = randPassArray.join('');
					$('#output').val(myPass);
				}
			} else {
				alert('You must select at least one character type.');
			}
			return randPassArray;
			console.log(randArray);
	});	
//	console.log(characterSets);
});

