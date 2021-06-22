var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null

};

function familyChanges() {
    person.lucky_numbers[3] = "33";
    family.members.push(person3);
   // console.log(family.members[2]) //To check if Jimmy was added
    console.log(family.members[0].lucky_numbers[3]);
    //console.log(luckyNumbersFamilySum);
    
}

var sumPerson = person.lucky_numbers.reduce(function(a, b) {
        return a + b;
    }, 0);
  //  console.log(sumPerson);

var sumPerson2 = person2.lucky_numbers.reduce(function(a, b) {
        return a + b;
    }, 0);
   // console.log(sumPerson2);

var sumPerson3 = person3.lucky_numbers.reduce(function(a, b) {
        return a + b;
    }, 0);
    //console.log(sumPerson3);


console.log(sumPerson+sumPerson2+sumPerson3);
    

    // var sumPerson1 = ;
    // var sumPerson2 = ;


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));
familyChanges();