function getColor(selection)
{
	switch(selection){
		case 'red':
		  console.log('True');
		  return true;
		  break;
		  case 'green':
		  console.log('True');
		  return true;
		  break;
		  case 'blue':
		  console.log('True');
		  return true;
		  break;
	    default:
			console.log('False');
	    	return false;  //returns false because the user picked an unavailable color
			break;            
	}
}

// var colorname = prompt('What color do you want?');
var colorname = 'white';
var isAvailable = getColor(colorname);

if(isAvailable) {
	console.log('Good news! That color is available');
}else {
	console.log('We are sorry, that color is not available');
}
