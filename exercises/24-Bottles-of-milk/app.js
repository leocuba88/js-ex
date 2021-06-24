// Your code here:
const a = " bottles of milk on the wall, ";
const b = " bottles of milk. Take one down and pass it around, ";
const c = " bottles of milk on the wall.";
const d = "no more bottles of milk on the wall.";
function getSong() {
    for (i = 99; i > 0; i--)
    {
 if (i != 1){
 console.log(i + a + i + b + (i-1) +c);
 }else if (i == 1){
 console.log(i + a + i + b + d);
 }
            
        }
}
getSong();
