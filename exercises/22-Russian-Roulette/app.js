var bulletPosition = 4;
var chamberPosition;
const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
var spinnerPosition;
const fireGun = (spinnerPosition) => {
    if (bulletPosition == spinChamber()) {
        return ("You're dead!");
    }else{
   return ("Keep playing!");
    }
};
console.log(fireGun(spinnerPosition));