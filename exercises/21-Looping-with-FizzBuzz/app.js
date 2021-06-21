function fizzBuzz() {  
	for (i = 1; i <= 100; i++)
	{
		var mult3 = i % 3;
		var mult5 = i % 5;
		if (mult3 == 0 != mult5 == 0){
			console.log("Fizz");
		}else if (mult5 == 0 != mult3 == 0) {
			console.log("Buzz");
		}else if (mult3 == 0 && mult5 == 0) {
			console.log("FizzBuzz");
		}else {
			console.log(i);
		}
	}
	return i;
}

fizzBuzz();