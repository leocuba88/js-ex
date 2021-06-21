/* This exercise should be moved before 17-Your first loop? */

// Declare and write your function here:
function standardsMaker() {
    var phrase = "I will write questions if I'm stuck";
     for (var i = 1; i < 301; i++) 
     {
         console.log(i +" "+ phrase);
     }
     return i;
}

// Calling the function:
standardsMaker();