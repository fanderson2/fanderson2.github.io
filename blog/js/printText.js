var $paraText1 = 'That\'s right! Whether its MAX/MSP, Ableton Live or Field recording, I love all things technical and musical.'.split('').reverse();
var $paraText2 = 'On this website you can find my music, my code on the Projects page and tutorials and tips on the blog page.'.split('').reverse();
var $paraText3 = 'I also enjoy collaborating and taking on new work, so please give me a message on the contact page. Hope you enjoy the website!'.split('').reverse();

$(document).ready(function () {
            
			
     });

// Set defaults
var $printSpeed = 30;
var intervalNum = 1;
var finishPara = true;
var finishPara2 = true;
var finishPrint = false;
var $waitTime = 0;
var printSlow;
var printChar;

	
console.log($paraText1.length);
console.log($paraText2.length);
console.log($paraText3.length);




function myTimeoutFunc() {



	if ($paraText1.length === 0 && finishPara == true) {            
  
		intervalNum++;
		$waitTime = 500;
		finishPara = false; //Repeat check Once
		clearTimeout(printChar);
	
	}
	
	if ($paraText2.length === 0 && finishPara2 == true) {            
		console.log($paraText2.length);
		intervalNum++;
		$waitTime = 1000;
		finishPara2 = false; //Repeat check Once
		clearTimeout(printChar);
	}
	
	if ($paraText3.length === 0) {            
		clearTimeout(printSlow);
		clearTimeout(printChar);
		finishPrint === true;
	}
		
	
	printChar = setTimeout(function()
	{ 
		printPara(intervalNum)
	}, $waitTime)
	
	// End repeat
	
	
    printSlow = setTimeout(myTimeoutFunc, $printSpeed);
    


//END MASTER FUNCTION
}

myTimeoutFunc();

function printPara(paraNum) {
	
	if(paraNum==1)
	{
		 // Add 1st text to the target
		$('*[data-printed="' + paraNum + '"]').append($paraText1.pop());
		$('*[data-printed="' + paraNum + '"]').append($(".typed-cursor"));
	} else if(paraNum==2){
	 // Add 2nd text to the target
		$('*[data-printed="' + paraNum + '"]').append($paraText2.pop());
		$('*[data-printed="' + paraNum + '"]').append($(".typed-cursor"));
	} else {
		 // Add 3rd text to the target
		$('*[data-printed="' + paraNum + '"]').append($paraText3.pop());
		$('*[data-printed="' + paraNum + '"]').append($(".typed-cursor"));
		
	}
	
	
}


/* var $paraText1 = 'Hello world! This text should slowly print itself over time.'.split('').reverse();
var $paraText2 = 'Second paragraph makes an appearance!'.split('').reverse();
var $paraText3 = 'This is the last one... I swear it'.split('').reverse();

$(document).ready(function () {
            
			
     });

// Set defaults
var $printSpeed = 100;
var intervalNum = 1;
var finishPara = true;
var finishPara2 = true;
var $waitTime = 0;



var printSlow = setInterval(function() {
	$("#homeDebug1").text(intervalNum);
	if ($paraText1.length === 0 && finishPara == true) {            
  
		intervalNum++;
		$waitTime = 500;
		finishPara = false; //Repeat check Once
	
	}
	
	if ($paraText2.length === 0 && finishPara2 == true) {            
  
		intervalNum++;
		$waitTime = 1000;
		finishPara2 = false; //Repeat check Once
		
	}
	
	if ($paraText3.length === 0) {            
		clearInterval(printSlow);
	}
		
	
	setTimeout(function()
	{ 
		printPara(intervalNum)
	}, $waitTime)
	
	// End repeat
	
		
    
    
	
	
}, $printSpeed);

function printPara(paraNum) {
	
	$(".homeDebug2").text(intervalNum);
	if(paraNum==1)
	{
		 // Add 1st text to the target
		$('*[data-printed="' + paraNum + '"]').append($paraText1.pop());
		$('*[data-printed="' + paraNum + '"]').append($(".typed-cursor"));
	} else if(paraNum==2){
	 // Add 2nd text to the target
		$('*[data-printed="' + paraNum + '"]').append($paraText2.pop());
		$('*[data-printed="' + paraNum + '"]').append($(".typed-cursor"));
		} else {
		 // Add 3rd text to the target
		$('*[data-printed="' + paraNum + '"]').append($paraText3.pop());
		$('*[data-printed="' + paraNum + '"]').append($(".typed-cursor"));
		
	}
	
}
*/